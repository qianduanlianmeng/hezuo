window.onload = function(){
var fades = document.getElementById("ss");
var balck=document.getElementById("who");
var blink = document.getElementsByTagName("body")
balck.addEventListener("mouseover",function(){
    fades.style.display="block";
});
balck.addEventListener("mouseout",function(){
    fades.style.display="none";
});
// var names= document.querySelector('#names');
//     var showss = document.getElementsByName('addr-infor')
//     names.addEventListener('click',function{
//         showAddr.style.display='block';}

function qswhMarquee(){
    var s =document.getElementsByClassName("black");
    var imgs =document.getElementsByClassName("anim_fade_image");
    for(var i =0;i<s.length&&i<imgs.length;i++){
        if(s[i].style.display==""){
            s[i].style.display="none";
            imgs[i].style.display=""
        }
        else{
            imgs[i].style.display="none";
            s[i].style.display="";
        }
    }
}

inter=setInterval(qswhMarquee,500); 
// function qs(){
    
//         if(balck.style.display==""){
//             balck.style.display="none";
//             fades.style.display=""
//         }
//         else{
//             fades.style.display="none";
//             balck.style.display="";
        
//     }
// }
// inter=setInterval(qs,500); 

// document.getElementById("who").addEventListener('click',function(){
//     scrollTop: document.getElementById("each_who").offset().top },
//      {duration: 500,easing: "swing"});
//         return false;




function show(){
 var imgid=document.getElementById("ss");
 if(imgid.style.visibility == "visible")
    imgid.style.visibility = "hidden";
 else
    imgid.style.visibility = "visible";
 setTimeout('show()',300);
  }
  show();

//轮播图
    var index = 1;
    var switching = false; 

    var prev = document.getElementById('leftBtn');
    var next = document.getElementById('rightBtn');
    var list = document.getElementById('list');
    var wrap = document.getElementsByName('images');

    wrap.onmouseover = function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        stop();
    };
    wrap.onmouseout = function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        play();
    }

    function lastImg() {
        if (switching) {
            return;
        }
        switchPic(1024);
        index--;
        if (index < 1) {
            index = 4;
        }
        else if(index  > 4) {
            index = 1;
        }
        // lightDot();
    }
    function nextImg() {
        if (switching) {
            return;
        }
        switchPic(-1024);
        index++;
        if (index < 1) {
            index = 4;
        }
        else if(index  > 4) {
            index = 1;
        }
        // lightDot();
    }

    // function btn(e) {
    //     if (switching) {
    //         return;
    //     }
    //     e = window.e || e;
    //     var target = e.target ? e.target: e.srcElement;
    //     if (target.nodeName.toLowerCase() == 'span') {
    //         var index1 = target.getAttribute('index');
    //         var offset = (index - index1) * 1024;
    //         switchPic(offset);
    //         index = index1;
    //         lightDot();
    //     }
    // };

    // 切换图片的函数
    function switchPic(offset) {
        switching = true;
        var time = 300;
        var inter = 10; // 隔10ms切换一次
        var speed = Math.ceil(offset/(time/inter));

        var left = parseInt(list.style.left) + offset;

        var go = function () {
            var curLeft = parseInt(list.style.left);
            if ((speed > 0 && curLeft < left) || (speed < 0 && curLeft > left)) {
                list.style.left = curLeft + speed + 'px';
                setTimeout(go, inter);
            }
            else {
                list.style.left = left + 'px';
                if (left < -2048) {
                    list.style.left = -1024 + 'px';
                }
                else if (left > -2048) {
                    list.style.left = -1024 + 'px';
                }
                switching = false;
            }
        };
        go();
    }


    // 点亮小点
    // function lightDot() {
    //     for (var i = 0, len = dots.length; i < len; i++) {
    //         if (dots[i].className == 'light') {
    //             dots[i].className = '';
    //             break;
    //         }
    //     }
    //     dots[index-1].className = 'light';
    // }

    // 自动轮播
    var timer;
    var order;
    var interval;
    var play = function () {
        var interval1 = interval || 2000;
        if (order == 'prev') {
            timer = setInterval(lastImg, interval1);
        }
        else {
            timer = setInterval(nextImg, interval1);
        }
    };
    var stop = function () {
        clearInterval(timer);
    };

    // 事件绑定DOM2
    function addEvent(element, event, listener) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, false);
        }
        else {
            element.attachEvent('on'+event, listener);
        }
    }

    // 点击左右键切图
    addEvent(prev, 'click', lastImg); 
    addEvent(next, 'click', nextImg);
    // 点击小点切图
    // addEvent(buttons, 'click', btn); 

    // 指定切换顺序和间隔时间
    order = 'next';
    interval = 2000;

    play();

    var reg=/^([0-9]|[\-])+$/g ; 

    function $(id){
    return document.getElementById(id);
}
$("form").addEventListener("click",function(e){
    var id=e.target.id;
    switch(id){
        case "name":{
            $("result-name").innerHTML="请输入你的名字";
            $("result-name").style.color="#a6a6a6";
            $("name").onblur=function(){testName($('name').value);}
            break;
        }
       
        case "emailLabel":case "email":{
            $("result-email").innerHTML="请输入有效邮箱地址";
            $("result-email").style.color="#a6a6a6";
            $("email").onblur=function(){testEmail($('email').value);}
            break;
        }
        case "phone":{
            $("result-phone").innerHTML="请输入手机号";
            $("result-phone").style.color="#a6a6a6";
            $("phone").onblur=function(){testPhone($('phone').value);}
            break;
        }
        case "qq":{
            $("result-qq").innerHTML="请输入QQ号";
            $("result-qq").style.color="#a6a6a6";
            $("qq").onblur=function(){testqq($('qq').value);}
            break;
        }
        case "write":{
            $("result-write").innerHTML="请输入内容";
            $("result-write").style.color="#a6a6a6";
            $("write").onblur=function(){testWrite($('write').value);}
            break;
        }
    }
});
//点击提交按钮
$("submit").addEventListener("click",function(e){
    if(testName($('name').value)||testPw1($('pw1').value)||
    testPw2($('pw2').value)||testEmail($('email').value)||
    testPhone($('phone').value)){
        alert("提交成功!");
    }
    else alert("输入有误！");
    e.preventDefault();
    return false;
});
//名称验证
function testName(name){
    var length=checkLength(name);
    if((/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(name))&&length>=2&&length<=10){
        $("result-name").innerHTML="验证成功!";
        $("result-name").style.color="#81b950";
        $("name").className="right";
    }
    else{
        $("result-name").innerHTML="名称错误！";
        $("result-name").style.color=" #bd0315";
        $("name").className="wrong";
        return false;
    }
}
function testWrite(write){
    var length=checkLength(write);
    if ((/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(write))&&length>=0&&length<=500) {
        $("result-write").innerHTML="验证成功!";
        $("result-write").style.color="#81b950";
        $("write").className="rights";
    }
    else{
        $("result-write").innerHTML="不要超过500字";
        $("result-write").style.color=" #bd0315";
        $("write").className="wrongs";
        return false;
    }
    
}
//检验名称有多少个字符
function checkLength(str){
    var len =0,temp=0;
    for(var j=0;j<str.length;j++){
    temp = 1;
    if(/^[\u2E80-\u9FFF]+$/.test(str[j])){
        temp = 2;
    }
    len += temp;
    }
    return len;
}  

//手机号验证
function testPhone(phone){
    if(/^1[34578]\d{9}$/.test(phone)){
        $("result-phone").innerHTML="手机格式正确";
        $("result-phone").style.color="#81b950";
        $("phone").className="right";
    }
    else{
        $("result-phone").innerHTML="手机格式错误";
        $("result-phone").style.color=" #bd0315";
        $("phone").className="wrong";
        return false;
    }
}
//QQ号验证
function testqq(qq){
    if(/^1[34578]\d{9}$/.test(qq)){
        $("result-qq").innerHTML="QQ号正确";
        $("result-qq").style.color="#81b950";
        $("qq").className="right";
    }
    else{
        $("result-qq").innerHTML="QQ号错误";
        $("result-qq").style.color=" #bd0315";
        $("qq").className="wrong";
        return false;
    }
}



var ajaxButton = $("#submit"),
       nameValue = $("#userName").value,
       phoneNumber = $("#phoneNumber").value,
       qqlValue = $("#qqNu").value,
       userValue = $("#write").value;


   ajaxButton.event("click",function () {
       if (getVerify("#phoneNumber",BeautifulWorld.form.verify.phoneNumber) &&
           getVerify("#qqNu",BeautifulWorld.form.verify.email) ) {
           console.log($("#userInput").value);
           BeautifulWorld.ajax()({
               url: "text.txt",
               method: "POST",
               send:
                   "name=" + nameValue +
                       "&phoneNumber=" + phoneNumber +
                       "&qqValue=" + qqValue +
                       "&userValue=" + userValue,
               success: function () {

               }
           });
       }
   },false);
}


    
// })
// var names= document.querySelector('#names');
//     var showInfor = document.getElementsByName('addr-infor')
//     names.addEventListener('click',function{
//         showAddr.style.display='block';


// var addressClass = ['t-eight', 'eighty', 's-f-suqaure', 't-two', 'wind-rain', 'red-house', 'old-lib', 'lover', 'taiji', 'basketball', 'new-gate', 'xinke', 'yifulou'];

// function showAddr() {

//     var ChineseName = ['八教', '八十万', '春华秋实广场', '二教', '风雨', '红房子', '老图', '情人坡', '太极', '五栋篮球场', '新校门', '信科', '逸夫楼'];

//     var mapContainer = document.querySelector('.map-wrapper');
//     var addrName = document.querySelector('.addr-name');
//     var addInforCons = document.querySelectorAll('.addr-infor');

//     function showInfor(index) {
//         var that = addInforCons[index];
//         that.style.display = 'block';
//         var el = that.querySelector('.images');
//         rotate(el);

//         var closeBtn = that.querySelector('.close-btn');
//         closeBtn.addEventListener('click',
//             function() {
//                 this.parentNode.parentNode.style.display = 'none';
//             });
//     }

//     mapContainer.addEventListener('mouseover',
//         function(ev) {
//             var target = ev.target;
//             if (target.className === 'map-img') {
//                 var top = window.getComputedStyle(target.parentNode).top;
//                 var left = window.getComputedStyle(target.parentNode).left;
//                 top = parseFloat(top) - 40;
//                 left = parseFloat(left) - 16;
//                 addrName.style.top = top + 'px';
//                 addrName.style.left = left + 'px';
//                 var targetClass = target.parentNode.className.slice(5);
//                 var nameIndex = addressClass.indexOf(targetClass);
//                 addrName.innerHTML = ChineseName[nameIndex];

//                 target.addEventListener('click',
//                     function() {
//                         showInfor(nameIndex);
//                     },
//                     false);
//             }
//         },
//         false);
// };
//showAddr();