const div = document.getElementById("div1");
const div2 = document.getElementById("div2");
const listDiv = document.getElementById("list");
const input = document.getElementById("input");
const image = document.getElementById("img");
const searchBtn = document.getElementById("sb");


div.innerHTML = `
    <img src="images/my pic.jpg">
   <h2>ElbaaginyAbdelfattah@gmail.com</h2>
   <hr>
   <a href="#">Add Another Account</a>
   <hr>
  `;


$("#g").click(function(){
    $("#div1").toggle();
});


if(div2.style.display == "block"){
    div2.style.display = "flex";
}


div2.innerHTML = `
 <img src="images/m.png">
 <img src="images/bm.png">
 <img src="images/h.png">
 <img src="images/images.png">
 <img src="images/k.png">
 <img src="images/ma.png">
 <img src="images/x.png">
`;


$("#g").click(function(){
    $("#l").toggle();
});


$("#i").click(function(){
    $("#div2").toggle();
  });


listDiv.innerHTML = `
  <br>
  <i class="fab fa-youtube y"></i> <br>
  <i class="fab fa-facebook f"></i> <br>
  <i class="fab fa-instagram i"></i> <br>
  <i class="fab fa-twitter t"></i> <br>

  `;


$("#l").click(function(){
    $("#list").toggle();
});

input.style.textTransform = "lowercase";

searchBtn.addEventListener('click',()=>{
  if(input.value == "youtube"){
    open("https://www.youtube.com/");
    input.value = "";
  }
  else if(input.value == "colorlib"){
    open("https://colorlib.com/");
    input.value = "";
  }
  else if(input.value == "w3schools"){
    open("https://www.w3schools.com/");
    input.value = "";
  }
  else if(input.value == "google font"){
    open("https://fonts.google.com/knowledge");
    input.value = "";
  }
  else if(input.value == "instagram"){
    open("https://www.instagram.com/");
    input.value = "";
  }
  else if(input.value == "download vs code"){
    open("https://code.visualstudio.com/");
    input.value = "";
  }
  else if(input.value == "visual studio code"){
    open("https://code.visualstudio.com/");
    input.value = "";
  }
  else if(input.value == "facebook"){
    open("https://www.facebook.com/");
    input.value = "";
  }
  else{
    alert("I Don't Understand");
    input.value = "";
  }
});