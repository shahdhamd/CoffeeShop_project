let item=document.getElementById("link");
let name=document.getElementById("lab1");
let password=document.getElementById("lab2");
let login=document.getElementById("click");
login.addEventListener("click",function(){
    let passwordadmin="A1234567";
    let nameAdmin="Admin"
   if(password.value!="" && name.value!=""){
  
    login.setAttribute("disabled","disabled");
   }
    if(password.value==passwordadmin && name.value==nameAdmin){
       
 
login.removeAttribute("disabled");


location.replace("index5.html");
   
    }

   else{
    login.setAttribute("disabled","disabled");
    alert("error")
 
   
   }
})







