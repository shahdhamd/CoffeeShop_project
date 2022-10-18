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