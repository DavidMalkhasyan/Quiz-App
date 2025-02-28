const submit = document.querySelector(".quiz__submit");
const nextbtn = document.querySelector(".quiz__next");

const quiz__options = document.querySelectorAll(".quiz__option");

const body = document.querySelector("body");

const labels = document.querySelectorAll(".quiz__option");
const mainquestion = document.querySelector(".quiz__question");

let questions = [];
let questionQueue = 0;

let score = 0;
let wrongAnswers = [];
fetch("quiz.json")
    .then((response) => response.json())
    .then((data) => {
        questions = data;
        addQuestion(questions[questionQueue]);
    });

function addQuestion(obj) {
    mainquestion.textContent = obj.question;

    for (let i = 0; i < labels.length; i++) {
        const optionText = labels[i].querySelector(".quiz__option-text");
        optionText.textContent = obj.options[i];
    }
}

nextbtn.addEventListener("click", () => {
    if (questionQueue === questions.length - 1) {
        submit.style.display = "block";
        nextbtn.style.display = "none";
    }
    const selectedOption = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (selectedOption.value == questions[questionQueue].correctAnswer) {
        score++;
        document.body.classList.add("background-green");
        setTimeout(() => {
            document.body.classList.remove("background-green");
        }, 500);
    } else {
        document.body.classList.add("background-red");
        setTimeout(() => {
            document.body.classList.remove("background-red");
        }, 500);
        wrongAnswers.push(questions[questionQueue].question);
    }

    questionQueue++;
    addQuestion(questions[questionQueue]);
    selectedOption.checked = false;
});

submit.addEventListener("click", () => {
    quiz__options.forEach((option) => {
        option.style.display = "none";
    });
    mainquestion.textContent = `You scored ${score} out of ${questions.length}`;
    if (wrongAnswers.length > 0) {
        const wrongAnswersList = document.createElement("ul");
        wrongAnswersList.classList.add("wrong-answers");
        wrongAnswers.forEach((answer) => {
            const li = document.createElement("li");
            li.textContent = answer;
            wrongAnswersList.appendChild(li);
        });
        body.appendChild(wrongAnswersList);
    }
    console.log("Submit button clicked");
    questionQueue = 0;
    score = 0;
    wrongAnswers = [];
    submit.style.display = "none";
    nextbtn.style.display = "block";
    nextbtn.textContent = "Restart";
    nextbtn.addEventListener("click", () => {
        location.reload();
    });


});
