$(function(){

   var lis=document.getElementsByClassName("lis")[0];
   var nAv=document.getElementsByClassName("nav")[0];


   nAv.onmouseover=function(){
        lis.style.display="block"
   }
   lis.onmouseover=function(){
   	   lis.style.display="block"
   }
    lis.onmouseleave=function(){
   	   lis.style.display="none"
   }
   nAv.onmouseleave=function(){
        lis.style.display="none"
   } 

       var i=0;
    function run(){
        i++;
        if(i==5){
             i=0;
        }
        $(".main-left ul").stop().animate({"marginLeft":-780*i},300);
        $(".page ul li").eq(i).addClass("li1").siblings().removeClass()
   }
       time=setInterval(run,2000);

       $(".page ul li").hover(function(){
       	 clearInterval(time);
       	  var i=$(this).index();
       	   $(".main-left ul").stop().animate({"marginLeft":-780*i},300);
       	    $(".page ul li").eq(i).addClass("li1").siblings().removeClass();
       }).mouseleave(function(){
       	time=setInterval(run,2000);
       })
      
      $(window).scroll(function(){
      	if($(window).scrollTop()>450){
      		$(".main-top-bg").css({"position":"fixed","top":"0"})
      	}else{
      		$(".main-top-bg").css({"position":"static"})
      	}
      })

      $(".news-li ul li:eq(0)").click(function(){
           $(".news-text").show().siblings().not(".news-top").hide();
           $(this).addClass("l1").siblings().removeClass();
      })
       $(".news-li ul li:eq(1)").click(function(){
           $(".news-text2").show().siblings().not(".news-top").hide();
           $(this).addClass("l1").siblings().removeClass();
      })
       $(".news-li ul li:eq(2)").click(function(){
           $(".news-text3").show().siblings().not(".news-top").hide();
           $(this).addClass("l1").siblings().removeClass();
      })

       var login=document.getElementsByClassName("login")[0];
       var go=document.getElementById("go");
       var all=document.getElementsByClassName("all")[0];
       var fal=document.getElementsByClassName("false")[0];
       var timer=null;
       go.onclick=function(){
       	  
       	  var speed=0;
       	  login.style.display="block";
          all.style.display="block";
       	  timer=setInterval(function(){
       	  	speed+=1;
       	  	var T=login.offsetTop+speed;
       	  	var t=600-login.offsetHeight;
       	  	if(T>t){
               T=t;
               speed*=-1;
               speed*=0.75
       	  	}else if(T<0){
               T=0;
               speed*=-1;
               speed*=0.75;
       	  	}
       	  	login.style.top=T+"px";
       	  },20)
       }
       login.onmousedown=function(e){
       	 clearInterval(timer);
          var e=event||e.event
          var x=e.clientX;
          var y=e.clientY;
          var disx=e.clientX-login.offsetLeft;
          var disy=e.clientY-login.offsetTop;
          var if0

          document.onmousemove=function(e){
          	  clearInterval(timer);
              var e=event||e.event;
              login.style.left=e.clientX-disx+'px';
              login.style.top=e.clientY-disy+'px';
          }

          document.onmouseup=function(){
          	  document.onmouseup=null;
              document.onmousemove=null;//
          }

       }

       fal.onclick=function(){
       	login.style.display="none";
       	login.style.top="0";
       	all.style.display="none";
       }

       $(".right-top ul li:eq(0)").click(function(){
       	  $(".right-pic").show().siblings().not(".right-top").hide();
       	  $(this).addClass("w1").siblings().removeClass();
       })
       $(".right-top ul li:eq(1)").click(function(){
       	  $(".right-pic2").show().siblings().not(".right-top").hide();
       	   $(this).addClass("w1").siblings().removeClass();
       })
})