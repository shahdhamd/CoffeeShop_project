var title=document.getElementById('title');
var price=document.getElementById('price');
var taxes=document.getElementById('taxes');
var ads=document.getElementById('ads');
var discount=document.getElementById('discount');
var total=document.getElementById('total');
var count=document.getElementById('count');
var catogory=document.getElementById('catogory');
var click=document.getElementById('click');
var data=document.getElementById('data');
var deletbtn=document.getElementById("deletall");
let search=document.getElementById('search');
var searchmood='title';
var mode='create'
var currentindex;
console.log(title.value)
var datapro;
if(localStorage.getItem("pro")==null){
    var datapro=[];
}else{
     datapro=JSON.parse(localStorage.getItem("pro"))
}
function gettotal(){
 if(price.value !=''){
    var result=(+price.value + +taxes.value+ +ads.value) - +discount.value;
    total.innerHTML=result;
    total.style.backgroundColor='#040';
 }else{
    total.innerHTML='';
    total.style.backgroundColor='#a00d02';
 }
}

click.onclick=function(){
    add();
    displaydata();
    clear()
}
function add(){
    var newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        catogory:catogory.value

    }
    if(title.value !=''&& price.value!=''&& catogory.value!=''){
        if(mode==='create'){
            if(newpro.count >1){
                for(var i=0;i<newpro.count;i++){
                    datapro.push(newpro);
        
                }
        
                }else{
                    datapro.push(newpro);
                }
        }else{
            datapro[currentindex]=newpro;
            mode='create';
            click.inert='create';
            count.style.display='block'
        }
       
    }else{
        clear();
    }

    
    
   
    localStorage.setItem("pro",JSON.stringify(datapro))
}

    function displaydata(){
        gettotal();
var r="";
    for(var i=0;i<datapro.length;i++){
r+=`<tr>
<td>${i+1}</td>
<td>${datapro[i].title}</td>
<td> ${ datapro[i].price}</td>
<td> ${ datapro[i].taxes}</td>
<td> ${ datapro[i].ads}</td>
<td> ${ datapro[i].discount}</td>
<td> ${ datapro[i].total}</td>

<td> ${ datapro[i].catogory}</td>
<td><button onclick="update (${i})"> update</button></td>
<td> <button onclick="delet(${i})"> delet</button></td>

</tr>`

    }
    data.innerHTML=r;

    if(datapro.length > 0){
        deletbtn.innerHTML=`
        <button onclick="deletall()"> deletall(${datapro.length}) </button>
        `
    }
    else{
deletbtn.innerHTML= '';
    
    }
}
function clear(){
    title.value="";
    price.value="";
    price.value="";
    taxes.value="";
    ads.value="";
    discount.value="";
    total.innerHTML="";
    count.value="";
    catogory.value="";
}
function delet(index){
    datapro.splice(index,1);
    localStorage.setItem("pro",JSON.stringify(datapro));
    displaydata();
}


function deletall(){
    

    localStorage.removeItem("pro");
     datapro=[];

data.innerHTML="";
}

 function update(i)  {
title.value=datapro[i].title;
price.value=datapro[i].price;
taxes.value=datapro[i].taxes
ads.value=datapro[i].ads;
discount.value=datapro[i].discount;
gettotal();
count.style.display='none';
catogory.value=datapro[i].catogory;
click.innerHTML="update";
mode='update'
currentindex=i;
 } 
 function getsearch(id){
    if(id=='searchtitle'){
        searchmood='title';
        console.log(searchmood)
        search.placeholder ='search by title';
    }else{
        searchmood='catogory';
        search.placeholder ='search by catogory';
    }
    search.focus();

    search.value='';
    displaydata();
 }
 function searchdata(value){
    var r="";
if(searchmood=='title'){
    
    for(var i= 0;   i<datapro.length;i++){
        if(datapro[i].title.toLowerCase().includes(value.toLowerCase()))
          
                
                r+=`<tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td> ${ datapro[i].price}</td>
                <td> ${ datapro[i].taxes}</td>
                <td> ${ datapro[i].ads}</td>
                <td> ${ datapro[i].discount}</td>
                <td> ${ datapro[i].total}</td>
                
                <td> ${ datapro[i].catogory}</td>
                <td><button onclick="update (${i})"> update</button></td>
                <td> <button onclick="delet(${i})"> delet</button></td>
                
                </tr>`
                
                    }
                    data.innerHTML=r;
                
        }else{
            for(var i= 0;   i<datapro.length;i++){
                if(datapro[i].catogory.toLowerCase().includes(value.toLowerCase()))
                  
                        
                        r+=`<tr>
                        <td>${i}</td>
                        <td>${datapro[i].title}</td>
                        <td> ${ datapro[i].price}</td>
                        <td> ${ datapro[i].taxes}</td>
                        <td> ${ datapro[i].ads}</td>
                        <td> ${ datapro[i].discount}</td>
                        <td> ${ datapro[i].total}</td>
                        
                        <td> ${ datapro[i].catogory}</td>
                        <td><button onclick="update (${i})"> update</button></td>
                        <td> <button onclick="delet(${i})"> delet</button></td>
                        
                        </tr>`
                        
                            }
                            data.innerHTML=r;
                        

        }
    }

 