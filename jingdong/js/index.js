$(function(){

      var cIty=document.getElementsByClassName("city-choose")[0];
      var cHoose=document.getElementsByClassName("choose")[0];

      cIty.onmouseover=function(){
      	cHoose.style.display="block";
      }
      
      cIty.onmouseout=function(){
      	cHoose.style.display="none";
      }

      var dV=document.getElementsByClassName("dv")[0];
      var arr=["精品刀具","枪店预售","男士服装","游戏碟","食品","包子","馒头"];
      var xh=null;
      var bool=true;
      xh=setInterval(function(){
      	  bool=false;
      	  var mStory=Math.floor(Math.random()*arr.length-1);
      	  dV.placeholder=arr[mStory];
      },2000)

      dV.onclick=function(){
      	this.placeholder="";
      }

      var img=document.getElementsByClassName("img")[0];
      var Lis=img.getElementsByTagName("li");
      var box=document.getElementById("box");
      var page=document.getElementsByClassName("page")[0];
      var pageLis=page.getElementsByTagName("li");
      console.log(pageLis)

      var num=0;
      var xho=null;

      function play(num){
           for(i=0;i<Lis.length;i++){
               Lis[i].className="";
               pageLis[i].className="";
           }
           Lis[num].className="block";
           pageLis[num].className="imp";
      }

      function Go(){
      	xho=setInterval(function(){
      		num++;
      		if(num>=Lis.length){
                num=0;
      		}
      		play(num);
      	},1500)
      }
      Go();

      box.onmouseover=function(){
      	clearInterval(xho);
      }
       box.onmouseout=function(){
      	Go();
      }

      for(var j=0;j<pageLis.length;j++){
            pageLis[j].index=j;
            pageLis[j].onmouseover=function(){
            	num=this.index;
            	play(this.index);
            }
      }

      $(".center li").each(function(){
      	var i=$(this).index();
      	$(this).mouseover(function(){
      		var go=i*50;
      		$(".move").stop().animate({"marginLeft":go+"px"},200)
      	})
      })

      $(".center li:eq(0)").hover(function(){
      	$(".center-m").show().siblings().not(".center").hide();
      })
      $(".center li:eq(1)").hover(function(){
      	$(".center-m2").show().siblings().not(".center").hide();
      })

      window.onload=function(){
      	var pan1=document.getElementById("pan1");
      	var pan2=document.getElementById("pan2");
      	var pan3=document.getElementById("pan3");

      	var time=null;
      	time=setInterval(function(){
      		pan3.innerHTML--;
            if(pan3.innerHTML=="0"){
                pan3.innerHTML="60";
                pan2.innerHTML--;
            }else if(pan2.innerHTML=="0"){
                  pan2.innerHTML="60";
                  pan1.innerHTML--;
            }

      	},1000)
      	  if(pan1.innerHTML=="0"&&pan2.innerHTML=="0"&&pan3.innerHTML=="0"){
                clearInterval(time);
            }
            
      }

         var a=0;
      function run(){	
      	 a++;
      	 if(a==2){
             a=0
      	 }
      	 $(".buy-m-right .go li").eq(a).fadeIn().siblings().fadeOut()
      	 $(".buy-m-right .page1 li").eq(a).addClass("mli1").siblings().removeClass();
      }
      timer=setInterval(run,3000);
      $(".buy-m-right .page1 li").mouseover(function(){
      	 clearInterval(timer)
      	 var c=$(this).index()
      	 $(".buy-m-right .go li").eq(c).stop().fadeIn().siblings().fadeOut();
      	 $(".buy-m-right .page1 li").eq(c).stop().addClass("mli1").siblings().removeClass();
      })
      $(".buy-m-right .page1 li").mouseleave(function(){
      	    timer=setInterval(run,3000);
      })

      $(".m-m ul li:eq(0)").hover(function(){
      	$(".m-m ul li:eq(0) img").stop().animate({"right":"25px"})
      })
       $(".m-m ul li:eq(0)").mouseleave(function(){
      	$(".m-m ul li:eq(0) img").stop().animate({"right":"5px"})
      })

       $(".m-m ul li:eq(1)").hover(function(){
      	$(".m-m ul li:eq(1) img").stop().animate({"right":"25px"})
      })
       $(".m-m ul li:eq(1)").mouseleave(function(){
      	$(".m-m ul li:eq(1) img").stop().animate({"right":"5px"})
      })

        $(".m-m ul li:eq(2)").hover(function(){
      	$(".m-m ul li:eq(2) img").stop().animate({"right":"25px"})
      })
       $(".m-m ul li:eq(2)").mouseleave(function(){
      	$(".m-m ul li:eq(2) img").stop().animate({"right":"5px"})
      })
      
     $(".p-nav ul li").each(function(){
     	var m=$(this).index()
     	$(this).hover(function(){
     		var m2=75*m
     		$(".move2").stop().animate({"left":m2+"px"},200)
     	})
     })

     $(".p-nav ul li:eq(0)").hover(function(){
          $(".shop").show().siblings().not(".p-nav").hide()
     })
     $(".p-nav ul li:eq(1)").hover(function(){
          $(".shop2").show().siblings().not(".p-nav").hide()
     })

              var t=0;
      function run2(){	
      	 t++;
      	 if(t==2){
             t=0
      	 }
      	 $(".tuoxie ul li").eq(t).fadeIn().siblings().fadeOut()
      }
      timeTwo=setInterval(run2,1500);

       	$(".nav-l ul li").hover(function(){
             		$(this).find(".text").stop().show().animate({"right":"40px","opacity":"1"})
             	},function(){
             		$(this).find(".text").stop().animate({"right":"30px","opacity":"0"}).hide()
             	})


             	$(".top2").click(function(){
             		$("body").animate({"scrollTop":"0"})
             	})

              	$(window).scroll(function(){
             		if($(window).scrollTop()>240){
                       $(".big-sl").stop().fadeIn(100)
             		}else{
             			$(".big-sl").stop().fadeOut(100)
             		}
             	})
})