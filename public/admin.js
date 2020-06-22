//ok

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
        if(!user){
           //g(user);
      window.location.href = "adminLogin.html";
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
const allForm= document.querySelectorAll('input')
function changeCliqueHead(){
    var cliqueObj={
        name:document.querySelector('#cliqueChangeName').value.toLowerCase()||'unset',
        HName:document.querySelector('#newCliqueHeadName').value.toLowerCase()||'unset',
    }
    const database = firebase.firestore()
    const userData= database.collection("cliques").doc(cliqueObj.name)
    
var setWithMerge = userData.set(
    cliqueObj, { merge: true });

}

function createClique(){
var cliqueObj={
    name:document.querySelector('#cliqueName').value.toLowerCase()||'unset',
    HName:document.querySelector('#cliqueHeadName').value.toLowerCase()||'unset',
    mascot:document.querySelector('#cliqueMascot').value.toLowerCase()||'unset',
    points:document.querySelector('#pointsNCli').value.toLowerCase()||0,
}
    
const database = firebase.firestore()
const userData= database.collection("cliques").doc(cliqueObj.name)
userData.get()
.then((docSnapshot) => {
  if (docSnapshot.exists) {
    userData.onSnapshot((doc) => {
      alert('clique already exists, use different name')
    });
  } else {

    userData.set(cliqueObj)
    alert('Clique created')

    //clear()
    //postChanges(obj) // create the document
  }
})    
}
function updateScore(){
  //  alert('coming soon....')
    
   const database = firebase.firestore()
   const userData= database.collection("users")
   const cliData= database.collection("cliques")
   cliData.get().then(
    data=>{
    data.docs.forEach((data)=>{
        updateScore2(data)
    
    })
    }
)
  
}

function updateScore2(data){
  const database = firebase.firestore()
   const userData= database.collection("users")
   let extract = data.data()
   var score=0
   ////g(extract)
   const query = userData.where('Clique','==',extract.name)
    query.get().then(
        data=>{
        data.docs.forEach((data)=>{
         
            let extracted = data.data()
           // //g(extracted)
            score+= parseInt(extracted.Points)
            //g(score)

        })
        }
    ).then(()=>{
      const database = firebase.firestore()
      const cData= database.collection("cliques").doc(data.id)
    var setWithMerge = cData.set({points: score}, { merge: true });
    //  //g(data.data())

    }
    )
    }

const usenamei = document.querySelector('#aDuserName')
const pointsi = document.querySelector('#aDpoints')
const namei = document.querySelector('#aDName')
const cliquei = document.querySelector('#aDclique')
const posi = document.querySelector('#aDposition')
const partneri = document.querySelector('#aDpart')

function userLookUp(){
    const database = firebase.firestore()
    const userData= database.collection("users").doc(usenamei.value.toLowerCase())
    userData.get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        userData.onSnapshot((doc) => {
          var ini= doc.data()
          fillUser(ini)
           document.getElementById('openedUserChange').style.display='block'
          
          });
      } else {
        alert('user not found')

        //postChanges(obj) // create the document
      }
  })    
}
function fillUser(initialValue){
 pointsi.value=initialValue.Points
 namei.value=initialValue.Name
 cliquei.value=initialValue.Clique
 posi.value= initialValue.Position
 partneri.value=initialValue.Partner
}
function updateUser(initialValue){
  const database = firebase.firestore()
  const userData= database.collection("users").doc(usenamei.value.toLowerCase())
userData.set({
           Name: namei.value.toLowerCase()||usenamei.value.toLowerCase()||'none',
            Position: posi.value.toLowerCase() || 'member',
            Clique:cliquei.value.toLowerCase() || 'unsorted',
            Partner:partneri.value.toLowerCase()||"not set",
            Points:parseInt(pointsi.value)||1
}).then(()=>alert('update successfull'))

}
function deleteUser(){
  
  const database = firebase.firestore()
  database.collection("users").doc(usenamei.value.toLowerCase()).delete().then(function() {
    alert("User successfully deleted!");
}).catch(function(error) {
    console.error("Error removing user: ", error);
});
 
}