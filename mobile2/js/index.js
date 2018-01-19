var list=document.querySelector(".nav-list");
var btn=document.querySelector(".n-btn");
var bool=true;

btn.addEventListener("click",function(){
     if(bool){
         list.style.height="4.5rem";
         btn.style.background="#c36b6b";
         bool=false;
     }else{
         list.style.height="0";
         btn.style.background="#e6e6e6";
         bool=true;
     }
})

//opacitypic
var divs=document.querySelectorAll(".box div");
var numLi=document.querySelectorAll(".banner ul li");
var num=0;
var time;
function run(){
    for(var i=0;i<divs.length;i++){
        divs[i].className="";
        numLi[i].className="";
    }
    divs[num].className="li1";
    numLi[num].className="on";
}

function autoPlay(){
    time=setInterval(function(){
         num++;
        if(num==2){
            num=0
        }
        run();
    },2500)
}
autoPlay();

//vue组件
Vue.component("my-li",{
    props:["imgurl","text"],
    template:`
     <li>
        <a href="#"><img v-bind:src="imgurl"><div></div></a>
        <p>{{text}}</p>
     </li>
`
})

var app=new Vue({
    el:".product-center",
    data:{
        lists:[
         {imgurl:"images/shp4.jpg",text:"家居时尚"},
         {imgurl:"images/shp4.jpg",text:"橱柜"},
         {imgurl:"images/shp4.jpg",text:"卫生间"}
        ]
    }
}) 

Vue.component("new-li",{
    props:["content","date"],
    template:`
        <li>
           <a href="#">{{content}}</a>
           <p>{{date}}</p>
        </li>
 `
})

var app2=new Vue({
    el:".newlist",
    data:{
        lists:[
            {content:"要勇于探索时代、技术赋于空间的新形象",date:"2017-03-07"},
            {content:"对现有的建筑物内部空间进行深加工的增值准备工作",date:"2017-03-07"},
            {content:"现代装修对室内设计的进步作用",date:"2017-03-07"},
            {content:"要勇于探索时代、技术赋于空间的新形象",date:"2017-03-07"},
            {content:"要勇于探索时代、技术赋于空间的新形象",date:"2017-03-07"},
            {content:"要勇于探索时代、技术赋于空间的新形象",date:"2017-03-07"}
        ]
    }
})

//顶部
var imgTop=document.querySelector(".top-img");
imgTop.addEventListener("click",function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
})