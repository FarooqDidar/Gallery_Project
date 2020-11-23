function tt(){
  var t = document.getElementById("pictures").value;
 if(t=="Semester1")
 {
  window.location.href="/frontPage/semester1.html";
 } else if (t=="Semester2") {
  document.getElementById("ll").innerHTML=t;
 } 
 
 }
