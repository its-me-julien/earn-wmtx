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

    // Validate input parameters
    if (
      !collection ||
      typeof collection !== 'string' ||
      !/^[a-zA-Z0-9_-]+$/.test(collection) // Collection name validation
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid collection name.' }),
      };
    }

    if (
      typeof limit !== 'number' ||
      limit <= 0 ||
      limit > 100 // Enforce a reasonable limit
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid limit value. Must be between 1 and 100.' }),
      };
    }

    if (typeof offset !== 'number' || offset < 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid offset value. Must be zero or greater.' }),
      };
    }

    // Query Firestore with pagination
    const snapshot = await db
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .offset(offset) // Firestore handles offsets here
      .limit(limit)
      .get();

    // Map the reviews from the snapshot
    const reviews = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Fetch total count using Firestore count() aggregation
    const total = (await db.collection(collection).count().get()).data().count;

    return {
      statusCode: 200,
      body: JSON.stringify({ reviews, total }),
    };
  } catch (error) {
    console.error('Error fetching reviews:', {
      body: event.body,
      error: error.message,
      stack: error.stack,
    });
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
