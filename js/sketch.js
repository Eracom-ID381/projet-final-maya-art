let question1;
let question2;
let question3;
let question4;

let questions = []
let currentQuestion;

let radio;

function setup() {
    createCanvas(windowWidth, windowHeight);

    question1 = new Question("Quel est ton péché mignon ?",
        [{
                text: "Chocolat",
                psycho: -3,
                empathie: 3
            },
            {
                text: "Glace",
                psycho: 10,
                empathie: -10
            }

            {
                text: "Chips",
                psycho: 10,
                empathie: -10
            }
        ]
    )

    questions.push(question1);

    question2 = new Question("Tu écouterais plutôt :",
        [{
                text: "Billie Eilish",
                ariana: -3,
                billie: 3
            },
            {
                text: "Lady Gaga",
                gaga: 10,
                billie: -10
            }

            {
                text: "BTS",
                gaga: 10,
                ariana: -10
            }
        ]
    )

    questions.push(question2);


    question3 = new Question("Niveau Sneakers :",
        [{
                text: "Nike Air Force 1",
                gaga: -3,
                billie: 3

            },
            {
                text: "Vans",
                ariana: 10,
                billie: -10
            }

            {
                text: "Converse",
                billie: 5,
                ariana: -5

            }
        ]
    )
    questions.push(question3);


    question4 = new Question("Cet été c'est ...",
        [{
                text: "Plage",
                gaga: -3,
                ariana: 3
            },
            {
                text: "Montage",
                billie: 10,
                ariana: -10
            }
        ]
    )
    questions.push(question4);


    question5 = new Question("Ton plat préféré",
        [{
                text: "Pizza",
                billie: -3,
                ariana: 3
            },
            {
                text: "Sushi",
                psycho: 10,
                empathie: -10
            }
        ]
    )
    questions.push(question5);


    question6 = new Question("Ton plat préféré",
        [{
                text: "Pizza",
                psycho: -3,
                gaga: 3
            },
            {
                text: "Sushi",
                ariana: 10,
                billie: -10
            }
        ]
    )
    questions.push(question6);

    question6 = new Question("Une bonne soirée d'été selon toi ?",
        [{
                text: "Regarder le coucher de soleil en sirotant un cocktail",
                billie: -3,
                ariana: 3
            },
            {
                text: "Sortir danser jusqu'au bout de la nuit",
                gaga: 10,
                billie: 10,
                ariana: -10
            }
        ]
    )
    questions.push(question6);




    let nextButton = createButton('Next Question')
    nextButton.position(width / 2, height / 2 + 200)
    nextButton.mousePressed(changeQuestion);

    let r = int(random(0, 3));
    currentQuestion = questions[r];
    currentQuestion.afficher();
}

function draw() {

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function changeQuestion() {
    background(255);
    radio.remove();
    let r = int(random(0, 3));
    currentQuestion = questions[r];
    currentQuestion.afficher();
}

class Question {
    constructor(_text, _answers) {
        this.text = _text;
        this.answers = _answers;
    }

    afficher() {
        text(this.text, width / 2, height / 2);
        radio = createRadio();
        for (let i = 0; i < this.answers.length; i++) {
            radio.option(this.answers[i].text);
        }
    }
}