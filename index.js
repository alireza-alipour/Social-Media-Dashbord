
var button= document.getElementById("customSwitches");
var boxs = document.querySelectorAll('.box');
var headNumber = document.querySelectorAll('.head-number');
var overviewNumber = document.querySelectorAll('.left.bottom');



document.querySelector(".switch").addEventListener("click", function(){
  if (button.checked === true){

    document.getElementById("body").style.backgroundColor = "hsl(0, 0%, 100%)";
    boxColor("hsl(227, 47%, 96%)", "hsl(230, 17%, 14%)", "hsl(228, 12%, 44%)", "Light Mode");
  }
  else{
    document.getElementById("body").style.backgroundColor = "hsl(230, 17%, 14%)";
    boxColor("hsl(228, 28%, 20%)", "hsl(227, 47%, 96%)", "hsl(227, 47%, 96%)", "Dark Mode");
  }
})


function boxColor(boxColor, textColor, greyTextColor, text){

  for (var i=0; i<boxs.length; i++){
    boxs[i].style.backgroundColor = boxColor;
  }

  for (var i=0; i<headNumber.length; i++){
    headNumber[i].style.color = textColor;
  }

  for (var i=0; i<overviewNumber.length; i++){
    overviewNumber[i].style.color = textColor;
  }

  document.querySelector("#instagram").style.backgroundColor = boxColor;
  document.querySelector(".heading .left-title").style.color = textColor;
  document.querySelector(".head-number").style.color = textColor;
  document.querySelector(".left.bottom").style.color = textColor;
  document.querySelector(".overview-heading").style.color = greyTextColor;
  document.querySelector("p.left-title").style.color = greyTextColor;
  document.querySelector(".right-title").style.color = greyTextColor;
  document.querySelector(".right-title").innerHTML = text;


}
