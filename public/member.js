let app = firebase.app();

const database = firebase.firestore()
const userData= database.collection("users")


function search(){
    document.getElementById("results").innerHTML=''
    str = document.getElementById('selectClique').value
    //return
    if(str==='All'){
        getAll()
        return
    }
    const query = userData.where('Clique','==',str)
    query.get().then(
        data=>{
        data.docs.forEach((data)=>{
            
            let extracted = data.data()
            postInAppliedList(data.id,extracted)
        })
        }
    )
}

function getAll(){

    document.getElementById("results").innerHTML=''
    const query = userData
    query.get().then(
        data=>{
        data.docs.forEach((data)=>{
            let extracted = data.data()
            postInAppliedList(data.id,extracted)
        })
        }
    )
}
getAll()
function postInAppliedList(id,x) {
    const parent = document.getElementById("results");
    let newPost = document.createElement('tr');
    //newPost.classList.add("result");
    newPost.innerHTML = '<td>'+id +'</td><td>'+x.Name+'</td><td>'+ 
    x.Position+ '</td>'+'<td>'+ x.Clique +'</td><td>'+ x.Points +'</td>'+'</td><td>'+ x.Partner +'</td>';
    parent.appendChild(newPost);

}