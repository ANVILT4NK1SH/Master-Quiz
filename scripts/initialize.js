import { showSubjects } from "./triviaCards.js";
import { quizzes } from "../data/quizData.js";
import { eventListeners } from "./eventListeners.js";

const newQuizes = localStorage.getItem('subjectValue')
// get into your data on initialization 
// temp loading div while logic before showSubjects fires 


/*
    loading screen loading icon 
*/

showSubjects(quizzes);

eventListeners();

// display newQuizzes textContent


