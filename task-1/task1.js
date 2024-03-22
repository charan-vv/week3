function hiddenBox() {
    var x = document.getElementById("hideBox");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
//   accordion
var accordion=document.getElementsByClassName("accordionHead");
var i;
function acc(){
    this.classList.toggle("activeHeader");
    var accBody = this.nextElementSibling;
    if(accBody.style.display==="none")
    {
        accBody.style.display="block";
    }
    else{
        accBody.style.display="none";
    }
}   
for(i=0;i< accordion.length;i++){
    accordion[i].addEventListener("click",acc);
}
// navBar
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
// counter time
const decrease=document.getElementById("btnRer")
const reset=document.getElementById("btnRes")
const increase=document.getElementById("btnfor")
const count=document.getElementById("countlabel")

    let num=0;
    increase.onclick=function(){
        num++;
        count.textContent=num;
    }
    decrease.onclick=function(){
        num--;
        count.textContent=num;
    }
    reset.onclick=function(){
        num=0;
        count.textContent=num;
    }


