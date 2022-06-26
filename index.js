var Random_Number1 = Math.random()*6 + 1;
Random_Number1 = Math.floor(Random_Number1);
var s1 = "images/dice" + Random_Number1+".png";
document.querySelector(".img1").setAttribute("src",s1);


var Random_Number2 = Math.random()*6 + 1;
Random_Number2 = Math.floor(Random_Number2);
var s2 = "images/dice" + Random_Number2+".png";
document.querySelector(".img2").setAttribute("src",s2);



var output;
if(Random_Number1>Random_Number2) output="🚩 Play 1 Wins!";
else if(Random_Number2>Random_Number1) output="Player 2 Wins!🚩";
else output="Draw!";
document.querySelector("h1").innerHTML=output;