var str1 = "",
  str2 = "";

var user = 0,
  comp = 0;

function play(option) {
  //Players choice
  str1 = option;
  //Computers choice
  let num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      str2 = "Rock";
      break;
    case 1:
      str2 = "Paper";
      break;
    case 2:
      str2 = "Scissors";
      break;
  }
  //Display the choices
  document.getElementById("computer").innerHTML = str2;
  //Validate the choices
  if (str1 == str2) {
    document.getElementById("result").innerHTML = "Tie";
    document.getElementById("result").style.color = "#4051ed";
  } else if (str1 == "Rock" && str2 == "Scissors") {
    document.getElementById("result").innerHTML = "You Win";
    document.getElementById("result").style.color = "green";
    user++;
  } else if (str1 == "Paper" && str2 == "Rock") {
    document.getElementById("result").innerHTML = "You Win";
    document.getElementById("result").style.color = "green";
    user++;
  } else if (str1 == "Scissors" && str2 == "Paper") {
    document.getElementById("result").innerHTML = "You Win";
    document.getElementById("result").style.color = "green";
    user++;
  } else {
    document.getElementById("result").innerHTML = "You Lose";
    document.getElementById("result").style.color = "red";
    comp++;
  }
  //Display the score
  document.getElementById("yourScore").innerHTML = user;
  document.getElementById("computerScore").innerHTML = comp;
  if (user == 5) {
    document.getElementById("result").innerHTML = "You Win the Game";
    document.getElementById("result").style.color = "green";
    user = 0;
    comp = 0;
  }
  if (comp == 5) {
    document.getElementById("result").innerHTML = "You Lose the Game";
    document.getElementById("result").style.color = "red";
    user = 0;
    comp = 0;
  }
}
