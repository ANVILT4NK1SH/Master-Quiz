import { QuizManager } from "./quizManager.js";

const quizManager = new QuizManager("quizData");

function setupQuizForm() {
	const submitBtn = document.querySelector("#submitBtn");
	const difficultyInput = document.querySelector("#difficulty");
	const subjectSelect = document.querySelector(".subject");
	const newSubjectBtn = document.querySelector("#newSubjectBtn");
	const subjectInput = document.querySelector("#subject");
	const questionInput = document.querySelector("#question");
	const answerInput = document.querySelector("#correct-answer");
	const choice1Input = document.querySelector("#choice1");
	const choice2Input = document.querySelector("#choice2");
	const choice3Input = document.querySelector("#choice3");
	const quizList = document.querySelector("#quizList");

	if (!subjectSelect) {
		console.error("No element with class 'subject' found!");
		return;
	}

	function populateSubjects() {
		const subjects = quizManager.getSubjects();
		subjectSelect.innerHTML = '<option value="">Choose Subject</option>';
		subjects.forEach((subject) => {
			const option = document.createElement("option");
			option.value = subject.replace("User-", "");
			option.textContent = subject.replace("User-", "");
			subjectSelect.appendChild(option);
		});
	}

	function renderQuizList() {
		const quizzes = quizManager.getAll();
		quizList.innerHTML = Object.keys(quizzes)
			.map((subject) => {
				const difficulties = ["easy", "medium", "hard"]
					.map((difficulty) => {
						const questions = (quizzes[subject][difficulty] || [])
							.map(
								(q, i) => `
              <div class="question-item" data-subject="${subject}" data-difficulty="${difficulty}" data-index="${i}">
                <span>${q.question} (Answer: ${q.answer})</span>
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
                <div class="edit-form">
                  <input type="text" class="edit-answer" placeholder="New Answer" value="${
										q.answer
									}">
                  <input type="text" class="edit-choice1" placeholder="Choice 1" value="${
										q.choices.filter((c) => c !== q.answer)[0] || ""
									}">
                  <input type="text" class="edit-choice2" placeholder="Choice 2" value="${
										q.choices.filter((c) => c !== q.answer)[1] || ""
									}">
                  <input type="text" class="edit-choice3" placeholder="Choice 3" value="${
										q.choices.filter((c) => c !== q.answer)[2] || ""
									}">
                  <button class="save-edit-btn">Save</button>
                </div>
              </div>
            `
							)
							.join("");
						return questions
							? `
              <h4>${difficulty}
                <button class="delete-difficulty-btn" data-subject="${subject}" data-difficulty="${difficulty}">Delete Difficulty</button>
              </h4>${questions}`
							: "";
					})
					.join("");
				return `
          <div class="subject-section">
            <h3>${subject.replace("User-", "")}
              <button class="delete-subject-btn" data-subject="${subject}">Delete Subject</button>
            </h3>${difficulties}
          </div>`;
			})
			.join("");

		document.querySelectorAll(".edit-form").forEach((form) => {
			form.style.display = "none";
		});

		document.querySelectorAll(".delete-btn").forEach((btn) => {
			btn.addEventListener("click", () => {
				if (confirm("Are you sure you want to delete this question?")) {
					const item = btn.closest(".question-item");
					const subject = item.dataset.subject;
					const difficulty = item.dataset.difficulty;
					const index = parseInt(item.dataset.index);
					quizManager.deleteQuestion(subject, difficulty, index);
					renderQuizList();
					populateSubjects();
				}
			});
		});

		document.querySelectorAll(".delete-subject-btn").forEach((btn) => {
			btn.addEventListener("click", () => {
				if (
					confirm(
						"Are you sure you want to delete this subject and all its questions?"
					)
				) {
					const subject = btn.dataset.subject;
					quizManager.deleteSubject(subject);
					renderQuizList();
					populateSubjects();
				}
			});
		});

		document.querySelectorAll(".delete-difficulty-btn").forEach((btn) => {
			btn.addEventListener("click", () => {
				if (
					confirm(
						"Are you sure you want to delete all questions for this difficulty?"
					)
				) {
					const subject = btn.dataset.subject;
					const difficulty = btn.dataset.difficulty;
					quizManager.deleteDifficulty(subject, difficulty);
					renderQuizList();
					populateSubjects();
				}
			});
		});

		document.querySelectorAll(".edit-btn").forEach((btn) => {
			btn.addEventListener("click", () => {
				const item = btn.closest(".question-item");
				const form = item.querySelector(".edit-form");
				form.style.display = form.style.display === "none" ? "block" : "none";
			});
		});

		document.querySelectorAll(".save-edit-btn").forEach((btn) => {
			btn.addEventListener("click", () => {
				const item = btn.closest(".question-item");
				const subject = item.dataset.subject;
				const difficulty = item.dataset.difficulty;
				const index = parseInt(item.dataset.index);
				const newAnswer = item.querySelector(".edit-answer").value;
				const newChoices = [
					item.querySelector(".edit-choice1").value,
					item.querySelector(".edit-choice2").value,
					item.querySelector(".edit-choice3").value,
				].filter((choice) => choice);

				if (newAnswer && newChoices.length > 0) {
					quizManager.editQuestion(
						subject,
						difficulty,
						index,
						newAnswer,
						newChoices
					);
					renderQuizList();
				} else {
					alert("Please provide a new answer and at least one choice.");
				}
			});
		});
	}

	populateSubjects();
	renderQuizList();

	newSubjectBtn.addEventListener("click", () => {
		subjectSelect.hidden = true;
		subjectInput.hidden = false;
		newSubjectBtn.hidden = true;
	});

	submitBtn.addEventListener("click", (e) => {
		e.preventDefault();

		const difficulty = difficultyInput.value;
		const subject = subjectInput.hidden
			? subjectSelect.value
			: subjectInput.value;
		const question = questionInput.value;
		const answer = answerInput.value;
		const choices = [
			choice1Input.value,
			choice2Input.value,
			choice3Input.value,
		];

		if (!subject) {
			alert("Please select or enter a subject!");
			return;
		}
		if (!question || !answer || choices.some((choice) => !choice)) {
			alert("Please fill in all fields!");
			return;
		}

		quizManager.add(subject, difficulty, question, answer, choices);
		console.log(
			`Added to User-${subject} (${difficulty}):`,
			quizManager.getAll()[`User-${subject}`][difficulty]
		);

		[
			questionInput,
			answerInput,
			choice1Input,
			choice2Input,
			choice3Input,
		].forEach((input) => (input.value = ""));

		if (!subjectInput.hidden) {
			subjectInput.hidden = true;
			subjectSelect.hidden = false;
			newSubjectBtn.hidden = false;
			populateSubjects();
			subjectSelect.value = subject;
			subjectInput.value = "";
		}

		renderQuizList();
	});
}

document.addEventListener("DOMContentLoaded", setupQuizForm);
