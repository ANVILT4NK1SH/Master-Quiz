const difficulty = document.querySelector("#difficulty");
const subject = document.querySelector("#subject");
const question = document.querySelector("#question");
const answer = document.querySelector("#correct-answer");
const choice1 = document.querySelector("#choice1");
const choice2 = document.querySelector("#choice2");
const choice3 = document.querySelector("#choice3");

createQuiz = () => {
  const newQuizArr = []

	const difficultySelection = difficulty.value;
	const subjectValue = subject.value;
	const questionValue = question.value;
	const answerValue = answer.value;
	const choices = [choice1.value, choice2.value, choice3.value];
  const randomNumber = Math.floor(Math.random() * choices.length);
	choices.splice(randomNumber, 0, answerValue);

 const submitBtn = document.querySelector('submitBtn')
 submitBtn.addEventListener("click", () => {
  // take user input on click and push all data to an object
  // push that data to an array 
  
   const newObject = `
   {
    ${difficultySelection}: [
      {
        question:"${questionValue}",
        answer:"${answerValue}",
        choices:${choices},    
      }  
    ]
  }`

  localStorage.setItem(subjectValue, newObject)
    // newQuizArr.push(newObject)
    // hit sbmit they are pushing a singular object to the array
 })

// use newQuizArray to create new file and import if possible? otherwise leav in theis folder i guess 
};
