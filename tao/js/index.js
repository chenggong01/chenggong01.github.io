var lis=document.querySelectorAll(".s2-news ul li");
console.log(lis);
var i=0;
var timer;

function run(){
    timer=setInterval(function(){
        lis[i].removeAttribute("class");
        
        i++;
        if(i>=lis.length){
            i=0
        }
        lis[i].setAttribute("class","li1");
    },1500);
}
run();

//倒计时效果
var hour=document.querySelector("#h");
var min=document.querySelector("#m");
var s=document.querySelector("#s");

var time;

function goTime(){
    time=setInterval(function(){
        if(s.innerHTML=="00"){
        s.innerHTML=5; 
      }
        s.innerHTML--;
        if(s.innerHTML<10){
           s.innerHTML="0"+s.innerHTML; 
        }
        if(s.innerHTML==0){
            min.innerHTML--;
            s.innerHTML=60;
            s.innerHTML--;
        }
        if(min.innerHTML<10){
           min.innerHTML="0"+min.innerHTML; 
        }
        if(min.innerHTML==0){
            hour.innerHTML--;
            min.innerHTML=60;
            min.innerHTML--;
        }
        if(hour.innerHTML<10){
           hour.innerHTML="0"+hour.innerHTML; 
        }
       
    },1000)
}
goTime();


var bodyHeight=document.body.offsetHeight;
var nowheight=document.body.clientWidth;
console.log(nowheight);
console.log(bodyHeight);
var flis=document.querySelectorAll(".floors ul li");
var setheight=(bodyHeight-nowheight)/4*1;
var setheight2=(bodyHeight-nowheight)/4*2;
var setheight3=(bodyHeight-nowheight)/4*3;
var setheight4=(bodyHeight-nowheight)/4*4;

var arr=[setheight,setheight2,setheight3,setheight4];
window.onscroll=function(){
    var t=document.documentElement.scrollTop || document.body.scrollTop;

    for(var i=0;i<arr.length;i++){
        arr[i].index=i;
        if(t>arr[i]){
         for(var j=0;j<flis.length;j++){
            flis[j].removeAttribute("class");
         }
         flis[i].setAttribute("class","li1");
        }else{
            flis[i].removeAttribute("class");
        }
    }
    
    
}

Vue.component("my-li",{
    props:["imgurl","content","buy"],
    template:`
       <li>
          <img v-bind:src="imgurl">
          <p>{{content}}</p>
          <h2>{{buy}}</h2>
      </li>
`
})

var app=new Vue({
    el:".four-div",
    data:{
        lists:[
            {imgurl:"images/vuep.png",content:"为你推荐杰茗薄汝窑子功夫具陶瓷茶杯套装家用茶壶盖碗泡茶器械",buy:"￥25.0"},
            {imgurl:"images/vuep2.png",content:"为你推荐htfortex2017新款女式包文艺帆布袋学生束带包包手提袋男",buy:"￥36.00"},
            {imgurl:"images/vuep3.png",content:"为你推荐木纤维双层洗碗巾去污不沾油免洗洁净防水手套抹布",buy:"￥15.00"}
        ]
    }
})






