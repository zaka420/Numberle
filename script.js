// ALL VARIABLES
var currentGuessNumber = 1;
var currentBox = 0;
var currentNumber = null;
var firstRowBoxes = ["firstRowOne", "firstRowTwo", "firstRowThree", "firstRowFour", "firstRowFive"];
var secondRowBoxes = ["secondRowOne", "secondRowTwo", "secondRowThree", "secondRowFour", "secondRowFive"];
var thirdRowBoxes = ["thirdRowOne", "thirdRowTwo", "thirdRowThree", "thirdRowFour", "thirdRowFive"];
var fourthRowBoxes = ["fourthRowOne", "fourthRowTwo", "fourthRowThree", "fourthRowFour", "fourthRowFive"];
var fifthRowBoxes = ["fifthRowOne", "fifthRowTwo", "fifthRowThree", "fifthRowFour", "fifthRowFive"];

var numberOne = 0;
var numberTwo = 0;
var numberThree = 0;
var numberFour = 0;
var numberFive = 0;
var finalNumber = 0;
var numberOneGuess = 0;
var numberTwoGuess = 0;
var numberThreeGuess = 0;
var numberFourGuess = 0;
var numberFiveGuess = 0;
var numberOneCorrect = false;
var numberTwoCorrect = false;
var numberThreeCorrect = false;
var numberFourCorrect = false;
var numberFiveCorrect = false;

function tutorialRemove()
{
    document.getElementById("tutorialDisplay").style.left = "-100000px";
}


// INITIAL RANDOMIZE
function randomizeNumber()
{
    numberOne = String(Math.floor(Math.random()*10));
    if(numberOne == "0")
    {
        numberOne = "1";
    }
    numberTwo = String(Math.floor(Math.random()*10));
    numberThree = String(Math.floor(Math.random()*10));
    numberFour = String(Math.floor(Math.random()*10));
    numberFive = String(Math.floor(Math.random()*10));
    finalNumber = numberOne+numberTwo+numberThree+numberFour+numberFive;
    // alert("The number has been chosen!")
}


// ENTER TO GUESS FUNCTIONALITY
function enterForGuess1(event)
{
    if(currentNumber != null)
    {
        if(currentNumber == "back")
        {
            if(currentBox > 0)
            {
                currentBox--;
                document.getElementById(firstRowBoxes[currentBox]).textContent = "";
            }
        }
        else
        {
            document.getElementById(firstRowBoxes[currentBox]).textContent = currentNumber;
            currentBox++;
            currentNumber = null;
        }
    }
    else if (event.keyCode == 13) 
    {
        firstGuess();
    }
    else if (event.keyCode == 8)
    {
        if(currentBox > 0)
        {
            currentBox--;
            document.getElementById(firstRowBoxes[currentBox]).textContent = "";
        }
    }
    else if(event.keyCode == 48 || event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 48 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 || event.keyCode == 57)
    {
        if(currentBox <= 4)
        {
            document.getElementById(firstRowBoxes[currentBox]).textContent = event.key;
            currentBox++;
        }
    }
}

function enterForGuess2(event)
{
    if(currentNumber != null)
    {
        if(currentNumber == "back")
        {
            if(currentBox > 0)
            {
                currentBox--;
                document.getElementById(secondRowBoxes[currentBox]).textContent = "";
            }
        }
        else
        {
            document.getElementById(secondRowBoxes[currentBox]).textContent = currentNumber;
            currentBox++;
            currentNumber = null;
        }
    }
    else if (event.keyCode == 13) 
    {
        secondGuess();
    }
    else if (event.keyCode == 8)
    {
        if(currentBox > 0)
        {
            currentBox--;
            document.getElementById(secondRowBoxes[currentBox]).textContent = "";
        }
    }
    else if(event.keyCode == 48 || event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 48 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 || event.keyCode == 57)
    {
        if(currentBox <= 4)
        {
            document.getElementById(secondRowBoxes[currentBox]).textContent = event.key;
            currentBox++;
        }
    }
}

function enterForGuess3(event)
{
    if(currentNumber != null)
    {
        if(currentNumber == "back")
        {
            if(currentBox > 0)
            {
                currentBox--;
                document.getElementById(thirdRowBoxes[currentBox]).textContent = "";
            }
        }
        else
        {
            document.getElementById(thirdRowBoxes[currentBox]).textContent = currentNumber;
            currentBox++;
            currentNumber = null;
        }
    }
    else if (event.keyCode == 13) 
    {
        thirdGuess();
    }
    else if (event.keyCode == 8)
    {
        if(currentBox > 0)
        {
            currentBox--;
            document.getElementById(thirdRowBoxes[currentBox]).textContent = "";
        }
    }
    else if(event.keyCode == 48 || event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 48 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 || event.keyCode == 57)
    {
        if(currentBox <= 4)
        {
            document.getElementById(thirdRowBoxes[currentBox]).textContent = event.key;
            currentBox++;
        }
    }
}

function enterForGuess4(event)
{
    if(currentNumber != null)
    {
        if(currentNumber == "back")
        {
            if(currentBox > 0)
            {
                currentBox--;
                document.getElementById(fourthRowBoxes[currentBox]).textContent = "";
            }
        }
        else
        {
            document.getElementById(fourthRowBoxes[currentBox]).textContent = currentNumber;
            currentBox++;
            currentNumber = null;
        }
    }
    else if (event.keyCode == 13) 
    {
        fourthGuess();
    }
    else if (event.keyCode == 8)
    {
        if(currentBox > 0)
        {
            currentBox--;
            document.getElementById(fourthRowBoxes[currentBox]).textContent = "";
        }
    }
    else if(event.keyCode == 48 || event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 48 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 || event.keyCode == 57)
    {
        if(currentBox <= 4)
        {
            document.getElementById(fourthRowBoxes[currentBox]).textContent = event.key;
            currentBox++;
        }
    }
}

function enterForGuess5(event)
{
    if(currentNumber != null)
    {
        if(currentNumber == "back")
        {
            if(currentBox > 0)
            {
                currentBox--;
                document.getElementById(fifthRowBoxes[currentBox]).textContent = "";
            }
        }
        else
        {
            document.getElementById(fifthRowBoxes[currentBox]).textContent = currentNumber;
            currentBox++;
            currentNumber = null;
        }
    }
    else if (event.keyCode == 13) 
    {
        fifthGuess();
    }
    else if (event.keyCode == 8)
    {
        if(currentBox > 0)
        {
            currentBox--;
            document.getElementById(fifthRowBoxes[currentBox]).textContent = "";
        }
    }
    else if(event.keyCode == 48 || event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53 || event.keyCode == 48 || event.keyCode == 54 || event.keyCode == 55 || event.keyCode == 56 || event.keyCode == 57)
    {
        if(currentBox <= 4)
        {
            document.getElementById(fifthRowBoxes[currentBox]).textContent = event.key;
            currentBox++;
        }
    }
}


// ALL BUTTON FUNCTIONS
function inputOne()
{
    currentNumber = 1;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputTwo()
{
    currentNumber = 2;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputThree()
{
    currentNumber = 3;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputFour()
{
    currentNumber = 4;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputFive()
{
    currentNumber = 5;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputSix()
{
    currentNumber = 6;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputSeven()
{
    currentNumber = 7;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputEight()
{
    currentNumber = 8;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputNine()
{
    currentNumber = 9;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputZero()
{
    currentNumber = 0;
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}
function inputBack()
{
    currentNumber = "back";
    if(currentGuessNumber == 1)
    {
        enterForGuess1(null);
    }
    else if(currentGuessNumber == 2)
    {
        enterForGuess2(null);
    }
    else if(currentGuessNumber == 3)
    {
        enterForGuess3(null);
    }
    else if(currentGuessNumber == 4)
    {
        enterForGuess4(null);
    }
    else if(currentGuessNumber == 5)
    {
        enterForGuess5(null);
    }
}

// ALL GUESS FUNCTIONS
function firstGuess()
{
    numberOneGuess = String(document.getElementById("firstRowOne").textContent);
    numberTwoGuess = String(document.getElementById("firstRowTwo").textContent);
    numberThreeGuess = String(document.getElementById("firstRowThree").textContent);
    numberFourGuess = String(document.getElementById("firstRowFour").textContent);
    numberFiveGuess = String(document.getElementById("firstRowFive").textContent);
   
    numberOneCorrect = false;
    numberTwoCorrect = false;
    numberThreeCorrect = false;
    numberFourCorrect = false;
    numberFiveCorrect = false;

    if(numberOneGuess.length == 1 && numberTwoGuess.length == 1 && numberThreeGuess.length == 1 && numberFourGuess.length == 1 && numberFiveGuess.length == 1)
    {
    if(numberOneGuess == numberOne)
    {
        document.getElementById("firstRowOne").style.backgroundColor = "lime";
        numberOneCorrect = true;
    }
    if(numberTwoGuess == numberTwo)
    {
        document.getElementById("firstRowTwo").style.backgroundColor = "lime";
        numberTwoCorrect = true;
    }
    if(numberThreeGuess == numberThree)
    {
        document.getElementById("firstRowThree").style.backgroundColor = "lime";
        numberThreeCorrect = true;
    }
    if(numberFourGuess == numberFour)
    {
        document.getElementById("firstRowFour").style.backgroundColor = "lime";
        numberFourCorrect = true;
    }
    if(numberFiveGuess == numberFive)
    {
        document.getElementById("firstRowFive").style.backgroundColor = "lime";
        numberFiveCorrect = true;
    }
    
    if(numberOneCorrect == false || numberOneCorrect == null)
    {
        if(numberTwoCorrect == false && numberOneGuess == numberTwo)
        {
            document.getElementById("firstRowOne").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberOneGuess == numberThree)
        {
            document.getElementById("firstRowOne").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberOneGuess == numberFour)
        {
            document.getElementById("firstRowOne").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberOneGuess == numberFive)
        {
            document.getElementById("firstRowOne").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("firstRowOne").style.backgroundColor = "gray";
        }
    }
    
    if(numberTwoCorrect == false || numberTwoCorrect == null)
    {
        if(numberOneCorrect == false && numberTwoGuess == numberOne)
        {
            document.getElementById("firstRowTwo").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberThreeCorrect == false && numberTwoGuess == numberThree)
        {
            document.getElementById("firstRowTwo").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberTwoGuess == numberFour)
        {
            document.getElementById("firstRowTwo").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberTwoGuess == numberFive)
        {
            document.getElementById("firstRowTwo").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("firstRowTwo").style.backgroundColor = "gray";
        }
    }
    
    if(numberThreeCorrect == false || numberThreeCorrect == null)
    {
        if(numberTwoCorrect == false && numberThreeGuess == numberTwo)
        {
            document.getElementById("firstRowThree").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberOneCorrect == false && numberThreeGuess == numberOne)
        {
            document.getElementById("firstRowThree").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFourCorrect == false && numberThreeGuess == numberFour)
        {
            document.getElementById("firstRowThree").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberThreeGuess == numberFive)
        {
            document.getElementById("firstRowThree").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("firstRowThree").style.backgroundColor = "gray";
        }
    }

    if(numberFourCorrect == false || numberFourCorrect == null)
    {
        if(numberTwoCorrect == false && numberFourGuess == numberTwo)
        {
            document.getElementById("firstRowFour").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFourGuess == numberThree)
        {
            document.getElementById("firstRowFour").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberOneCorrect == false && numberFourGuess == numberOne)
        {
            document.getElementById("firstRowFour").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFiveCorrect == false && numberFourGuess == numberFive)
        {
            document.getElementById("firstRowFour").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("firstRowFour").style.backgroundColor = "gray";
        }
    }

    if(numberFiveCorrect == false || numberFiveCorrect == null)
    {
        if(numberTwoCorrect == false && numberFiveGuess == numberTwo)
        {
            document.getElementById("firstRowFive").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFiveGuess == numberThree)
        {
            document.getElementById("firstRowFive").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberFiveGuess == numberFour)
        {
            document.getElementById("firstRowFive").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberOneCorrect == false && numberFiveGuess == numberOne)
        {
            document.getElementById("firstRowFive").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else
        {
            document.getElementById("firstRowFive").style.backgroundColor = "gray";
        }
    }
    
    if(numberOneCorrect == true && numberTwoCorrect == true && numberThreeCorrect == true && numberFourCorrect == true && numberFiveCorrect == true)
    {
        alertWinner = setInterval(function alertWin(){alert("GO BUY A LOTTERY TICKET, YOU'RE LUCK IS OFF THE CHARTS!"); clearInterval(alertWinner)},1);
        
        document.removeEventListener("keydown", enterForGuess1);
        document.getElementById("guessButton").setAttribute("onclick","");
    }
    else
    {
    document.getElementById("secondRowOne").disabled = false;
    document.getElementById("secondRowTwo").disabled = false;
    document.getElementById("secondRowThree").disabled = false;
    document.getElementById("secondRowFour").disabled = false;
    document.getElementById("secondRowFive").disabled = false;
    
    document.getElementById("firstRowOne").disabled = true;
    document.getElementById("firstRowTwo").disabled = true;
    document.getElementById("firstRowThree").disabled = true;
    document.getElementById("firstRowFour").disabled = true;
    document.getElementById("firstRowFive").disabled = true;

    document.getElementById("guessButton").setAttribute("onclick","secondGuess()")

    document.removeEventListener("keydown", enterForGuess1);

    currentBox = 0;

    document.addEventListener("keydown", enterForGuess2);

    currentGuessNumber++;
    }
    }
    else 
    {
        alert("Invalid Guess.")
    }
}

// NEXT GUESS FUNCTION

function secondGuess()
{
    numberOneGuess = String(document.getElementById("secondRowOne").textContent);
    numberTwoGuess = String(document.getElementById("secondRowTwo").textContent);
    numberThreeGuess = String(document.getElementById("secondRowThree").textContent);
    numberFourGuess = String(document.getElementById("secondRowFour").textContent);
    numberFiveGuess = String(document.getElementById("secondRowFive").textContent);
   
    numberOneCorrect = false;
    numberTwoCorrect = false;
    numberThreeCorrect = false;
    numberFourCorrect = false;
    numberFiveCorrect = false;


    if(numberOneGuess.length == 1 && numberTwoGuess.length == 1 && numberThreeGuess.length == 1 && numberFourGuess.length == 1 && numberFiveGuess.length == 1)
    {
    if(numberOneGuess == numberOne)
    {
        document.getElementById("secondRowOne").style.backgroundColor = "lime";
        numberOneCorrect = true;
    }
    if(numberTwoGuess == numberTwo)
    {
        document.getElementById("secondRowTwo").style.backgroundColor = "lime";
        numberTwoCorrect = true;
    }
    if(numberThreeGuess == numberThree)
    {
        document.getElementById("secondRowThree").style.backgroundColor = "lime";
        numberThreeCorrect = true;
    }
    if(numberFourGuess == numberFour)
    {
        document.getElementById("secondRowFour").style.backgroundColor = "lime";
        numberFourCorrect = true;
    }
    if(numberFiveGuess == numberFive)
    {
        document.getElementById("secondRowFive").style.backgroundColor = "lime";
        numberFiveCorrect = true;
    }
    
    if(numberOneCorrect == false || numberOneCorrect == null)
    {
        if(numberTwoCorrect == false && numberOneGuess == numberTwo)
        {
            document.getElementById("secondRowOne").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberOneGuess == numberThree)
        {
            document.getElementById("secondRowOne").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberOneGuess == numberFour)
        {
            document.getElementById("secondRowOne").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberOneGuess == numberFive)
        {
            document.getElementById("secondRowOne").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("secondRowOne").style.backgroundColor = "gray";
        }
    }
    
    if(numberTwoCorrect == false || numberTwoCorrect == null)
    {
        if(numberOneCorrect == false && numberTwoGuess == numberOne)
        {
            document.getElementById("secondRowTwo").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberThreeCorrect == false && numberTwoGuess == numberThree)
        {
            document.getElementById("secondRowTwo").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberTwoGuess == numberFour)
        {
            document.getElementById("secondRowTwo").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberTwoGuess == numberFive)
        {
            document.getElementById("secondRowTwo").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("secondRowTwo").style.backgroundColor = "gray";
        }
    }

    if(numberThreeCorrect == false || numberThreeCorrect == null)
    {
        if(numberTwoCorrect == false && numberThreeGuess == numberTwo)
        {
            document.getElementById("secondRowThree").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberOneCorrect == false && numberThreeGuess == numberOne)
        {
            document.getElementById("secondRowThree").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFourCorrect == false && numberThreeGuess == numberFour)
        {
            document.getElementById("secondRowThree").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberThreeGuess == numberFive)
        {
            document.getElementById("secondRowThree").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("secondRowThree").style.backgroundColor = "gray";
        }
    }

    if(numberFourCorrect == false || numberFourCorrect == null)
    {
        if(numberTwoCorrect == false && numberFourGuess == numberTwo)
        {
            document.getElementById("secondRowFour").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFourGuess == numberThree)
        {
            document.getElementById("secondRowFour").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberOneCorrect == false && numberFourGuess == numberOne)
        {
            document.getElementById("secondRowFour").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFiveCorrect == false && numberFourGuess == numberFive)
        {
            document.getElementById("secondRowFour").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("secondRowFour").style.backgroundColor = "gray";
        }
    }

    if(numberFiveCorrect == false || numberFiveCorrect == null)
    {
        if(numberTwoCorrect == false && numberFiveGuess == numberTwo)
        {
            document.getElementById("secondRowFive").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFiveGuess == numberThree)
        {
            document.getElementById("secondRowFive").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberFiveGuess == numberFour)
        {
            document.getElementById("secondRowFive").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberOneCorrect == false && numberFiveGuess == numberOne)
        {
            document.getElementById("secondRowFive").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("secondRowFive").style.backgroundColor = "gray";
        }
    }
    
    if(numberOneCorrect == true && numberTwoCorrect == true && numberThreeCorrect == true && numberFourCorrect == true && numberFiveCorrect == true)
    {
        alertWinner = setInterval(function alertWin(){alert("You're Insane!"); clearInterval(alertWinner)},1);
        
        document.removeEventListener("keydown", enterForGuess2);
        document.getElementById("guessButton").setAttribute("onclick","");
    }
    else
    {
    document.getElementById("thirdRowOne").disabled = false;
    document.getElementById("thirdRowTwo").disabled = false;
    document.getElementById("thirdRowThree").disabled = false;
    document.getElementById("thirdRowFour").disabled = false;
    document.getElementById("thirdRowFive").disabled = false;
    
    document.getElementById("secondRowOne").disabled = true;
    document.getElementById("secondRowTwo").disabled = true;
    document.getElementById("secondRowThree").disabled = true;
    document.getElementById("secondRowFour").disabled = true;
    document.getElementById("secondRowFive").disabled = true;

    document.getElementById("guessButton").setAttribute("onclick","thirdGuess()")

    document.removeEventListener("keydown", enterForGuess2);

    currentBox = 0;

    document.addEventListener("keydown", enterForGuess3);

    currentGuessNumber++;
    }
    }
    else 
    {
        alert("Invalid Guess.");
    }
}

// NEXT GUESS FUNCTION

function thirdGuess()
{
    numberOneGuess = String(document.getElementById("thirdRowOne").textContent);
    numberTwoGuess = String(document.getElementById("thirdRowTwo").textContent);
    numberThreeGuess = String(document.getElementById("thirdRowThree").textContent);
    numberFourGuess = String(document.getElementById("thirdRowFour").textContent);
    numberFiveGuess = String(document.getElementById("thirdRowFive").textContent);
   
    numberOneCorrect = false;
    numberTwoCorrect = false;
    numberThreeCorrect = false;
    numberFourCorrect = false;
    numberFiveCorrect = false;

    if(numberOneGuess.length == 1 && numberTwoGuess.length == 1 && numberThreeGuess.length == 1 && numberFourGuess.length == 1 && numberFiveGuess.length == 1)
    {
    if(numberOneGuess == numberOne)
    {
        document.getElementById("thirdRowOne").style.backgroundColor = "lime";
        numberOneCorrect = true;
    }
    if(numberTwoGuess == numberTwo)
    {
        document.getElementById("thirdRowTwo").style.backgroundColor = "lime";
        numberTwoCorrect = true;
    }
    if(numberThreeGuess == numberThree)
    {
        document.getElementById("thirdRowThree").style.backgroundColor = "lime";
        numberThreeCorrect = true;
    }
    if(numberFourGuess == numberFour)
    {
        document.getElementById("thirdRowFour").style.backgroundColor = "lime";
        numberFourCorrect = true;
    }
    if(numberFiveGuess == numberFive)
    {
        document.getElementById("thirdRowFive").style.backgroundColor = "lime";
        numberFiveCorrect = true;
    }
    
    if(numberOneCorrect == false || numberOneCorrect == null)
    {
        if(numberTwoCorrect == false && numberOneGuess == numberTwo)
        {
            document.getElementById("thirdRowOne").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberOneGuess == numberThree)
        {
            document.getElementById("thirdRowOne").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberOneGuess == numberFour)
        {
            document.getElementById("thirdRowOne").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberOneGuess == numberFive)
        {
            document.getElementById("thirdRowOne").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("thirdRowOne").style.backgroundColor = "gray";
        }
    }
    
    if(numberTwoCorrect == false || numberTwoCorrect == null)
    {
        if(numberOneCorrect == false && numberTwoGuess == numberOne)
        {
            document.getElementById("thirdRowTwo").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberThreeCorrect == false && numberTwoGuess == numberThree)
        {
            document.getElementById("thirdRowTwo").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberTwoGuess == numberFour)
        {
            document.getElementById("thirdRowTwo").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberTwoGuess == numberFive)
        {
            document.getElementById("thirdRowTwo").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("thirdRowTwo").style.backgroundColor = "gray";
        }
    }
    
    if(numberThreeCorrect == false || numberThreeCorrect == null)
    {
        if(numberTwoCorrect == false && numberThreeGuess == numberTwo)
        {
            document.getElementById("thirdRowThree").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberOneCorrect == false && numberThreeGuess == numberOne)
        {
            document.getElementById("thirdRowThree").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFourCorrect == false && numberThreeGuess == numberFour)
        {
            document.getElementById("thirdRowThree").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberThreeGuess == numberFive)
        {
            document.getElementById("thirdRowThree").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("thirdRowThree").style.backgroundColor = "gray";
        }
    }

    if(numberFourCorrect == false || numberFourCorrect == null)
    {
        if(numberTwoCorrect == false && numberFourGuess == numberTwo)
        {
            document.getElementById("thirdRowFour").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFourGuess == numberThree)
        {
            document.getElementById("thirdRowFour").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberOneCorrect == false && numberFourGuess == numberOne)
        {
            document.getElementById("thirdRowFour").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFiveCorrect == false && numberFourGuess == numberFive)
        {
            document.getElementById("thirdRowFour").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("thirdRowFour").style.backgroundColor = "gray";
        }
    }

    if(numberFiveCorrect == false || numberFiveCorrect == null)
    {
        if(numberTwoCorrect == false && numberFiveGuess == numberTwo)
        {
            document.getElementById("thirdRowFive").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFiveGuess == numberThree)
        {
            document.getElementById("thirdRowFive").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberFiveGuess == numberFour)
        {
            document.getElementById("thirdRowFive").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberOneCorrect == false && numberFiveGuess == numberOne)
        {
            document.getElementById("thirdRowFive").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else
        {
            document.getElementById("thirdRowFive").style.backgroundColor = "gray";
        }
    }
    
    if(numberOneCorrect == true && numberTwoCorrect == true && numberThreeCorrect == true && numberFourCorrect == true && numberFiveCorrect == true)
    {
        alertWinner = setInterval(function alertWin(){alert("Nice Score!"); clearInterval(alertWinner)},1);
        
        document.removeEventListener("keydown", enterForGuess3);
        document.getElementById("guessButton").setAttribute("onclick","");
    }
    else
    {
    document.getElementById("fourthRowOne").disabled = false;
    document.getElementById("fourthRowTwo").disabled = false;
    document.getElementById("fourthRowThree").disabled = false;
    document.getElementById("fourthRowFour").disabled = false;
    document.getElementById("fourthRowFive").disabled = false;
    
    document.getElementById("thirdRowOne").disabled = true;
    document.getElementById("thirdRowTwo").disabled = true;
    document.getElementById("thirdRowThree").disabled = true;
    document.getElementById("thirdRowFour").disabled = true;
    document.getElementById("thirdRowFive").disabled = true;

    document.getElementById("guessButton").setAttribute("onclick","fourthGuess()");

    document.removeEventListener("keydown", enterForGuess3);

    currentBox = 0;

    document.addEventListener("keydown", enterForGuess4);

    currentGuessNumber++;
    }
    }
    else
    {
        alert("Invalid Guess.");
    }
}

// NEXT GUESS FUNCTION

function fourthGuess()
{
    numberOneGuess = String(document.getElementById("fourthRowOne").textContent);
    numberTwoGuess = String(document.getElementById("fourthRowTwo").textContent);
    numberThreeGuess = String(document.getElementById("fourthRowThree").textContent);
    numberFourGuess = String(document.getElementById("fourthRowFour").textContent);
    numberFiveGuess = String(document.getElementById("fourthRowFive").textContent);
   
    numberOneCorrect = false;
    numberTwoCorrect = false;
    numberThreeCorrect = false;
    numberFourCorrect = false;
    numberFiveCorrect = false;

    if(numberOneGuess.length == 1 && numberTwoGuess.length == 1 && numberThreeGuess.length == 1 && numberFourGuess.length == 1 && numberFiveGuess.length == 1)
    {
    if(numberOneGuess == numberOne)
    {
        document.getElementById("fourthRowOne").style.backgroundColor = "lime";
        numberOneCorrect = true;
    }
    if(numberTwoGuess == numberTwo)
    {
        document.getElementById("fourthRowTwo").style.backgroundColor = "lime";
        numberTwoCorrect = true;
    }
    if(numberThreeGuess == numberThree)
    {
        document.getElementById("fourthRowThree").style.backgroundColor = "lime";
        numberThreeCorrect = true;
    }
    if(numberFourGuess == numberFour)
    {
        document.getElementById("fourthRowFour").style.backgroundColor = "lime";
        numberFourCorrect = true;
    }
    if(numberFiveGuess == numberFive)
    {
        document.getElementById("fourthRowFive").style.backgroundColor = "lime";
        numberFiveCorrect = true;
    }
    
    if(numberOneCorrect == false || numberOneCorrect == null)
    {
        if(numberTwoCorrect == false && numberOneGuess == numberTwo)
        {
            document.getElementById("fourthRowOne").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberOneGuess == numberThree)
        {
            document.getElementById("fourthRowOne").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberOneGuess == numberFour)
        {
            document.getElementById("fourthRowOne").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberOneGuess == numberFive)
        {
            document.getElementById("fourthRowOne").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fourthRowOne").style.backgroundColor = "gray";
        }
    }
    
    if(numberTwoCorrect == false || numberTwoCorrect == null)
    {
        if(numberOneCorrect == false && numberTwoGuess == numberOne)
        {
            document.getElementById("fourthRowTwo").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberThreeCorrect == false && numberTwoGuess == numberThree)
        {
            document.getElementById("fourthRowTwo").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberTwoGuess == numberFour)
        {
            document.getElementById("fourthRowTwo").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberTwoGuess == numberFive)
        {
            document.getElementById("fourthRowTwo").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fourthRowTwo").style.backgroundColor = "gray";
        }
    }
    
    if(numberThreeCorrect == false || numberThreeCorrect == null)
    {
        if(numberTwoCorrect == false && numberThreeGuess == numberTwo)
        {
            document.getElementById("fourthRowThree").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberOneCorrect == false && numberThreeGuess == numberOne)
        {
            document.getElementById("fourthRowThree").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFourCorrect == false && numberThreeGuess == numberFour)
        {
            document.getElementById("fourthRowThree").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberThreeGuess == numberFive)
        {
            document.getElementById("fourthRowThree").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fourthRowThree").style.backgroundColor = "gray";
        }
    }

    if(numberFourCorrect == false || numberFourCorrect == null)
    {
        if(numberTwoCorrect == false && numberFourGuess == numberTwo)
        {
            document.getElementById("fourthRowFour").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFourGuess == numberThree)
        {
            document.getElementById("fourthRowFour").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberOneCorrect == false && numberFourGuess == numberOne)
        {
            document.getElementById("fourthRowFour").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFiveCorrect == false && numberFourGuess == numberFive)
        {
            document.getElementById("fourthRowFour").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fourthRowFour").style.backgroundColor = "gray";
        }
    }

    if(numberFiveCorrect == false || numberFiveCorrect == null)
    {
        if(numberTwoCorrect == false && numberFiveGuess == numberTwo)
        {
            document.getElementById("fourthRowFive").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFiveGuess == numberThree)
        {
            document.getElementById("fourthRowFive").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberFiveGuess == numberFour)
        {
            document.getElementById("fourthRowFive").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberOneCorrect == false && numberFiveGuess == numberOne)
        {
            document.getElementById("fourthRowFive").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else
        {
            document.getElementById("fourthRowFive").style.backgroundColor = "gray";
        }
    }
    

    if(numberOneCorrect == true && numberTwoCorrect == true && numberThreeCorrect == true && numberFourCorrect == true && numberFiveCorrect == true)
    {
        alertWinner = setInterval(function alertWin(){alert("Not Bad!"); clearInterval(alertWinner)},1);
        
        document.removeEventListener("keydown", enterForGuess4);
        document.getElementById("guessButton").setAttribute("onclick","");
    }
    else
    {
    document.getElementById("fifthRowOne").disabled = false;
    document.getElementById("fifthRowTwo").disabled = false;
    document.getElementById("fifthRowThree").disabled = false;
    document.getElementById("fifthRowFour").disabled = false;
    document.getElementById("fifthRowFive").disabled = false;
    
    document.getElementById("fourthRowOne").disabled = true;
    document.getElementById("fourthRowTwo").disabled = true;
    document.getElementById("fourthRowThree").disabled = true;
    document.getElementById("fourthRowFour").disabled = true;
    document.getElementById("fourthRowFive").disabled = true;

    document.getElementById("guessButton").setAttribute("onclick","fifthGuess()");

    document.removeEventListener("keydown", enterForGuess4);

    currentBox = 0;

    document.addEventListener("keydown", enterForGuess5);

    currentGuessNumber++;
    }
    }
    else
    {
        alert("Invalid Guess.");
    }
}

// NEXT GUESS FUNCTION

function fifthGuess()
{
    numberOneGuess = String(document.getElementById("fifthRowOne").textContent);
    numberTwoGuess = String(document.getElementById("fifthRowTwo").textContent);
    numberThreeGuess = String(document.getElementById("fifthRowThree").textContent);
    numberFourGuess = String(document.getElementById("fifthRowFour").textContent);
    numberFiveGuess = String(document.getElementById("fifthRowFive").textContent);
   
    numberOneCorrect = false;
    numberTwoCorrect = false;
    numberThreeCorrect = false;
    numberFourCorrect = false;
    numberFiveCorrect = false;

    if(numberOneGuess.length == 1 && numberTwoGuess.length == 1 && numberThreeGuess.length == 1 && numberFourGuess.length == 1 && numberFiveGuess.length == 1)
    {
    if(numberOneGuess == numberOne)
    {
        document.getElementById("fifthRowOne").style.backgroundColor = "lime";
        numberOneCorrect = true;
    }
    if(numberTwoGuess == numberTwo)
    {
        document.getElementById("fifthRowTwo").style.backgroundColor = "lime";
        numberTwoCorrect = true;
    }
    if(numberThreeGuess == numberThree)
    {
        document.getElementById("fifthRowThree").style.backgroundColor = "lime";
        numberThreeCorrect = true;
    }
    if(numberFourGuess == numberFour)
    {
        document.getElementById("fifthRowFour").style.backgroundColor = "lime";
        numberFourCorrect = true;
    }
    if(numberFiveGuess == numberFive)
    {
        document.getElementById("fifthRowFive").style.backgroundColor = "lime";
        numberFiveCorrect = true;
    }
    
    if(numberOneCorrect == false || numberOneCorrect == null)
    {
        if(numberTwoCorrect == false && numberOneGuess == numberTwo)
        {
            document.getElementById("fifthRowOne").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberOneGuess == numberThree)
        {
            document.getElementById("fifthRowOne").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberOneGuess == numberFour)
        {
            document.getElementById("fifthRowOne").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberOneGuess == numberFive)
        {
            document.getElementById("fifthRowOne").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fifthRowOne").style.backgroundColor = "gray";
        }
    }
    
    if(numberTwoCorrect == false || numberTwoCorrect == null)
    {
        if(numberOneCorrect == false && numberTwoGuess == numberOne)
        {
            document.getElementById("fifthRowTwo").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberThreeCorrect == false && numberTwoGuess == numberThree)
        {
            document.getElementById("fifthRowTwo").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberTwoGuess == numberFour)
        {
            document.getElementById("fifthRowTwo").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberTwoGuess == numberFive)
        {
            document.getElementById("fifthRowTwo").style.backgroundColor = "yellow";
            numberFiveCorrect = null; 
        }
        else
        {
            document.getElementById("fifthRowTwo").style.backgroundColor = "gray";
        }
    }
    
    if(numberThreeCorrect == false || numberThreeCorrect == null)
    {
        if(numberTwoCorrect == false && numberThreeGuess == numberTwo)
        {
            document.getElementById("fifthRowThree").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberOneCorrect == false && numberThreeGuess == numberOne)
        {
            document.getElementById("fifthRowThree").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFourCorrect == false && numberThreeGuess == numberFour)
        {
            document.getElementById("fifthRowThree").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberFiveCorrect == false && numberThreeGuess == numberFive)
        {
            document.getElementById("fifthRowThree").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fifthRowThree").style.backgroundColor = "gray";
        }
    }

    if(numberFourCorrect == false || numberFourCorrect == null)
    {
        if(numberTwoCorrect == false && numberFourGuess == numberTwo)
        {
            document.getElementById("fifthRowFour").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFourGuess == numberThree)
        {
            document.getElementById("fifthRowFour").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberOneCorrect == false && numberFourGuess == numberOne)
        {
            document.getElementById("fifthRowFour").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else if(numberFiveCorrect == false && numberFourGuess == numberFive)
        {
            document.getElementById("fifthRowFour").style.backgroundColor = "yellow";
            numberFiveCorrect = null;
        }
        else
        {
            document.getElementById("fifthRowFour").style.backgroundColor = "gray";
        }
    }

    if(numberFiveCorrect == false || numberFiveCorrect == null)
    {
        if(numberTwoCorrect == false && numberFiveGuess == numberTwo)
        {
            document.getElementById("fifthRowFive").style.backgroundColor = "yellow";
            numberTwoCorrect = null;
        }
        else if(numberThreeCorrect == false && numberFiveGuess == numberThree)
        {
            document.getElementById("fifthRowFive").style.backgroundColor = "yellow";
            numberThreeCorrect = null;
        }
        else if(numberFourCorrect == false && numberFiveGuess == numberFour)
        {
            document.getElementById("fifthRowFive").style.backgroundColor = "yellow";
            numberFourCorrect = null;
        }
        else if(numberOneCorrect == false && numberFiveGuess == numberOne)
        {
            document.getElementById("fifthRowFive").style.backgroundColor = "yellow";
            numberOneCorrect = null;
        }
        else
        {
            document.getElementById("fifthRowFive").style.backgroundColor = "gray";
        }
    }

    if(numberOneCorrect == true && numberTwoCorrect == true && numberThreeCorrect == true && numberFourCorrect == true && numberFiveCorrect == true)
    {
        alertWinner = setInterval(function alertWin(){alert("Close One!"); clearInterval(alertWinner)},1);

        document.removeEventListener("keydown", enterForGuess5);
        document.getElementById("guessButton").setAttribute("onclick","");
    }
    else
    {
    document.getElementById("fifthRowOne").disabled = true;
    document.getElementById("fifthRowTwo").disabled = true;
    document.getElementById("fifthRowThree").disabled = true;
    document.getElementById("fifthRowFour").disabled = true;
    document.getElementById("fifthRowFive").disabled = true;
    alert("The number was: "+finalNumber);
    
    document.removeEventListener("keydown", enterForGuess5);
    document.getElementById("guessButton").setAttribute("onclick","");
    }
    }
    else
    {
        alert("Invalid Guess.")
    }
}

document.addEventListener("keydown", enterForGuess1);

randomizeNumber()