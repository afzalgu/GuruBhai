


var tododate = [
    {id : 1 , name :"Afzal" , email :"gurubahi34@gamil.com"},
    {id : 2 , name :"Athar" , email :"atharbalti34@gamil.com"},
]

function readAll(){
    var datastore = document.querySelector(".tbody");
    var element = "";

    tododate.map(d => {
       element = element +  `<tr>
           <td>${d.name}</td>
           <td>${d.email}</td>

           <td>
           <button onclick = {edit(${d.id})}>Update</button>

           <button onclick = {delet(${d.id})}>Delete</button>
           </td>

        </tr>`
    })

    datastore.innerHTML = element;

}

function createForm(){ 
      document.querySelector(".inputform").style.display = "block";
     document.querySelector(".Addingbtn").style.display = "none";
}

function cbtn(){
    var name = document.querySelector(".name").value;
    var email = document.querySelector(".email").value;

    var newobj = {id:3, name , email};
    tododate.push(newobj);

    document.querySelector(".inputform").style.display = "none";
    document.querySelector(".Addingbtn").style.display = "block";
   
    var name = document.querySelector(".name").value = ""
    var email = document.querySelector(".email").value = ""
    readAll()
}



function edit(id){
    document.querySelector(".upadateform").style.display = "block";
    document.querySelector(".Addingbtn").style.display = "none";

    let obj1 = tododate.find(f => f.id === id);
    document.querySelector(".update_id").value = obj1.id;
    document.querySelector('.upname').value = obj1.name;
    document.querySelector(".upemail").value = obj1.email;


}

function update(){
     
  var id = parseInt(document.querySelector(".update_id").value);
 var name =   document.querySelector(".upname").value;
  var email =  document.querySelector(".upemail").value;

      obj1 = {id, name , email};
     var index = tododate.findIndex(f => f.id === id);
    tododate[index]=obj1;
     document.querySelector(".upadateform").style.display = "none";
     document.querySelector(".Addingbtn").style.display = "block";

     readAll();
    
 
}


function delet(id){
    let newdate = tododate.filter(f => f.id !== id);
    tododate = newdate;
    readAll();
}

