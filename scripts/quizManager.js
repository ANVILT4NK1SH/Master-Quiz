export class QuizManager {
	constructor(storageKey) {
		this.storageKey = storageKey;
		this.quizzes = this.load() || {};
	}

	add(
		subject,
		difficulty,
		question,
		answer,
		choices,
		description = "A quiz on " + subject
	) {
		const userSubject = `User-${subject}`;
		if (!this.quizzes[userSubject]) {
			this.quizzes[userSubject] = { description };
		}
		if (!this.quizzes[userSubject][difficulty]) {
			this.quizzes[userSubject][difficulty] = [];
		}
		const randomIndex = Math.floor(Math.random() * (choices.length + 1));
		const shuffledChoices = [...choices];
		shuffledChoices.splice(randomIndex, 0, answer);
		this.quizzes[userSubject][difficulty].push({
			question,
			answer,
			choices: shuffledChoices,
		});
		this.save();
	}

	deleteQuestion(subject, difficulty, questionIndex) {
		if (
			this.quizzes[subject] &&
			this.quizzes[subject][difficulty] &&
			this.quizzes[subject][difficulty][questionIndex] !== undefined
		) {
			this.quizzes[subject][difficulty].splice(questionIndex, 1);
			if (this.quizzes[subject][difficulty].length === 0) {
				delete this.quizzes[subject][difficulty];
			}
			if (Object.keys(this.quizzes[subject]).length === 1) {
				delete this.quizzes[subject];
			}
			this.save();
		}
	}

	editQuestion(subject, difficulty, questionIndex, newAnswer, newChoices) {
		if (
			this.quizzes[subject] &&
			this.quizzes[subject][difficulty] &&
			this.quizzes[subject][difficulty][questionIndex] !== undefined
		) {
			const question = this.quizzes[subject][difficulty][questionIndex];
			const randomIndex = Math.floor(Math.random() * (newChoices.length + 1));
			const shuffledChoices = [...newChoices];
			shuffledChoices.splice(randomIndex, 0, newAnswer);
			question.answer = newAnswer;
			question.choices = shuffledChoices;
			this.save();
		}
	}

	// Delete an entire subject
	deleteSubject(subject) {
		if (this.quizzes[subject]) {
			delete this.quizzes[subject];
			this.save();
		}
	}

	// Delete all questions for a difficulty within a subject
	deleteDifficulty(subject, difficulty) {
		if (this.quizzes[subject] && this.quizzes[subject][difficulty]) {
			delete this.quizzes[subject][difficulty];
			if (Object.keys(this.quizzes[subject]).length === 1) {
				delete this.quizzes[subject];
			}
			this.save();
		}
	}

	load() {
		const data = localStorage.getItem(this.storageKey);
		return data ? JSON.parse(data) : null;
	}

	save() {
		localStorage.setItem(this.storageKey, JSON.stringify(this.quizzes));
	}

	getAll() {
		return this.quizzes;
	}

	getSubjects() {
		return Object.keys(this.quizzes);
	}

	toSubjectArray() {
		return this.getSubjects().map((subject) => ({
			subjectName: subject,
			description:
				this.quizzes[subject].description || "No description available",
		}));
	}
}
