import { showSubjects } from "./triviaCards.js";
import { quizzes } from "../data/quizData.js";
import { eventListeners } from "./eventListeners.js";

showSubjects(quizzes);

eventListeners();
