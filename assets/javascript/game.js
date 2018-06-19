
/* 
Create a const for questions, their answers and the correct answer. 10 questions.
Pull id's used in HTML and set them to constants
Create funtion to build quiz 
Create function to show the results once the user submits answer, or time runs out
Add event listener to the button in html so that when it is clicked it will call function showResults;


*/
/*
(function () {
    const quizContainer = $("#quiz");
    const resultsContainer = $("#results");
    const submitButton = $("#submit");

    const myQuestions = [
        {
            question: "Who is Harry Potter?",
            answers: {
                a: "yer a wizard",
                b: "Magician",
                c: "Cat",
                d: "Animagus",
            },
            correctAnswer: "a",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
        {
            question: "",
            answers: {
                a: "",
                b: "",
                c: "",
                d: "",
            },
            correctAnswer: "",
        },
    ];


    function quizFunction() {
        //place to store the HTML output
        const output = [];

        //for each question. .forEach(current value, current index)
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {
                //I need to store the list of answer choices
                const answers = [];
                // and for each avilable answer. 
                for (letter in currentQuestion.answers) {
                    //here we need to add a radio button to html **Using a grave accent (template literals) which denotes a template string giving us more options with a string
                    answers.push(
                        `<label>
                <input type = "radio" name = "question${questionNumber}" value = "$(letter)">
                $(letter) :
                $(currentQuestion.answers[letter])
                </label>`
                    );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );
        quizFunction.innerHTML = output.join('');
    };


    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question' ${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    };

    submitButton.addEventListener("click", showResults());
})();*/

//use hide/show for the reset and the start button 


//submitButton.addEventListener("click", buildQuiz());





(function () {

    function buildQuiz() {
        
        $("#start").stop();
        const output = [];
        let counter = 0;
        let question = myQuestions[counter].question;
        $("#question").append(question);
        


        myQuestions.forEach((currentQuestion, questionNumber) => {
            const answers = [];
            console.log(answers.splice);
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
            answers:
                "Moaning Myrtle, The Bloody Baron,Peeves, Mrs.Norris"
        },
        {
            correctAnswer: "Peeves",
        },
        {
            question: "What spell does Lupin fear Harry made his signature move?",
            answers:
                "Expelliarmus, Avada Kadavra, Accio, Stupify"

        },
        {
            correctAnswer: "Expelliarmus",
        },
        {
            question: "What is another name for the Room of Requirement?",
            answers:
                " Come and Go Room, Trick question! None of these, Divination Room, Hall of Secrets",

        },
        {
            correctAnswer: "Come and Go Room",
        },
        /* {
             question: "What kind of broom did Harry receive in The Prisoner of Azkaban?",
             answers: {
                 a: " Nimbus 200  ",
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
             question: "Who was supposed to be gaurding Harry the night dementors attacked him near 4 Privet Drive?",
             answers: {
                 a: " Kingsley Shacklebolt   ",
                 b: " Mundungus Fletcher  ",
                 c: " Sirius Black  ",
                 d: " Rufus Scrimgeour  ",
             },
             correctAnswer: "b",
             
         },*/
    ];
    console.log(myQuestions);
    // display quiz right away
    //buildQuiz();
    const startButton = document.getElementById("start");
    startButton.addEventListener("click", buildQuiz);
   
    

    submitButton.addEventListener("click", showResults);





    // on submit, show results
    //submitButton.addEventListener("click", showResults);
})();

  //setTimeout(func)

  //wrap my buildQuiz in a function that is activated by the start button. the start button would bring up the quiz. 
  //add a time to start with the start button being clicked
  //