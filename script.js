const { MongoClient } = require("mongodb");
require("dotenv").config();

async function main() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  try {
    await client.connect();

    // Print information indicating if a listing with the given name exists.

    // await printIfListingExists(client, "Horto flat with small garden");

    // Print information indicating if a listing with the given name exists.

    // await printIfWhiskeyExists(client, "Jack Daniels");

    // Delete all listing within parameters

    // await deleteListingsScrapedBeforeDate(client, new Date("2019-02-15"));

    // Delete all whiskeys within parameters

    // await deleteWhiskeysScrapedBeforeDate(client, new Date("2019-02-15"));

    // Delete one listing

    // await deleteListingByName(client, "Cozy Cottage");

    // Delete one whiskey

    // await deleteWhiskeyByName(client, "Jim Beam");

    // Update all listing

    // await updateAllListingsToHavePropertyType(client);

    // Update all whiskey

    // await updateAllWhiskeysToHaveMashBill(client);
    // await updateAllWhiskeysToHaveFounded(client);

    // Upserted one listing

    // await upsertListingByName(client, "Cozy Cottage", {
    //   name: "Cozy Cottage",
    //   bedrooms: 2,
    //   bathrooms: 1,
    // });
    // await upsertListingByName(client, "Cozy Cottage", { beds: 2 });

    // Upserted one whiskey

    // await upsertWhiskeyByName(client, "Jim Beam White Label", {
    //   name: "Jim Beam White Label",
    //   proof: 80,
    //   origin: "Kentucky",
    //   distiller: "Beam Suntory"
    // });

    // Update one listing

    // await updateListingByName(client, "Horto flat with small garden", {
    //   bedrooms: 6,
    //   beds: 8,
    // });

    // Update one whiskey

    // await updateWhiskeyByName(client, "Jack Daniels", {
    //   proof: 81,
    //   origin: "Tennessee",
    // });

    // Read many listings

    // await findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    //         minimumNumberOfBedrooms: 4,
    //         minimumNumberOfBathrooms: 2,
    //         maximumNumberOfResults: 5
    //     });

    // Read many whiskeys

    // await findWhiskeysMinProofsAndOrigins(client, {
    //   minimumProof: 40,
    //   minimumOrigin: "Kentucky",
    //   maximumNumberOfResults: 5,
    // });

    // Read one listing

    // await findOneListingByName(
    //   client,
    //   "Ligne verte - à 15 min de métro du centre ville."
    // );

    // Read one whiskey

    // await findOneWhiskeyByName(
    //   client,
    //   "Buffalo Trace"
    // );

    // Create multiple listings

    // await createMultipleListings(client, [
    //   {
    //     name: "Lofty Loft",
    //     summary: "A charming loft in New York",
    //     bedrooms: 1,
    //     bathrooms: 1
    //   },
    //   {
    //     name: "Lofty Love",
    //     summary: "A charming loft in Vegas",
    //     bedrooms: 1,
    //     bathrooms: 1,
    //     beds: 2,
    //     last_review: new Date()
    //   },
    // ]);

    // Create multiple whiskeys

    // await createMultipleWhiskeys(client, [
    //   {
    //     name: "Buffalo Trace",
    //     summary:
    //       "Introduced in 2001, named after the Great Buffalo Trace, a trail carved out by buffalo.",
    //     proof: 90,
    //     origin: "Kentucky",
    //     distiller: "Buffalo Trace",
    //     color: "Light bronze with streaks of gold",
    //     nose: "Complex aroma of vanilla, mint, and molasses",
    //     body: "Medium",
    //     palate:
    //       "Sweet, notes of brown sugar and spice, oak, leather, toffee, and fruit.",
    //     finish: "Long, dry, and deep",
    //   },
    //   {
    //     name: "Blanton's Single Barrel",
    //     summary:
    //       "Introduced 1984, the first single barrel to be marketed commercially. Named after Colonel Albert Bacon Blanton, distillery manager and co-owner.",
    //     proof: 93,
    //     origin: "Kentucky",
    //     distiller: "Buffalo Trace",
    //     color: "Deep amber",
    //     nose: "Balanced, sweet, soft spice and mint, caramel",
    //     body: "Full and firm, round",
    //     palate: "Honey sweetness, spice, and vanilla.",
    //     finish: "Sweet caramel, spice; hint of mint; lingering.",
    //   },
    //   {
    //     name: "Pappy Van Winkle's Family Reserve",
    //     summary: "A 15 year old wheated bourbon",
    //     proof: 107,
    //     origin: "Kentucky",
    //     distiller: "Buffalo Trace",
    //     color: "Deep gold",
    //     nose: "Deep oak aromas, heavy sweetness, charcoal, caramel, vanilla, and soft wheat",
    //     body: "Full, round, smooth",
    //     palate: "Complex, Vanilla sweetness and toffee, wheat.",
    //     finish:
    //       "Delightful deep oak sweetness of caramel, vanilla, and toffee, spices and fragrant hints of orange.",
    //   },
    // ]);

    // Create one listing

    // await createListing(client, {
    //     name: "Lovely Loft",
    //     summary: "A charming loft in Paris",
    //     bedrooms: 1,
    //     bathrooms: 1
    // })

    // Create one whiskey

    // await createWhiskey(client, {
    //     name: "Jack Daniels",
    //     summary: "A charcoal filtered whiskey",
    //     origin: "Tennesse",
    //     distiller: "Jack Daniels"
    // })

    // List databases

    // await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

// Print information indicating if a listing with the given name exists. 

async function printIfListingExists(client, nameOfListing) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .findOne({ name: nameOfListing });

  if (result) {
    if (result.last_scraped) {
      console.log(
        `Found a listing in the collection with the name '${nameOfListing}'. Listing was last scraped ${result.last_scraped}.`
      );
    } else {
      console.log(
        `Found a listing in the collection with the name '${nameOfListing}'`
      );
    }
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

// Print information indicating if a whiskey with the given name exists. 

async function printIfWhiskeyExists(client, nameOfWhiskey) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#findOne for the findOne() docs
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .findOne({ name: nameOfWhiskey });

  if (result) {
    if (result.distiller) {
      console.log(
        `Found a listing in the collection with the name '${nameOfWhiskey}'. ${nameOfWhiskey} was distilled by ${result.distiller} and comes from ${result.origin}.`
      );
    } else {
      console.log(
        `Found a listing in the collection with the name '${nameOfWhiskey}'`
      );
    }
  } else {
    console.log(`No listings found with the name '${nameOfWhiskey}'`);
  }
}

// Delete all listings within parameters

async function deleteListingsScrapedBeforeDate(client, date) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteMany for the deleteMany() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteMany({ last_scraped: { $lt: date } });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

// Delete all whiskeys within parameters

async function deleteWhiskeysScrapedBeforeDate(client, date) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteMany for the deleteMany() docs
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .deleteMany({ last_scraped: { $lt: date } });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

// Delete one listing

async function deleteListingByName(client, nameOfListing) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteOne for the deleteOne() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .deleteOne({ name: nameOfListing });
  console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

// Delete one whiskey

async function deleteWhiskeyByName(client, nameOfWhiskey) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#deleteOne for the deleteOne() docs
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .deleteOne({ name: nameOfWhiskey });
  console.log(`${result.deletedCount} whiskey(s) was/were deleted.`);
}

// Update all listing

async function updateAllListingsToHavePropertyType(client) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany for the updateMany() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateMany(
      { property_type: { $exists: false } },
      { $set: { property_type: "Unknown" } }
    );
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

// Update all whiskeys

async function updateAllWhiskeysToHaveFounded(client) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateMany for the updateMany() docs
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .updateMany(
      { founded: { $exists: false } },
      { $set: { founded: "Unknown" } }
    );
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

// Upsert one listing

async function upsertListingByName(client, nameOfListing, updatedListing) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne for the updateOne() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne(
      { name: nameOfListing },
      { $set: updatedListing },
      { upsert: true }
    );
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);

  if (result.upsertedCount > 0) {
    console.log(
      `One document was inserted with the id ${result.upsertedId._id}`
    );
  } else {
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
  }
}

// Upsert one whiskey

async function upsertWhiskeyByName(client, nameOfWhiskey, updatedWhiskey) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne for the updateOne() docs
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .updateOne(
      { name: nameOfWhiskey },
      { $set: updatedWhiskey },
      { upsert: true }
    );
  console.log(`${result.matchedCount} document(s) matched the query criteria.`);

  if (result.upsertedCount > 0) {
    console.log(
      `One document was inserted with the id ${result.upsertedId._id}`
    );
  } else {
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
  }
}

// Update one listing

async function updateListingByName(client, nameOfListing, updatedListing) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne for the updateOne() docs
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .updateOne({ name: nameOfListing }, { $set: updatedListing });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

// Update one whiskey

async function updateWhiskeyByName(client, nameOfWhiskey, updatedWhiskey) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#updateOne for the updateOne() docs
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .updateOne({ name: nameOfWhiskey }, { $set: updatedWhiskey });

  console.log(`${result.matchedCount} document(s) matched the query criteria.`);
  console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

// Read many listings

async function findListingsWithMinimumBedroomsBathroomsAndMostRecentReviews(
  client,
  {
    minimumNumberOfBedrooms = 0,
    minimumNumberOfBathrooms = 0,
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
  } = {}
) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
  const cursor = client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .find({
      bedrooms: { $gte: minimumNumberOfBedrooms },
      bathrooms: { $gte: minimumNumberOfBathrooms },
    })
    .sort({ last_review: -1 })
    .limit(maximumNumberOfResults);

  // Store the results in an array
  const results = await cursor.toArray();

  // Print the results
  if (results.length > 0) {
    console.log(
      `Found listing(s) with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms:`
    );
    results.forEach((result, i) => {
      const date = new Date(result.last_review).toDateString();

      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   bedrooms: ${result.bedrooms}`);
      console.log(`   bathrooms: ${result.bathrooms}`);
      console.log(`   most recent review date: ${date}`);
    });
  } else {
    console.log(
      `No listings found with at least ${minimumNumberOfBedrooms} bedrooms and ${minimumNumberOfBathrooms} bathrooms`
    );
  }
}

// Read many whiskeys

async function findWhiskeysMinProofsAndOrigins(
  client,
  {
    minimumProof = 80,
    minimumOrigin = "Kentucky",
    maximumNumberOfResults = Number.MAX_SAFE_INTEGER,
  } = {}
) {
  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#find for the find() docs
  const cursor = client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .find({
      proof: { $gte: minimumProof },
      origin: { $gte: minimumOrigin },
    })
    .sort({ last_review: -1 })
    .limit(maximumNumberOfResults);

  // Store the results in an array
  const results = await cursor.toArray();

  // Print the results
  if (results.length > 0) {
    console.log(
      `Found listing(s) with at least ${minimumProof} proof and ${minimumOrigin} origins: `
    );
    results.forEach((result, i) => {
      const date = new Date(result.last_review).toDateString();

      console.log();
      console.log(`${i + 1}. name: ${result.name}`);
      console.log(`   _id: ${result._id}`);
      console.log(`   proof: ${result.proof}`);
      console.log(`   origin: ${result.origin}`);
      console.log(`   distiller: ${result.distiller}`);
      console.log(`   most recent review date: ${date}`);
    });
  } else {
    console.log(
      `No listings found with at least ${minimumProof} proof and ${minimumOrigin} origins: `
    );
  }
}

// Read one listing

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}'`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}

// Read one whiskey

async function findOneWhiskeyByName(client, nameOfWhiskey) {
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .findOne({ name: nameOfWhiskey });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfWhiskey}'`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfWhiskey}'`);
  }
}

// Create multiple listings

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listings created with the following id(s):`
  );

  console.log(result.insertedIds);
}

// Create multiple whiskeys

async function createMultipleWhiskeys(client, newWhiskey) {
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .insertMany(newWhiskey);

  console.log(
    `${result.insertedCount} new whiskeys created with the following id(s):`
  );
  console.log(result.insertedIds);
}

// Create one listing

async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

// Create one whiskey

async function createWhiskey(client, newWhiskey) {
  const result = await client
    .db("whiskey")
    .collection("whiskeysAndReviews")
    .insertOne(newWhiskey);
  console.log(
    `New whiskey created with the following id: ${result.insertedId}`
  );
}

// List database function

async function listDatabases(client) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases: ");
  databasesList.databases.forEach((db) => {
    console.log(`- ${db.name}`);
  });
}
