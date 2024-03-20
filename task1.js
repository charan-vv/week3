// show content when click button
function hiddenBox() {
    var x = document.getElementById("hideBox");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }
// accordion
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
// tabBar
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
//counterTime
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


