$(function(){
    $(".mli1").hover(function(){
    $(this).next().stop().slideDown(500);
    $(".mli ul li").animate({"marginTop":"5px"})
    $(".mul li").animate({"marginTop":"5px"})
},function(){})
    $(".nav>ul>li").hover(function(){},function(){
        $(".mli").stop().slideUp(500);
    })
    $(".nav>ul>li").hover(function(){},function(){
        $(".mul").stop().slideUp(500);
    })
    
    var i=0;
    function run(){
        i++;
        if(i==3){
            i=0
        }
        $(".banner li").eq(i).fadeIn(3000).siblings().fadeOut(3000)
    }
    var timer=setInterval(run,3000);
    
    var flase=document.getElementsByClassName("flase")[0];
    var ptext=document.getElementsByClassName("ptext")[0];
    var ture=document.getElementsByClassName("ture")[0];
    flase.onclick=function(){
        if(ptext.style.left="1600px"){
            ture.style.display="block";
        }

    }
    ture.onclick=function(){
        ptext.style.left="120px";
        ture.style.display="none";
    }
    
    $(".nav2 ul li:eq(0)").hover(function(){
        $(".t-1").show();
    },function(){
        $(".t-1").fadeOut();
    })
    $(".nav2 ul li:eq(1)").hover(function(){
        $(".t-2").show();
    },function(){
        $(".t-2").fadeOut();
    })
    $(".nav2 ul li:eq(2)").hover(function(){
        $(".t-3").show();
    },function(){
        $(".t-3").fadeOut();
    })
    $(".nav2 ul li:eq(3)").hover(function(){
        $(".t-4").fadeIn();
    },function(){
        $(".t-4").fadeOut();
    })
    
    $(".news").kxbdMarquee({direction:"top",scrollAmount:0.3});
    
    $(".icon .icon1 li").each(function(){
                var i=$(this).index()
                $(this).mouseover(function(){
                    var a=i*90
                    $(".action").stop().animate({"marginLeft":a+"px"},300)
                })
            })
    $(".icon .icon1 li").hover(function(){
        var x=0
        x++
        if(x==4){
            x=0
        }
        x=$(this).index()
        $(".box").stop().animate({"marginLeft":-680*x})
        
        $(this).css("color","#0377c2").siblings().css("color","#000")
    })
    
    $(".nav2 ul li:eq(0)").hover(a,b)
    function a(){
        $(".nav2 ul li .img1").stop().fadeIn(100).animate({"left":"170px","opacity":"1","width":"180px","height":"180px"},300,a1)
    }
    function a1(){
        $(".nav2 ul li .min").stop().fadeIn(100).animate({"left":"60px","opacity":"1"},300,a2)
    }
    function a2(){
        $(".nav2 ul li .xiangxi").stop().animate({"left":"200px"},0).slideDown(300)
    }
    function b(){
        $(".nav2 ul li .img1").stop().fadeOut(100).animate({"left":"150px","opacity":"0","width":"100px","height":"100px"},300,ac1)
        
//        $(".nav2 ul li .xiangxi").stop().animate({"left":"140px"},300,).slideUp(300)
    }
    function ac1(){
        $(".nav2 ul li .min").stop().fadeOut(100).animate({"left":"0px","opacity":"0"},300,ac2)
    }
    function ac2(){
         $(".nav2 ul li .xiangxi").stop().animate({"left":"140px"},0).slideUp(300)
    }
   
    $(".nav2 ul li:eq(1)").hover(c,d)
    function c(){
        $(".nav2 ul li .img2").stop().fadeIn(100).animate({"left":"170px","opacity":"1","width":"180px","height":"180px"},300,b1)
    }
    function b1(){
        $(".nav2 ul li .min2").stop().fadeIn(100).animate({"left":"60px","opacity":"1"},300,b2)
    }
    function b2(){
        $(".nav2 ul li .xiangxi2").stop().animate({"left":"200px"},0).slideDown(300)
    }
    function d(){
        $(".nav2 ul li .img2").stop().fadeOut(100).animate({"left":"150px","opacity":"0","width":"100px","height":"100px"},300,c1)
        
//        $(".nav2 ul li .xiangxi2").stop().animate({"left":"140px"},300,).slideUp(300)
    }
    function c1(){
        $(".nav2 ul li .min2").stop().fadeOut(100).animate({"left":"0px","opacity":"0"},300,c2)
    }
    function c2(){
         $(".nav2 ul li .xiangxi2").stop().animate({"left":"140px"},0).slideUp(300)
    }
    $(".nav2 ul li:eq(2)").hover(e,f)
    function e(){
        $(".nav2 ul li .img3").stop().animate({"left":"170px","opacity":"1","width":"180px","height":"180px"},300,x1)
    }
    function x1(){
        $(".nav2 ul li .min3").stop().animate({"left":"60px","opacity":"1"},300,x2)
    }
    function x2(){
        $(".nav2 ul li .xiangxi3").stop().animate({"left":"200px"},0).slideDown(300)
    }
    function f(){
        $(".nav2 ul li .img3").stop().animate({"left":"150px","opacity":"0","width":"100px","height":"100px"},300,z1)
        
//        $(".nav2 ul li .xiangxi3").stop().animate({"left":"140px"},300,).slideUp(300)
    }
    function z1(){
        $(".nav2 ul li .min3").stop().animate({"left":"0px","opacity":"0"},300,z2)
    }
    function z2(){
         $(".nav2 ul li .xiangxi3").stop().animate({"left":"140px"},0).slideUp(300)
    }
})


