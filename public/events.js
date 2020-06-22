let app = firebase.app();

const database = firebase.firestore()
const userData= database.collection("events")

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
    x.name+'</b></h4><p>Date: '+x.date+'</p><p>Host:'+ x.host+ '</p><p>prize:'+x.prize+'</p><p>winner:'+x.winner+'</p><p class="pdes">'+
    x.description+'</p><a href="'+ x.link+'"><button class="btn btn-primary">View post</button></a></div></div>';
    parent.appendChild(newPost);

}