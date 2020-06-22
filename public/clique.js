let app = firebase.app();

const database = firebase.firestore()
const userData= database.collection("cliques")

function getAll(){

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
getAll()
function postInAppliedList(x) {
    //(x)
    const parent = document.getElementById("eventRes");
    let newPost = document.createElement('div');
    newPost.classList.add("card");
    newPost.innerHTML = '<div class="card"><img src="./assets/logo.png" alt="peu logo" style="width:100%"><div class="container"><h4><b>'+
    x.name+'</b></h4><p>Head: '+x.HName+'</p><p>Mascot: '+ x.mascot+'</p><button class="btn btn-primary"> Points: '+x.points+'</button></div></div>';
    parent.appendChild(newPost);

}
function updateScore(){
    //alert('coming soon....')
    
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
      //g(data.data())

    }
    )
    }
updateScore()
