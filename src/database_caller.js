import React from 'react'

export class Database extends React{

  // Your web app's Firebase configuration
  // TODO: Hide this from git
  config = {
apiKey: "AIzaSyBgpM5QEZRAXnN4sVnQIdZ99GMt9VeJXuw",
authDomain: "cfg-team6-shatterproof.firebaseapp.com",
databaseURL: "https://cfg-team6-shatterproof.firebaseio.com",
projectId: "cfg-team6-shatterproof",
storageBucket: "cfg-team6-shatterproof.appspot.com",
messagingSenderId: "726889625064",
appId: "1:726889625064:web:c0b3e2b00e6825085f205d"
};
  // Initialize Firebase
  render(){
  firebase.initializeApp(config);
  mybase = firebase.database();
  order = {
    fullName:'#fullNameFieldnotesField'//another way you could write is $('#myForm [name="fullname"]').
  };
  // console.log(mybase.ref().child('tables').child('ambassadors').push(order))
  // console.log(mybase.ref().push(order));
  firebaseOrdersCollection = database.ref().child('tables/ambassadors');
  firebaseOrdersCollection.on('value',function(orders){
       allOrdersHtml = "";
       orders.forEach(function(firebaseOrderReference){
             var order_ambassador = firebaseOrderReference.val();
             var individual_order =
             <div>
              <p>order_ambassador.name</p>
              <p>order_ambassador.referral</p>
            </div>;
             console.log(order);})})

    }
  }
