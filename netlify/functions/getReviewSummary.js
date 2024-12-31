const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : null;

if (!admin.apps.length) {
  if (!serviceAccount) {
    console.error("FIREBASE_SERVICE_ACCOUNT environment variable is missing or invalid.");
    process.exit(1);
  }
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

exports.handler = async (event) => {
  try {
    const { collection } = JSON.parse(event.body);

    // Validate input
    if (!collection || typeof collection !== "string" || !/^[a-zA-Z0-9_-]+$/.test(collection)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid collection name." }),
      };
    }

    // Fetch all reviews
    const snapshot = await db.collection(collection).get();

    if (snapshot.empty) {
      // Return a consistent empty response
      return {
        statusCode: 200,
        body: JSON.stringify({
          totalReviews: 0,
          averageOverallRating: 0,
          ratingsBreakdown: {
            overall: 0,
            service: 0,
            pricing: 0,
            speed: 0,
          },
        }),
      };
    }

    // Initialize accumulators
    let totalReviews = 0;
    let sumOverallRating = 0;
    let sumServiceRating = 0;
    let sumPricingRating = 0;
    let sumSpeedRating = 0;

    // Aggregate data
    snapshot.forEach((doc) => {
      const review = doc.data();
      if (
        typeof review.overallRating === "number" &&
        typeof review.serviceRating === "number" &&
        typeof review.pricingRating === "number" &&
        typeof review.speedRating === "number"
      ) {
        totalReviews++;
        sumOverallRating += review.overallRating;
        sumServiceRating += review.serviceRating;
        sumPricingRating += review.pricingRating;
        sumSpeedRating += review.speedRating;
      }
    });

    if (totalReviews === 0) {
      // Safeguard in case all reviews are invalid
      return {
        statusCode: 200,
        body: JSON.stringify({
          totalReviews: 0,
          averageOverallRating: 0,
          ratingsBreakdown: {
            overall: 0,
            service: 0,
            pricing: 0,
            speed: 0,
          },
        }),
      };
    }

    // Calculate averages
    const averageOverallRating = sumOverallRating / totalReviews;
    const averageService = sumServiceRating / totalReviews;
    const averagePricing = sumPricingRating / totalReviews;
    const averageSpeed = sumSpeedRating / totalReviews;

    // Return aggregated data
    return {
      statusCode: 200,
      body: JSON.stringify({
        totalReviews,
        averageOverallRating,
        ratingsBreakdown: {
          overall: averageOverallRating,
          service: averageService,
          pricing: averagePricing,
          speed: averageSpeed,
        },
      }),
    };
  } catch (error) {
    console.error("Error fetching review summary:", {
      message: error.message,
      stack: error.stack,
    });
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
