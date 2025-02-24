import { subjects } from "../data/subjects.js";
import { QuizManager } from "./quizManager.js";
let numberCorrect = 0;
const mainContainer = document.querySelector("#mainContainer");
const questionContainer = document.querySelector(".questionContainer");
const listContainer = document.querySelector(".listContainer");

const quizManager = new QuizManager("quizData");

const allSubjects = { ...subjects, ...quizManager.getAll() };

export const easyBtnHandler = (e) => {
	let subjectId = e.target
		.closest(".js-trivia-cards")
		?.querySelector(".trivia-subject").dataset.subjectId;
	numberCorrect = 0;
	let currentIndex = 0;

	if (subjectId && allSubjects[subjectId]) {
		
		let subjectObject = allSubjects[subjectId];
		let questions = subjectObject.easy || [];
		let listItems = "";

		console.log(questions);
		for (let i = 0; i < questions.length; i++) {
			listItems += `<li id="li${i + 1}">${i + 1}</li>`;
		}
		mainContainer.style.display = "flex";

		listContainer.innerHTML = `<ol class="qtList">${listItems}</ol>`;

		displayQuestion(currentIndex, questions, listItems);
	}
};
export const mediumBtnHandler = (e) => {
	let subjectId = e.target
		.closest(".js-trivia-cards")
		?.querySelector(".trivia-subject").dataset.subjectId;
	numberCorrect = 0;
	let currentIndex = 0;

	if (subjectId && allSubjects[subjectId]) {
		let subjectObject = allSubjects[subjectId];
		let questions = subjectObject.medium || [];
		let listItems = "";

		console.log(questions);
		for (let i = 0; i < questions.length; i++) {
			listItems += `<li id="li${i + 1}">${i + 1}</li>`;
		}
		mainContainer.style.display = "flex";

		listContainer.innerHTML = `<ol class="qtList">${listItems}</ol>`;

		displayQuestion(currentIndex, questions, listItems);
	}
};

export const hardBtnHandler = (e) => {
	let subjectId = e.target
		.closest(".js-trivia-cards")
		?.querySelector(".trivia-subject").dataset.subjectId;
	numberCorrect = 0;
	let currentIndex = 0;

	if (subjectId && allSubjects[subjectId]) {
		let subjectObject = allSubjects[subjectId];
		let questions = subjectObject.hard || [];
		let listItems = "";

		console.log(questions);
		for (let i = 0; i < questions.length; i++) {
			listItems += `<li id="li${i + 1}">${i + 1}</li>`;
		}
		mainContainer.style.display = "flex";

		listContainer.innerHTML = `<ol class="qtList">${listItems}</ol>`;

		displayQuestion(currentIndex, questions, listItems);
	}
};

function displayQuestion(index, questions, listItems) {
	const totalQuestions = questions.length;
	const question = questions[index];

	if (index < 0 || index >= totalQuestions) {
		questionContainer.innerHTML =
			"<p>No questions available for this difficulty.</p>";

		setTimeout(() => {
			mainContainer.style.display = "none";
		}, 3000);
		return;
	}

	questionContainer.innerHTML = ` 
			<div class="question">
						<a class= "close">X</a>
						<h3>${question.question}</h3>
		
						<form class="answerForm">
							<div class="radio-container">
								<div class="radio-option">
									<input type="radio" id="option1" name="choice" value="${question.choices[0]}" />
									<label for="option1">${question.choices[0]}</label>
								</div>

								<div class="radio-option">
									<input type="radio" id="option2" name="choice" value="${question.choices[1]}" />
									<label for="option2">${question.choices[1]}</label>
								</div>

								<div class="radio-option">
									<input type="radio" id="option3" name="choice" value="${question.choices[2]}" />
									<label for="option3">${question.choices[2]}</label>
								</div>

								<div class="radio-option">
									<input type="radio" id="option4" name="choice" value="${question.choices[3]}" />
									<label for="option4">${question.choices[3]}</label>
								</div>

							</div>
							<button type="button" class="answer-submit-btn">Submit</button>
						</form>
						<p class="feedback"></p>
					</div>`;

	const feedback = document.querySelector(".feedback");
	let submitBtn = document.querySelector(".answer-submit-btn");
	const closeBtn = document.querySelector(".close");
	const listItem = document.querySelector(`#li${index + 1}`);

	listItem.setAttribute("style", "color: white");

	closeBtn.addEventListener("click", () => {
		mainContainer.style.display = "none";
	});

	submitBtn.addEventListener("click", (b) => {
		b.preventDefault();

		const selectedChoice = document.querySelector(
			'input[name="choice"]:checked'
		);
		console.log(numberCorrect);

		if (selectedChoice) {
			const userAnswer = selectedChoice.value;
			const correctAnswer = question.answer;
			submitBtn.style.visibility = "hidden";

			if (userAnswer === correctAnswer) {
				numberCorrect++;
				listItem.setAttribute("style", "color: limegreen");
				feedback.textContent = "Correct";
				if (index < totalQuestions - 1) {
					setTimeout(() => {
						index++;
						displayQuestion(index, questions, listItems);
					}, 3000);
				} else {
					setTimeout(() => {
						feedback.textContent = `Score: ${numberCorrect} / ${totalQuestions}`;
						numberCorrect = 0;
					}, 3000);
				}
			} else {
				listItem.setAttribute("style", "color: red");
				feedback.textContent = "Incorrect";
				if (index < totalQuestions - 1) {
					setTimeout(() => {
						index++;
						displayQuestion(index, questions, listItems);
					}, 3000);
				} else {
					setTimeout(() => {
						feedback.textContent = `Score: ${numberCorrect} / ${totalQuestions}`;
						numberCorrect = 0;
					}, 3000);
				}
			}
		} else {
			feedback.innerHTML = "Please select an answer.";
		}
	});
}
