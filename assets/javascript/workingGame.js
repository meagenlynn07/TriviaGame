//<button id="start">Accio Quiz!</button>

(function() {

    function buildQuiz() {
      const output = [];
      
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
  
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("  ") + "<br></br>"} </div>`
        );
      });
  
      quizContainer.innerHTML = output.join("  ");
      
    }
  
    function showResults() {
const answerContainers = quizContainer.querySelectorAll(".answers");

      let numCorrect = 0;
      let numWrong = 0;
  
      myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
  
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          answerContainers[questionNumber].style.color = "red";
          numWrong++;
        }
      });

      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length} correct!!`;
      resultsContainer1.innerHTML = `${numWrong} out of ${myQuestions.length} wrong...`;
      
      
    }
    
    const resultsContainer1 = document.getElementById("results1");
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
    const myQuestions = [
        {
            question: "What scheming Poltergeist roams the hallways terrozing students at Hogwarts?",
            answers: {
                a: " Moaning Myrtle  ",
                b: " The Bloody Baron  ",
                c: " Peeves  ",
                d: " Mrs. Norris  ",
            },
            correctAnswer: "c",
        },
        {
            question: "What spell does Lupin fear Harry made his signature move?",
            answers: {
                a: " Expelliarmus  ",
                b: " Avada Kadavra  ",
                c: " Accio  ",
                d: " Stupify  ",
            },
            correctAnswer: "a",
        },
        {
            question: "What is another name for the Room of Requirement?",
            answers: {
                a: " Come and Go Room",
                b: " Hall of Secrets ",
                c: " Divination Room ",
                d: " Trick question! None of these",
            },
            correctAnswer: "a",
        },
        {
            question: "What kind of broom did Harry receive in The Prisoner of Azkaban?",
            answers: {
                a: " Nimbus 2000  ",
                b: " Comet 260  ",
                c: " Firebolt  ",
                d: " Shooting Star  ",
            },
            correctAnswer: "c",
        },
        {
            question: "Who helped Harry, Ron and Hermione get past the Whopming Willow in The Prisoner of Azkaban?",
            answers: {
                a: " Scabbers  ",
                b: " Neville  ",
                c: " Fred  ",
                d: " Crookshanks  ",
            },
            correctAnswer: "d",
        },
        {
            question: "Who did Ron become obssessed with after eating candy filled with Love Potion?",
            answers: {
                a: " Lavender Brown  ",
                b: " Hermione Granger  ",
                c: " Cho Chang  ",
                d: " Romilda Vane  ",
            },
            correctAnswer: "d",
        },
        {
            question: "What kind of pet did Ginny get from Weasleys' Wizard Wheezes",
            answers: {
                a: " Pygmy Puff  ",
                b: " Pygmy Owl  ",
                c: " Cat  ",
                d: " She didn't get a pet  ",
            },
            correctAnswer: "a",
        },
        {
            question: "How does Ron find his way back to Harry and Ron in The Deathly Hallows?",
            answers: {
                a: " He used the Deluminator  ",
                b: " He used the 'Point-Me' spell  ",
                c: " He concentrated really hard on them and apparated  ",
                d: " He stumbled upon them after checking a few places  ",
            },
            correctAnswer: "a",
        },
        {
            question: "What was the name of the Weasley house?",
            answers: {
                a: " The Hollow  ",
                b: " The Pig Pen  ",
                c: " The Burrow  ",
                d: " Grimmauld Place  ",
            },
            correctAnswer: "c",
        },
        {
            question: "Who was supposed to be guarding Harry the night dementors attacked him near 4 Privet Drive?",
            answers: {
                a: " Kingsley Shacklebolt   ",
                b: " Mundungus Fletcher  ",
                c: " Sirius Black  ",
                d: " Rufus Scrimgeour  ",
            },
            correctAnswer: "b",
        },
    ];
  console.log(myQuestions);
    // display quiz right away
  buildQuiz();
  //const startButton = document.getElementById("start");
//startButton.addEventListener("click", buildQuiz);


  submitButton.addEventListener("click", showResults);





    // on submit, show results
    //submitButton.addEventListener("click", showResults);
  })();

  //setTimeout(func)

  //wrap my buildQuiz in a function that is activated by the start button. the start button would bring up the quiz. 
  //add a time to start with the start button being clicked
  //