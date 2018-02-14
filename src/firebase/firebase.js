import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  export { firebase, database as default };



//   database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//         });
//     console.log(expenses);
//     })
  
//   database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//     console.log(expenses);
//     })


//   database.ref('expenses').push({
//       description: 'Rent',
//       note: 'The 1st every month',
//       amount: 3500,
//       createdAt: 8 
//   })

//   database.ref().on('value', (snapshot) => {
//       console.log(snapshot.val());
//   })

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

//   database.ref().set({
//     name: 'Kristian Mathiesen',
//     age: '29',
//     stresslevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Aarhus',
//         country: 'Denmark'
//     }
//   }).then(() => {
//       console.log('Data is saved!');
//   }).catch((e) => {
//       console.log('This failed!', e);
//   })
  
//   database.ref().update({
//     stresslevel: 9,
//     'job/company': 'Amazone',
//     'location/city': 'Seatlle'
//   })

// database.ref()
// .remove()
//     .then(() => {
//       console.log('Remove succeded');
//   }).catch((e) => {
//       console.log('Remove failed', e);
//   })
