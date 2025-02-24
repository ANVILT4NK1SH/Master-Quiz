import { showSubjects, showMyQuizzes } from "./triviaCards.js";
import { quizzes } from "../data/quizData.js";
import { eventListeners } from "./eventListeners.js";
import { QuizManager } from "./quizManager.js";

showSubjects(quizzes);
const quizManager = new QuizManager("quizData");
showMyQuizzes(quizManager.toSubjectArray());

eventListeners();




