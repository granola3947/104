// random value generated
  var y =Math.floor(Math.random() * 10 + 1);

  var guess =localStorage.setItem("1", 1);

// counting the number of guesses
// made for correct Guess
if(x == y)
{
    alert("CONgRAJULATOEaiISyHIES!!!!!!1!!1! "+playername+" GUESSED RIGHT IN "
    + guess + "GUESS");
    guess = 1;
}

else if(x > y)
{
    guess++;
    alert("not quite. try a smaller number");
}
else
{
    guess++;
    alert("not quite. try a bigger number");
}
  
// function for number guessed by user     
function submit()
var x = document.getElementById("guessField").value;

function playAgain(){
    y =Math.floor(Math.random() * 10 + 1);
}