$(function(){
	// $(".banner .page li:eq(0)").hover(function(){
	// 	$(this).css({"height":"10px","background":"#fff"}).siblings().css({"height":"5px","background":"#a1a1a1","opacity":"1"})
	// 	$(".b1").fadeIn(800).siblings().not(".page").fadeOut(800)
	// 	$(".text").slideDown(1000)
	// 	$(".text h3").stop().animate({"opacity":"1"},1800)
	// 	$(".text h2").stop().animate({"opacity":"1"},1800)
	// 	$(".text p").stop().animate({"opacity":"1"},1800)
	// 	$(".t-p .m1").stop().animate({"top":"0"},1200)
	// 	$(".t-p .m2").stop().animate({"bottom":"0"},1200)

	// 	$(".text2").slideUp(1000)
	// 	$(".text2 p").stop().animate({"opacity":"0","marginTop":"45px"},1800)
	// 	$(".text2 h3").stop().animate({"opacity":"0","marginTop":"0px"},1800)
	// 	$(".text2 h2").stop().animate({"opacity":"0","marginTop":"0px"},1800)
	// 	$(".img2 .m3").stop().animate({"top":"-45px"})

	// 	 $(".text3 h3").stop().animate({"opacity":"0","marginTop":"20px"},1800)
	// 	$(".text3 h2").stop().animate({"opacity":"0","marginTop":"20px"},1800)
	// 	$(".text3 p").stop().animate({"opacity":"0","marginTop":"80px"},1800)
	// 	$(".text3").slideUp(1000)
	// 	$(".img4 .m4").stop().animate({"bottom":"-40","left":"0px"},700)
	// })
	// $(".banner .page li:eq(1)").hover(function(){
	// 	$(this).css({"height":"10px","background":"#fff"}).siblings().css({"height":"5px","background":"#a1a1a1","opacity":"1"})
	// 	$(".b2").fadeIn(800).siblings().not(".page").fadeOut(800)
	// 	$(".text h3").stop().animate({"opacity":"0"},1800)
	// 	$(".text h2").stop().animate({"opacity":"0"},1800)
	// 	$(".text p").stop().animate({"opacity":"0"},1800)
	// 	$(".text").slideUp(1000)
	// 	$(".t-p .m1").stop().animate({"top":"-40px"},1200)
	// 	$(".t-p .m2").stop().animate({"bottom":"-35px"},1200)

	// 	$(".text2").slideDown(1000)
	// 	$(".text2 p").stop().animate({"opacity":"1","marginTop":"60px"},1800)
	// 	$(".text2 h3").stop().animate({"opacity":"1","marginTop":"15px"},1800)
	// 	$(".text2 h2").stop().animate({"opacity":"1","marginTop":"15px"},1800)
	// 	$(".img2 .m3").stop().animate({"top":"0"})

	// 	  $(".text3 h3").stop().animate({"opacity":"0","marginTop":"20px"},1800)
	// 	$(".text3 h2").stop().animate({"opacity":"0","marginTop":"20px"},1800)
	// 	$(".text3 p").stop().animate({"opacity":"0","marginTop":"80px"},1800)
	// 	$(".text3").slideUp(1000)
	// 	$(".img4 .m4").stop().animate({"bottom":"-40","left":"0px"},700)
	// })
	// $(".banner .page li:eq(2)").hover(function(){
	// 	$(this).css({"height":"10px","background":"#fff"}).siblings().css({"height":"5px","background":"#a1a1a1","opacity":"1"})
	// 	$(".b3").fadeIn(800).siblings().not(".page").fadeOut(800)
	// 	$(".text h3").stop().animate({"opacity":"0"},1800)
	// 	$(".text h2").stop().animate({"opacity":"0"},1800)
	// 	$(".text p").stop().animate({"opacity":"0"},1800)
	// 	$(".text").slideUp(1000)
	// 	$(".t-p .m1").stop().animate({"top":"-40px"},1200)
	// 	$(".t-p .m2").stop().animate({"bottom":"-35px"},1200)

	// 	$(".text2").slideUp(1000)
	// 	$(".text2 p").stop().animate({"opacity":"0","marginTop":"45px"},1800)
	// 	$(".text2 h3").stop().animate({"opacity":"0","marginTop":"0px"},1800)
	// 	$(".text2 h2").stop().animate({"opacity":"0","marginTop":"0px"},1800)
	// 	$(".img2 .m3").stop().animate({"top":"-45px"})

 //        $(".text3 h3").stop().animate({"opacity":"1","marginTop":"35px"},1800)
	// 	$(".text3 h2").stop().animate({"opacity":"1","marginTop":"35px"},1800)
	// 	$(".text3 p").stop().animate({"opacity":"1","marginTop":"100px"},1800)
	// 	$(".text3").slideDown(1000)
	// 	$(".img4 .m4").stop().animate({"bottom":"0","left":"25px"},700)
	// })
	// $(".text3 h3").stop().animate({"opacity":"1","marginTop":"35px"},1800)
	// 	$(".text3 h2").stop().animate({"opacity":"1","marginTop":"35px"},1800)
	// 	$(".text3 p").stop().animate({"opacity":"1","marginTop":"100px"},1800)
	// 	$(".text3").slideDown(1000)
	// 	$(".img4 .m4").stop().animate({"bottom":"0","left":"25px"},700)
		var i=0
	function run(){
		
		i++
		if(i==3){
             i=0
		}
		$(".b1").eq(i).fadeIn(1200).siblings().not(".page,.nav-bg").fadeOut(1200)
		$(".page li").eq(i).addClass("li1").siblings().removeClass()
		if(i==0){
		$(".text").slideDown(1000)
		$(".text h3").stop().animate({"opacity":"1","marginTop":"40px"},1800)
		$(".text h2").stop().animate({"opacity":"1","marginTop":"40px"},1800)
		$(".text p").stop().animate({"opacity":"1","marginTop":"110px"},1800)
		$(".t-p .m1").stop().animate({"top":"0"},1200)
		$(".t-p .m2").stop().animate({"bottom":"0"},1200)

		$(".text2").slideUp(1000)
		$(".text2 p").stop().animate({"opacity":"0","marginTop":"45px"},1800)
		$(".text2 h3").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".text2 h2").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".img2 .m3").stop().animate({"top":"-45px"})

		 $(".text3 h3").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 h2").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 p").stop().animate({"opacity":"0","marginTop":"80px"},1800)
		$(".text3").slideUp(1000)
		$(".img4 .m4").stop().animate({"bottom":"-40","left":"0px"},700)
		}

		if(i==1){
        $(".text h3").stop().animate({"opacity":"0","marginTop":"25px"},1800)
		$(".text h2").stop().animate({"opacity":"0","marginTop":"25px"},1800)
		$(".text p").stop().animate({"opacity":"0","marginTop":"100px"},1800)
		$(".text").slideUp(1000)
		$(".t-p .m1").stop().animate({"top":"-40px"},1200)
		$(".t-p .m2").stop().animate({"bottom":"-35px"},1200)

		$(".text2").slideDown(1000)
		$(".text2 p").stop().animate({"opacity":"1","marginTop":"60px"},1800)
		$(".text2 h3").stop().animate({"opacity":"1","marginTop":"15px"},1800)
		$(".text2 h2").stop().animate({"opacity":"1","marginTop":"15px"},1800)
		$(".img2 .m3").stop().animate({"top":"0"})

		  $(".text3 h3").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 h2").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 p").stop().animate({"opacity":"0","marginTop":"80px"},1800)
		$(".text3").slideUp(1000)
		$(".img4 .m4").stop().animate({"bottom":"-40","left":"0px"},700)
		}

		if(i==2){
		$(".text h3").stop().animate({"opacity":"0","marginTop":"25px"},1800)
		$(".text h2").stop().animate({"opacity":"0","marginTop":"25px"},1800)
		$(".text p").stop().animate({"opacity":"0","marginTop":"100px"},1800)
		$(".text").slideUp(1000)
		$(".t-p .m1").stop().animate({"top":"-40px"},1200)
		$(".t-p .m2").stop().animate({"bottom":"-35px"},1200)

		$(".text2").slideUp(1000)
		$(".text2 p").stop().animate({"opacity":"0","marginTop":"45px"},1800)
		$(".text2 h3").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".text2 h2").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".img2 .m3").stop().animate({"top":"-45px"})

        $(".text3 h3").stop().animate({"opacity":"1","marginTop":"35px"},1800)
		$(".text3 h2").stop().animate({"opacity":"1","marginTop":"35px"},1800)
		$(".text3 p").stop().animate({"opacity":"1","marginTop":"100px"},1800)
		$(".text3").slideDown(1000)
		$(".img4 .m4").stop().animate({"bottom":"0","left":"25px"},700)
		}
	}
	timer=setInterval(run,3500)
	$(".page li").hover(function(){
		clearInterval(timer)
		i=$(this).index()
		$(".b1").eq(i).fadeIn(1200).siblings().not(".page,.nav-bg").fadeOut(1200)

		$(".page li").eq(i).addClass("li1").siblings().removeClass()
			if(i==0){
		$(".text").slideDown(1000)
		$(".text h3").stop().animate({"opacity":"1"},1800)
		$(".text h2").stop().animate({"opacity":"1"},1800)
		$(".text p").stop().animate({"opacity":"1"},1800)
		$(".t-p .m1").stop().animate({"top":"0"},1200)
		$(".t-p .m2").stop().animate({"bottom":"0"},1200)

		$(".text2").slideUp(1000)
		$(".text2 p").stop().animate({"opacity":"0","marginTop":"45px"},1800)
		$(".text2 h3").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".text2 h2").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".img2 .m3").stop().animate({"top":"-45px"})

		 $(".text3 h3").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 h2").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 p").stop().animate({"opacity":"0","marginTop":"80px"},1800)
		$(".text3").slideUp(1000)
		$(".img4 .m4").stop().animate({"bottom":"-40","left":"0px"},700)
		}

		if(i==1){
        $(".text h3").stop().animate({"opacity":"0"},1800)
		$(".text h2").stop().animate({"opacity":"0"},1800)
		$(".text p").stop().animate({"opacity":"0"},1800)
		$(".text").slideUp(1000)
		$(".t-p .m1").stop().animate({"top":"-40px"},1200)
		$(".t-p .m2").stop().animate({"bottom":"-35px"},1200)

		$(".text2").slideDown(1000)
		$(".text2 p").stop().animate({"opacity":"1","marginTop":"60px"},1800)
		$(".text2 h3").stop().animate({"opacity":"1","marginTop":"15px"},1800)
		$(".text2 h2").stop().animate({"opacity":"1","marginTop":"15px"},1800)
		$(".img2 .m3").stop().animate({"top":"0"})

		  $(".text3 h3").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 h2").stop().animate({"opacity":"0","marginTop":"20px"},1800)
		$(".text3 p").stop().animate({"opacity":"0","marginTop":"80px"},1800)
		$(".text3").slideUp(1000)
		$(".img4 .m4").stop().animate({"bottom":"-40","left":"0px"},700)
		}

		if(i==2){
		$(".text h3").stop().animate({"opacity":"0"},1800)
		$(".text h2").stop().animate({"opacity":"0"},1800)
		$(".text p").stop().animate({"opacity":"0"},1800)
		$(".text").slideUp(1000)
		$(".t-p .m1").stop().animate({"top":"-40px"},1200)
		$(".t-p .m2").stop().animate({"bottom":"-35px"},1200)

		$(".text2").slideUp(1000)
		$(".text2 p").stop().animate({"opacity":"0","marginTop":"45px"},1800)
		$(".text2 h3").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".text2 h2").stop().animate({"opacity":"0","marginTop":"0px"},1800)
		$(".img2 .m3").stop().animate({"top":"-45px"})

        $(".text3 h3").stop().animate({"opacity":"1","marginTop":"35px"},1800)
		$(".text3 h2").stop().animate({"opacity":"1","marginTop":"35px"},1800)
		$(".text3 p").stop().animate({"opacity":"1","marginTop":"100px"},1800)
		$(".text3").slideDown(1000)
		$(".img4 .m4").stop().animate({"bottom":"0","left":"25px"},700)
		}

	})
	$(".page li").mouseout(function(){
		timer=setInterval(run,3500)
	})
		$(".text3 h3").stop().animate({"opacity":"1","marginTop":"35px"},1800)
		$(".text3 h2").stop().animate({"opacity":"1","marginTop":"35px"},1800)
		$(".text3 p").stop().animate({"opacity":"1","marginTop":"100px"},1800)
		$(".text3").slideDown(1000)
		$(".img4 .m4").stop().animate({"bottom":"0","left":"25px"},700)

		$(".lis>ul>li:eq(0),.lis>ul>li:eq(1),.lis>ul> li:eq(2)").hover(function(){
			$(".nav-bg").stop().animate({"height":"300px"},500)
		},function(){
			$(".nav-bg").stop().animate({"height":"44px"},700)
		})
            

         	$(".lis>ul>li:eq(0)").hover(function(){
             		$(".lis>ul>li .br").stop().slideDown(700)
             		$(".lis>ul>li .dou1").stop().animate({"opacity":"1","right":"80px"},1200)
             	},function(){})
             	$(".lis>ul>li:eq(0)").hover(function(){},function(){
             		$(".lis>ul>li .br").stop().slideUp(700)
             		$(".lis>ul>li .dou1").stop().animate({"opacity":"0","right":"55px"},300)
             	})
            $(".lis>ul>li:eq(1)").hover(function(){
             		$(".lis>ul>li .br1").stop().slideDown(700)
             		$(".lis>ul>li .dou2").stop().animate({"opacity":"1","left":"-90px"},1200)
             	},function(){})
             	$(".lis>ul>li:eq(1)").hover(function(){},function(){
             		$(".lis>ul>li .br1").stop().slideUp(700)
             		$(".lis>ul>li .dou2").stop().animate({"opacity":"0","left":"-50px"},300)
             	})
            $(".lis>ul>li:eq(2)").hover(function(){
             		$(".lis>ul>li .br2").stop().slideDown(700)
             		$(".lis>ul>li .dou3").stop().animate({"opacity":"1","left":"-80px"},1200)
             	},function(){})
             	$(".lis>ul>li:eq(2)").hover(function(){},function(){
             		$(".lis>ul>li .br2").stop().slideUp(700)
             		$(".lis>ul>li .dou3").stop().animate({"opacity":"0","left":"-50px"},300)
             	})

})