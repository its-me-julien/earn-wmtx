const fetch = require('node-fetch');
const admin = require('firebase-admin');

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
    const { reviewType, ...reviewData } = data;
    const collectionName =
      reviewType === 'broadband' ? 'broadband_review' : 'mobileplan_review';

    // Save review to Firestore
    const docRef = await db.collection(collectionName).add({
      ...reviewData,
      createdAt: new Date().toISOString(),
    });

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
