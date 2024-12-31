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
      !/^[a-zA-Z0-9_-]+$/.test(collection) || // Collection name validation
      typeof limit !== 'number' ||
      limit <= 0 ||
      limit > 100 || // Enforce a reasonable limit
      typeof offset !== 'number' ||
      offset < 0
    ) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid input parameters.' }),
      };
    }

    // Query Firestore with pagination
    let query = db.collection(collection).orderBy('createdAt', 'desc').limit(limit);
    if (offset > 0) {
      const lastDoc = await db
        .collection(collection)
        .orderBy('createdAt', 'desc')
        .offset(offset - 1)
        .limit(1)
        .get();
      if (!lastDoc.empty) {
        query = query.startAfter(lastDoc.docs[0]);
      }
    }

    const snapshot = await query.get();

    // Map the reviews from the snapshot
    const reviews = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Fetch total count using Firestore count() aggregation if available
    const total = (await db.collection(collection).count().get()).data().count;

    return {
      statusCode: 200,
      body: JSON.stringify({ reviews, total }),
    };
  } catch (error) {
    console.error('Error fetching reviews:', { body: event.body, error: error.message, stack: error.stack });
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
