const fetch = require('node-fetch');
const admin = require('firebase-admin');
const sanitizeHtml = require('sanitize-html'); // Add this for sanitization.

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://worldmobilereviews.firebaseio.com',
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Validate reCAPTCHA
    const captchaToken = data.captchaToken;
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const captchaVerifyResponse = await fetch(verificationUrl, { method: 'POST' });
    const captchaVerifyData = await captchaVerifyResponse.json();

    if (!captchaVerifyData.success) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'CAPTCHA validation failed' }),
      };
    }

    // Determine collection based on reviewType
    const { reviewType, captchaToken: _, ...reviewData } = data; // Exclude captchaToken
    const collectionName =
      reviewType === 'broadband' ? 'broadband_review' : 'mobileplan_review';

    // Sanitize and validate input
    const sanitizedFeedback = sanitizeHtml(reviewData.feedback, {
      allowedTags: [], // Strip all HTML tags
      allowedAttributes: {},
    });

    const sanitizedData = {
      ...reviewData,
      feedback: sanitizedFeedback,
      name: sanitizeHtml(reviewData.name || '', { allowedTags: [] }),
      city: sanitizeHtml(reviewData.city || '', { allowedTags: [] }),
      zipcode: sanitizeHtml(reviewData.zipcode || '', { allowedTags: [] }),
      email: sanitizeHtml(reviewData.email || '', { allowedTags: [] }),
      createdAt: new Date().toISOString(),
    };

    // Additional validations (e.g., rating bounds, email format, zipcode format)
    if (!/^[a-zA-Z0-9\s-]{3,10}$/.test(sanitizedData.zipcode)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid zipcode format' }),
      };
    }

    if (
      sanitizedData.email &&
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(sanitizedData.email)
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    if (
      sanitizedData.overallRating < 1 ||
      sanitizedData.overallRating > 5 ||
      sanitizedData.serviceRating < 1 ||
      sanitizedData.serviceRating > 5
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid rating value' }),
      };
    }

    // Save review to Firestore
    const docRef = await db.collection(collectionName).add(sanitizedData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Review saved successfully', id: docRef.id }),
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
