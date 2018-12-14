 import firebase from 'firebase'

 const config = {
    apiKey: "AIzaSyBXaon53S_Ru-jSvarp_p18_xaR8z8cuMM",
    authDomain: "barbershop-4117d.firebaseapp.com",
    databaseURL: "https://barbershop-4117d.firebaseio.com",
    projectId: "barbershop-4117d",
    storageBucket: "barbershop-4117d.appspot.com",
    messagingSenderId: "673987532723"
  };
  firebase.initializeApp(config);

  export default firebase;