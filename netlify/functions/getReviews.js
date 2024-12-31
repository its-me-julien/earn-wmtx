const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  try {
    const { collection, limit, offset } = JSON.parse(event.body);

    // Validate input
    if (!collection || typeof limit !== 'number' || typeof offset !== 'number') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Collection, limit, and offset are required and must be valid.' }),
      };
    }

    // Query Firestore with pagination
    const snapshot = await db
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .offset(offset)
      .limit(limit)
      .get();

    // Map the reviews from the snapshot
    const reviews = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Get the total number of documents in the collection for pagination
    const total = (await db.collection(collection).get()).size;

    return {
      statusCode: 200,
      body: JSON.stringify({ reviews, total }),
    };
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
