let question1;
let question2;
let question3;
let question4;

let questions = []
let currentQuestion;

let radio;

function setup() {
  createCanvas(windowWidth, windowHeight);

  question1 = new Question("Avez-vous envie de tuer tout le monde?",
    [{
      text: "Pas du tout",
      psycho: -3,
      empathie: 3
    },
    {
      text: "à fond",
      psycho: 10,
      empathie: -10
    }
    ]
  )

  questions.push(question1);

  question2 = new Question("sd,fhjsdfjk.sfk.sdfj.skdjfsdf",
    [{
      text: "Super",
      psycho: -3,
      empathie: 3
    },
    {
      text: "Sympa",
      psycho: 10,
      empathie: -10
    }
    ]
  )

  questions.push(question2);


  question3 = new Question("sdksdfe?",
    [{
      text: "Pas du tout",
      psycho: -3,
      empathie: 3
    },
    {
      text: "à fond",
      psycho: 10,
      empathie: -10
    }
    ]
  )
  questions.push(question3);


  question4 = new Question("aaaaaaaaaaaaa",
    [{
      text: "Pas du tout",
      psycho: -3,
      empathie: 3
    },
    {
      text: "à fond",
      psycho: 10,
      empathie: -10
    }
    ]
  )
  questions.push(question4);


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