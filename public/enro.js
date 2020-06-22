
function addUser(id,obj){
    
    const database = firebase.firestore()
    const userData= database.collection("users").doc(id)
    userData.get()
    .then((docSnapshot) => {
      if (docSnapshot.exists) {
        userData.onSnapshot((doc) => {
          alert('username already exists, use different username')
        });
      } else {
        alert('user enrolled')

        userData.set({
            Name: obj.Name,
            Position: obj.Position || 'member',
            Clique:obj.Clique || 'unsorted',
            Partner:'notset',
            Points:1
        })
        clear()
        //postChanges(obj) // create the document
      }
  })    
}
function enroll(){
    var userName= document.querySelector('#userName').value.toLowerCase()
    var clique = document.querySelector('#clique').value.toLowerCase()
    var position = document.querySelector('#position').value.toLowerCase()
    var name= document.querySelector('#Name').value.toLowerCase()
    if(!(userName&&name)){
      alert('Enter username/name')
    }

    var data ={
            Name: name ,
            Position:  position||'member',
            Clique:clique||'notset',
            Partner:'no partner',
            Points:1
    }
    addUser(userName,data)
}
function clear(){
    document.querySelector('#userName').value = ''
    document.querySelector('#clique').value = ''
    document.querySelector('#partner').value = ''
   document.querySelector('#position').value = ''
   document.querySelector('#Name').value = ''

}