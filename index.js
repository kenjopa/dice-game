// var firstDice = document.getElementsByClassName("img1");
// firstDice.src="img/dice5";



function changeNumber() {
   var firstRandomNumber = (Math.round((Math.random() * 5)) + 1)
   var secondRandomNumber = (Math.round((Math.random() * 5)) + 1)

   var firstDice = document.getElementsByClassName("img1")[0].src="img/dice" + firstRandomNumber + ".png";
   var secondDice = document.getElementsByClassName("img2")[0].src="img/dice" + secondRandomNumber + ".png";

   if (firstRandomNumber > secondRandomNumber) {
      document.getElementById("mainText").innerText = ("Player 1 wins!")
   }

   else if (firstRandomNumber < secondRandomNumber) {
      document.getElementById("mainText").innerText = ("Player 2 wins!")
   }

   else {
      document.getElementById("mainText").innerText = ("Draw!")
   }
}

changeNumber()


