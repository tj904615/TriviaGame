//Create var for timer
var betweenTime;
function startClock(duration, display) {
    var timer = duration;
    var seconds;
    var minutes;

    betweenTime=setInterval(function() {
        console.log(betweenTime);

        if (timer < 0) {
            console.log(betweenTime);
            clearInterval(betweenTime);
            console.log(timer);
            timer = duration;
            console.log(duration);
            alert("...TIME'S UP!!!...");

        } else {
            seconds = parseInt(timer / 60, 10)
            minutes = parseInt(timer % 60, 10);

            seconds = seconds < 10 ? "0" + ":" + seconds : seconds;
            minutes = minutes < 10 ? "0" + ":" + minutes : minutes;

            display.textContent = seconds + ":" + minutes;
            console.log(timer);

        }
        timer--;
    }, 1000);
}
window.onload = function () {
    var sevenMin = 7 * 60,
        display = document.querySelector("#time");
        startClock(sevenMin, display);
};

var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, chD, correct = 0;
var questions = [
    [ "What year was I drafted?", "1995", "2001", "1996", "1999", "C" ],
    [ "What number draft pick was I?", "1st", "8th", "Undrafted", "13th", "D" ],
    [ "What team drafted me?", "Lakers", "76ers", "Hornets", "Bucks", "C" ],
    [ "In what city was I born?", "Jacksonville", "Paris", "Oakland", "Philly", "D" ],
    [ "What is my career high points in a game", "81", "60", "71", "100", "A" ],
    [ "How many points did I score in my final game?", "19", "60", "31", "0", "B" ],
];

function _(x){
    return document.getElementById(x);
}

function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You have "+correct+" out of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    chD = questions[pos][4];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='D'> "+chD+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer() '>Submit Answer</button>";
}

function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].nodeValue;
        }
    }
    if(choice == questions[pos][5]){
        correct++;
    }
    pos++;
    renderQuestion();
}

window.addEventListener("load", renderQuestion, false);