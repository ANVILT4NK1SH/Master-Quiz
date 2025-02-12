const quizzes = {
	Geography: {
		Easy: [
			{
				question: "What is the capital of France?",
				correctAnswer: "Paris",
				incorrect_answers: ["London", "Berlin", "Madrid"],
			},
			{
				question: "Which ocean is the largest?",
				correctAnswer: "Pacific Ocean",
				incorrect_answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
			},
			{
				question: "What is the smallest country in the world?",
				correctAnswer: "Vatican City",
				incorrect_answers: ["Monaco", "San Marino", "Liechtenstein"],
			},
			{
				question: "Which continent is the Sahara Desert located in?",
				correctAnswer: "Africa",
				incorrect_answers: ["Asia", "South America", "Australia"],
			},
			{
				question: "What is the longest river in the world?",
				correctAnswer: "Nile River",
				incorrect_answers: [
					"Amazon River",
					"Yangtze River",
					"Mississippi River",
				],
			},
		],
		Medium: [
			{
				question: "Which country has the most natural lakes?",
				correctAnswer: "Canada",
				incorrect_answers: ["United States", "Russia", "Brazil"],
			},
			{
				question: "Which African country has the largest population?",
				correctAnswer: "Nigeria",
				incorrect_answers: ["Egypt", "South Africa", "Kenya"],
			},
			{
				question: "What is the capital of Australia?",
				correctAnswer: "Canberra",
				incorrect_answers: ["Sydney", "Melbourne", "Brisbane"],
			},
			{
				question: "Which country has the longest coastline?",
				correctAnswer: "Canada",
				incorrect_answers: ["Russia", "United States", "Australia"],
			},
			{
				question: "What is the most spoken language in South America?",
				correctAnswer: "Spanish",
				incorrect_answers: ["Portuguese", "English", "French"],
			},
		],
		Hard: [
			{
				question: "What is the least populated country in the world?",
				correctAnswer: "Vatican City",
				incorrect_answers: ["Monaco", "San Marino", "Liechtenstein"],
			},
			{
				question: "Which country is completely surrounded by South Africa?",
				correctAnswer: "Lesotho",
				incorrect_answers: ["Eswatini", "Namibia", "Botswana"],
			},
			{
				question: "What is the capital of Mongolia?",
				correctAnswer: "Ulaanbaatar",
				incorrect_answers: ["Astana", "Bishkek", "Tashkent"],
			},
			{
				question: "Which European country has the most islands?",
				correctAnswer: "Sweden",
				incorrect_answers: ["Norway", "Finland", "Denmark"],
			},
			{
				question:
					"What is the only country to border both the Mediterranean and the Black Sea?",
				correctAnswer: "Turkey",
				incorrect_answers: ["Greece", "Italy", "Bulgaria"],
			},
		],
	},
	Science: {
		Easy: [
			{
				question: "What is the chemical symbol for oxygen?",
				correctAnswer: "O",
				incorrect_answers: ["O2", "C", "H2O"],
			},
			{
				question: "Which planet is known as the Red Planet?",
				correctAnswer: "Mars",
				incorrect_answers: ["Venus", "Jupiter", "Saturn"],
			},
			{
				question: "What gas do plants absorb from the atmosphere?",
				correctAnswer: "Carbon dioxide",
				incorrect_answers: ["Oxygen", "Nitrogen", "Hydrogen"],
			},
			{
				question: "What is H2O more commonly known as?",
				correctAnswer: "Water",
				incorrect_answers: ["Oxygen", "Hydrogen", "Carbon Dioxide"],
			},
			{
				question: "What part of the plant conducts photosynthesis?",
				correctAnswer: "Leaf",
				incorrect_answers: ["Root", "Stem", "Flower"],
			},
		],
		Medium: [
			{
				question: "What is the hardest naturally occurring mineral?",
				correctAnswer: "Diamond",
				incorrect_answers: ["Gold", "Quartz", "Ruby"],
			},
			{
				question: "Which part of the cell contains genetic material?",
				correctAnswer: "Nucleus",
				incorrect_answers: ["Mitochondria", "Cytoplasm", "Ribosome"],
			},
			{
				question: "Which element has the highest electrical conductivity?",
				correctAnswer: "Silver",
				incorrect_answers: ["Gold", "Copper", "Aluminum"],
			},
			{
				question: "What is the process by which plants make their own food?",
				correctAnswer: "Photosynthesis",
				incorrect_answers: ["Respiration", "Fermentation", "Transpiration"],
			},
			{
				question: "Which gas makes up the majority of Earth's atmosphere?",
				correctAnswer: "Nitrogen",
				incorrect_answers: ["Oxygen", "Carbon Dioxide", "Hydrogen"],
			},
		],
		Hard: [
			{
				question: "What is the speed of light in vacuum?",
				correctAnswer: "299,792,458 m/s",
				incorrect_answers: [
					"150,000,000 m/s",
					"3,000,000 m/s",
					"500,000,000 m/s",
				],
			},
			{
				question: "Which element has the highest melting point?",
				correctAnswer: "Tungsten",
				incorrect_answers: ["Iron", "Carbon", "Platinum"],
			},
			{
				question:
					"What is the second most abundant element in the Earth's crust?",
				correctAnswer: "Silicon",
				incorrect_answers: ["Oxygen", "Aluminum", "Iron"],
			},
			{
				question: "What part of the brain controls balance?",
				correctAnswer: "Cerebellum",
				incorrect_answers: ["Cerebrum", "Medulla", "Thalamus"],
			},
			{
				question: "What is the main component of Saturn’s rings?",
				correctAnswer: "Ice",
				incorrect_answers: ["Rock", "Gas", "Metal"],
			},
		],
	},
	Technology: {
		Easy: [
			{
				question: "Who is known as the father of computers?",
				correctAnswer: "Charles Babbage",
				incorrect_answers: ["Alan Turing", "Bill Gates", "Steve Jobs"],
			},
			{
				question: "What does 'HTML' stand for?",
				correctAnswer: "Hypertext Markup Language",
				incorrect_answers: [
					"Hyper Transfer Machine Language",
					"Hyperlink Marking Language",
					"Hypertext Management Language",
				],
			},
			{
				question: "Which company developed the iPhone?",
				correctAnswer: "Apple",
				incorrect_answers: ["Samsung", "Microsoft", "Google"],
			},
			{
				question: "What does 'CPU' stand for?",
				correctAnswer: "Central Processing Unit",
				incorrect_answers: [
					"Computer Power Unit",
					"Central Processing Utility",
					"Computer Processing Unit",
				],
			},
			{
				question: "What is the most widely used programming language?",
				correctAnswer: "JavaScript",
				incorrect_answers: ["Python", "Java", "C++"],
			},
		],
		Medium: [
			{
				question: "Which operating system is open-source?",
				correctAnswer: "Linux",
				incorrect_answers: ["Windows", "MacOS", "iOS"],
			},
			{
				question: "What does 'RAM' stand for?",
				correctAnswer: "Random Access Memory",
				incorrect_answers: [
					"Read And Modify",
					"Rapid Application Memory",
					"Randomized Algorithm Machine",
				],
			},
			{
				question: "Which of the following is NOT a programming language?",
				correctAnswer: "Photoshop",
				incorrect_answers: ["Python", "Java", "Ruby"],
			},
			{
				question: "Which company owns the Android operating system?",
				correctAnswer: "Google",
				incorrect_answers: ["Microsoft", "Apple", "IBM"],
			},
			{
				question: "What does VPN stand for?",
				correctAnswer: "Virtual Private Network",
				incorrect_answers: [
					"Visual Processing Node",
					"Variable Protocol Network",
					"Verified Private Network",
				],
			},
		],
		Hard: [
			{
				question: "Who invented the World Wide Web?",
				correctAnswer: "Tim Berners-Lee",
				incorrect_answers: ["Bill Gates", "Alan Turing", "Steve Jobs"],
			},
			{
				question: "What is the name of the first computer virus?",
				correctAnswer: "Creeper",
				incorrect_answers: ["ILOVEYOU", "MyDoom", "Melissa"],
			},
			{
				question: "What is the programming language used in web browsers?",
				correctAnswer: "JavaScript",
				incorrect_answers: ["Python", "C#", "Java"],
			},
			{
				question:
					"What is the term for the smallest unit of digital information?",
				correctAnswer: "Bit",
				incorrect_answers: ["Byte", "Kilobyte", "Megabyte"],
			},
			{
				question:
					"Which data structure follows the 'Last In, First Out' principle?",
				correctAnswer: "Stack",
				incorrect_answers: ["Queue", "Array", "Linked List"],
			},
		],
	},
};
