function touch() {
  document.write("yêu đương gì học đi")
}
function noTouch(){
  let  a = Math.round(Math.random() * window.innerWidth);
  let b = Math.round(Math.random() * window.innerHeight);
  document.getElementById("no").style.left = a + "px";
  document.getElementById("no").style.top = b + "px";
}