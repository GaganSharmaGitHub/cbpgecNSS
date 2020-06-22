
function userLOGIN(str){
    const database = firebase.firestore()
    const userData= database.collection("users").doc(str)
    userData.get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
            let data = docSnapshot.data()
            //g(data)
            document.getElementById('userCard').style.display='block'
           document.querySelector('.name').innerHTML=data.Name
           document.querySelector('.clique').innerHTML=data.Clique
           document.querySelector('.position').innerHTML=data.Position
           document.querySelector('.partner').innerHTML=data.Partner ||'none'

      } else {
        //g('not exists')
      }
  }) 
}


const submitLogin=()=>{
    let userName= document.querySelector('.formLogin #userName').value
    userLOGIN(userName)
 }
