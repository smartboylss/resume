function $(id){
    return document.getElementById(id)
 }
 var dom = $("dom");
 var picCh = $("pic").children;
 var left = $("left");
 var right = $("right");
 var spanCh = $("Span").children;
 var indexs = 0;
 for(var i=0;i<spanCh.length;i++){
    spanCh[i].index=i;
    spanCh[i].onclick=function(){
      for(var j=0;j<spanCh.length;j++){
          spanCh[j].className="";
          picCh[j].style.display="none";
      }
      this.className="on";
      picCh[this.index].style.display="block";
      indexs = this.index;
    }
 }
 right.onclick=function(){
    indexs++;
    if(indexs>spanCh.length-1){
       indexs=0;
    }
    for(var i=0;i<spanCh.length;i++){
        spanCh[i].className="";
        picCh[i].style.display="none";           
    }
     spanCh[indexs].className="on";
     picCh[indexs].style.display="block";      
 }
 left.onclick=function(){
    indexs--;
    if(indexs<0){
       indexs=spanCh.length-1;
    }
    for(var i=0;i<spanCh.length;i++){
        spanCh[i].className="";
        picCh[i].style.display="none";           
    }
     spanCh[indexs].className="on";
     picCh[indexs].style.display="block";      
 }
 // 定时
 function timer(){
   time = setInterval(function(){
    right.onclick()
  },3000)
 }timer()
 
 dom.onmouseover = function(){
  clearInterval(time)
 }
 dom.onmouseout=function(){
  timer()
 }
