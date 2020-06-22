

      document.addEventListener('DOMContentLoaded', function() {
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
        // // The Firebase SDK is initialized and available here!
        //
        // firebase.auth().onAuthStateChanged(user => { });
        // firebase.database().ref('/path/to/ref').on('value', snapshot => { });
        // firebase.messaging().requestPermission().then(() => { });
        // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { });
        //
        // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

         firebase.auth().onAuthStateChanged((user)=>{
             if(user){
               window.location.href="admin.html";
               //g(user)
            }
          });
        try {
          let app = firebase.app();
         // let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
         // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
        } catch (e) {
          console.error(e);
          //document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
        }
      });


 

var login = function() {
   firebase.auth.Auth.Persistence.LOCAL;

   var id = document.querySelector('#id').value;
   var password = document.querySelector('#password').value;

   if (id != '' && password != '') {
      var result = firebase.auth().signInWithEmailAndPassword(id, password);
       //g(id)
      result.catch((error) => {
         var errormessage = error.message;
         window.alert(`Message : ${errormessage}`);
      });
   } else {
      window.alert('Please fill out all the details');
   }
};