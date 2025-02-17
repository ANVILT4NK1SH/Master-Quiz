import {
	easyBtnHandler,
	mediumBtnHandler,
	hardBtnHandler,
	randomBtnHandler,
	//quizSubmitBtnHandler,
} from "./btnHandlers.js";


export function eventListeners() {
	let easyBtn = document.querySelectorAll(".easy-btn");
	easyBtn.forEach((b) => {b.addEventListener("click", easyBtnHandler)})
	
	let mediumBtn = document.querySelectorAll(".medium-btn");
  mediumBtn.forEach((b) => {b.addEventListener('click', mediumBtnHandler)})
	
	let hardBtn = document.querySelectorAll(".hard-btn");
	hardBtn.forEach((b) => {
		b.addEventListener("click", hardBtnHandler);
	});
	
	let randomBtn = document.querySelector("#random-quiz-btn");	
	randomBtn.addEventListener("click", randomBtnHandler);

};
