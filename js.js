let colors=["#c98b20 ","white","orange","#e7b35a","#704905 "];

    $(".color-optain li").eq(0).css("backgroundColor",colors[0]);
    console.log( $(".color-optain li").eq(0).css("backgroundColor",colors[0]))
    $(".color-optain li").eq(1).css("backgroundColor",colors[1]);
    $(".color-optain li").eq(2).css("backgroundColor",colors[2]);
    $(".color-optain li").eq(3).css("backgroundColor",colors[3]);
    $(".color-optain li").eq(4).css("backgroundColor",colors[4]);

$(".color-optain li").click(function(){
        let color=$(this).css("backgroundColor");
        $(".change").css("color",color)
    })
    $(".color-box i").click(function(){
        let option=$(".color-optain").outerWidth();
        if($(".color-box").css("right")=='0px'){
        $(".color-box").animate({"right":-option},3000);
        }else{
            $(".color-box").animate({"right":0},3000);
        }
    })

    $(".nh").click(function(){
        $("iframe").show(1000,function(){
            $(".landing").slideDown(2000);
        });
    })
       $(".yt").click(function(){
        $(".landing").slideUp(1000);
       })


       $(document).ready(function(){
        $('.spinner').fadeOut(2000);
        $('.loader').fadeOut(2000);
        $('body').css('overflow','unset')
    })
  $(window).scroll(function(){
    let t= $(window).scrollTop();
   if(t >= 500){

    $('.navbar').addClass('position-fixed top-0')
    //$('.navbar ').addClass('bg-dark')
    $(".btntop").css("display","block")
   }else{
    $('.navbar').addClass('position-absolute bottom-0');
    $('.navbar').removeClass('position-fixed top-0');
   // $('.navbar ').removeClass('bg-warning');
    $(".btntop").css("display","none")
   }
  })
$(".btntop").click(function(){
    $(window).scrollTop(0)
})
$(".nav-link").click(function(e){
   let tar=$(e.target).attr('href');
 let secof=$(tar).offset().top;
 $('html','body').animate({scrollTop : secof},400)
})


 var demo=document.getElementById('demo');

  var mypost1=[];
  var mypost2=[];
  var mypost3=[];
  let httpReq=new XMLHttpRequest();
  create1();
  async function create1(){
    let respose=await fetch('https://forkify-api.herokuapp.com/api/search?q=blackberry');
    let data=await respose.json();
    mypost1=data.recipes;
    
    create2();
  }
  
  async function create2(){
    let respose1=await fetch('https://forkify-api.herokuapp.com/api/search?q=lemon');
    let data1=await respose1.json();
    mypost2=data1.recipes;
    create3();
  }
  async function create3(){
    let respose2=await fetch('https://forkify-api.herokuapp.com/api/search?q=broccoli');
    let data2=await respose2.json();
    mypost3=data2.recipes;
    display();
  }
  
  
  
  function display(){
    console.log(mypost1[1].title);
    var test='';
    for(var i=0;i<4;i++){
      {
        
      test+=`<div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost1[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled ">
              <li class="content">${mypost1[i].title}</li>
              <li class="content">$${mypost1[i].social_rank}</li>
          </ul>
          
      </div>
      <div class="text-secondary">---------------------------------</div></div>
      <div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img src=${mypost2[i].image_url} class="Menu-img" width="83px" height="83px" /></div>
          <ul class="list-unstyled">
              <li class="content">${mypost2[i].title}</li>
              <li class="content">$${mypost2[i].social_rank}</li>
          </ul>
      </div>
      <div class="text-secondary">---------------------------------</div>
      </div>
  
  </div>
  <div class="col-md-4  text-center">
      <div class="d-flex p-3">
          <div class="me-3 div-img "><img class="Menu-img" src=${mypost3[i].image_url} width="83px" height="83px" /></div>
          <ul class="list-unstyled">
          <li class="content">${mypost3[i].title}</li>
          <li class="content">$${mypost3[i].social_rank}</li>
      </ul>
      </div>
      <div class="text-secondary">--------------------------------</div>
  </div>`
    }}
    demo.innerHTML=test;
  }
  