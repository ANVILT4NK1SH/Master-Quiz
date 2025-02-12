
export const showSubjects = (quizzes) => {
  const container = document.querySelector("#card-container");
  container.innerHTML = "";

  let htmlTemp = quizzes.map(
		(quiz) => `
    <div class="trivia-cards js-trivia-cards">
      <h3 class="trivia-subject">${quiz.subjectName}</h3>
      <p class="trivia-description">${quiz.description}</p>
      <button class="easy-btn">Easy</button>
      <button class="medium-btn">Medium</button>
      <button class="hard-btn">Hard</button>
    </div>`
	).join("");
  container.insertAdjacentHTML("beforeend", htmlTemp);
};

