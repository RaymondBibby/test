const { collection, query, where, FieldPath } = require("firebase/firestore");
const admin = require("firebase-admin");
const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// // Get All Users
// // May be better using random document id for users and having email, that way we can query where email == email to get the correct
// const dbQuery = async () => {
//   const usersRef = db.collection("users");
//   const snapshot = await usersRef.get();
//   // const snapshot = await usersRef.where("name", "==", "Raymond Bibby").get();
//   if (snapshot.empty) {
//     console.log("No matching documents.");
//     return;
//   }

//   snapshot.forEach((doc) => {
//     console.log(doc.id, "=>", doc.data());
//   });
// };

// const getAllUsers = async () => {
//   // Get All Users
//   // May be better using random document id for users and having email, that way we can query where email == email to get the correct
//   const dbQuery = async () => {
//     const usersRef = db.collection("users");
//     const snapshot = await usersRef.get();
//     // const snapshot = await usersRef.where("name", "==", "Raymond Bibby").get();
//     if (snapshot.empty) {
//       console.log("No matching documents.");
//       return;
//     }

//     snapshot.forEach((doc) => {
//       console.log(doc.id, "=>", doc.data());
//     });
//   };
//   dbQuery();
// };
