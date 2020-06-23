
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
        try {
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
          let app = firebase.app();
          console.log(app)
    getAll()
         // let features = ['auth', 'database', 'messaging', 'storage'].filter(feature => typeof app[feature] === 'function');
         // document.getElementById('load').innerHTML = `Firebase SDK loaded with ${features.join(', ')}`;
        } catch (e) {
          console.error(e);
          //document.getElementById('load').innerHTML = 'Error loading the Firebase SDK, check the console.';
        }
      });


     
    

function getAll(){
    const database = firebase.firestore()
    const userData= database.collection("events")
    console.log('jjjj')
    document.getElementById("eventRes").innerHTML=''
    const query = userData
    query.get().then(
        data=>{
        data.docs.forEach((data)=>{
            let extracted = data.data()
            //(extracted)
            postInAppliedList(extracted)

        })
        }
    )
}
function postInAppliedList(x) {
    //(x)
    const parent = document.getElementById("eventRes");
    let newPost = document.createElement('div');
    newPost.classList.add("card");
    newPost.innerHTML = '<img src="./assets/logo.png" alt="peu logo" style="width:100%"><div class="container"><h4><b>'+
    x.name+'</b></h4><p>Date: '+x.date+'</p><p>Host:'+ x.host+ '</p><p>prize:'+x.prize+'</p><p>winner:'+x.winner+'</p><p class="pdes">'+
    x.description+'</p><a href="'+ x.link+'"><button class="btn btn-primary">View post</button></a></div>';
    parent.appendChild(newPost);

}