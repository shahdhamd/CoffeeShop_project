let item=document.getElementById("link");
let lab1=document.getElementById("lab1");
let lab2=document.getElementById("lab2");
let log=document.getElementById("logbut");
console.log(lab1)
logbut.addEventListener("click",function(){
    location.replace("index3.html")
})


item.addEventListener("click",function(){
    location.replace("index2.html")
})
let link1=document.getElementById("link1");
link1.addEventListener("click",function(){
    location.replace("index.html")
})




 lab1.onkeyup = function(){
   
   var namePattern=/^[A-Z][a-z]{2,8}$/

    if(namePattern.test(lab1.value)){
        lab1.classList.add("is-valid");
        lab1.classList.remove("is-invalid");
      
      
       
    
      
    }else{
       
        lab1.classList.replace("is-valid","is-invalid");
        
    }
}
lab2.onkeyup = function(){
    console.log("rand")
   var namePattern1=/^[A-Z][1-9]{6,8}$/

    if(namePattern1.test(lab2.value)){
        lab2.classList.add("is-valid");
        lab2.classList.remove("is-invalid");
        
      
       
    
      
    }else{
       
        lab2.classList.replace("is-valid","is-invalid");
      
    }
}
