let question1;
let question2;
let question3;
let question4;

let questions = []
let currentQuestion;

let radio;
let questionElement;
let nextButton;

let psychoResults = 0;
let empathieResults = 0;

let questionsAnswered = 0;
//START QUIZ
//DEBUT QUESTION- Array
function setup() {
    createCanvas(windowWidth, windowHeight);

    question1 = new Question("Ton plat préféré ?",
        [{
                text: "Pizza",
                Gaga: -3,
                empathie: 3
            },
            {
                text: "Sushi",
                Gaga: 10,
                empathie: -10
            }
        ]
    )

    questions.push(question1);

    question2 = new Question("Tu écouterais plutôt ",
        [{
                text: "Lady Gaga",
                Gaga: -3,
                empathie: 3
            },
            {
                text: "Ariana Grande",
                Gaga: 10,
                empathie: -10
            }
        ]
    )

    questions.push(question2);


    question3 = new Question("Cet été tu pars",
        [{
                text: "Plage",
                Gaga: -3,
                empathie: 3
            },
            {
                text: "Montagne",
                Gaga: 10,
                empathie: -10
            }
        ]
    )
    questions.push(question3);
    let r = int(random(0, 3));
    currentQuestion = questions[r];
    currentQuestion.afficher();
}
//FIN QUESTIONS
//END QUIZ

function draw() {
    console.log(questionsAnswered);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function changeQuestion() {
    if (questionsAnswered > 4) {
        let results = createP("A)Rain On me de Lady Gaga " + psychoResults + "B)Supalonely de BENEE " + empathieResults);
    } else {
        questionsAnswered++;
        let val = radio.value().split(',');
        psychoResults += int(val[0]);
        empathieResults += int(val[1]);
        background(255);
        radio.remove();
        questionElement.remove();
        nextButton.remove();
        let r = int(random(0, 3));
        currentQuestion = questions[r];
        currentQuestion.afficher();
    }


}

class Question {
    constructor(_text, _answers) {
        this.text = _text;
        this.answers = _answers;
    }

    //RESULTATS
    //function showResults(questions, quizContainer, resultsContainer) {

    // gather answer containers from our quiz
    //var answerContainers = quizContainer.querySelectorAll('.answers');

    afficher() {

        questionElement = createP(this.text)
        radio = createRadio();
        for (let i = 0; i < this.answers.length; i++) {
            radio.option(this.answers[i].text, [this.answers[i].Gaga, this.answers[i].empathie]);
        }

        nextButton = createButton('Submit');
        nextButton.mousePressed(changeQuestion);

    }
}