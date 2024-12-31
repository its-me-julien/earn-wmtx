const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://worldmobilereviews.firebaseio.com', // Replace with your Firebase project ID
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    if (!data.title || !data.content) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Title and content are required' }),
      };
    }

    // Save to Firestore
    const docRef = await db.collection('reviews').add({
      title: data.title,
      content: data.content,
      createdAt: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Review saved successfully', id: docRef.id }),
    };
  } catch (error) {
    console.error('Error saving review:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to save review' }),
    };
  }
};
