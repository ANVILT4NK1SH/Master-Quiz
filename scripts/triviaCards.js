
export const showSubjects = (quizzes) => {
  const container = document.querySelector("#card-container");
  container.innerHTML = "";

  let htmlTemp = quizzes
		.map(
			(quiz) => `
    <div class="trivia-cards js-trivia-cards">
      <h3 class="trivia-subject" data-subject-id="${quiz.subjectName}">${quiz.subjectName}</h3>
      <p class="trivia-description">${quiz.description}</p>
      <button class="easy-btn" data-btn-id="1">Easy</button>
      <button class="medium-btn" data-btn-id="2">Medium</button>
      <button class="hard-btn" data-btn-id="3">Hard</button>
    </div>`
		)
		.join("");
  container.insertAdjacentHTML("beforeend", htmlTemp);
};

