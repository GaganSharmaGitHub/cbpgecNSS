
function addEvent(obj){
    //(obj)    
     const database = firebase.firestore()
     const eventData= database.collection("events")
     eventData.add(obj).then(()=>alert('event '+obj.name+' Added'))
 }
 function Add(){
     var name= document.querySelector('#Name').value.toLowerCase()
     var host = document.querySelector('#HostuserName').value.toLowerCase()
     var date = document.querySelector('#date').value.toLowerCase()
     var description = document.querySelector('#description').value.toLowerCase()
     var prize = document.querySelector('#prize').value||0
     var link = document.querySelector('#link').value.toLowerCase()
 
 
     var data ={
         date: date || 'unnamed',
         description: description|| 'no description',
         host: host||'university',
         link: link||'https://www.facebook.com/groups/PEUniversity',
         name: name||'event',
         prize: prize,
         winner: 'not declared'
     }
     addEvent(data)
 }
 function clear(){
     document.querySelector('#userName').value = ''
      document.querySelector('#clique').value = ''
     document.querySelector('#partner').value = ''
    document.querySelector('#position').value = ''
 
 }