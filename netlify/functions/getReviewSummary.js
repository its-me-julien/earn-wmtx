const admin = require("firebase-admin");

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
    const { collection } = JSON.parse(event.body);

    if (!collection) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Collection is required." }),
      };
    }

    // Fetch all reviews
    const snapshot = await db.collection(collection).get();
    const reviews = snapshot.docs.map((doc) => doc.data());

    if (reviews.length === 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({
          totalReviews: 0,
          averageOverallRating: 0,
          ratingsBreakdown: {
            service: 0,
            pricing: 0,
            speed: 0,
          },
        }),
      };
    }

    // Calculate total and averages
    const totalReviews = reviews.length;
    const averageOverallRating =
      reviews.reduce((sum, review) => sum + review.overallRating, 0) / totalReviews;

    const averageService =
      reviews.reduce((sum, review) => sum + review.serviceRating, 0) / totalReviews;

    const averagePricing =
      reviews.reduce((sum, review) => sum + review.pricingRating, 0) / totalReviews;

    const averageSpeed =
      reviews.reduce((sum, review) => sum + review.speedRating, 0) / totalReviews;

    // Return aggregated data
    return {
      statusCode: 200,
      body: JSON.stringify({
        totalReviews,
        averageOverallRating,
        ratingsBreakdown: {
          service: averageService,
          pricing: averagePricing,
          speed: averageSpeed,
        },
      }),
    };
  } catch (error) {
    console.error("Error fetching review summary:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
