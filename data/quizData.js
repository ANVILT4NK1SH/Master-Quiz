export const quizzes = [
	{
		subjectName: "Mathematics",
		description: "The study of numbers, quantities, and shapes.",
		levels: {
			easy: [
				{
					id: 1,
					question: "What is 2 + 2?",
					correctAnswer: "4",
					possibleAnswers: ["4", "3", "5", "6"],
				},
				{
					id: 2,
					question: "What is 5 - 3?",
					correctAnswer: "2",
					possibleAnswers: ["2", "1", "3", "4"],
				},
				{
					id: 3,
					question: "What is 10 / 2?",
					correctAnswer: "5",
					possibleAnswers: ["5", "2", "4", "6"],
				},
				{
					id: 4,
					question: "What is 3 * 3?",
					correctAnswer: "9",
					possibleAnswers: ["9", "6", "8", "12"],
				},
				{
					id: 5,
					question: "What is 7 + 5?",
					correctAnswer: "12",
					possibleAnswers: ["12", "10", "11", "14"],
				},
			],
			medium: [
				{
					id: 1,
					question: "What is 12 / 4?",
					correctAnswer: "3",
					possibleAnswers: ["3", "2", "4", "6"],
				},
				{
					id: 2,
					question: "What is 15 * 2?",
					correctAnswer: "30",
					possibleAnswers: ["30", "20", "25", "35"],
				},
				{
					id: 3,
					question: "What is 25 - 9?",
					correctAnswer: "16",
					possibleAnswers: ["16", "12", "18", "20"],
				},
				{
					id: 4,
					question: "What is 8^2?",
					correctAnswer: "64",
					possibleAnswers: ["64", "32", "48", "72"],
				},
				{
					id: 5,
					question: "What is the square root of 81?",
					correctAnswer: "9",
					possibleAnswers: ["9", "6", "7", "8"],
				},
			],
			hard: [
				{
					id: 1,
					question: "What is the square root of 144?",
					correctAnswer: "12",
					possibleAnswers: ["12", "10", "14", "16"],
				},
				{
					id: 2,
					question: "What is 5^3?",
					correctAnswer: "125",
					possibleAnswers: ["125", "100", "150", "175"],
				},
				{
					id: 3,
					question: "What is 13 * 13?",
					correctAnswer: "169",
					possibleAnswers: ["169", "144", "156", "196"],
				},
				{
					id: 4,
					question: "What is 144 / 12?",
					correctAnswer: "12",
					possibleAnswers: ["12", "10", "11", "14"],
				},
				{
					id: 5,
					question: "What is the cube root of 27?",
					correctAnswer: "3",
					possibleAnswers: ["3", "2", "4", "5"],
				},
			],
		},
	},
	{
		subjectName: "Science",
		description:
			"The study of the natural world through observation and experiments.",
		levels: {
			easy: [
				{
					id: 1,
					question: "What planet is known as the Red Planet?",
					correctAnswer: "Mars",
					possibleAnswers: ["Mars", "Venus", "Jupiter", "Saturn"],
				},
				{
					id: 2,
					question: "What gas do plants absorb?",
					correctAnswer: "Carbon Dioxide",
					possibleAnswers: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Helium"],
				},
				{
					id: 3,
					question: "What is the chemical symbol for water?",
					correctAnswer: "H2O",
					possibleAnswers: ["H2O", "O2", "CO2", "NaCl"],
				},
				{
					id: 4,
					question: "Which planet is closest to the sun?",
					correctAnswer: "Mercury",
					possibleAnswers: ["Mercury", "Venus", "Earth", "Mars"],
				},
				{
					id: 5,
					question: "What do humans breathe in to survive?",
					correctAnswer: "Oxygen",
					possibleAnswers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
				},
			],
			medium: [
				{
					id: 1,
					question: "What is H2O commonly known as?",
					correctAnswer: "Water",
					possibleAnswers: ["Water", "Oxygen", "Hydrogen", "Salt"],
				},
				{
					id: 2,
					question: "What is the chemical symbol for gold?",
					correctAnswer: "Au",
					possibleAnswers: ["Au", "Ag", "Pb", "Fe"],
				},
				{
					id: 3,
					question: "What type of energy is produced by the sun?",
					correctAnswer: "Solar",
					possibleAnswers: ["Solar", "Wind", "Hydro", "Nuclear"],
				},
				{
					id: 4,
					question: "What organ pumps blood throughout the body?",
					correctAnswer: "Heart",
					possibleAnswers: ["Heart", "Lungs", "Liver", "Brain"],
				},
				{
					id: 5,
					question: "What force keeps us on the ground?",
					correctAnswer: "Gravity",
					possibleAnswers: ["Gravity", "Friction", "Magnetism", "Inertia"],
				},
			],
			hard: [
				{
					id: 1,
					question: "What is the powerhouse of the cell?",
					correctAnswer: "Mitochondria",
					possibleAnswers: [
						"Mitochondria",
						"Nucleus",
						"Ribosome",
						"Endoplasmic Reticulum",
					],
				},
				{
					id: 2,
					question: "What is the speed of light in vacuum?",
					correctAnswer: "299,792,458 m/s",
					possibleAnswers: [
						"299,792,458 m/s",
						"150,000,000 m/s",
						"3,000,000 m/s",
						"30,000,000 m/s",
					],
				},
				{
					id: 3,
					question: "What is the process by which plants make their own food?",
					correctAnswer: "Photosynthesis",
					possibleAnswers: [
						"Photosynthesis",
						"Respiration",
						"Fermentation",
						"Transpiration",
					],
				},
				{
					id: 4,
					question: "What element has the atomic number 1?",
					correctAnswer: "Hydrogen",
					possibleAnswers: ["Hydrogen", "Oxygen", "Helium", "Carbon"],
				},
				{
					id: 5,
					question: "What type of blood cells help fight infection?",
					correctAnswer: "White blood cells",
					possibleAnswers: [
						"White blood cells",
						"Red blood cells",
						"Platelets",
						"Plasma",
					],
				},
			],
		},
	},
	{
		subjectName: "History",
		description: "The study of past events and the people who shaped them.",
		levels: {
			easy: [
				{
					id: 1,
					question: "Who was the first President of the United States?",
					correctAnswer: "George Washington",
					possibleAnswers: [
						"George Washington",
						"Abraham Lincoln",
						"Thomas Jefferson",
						"John Adams",
					],
				},
				{
					id: 2,
					question: "In which year did the Titanic sink?",
					correctAnswer: "1912",
					possibleAnswers: ["1912", "1905", "1920", "1898"],
				},
				{
					id: 3,
					question: "Who was the famous queen of ancient Egypt?",
					correctAnswer: "Cleopatra",
					possibleAnswers: [
						"Cleopatra",
						"Nefertiti",
						"Queen Victoria",
						"Mary I",
					],
				},
				{
					id: 4,
					question: "Who wrote the Declaration of Independence?",
					correctAnswer: "Thomas Jefferson",
					possibleAnswers: [
						"Thomas Jefferson",
						"George Washington",
						"John Adams",
						"Benjamin Franklin",
					],
				},
				{
					id: 5,
					question: "What empire was ruled by Julius Caesar?",
					correctAnswer: "Roman Empire",
					possibleAnswers: [
						"Roman Empire",
						"Ottoman Empire",
						"Byzantine Empire",
						"Mongol Empire",
					],
				},
			],
			medium: [
				{
					id: 1,
					question:
						"Which war was fought between the North and South in the United States?",
					correctAnswer: "American Civil War",
					possibleAnswers: [
						"American Civil War",
						"World War I",
						"World War II",
						"Revolutionary War",
					],
				},
				{
					id: 2,
					question: "Who was the first woman to fly solo across the Atlantic?",
					correctAnswer: "Amelia Earhart",
					possibleAnswers: [
						"Amelia Earhart",
						"Bessie Coleman",
						"Harriet Quimby",
						"Eleanor Roosevelt",
					],
				},
				{
					id: 3,
					question: "Who was the leader of the Nazi Party in Germany?",
					correctAnswer: "Adolf Hitler",
					possibleAnswers: [
						"Adolf Hitler",
						"Joseph Stalin",
						"Benito Mussolini",
						"Winston Churchill",
					],
				},
				{
					id: 4,
					question:
						"Which country was ruled by King Louis XVI during the French Revolution?",
					correctAnswer: "France",
					possibleAnswers: ["France", "Germany", "Italy", "Spain"],
				},
				{
					id: 5,
					question: "What year did the Berlin Wall fall?",
					correctAnswer: "1989",
					possibleAnswers: ["1989", "1990", "1985", "1995"],
				},
			],
			hard: [
				{
					id: 1,
					question: "Who was the first emperor of China?",
					correctAnswer: "Qin Shi Huang",
					possibleAnswers: [
						"Qin Shi Huang",
						"Han Wudi",
						"Emperor Taizong",
						"Kublai Khan",
					],
				},
				{
					id: 2,
					question:
						"What was the name of the ship that brought the Pilgrims to America?",
					correctAnswer: "Mayflower",
					possibleAnswers: ["Mayflower", "Santa Maria", "Endeavour", "Pinta"],
				},
				{
					id: 3,
					question: "Who discovered penicillin?",
					correctAnswer: "Alexander Fleming",
					possibleAnswers: [
						"Alexander Fleming",
						"Marie Curie",
						"Louis Pasteur",
						"Edward Jenner",
					],
				},
				{
					id: 4,
					question: "What was the name of the treaty that ended World War I?",
					correctAnswer: "Treaty of Versailles",
					possibleAnswers: [
						"Treaty of Versailles",
						"Treaty of Paris",
						"Treaty of Tordesillas",
						"Treaty of Utrecht",
					],
				},
				{
					id: 5,
					question:
						"Which battle is considered the turning point of the American Civil War?",
					correctAnswer: "Battle of Gettysburg",
					possibleAnswers: [
						"Battle of Gettysburg",
						"Battle of Antietam",
						"Battle of Bunker Hill",
						"Battle of Saratoga",
					],
				},
			],
		},
	},
	{
		subjectName: "Geography",
		description:
			"The study of places and the relationships between people and their environments.",
		levels: {
			easy: [
				{
					id: 1,
					question: "What is the capital of France?",
					correctAnswer: "Paris",
					possibleAnswers: ["Paris", "London", "Rome", "Berlin"],
				},
				{
					id: 2,
					question: "Which continent is Australia located in?",
					correctAnswer: "Australia",
					possibleAnswers: ["Australia", "Asia", "Africa", "Europe"],
				},
				{
					id: 3,
					question: "Which river is the longest in the world?",
					correctAnswer: "Nile",
					possibleAnswers: ["Nile", "Amazon", "Yangtze", "Mississippi"],
				},
				{
					id: 4,
					question: "What is the largest country by land area?",
					correctAnswer: "Russia",
					possibleAnswers: ["Russia", "Canada", "United States", "China"],
				},
				{
					id: 5,
					question: "Which mountain is the highest in the world?",
					correctAnswer: "Mount Everest",
					possibleAnswers: [
						"Mount Everest",
						"K2",
						"Kangchenjunga",
						"Mount Kilimanjaro",
					],
				},
			],
			medium: [
				{
					id: 1,
					question: "What is the longest river in Europe?",
					correctAnswer: "Volga",
					possibleAnswers: ["Volga", "Danube", "Rhine", "Seine"],
				},
				{
					id: 2,
					question: "What is the smallest country in the world?",
					correctAnswer: "Vatican City",
					possibleAnswers: ["Vatican City", "Monaco", "Nauru", "San Marino"],
				},
				{
					id: 3,
					question: "Which country has the most islands?",
					correctAnswer: "Sweden",
					possibleAnswers: ["Sweden", "Finland", "Norway", "Canada"],
				},
				{
					id: 4,
					question: "Which desert is the largest in the world?",
					correctAnswer: "Sahara Desert",
					possibleAnswers: [
						"Sahara Desert",
						"Arabian Desert",
						"Karakum Desert",
						"Gobi Desert",
					],
				},
				{
					id: 5,
					question: "Which ocean is the largest?",
					correctAnswer: "Pacific Ocean",
					possibleAnswers: [
						"Pacific Ocean",
						"Atlantic Ocean",
						"Indian Ocean",
						"Southern Ocean",
					],
				},
			],
			hard: [
				{
					id: 1,
					question: "Which country is both an island and a continent?",
					correctAnswer: "Australia",
					possibleAnswers: ["Australia", "Greenland", "Indonesia", "Japan"],
				},
				{
					id: 2,
					question: "What is the longest mountain range in the world?",
					correctAnswer: "Andes",
					possibleAnswers: ["Andes", "Himalayas", "Rockies", "Alps"],
				},
				{
					id: 3,
					question: "What is the deepest part of the world's oceans?",
					correctAnswer: "Mariana Trench",
					possibleAnswers: [
						"Mariana Trench",
						"Puerto Rico Trench",
						"Tonga Trench",
						"Java Trench",
					],
				},
				{
					id: 4,
					question: "Which desert is the driest on Earth?",
					correctAnswer: "Atacama Desert",
					possibleAnswers: [
						"Atacama Desert",
						"Sahara Desert",
						"Karakum Desert",
						"Namib Desert",
					],
				},
				{
					id: 5,
					question: "Which river flows through Egypt?",
					correctAnswer: "Nile",
					possibleAnswers: ["Nile", "Amazon", "Ganges", "Yangtze"],
				},
			],
		},
	},
	{
		subjectName: "Literature",
		description:
			"The study of written works, including novels, poetry, and plays.",
		levels: {
			easy: [
				{
					id: 1,
					question: "Who wrote 'Romeo and Juliet'?",
					correctAnswer: "William Shakespeare",
					possibleAnswers: [
						"William Shakespeare",
						"Charles Dickens",
						"Jane Austen",
						"Mark Twain",
					],
				},
				{
					id: 2,
					question: "What is the title of the first Harry Potter book?",
					correctAnswer: "Harry Potter and the Sorcerer's Stone",
					possibleAnswers: [
						"Harry Potter and the Sorcerer's Stone",
						"Harry Potter and the Chamber of Secrets",
						"Harry Potter and the Prisoner of Azkaban",
						"Harry Potter and the Goblet of Fire",
					],
				},
				{
					id: 3,
					question: "Who wrote 'Moby Dick'?",
					correctAnswer: "Herman Melville",
					possibleAnswers: [
						"Herman Melville",
						"Ernest Hemingway",
						"F. Scott Fitzgerald",
						"Mark Twain",
					],
				},
				{
					id: 4,
					question:
						"What is the name of the fictional detective created by Arthur Conan Doyle?",
					correctAnswer: "Sherlock Holmes",
					possibleAnswers: [
						"Sherlock Holmes",
						"Hercule Poirot",
						"Sam Spade",
						"Philip Marlowe",
					],
				},
				{
					id: 5,
					question: "Which novel is about a young girl named Scout Finch?",
					correctAnswer: "To Kill a Mockingbird",
					possibleAnswers: [
						"To Kill a Mockingbird",
						"The Catcher in the Rye",
						"Pride and Prejudice",
						"The Great Gatsby",
					],
				},
			],
			medium: [
				{
					id: 1,
					question: "Who wrote 'Pride and Prejudice'?",
					correctAnswer: "Jane Austen",
					possibleAnswers: [
						"Jane Austen",
						"Emily Brontë",
						"Charlotte Brontë",
						"Mary Shelley",
					],
				},
				{
					id: 2,
					question: "In which city is the novel 'The Great Gatsby' set?",
					correctAnswer: "New York",
					possibleAnswers: ["New York", "London", "Paris", "Los Angeles"],
				},
				{
					id: 3,
					question: "Who wrote '1984'?",
					correctAnswer: "George Orwell",
					possibleAnswers: [
						"George Orwell",
						"Aldous Huxley",
						"Ray Bradbury",
						"Philip K. Dick",
					],
				},
				{
					id: 4,
					question:
						"Which book features the characters Katniss Everdeen and Peeta Mellark?",
					correctAnswer: "The Hunger Games",
					possibleAnswers: [
						"The Hunger Games",
						"Divergent",
						"Maze Runner",
						"Twilight",
					],
				},
				{
					id: 5,
					question:
						"What is the title of the novel by John Steinbeck about migrant workers during the Great Depression?",
					correctAnswer: "The Grapes of Wrath",
					possibleAnswers: [
						"The Grapes of Wrath",
						"Of Mice and Men",
						"East of Eden",
						"The Pearl",
					],
				},
			],
			hard: [
				{
					id: 1,
					question: "Who wrote 'Ulysses'?",
					correctAnswer: "James Joyce",
					possibleAnswers: [
						"James Joyce",
						"Virginia Woolf",
						"William Faulkner",
						"T.S. Eliot",
					],
				},
				{
					id: 2,
					question:
						"What is the title of the novel by Franz Kafka about a man who transforms into an insect?",
					correctAnswer: "The Metamorphosis",
					possibleAnswers: [
						"The Metamorphosis",
						"The Trial",
						"The Castle",
						"Amerika",
					],
				},
				{
					id: 3,
					question: "Who wrote 'One Hundred Years of Solitude'?",
					correctAnswer: "Gabriel García Márquez",
					possibleAnswers: [
						"Gabriel García Márquez",
						"Mario Vargas Llosa",
						"Julio Cortázar",
						"Carlos Fuentes",
					],
				},
				{
					id: 4,
					question:
						"What is the title of the epic poem written by Homer about the Trojan War?",
					correctAnswer: "The Iliad",
					possibleAnswers: [
						"The Iliad",
						"The Odyssey",
						"Aeneid",
						"Divine Comedy",
					],
				},
				{
					id: 5,
					question: "Who wrote 'The Sound and the Fury'?",
					correctAnswer: "William Faulkner",
					possibleAnswers: [
						"William Faulkner",
						"Tennessee Williams",
						"William Shakespeare",
						"Hemingway",
					],
				},
			],
		},
	},
	{
		subjectName: "Art",
		description:
			"The study of creative expression, including visual arts, sculpture, and design.",
		levels: {
			easy: [
				{
					id: 1,
					question: "Who painted the Mona Lisa?",
					correctAnswer: "Leonardo da Vinci",
					possibleAnswers: [
						"Leonardo da Vinci",
						"Vincent van Gogh",
						"Pablo Picasso",
						"Claude Monet",
					],
				},
				{
					id: 2,
					question: "What is the art of paper folding called?",
					correctAnswer: "Origami",
					possibleAnswers: ["Origami", "Mosaic", "Collage", "Sculpture"],
				},
				{
					id: 3,
					question: "What is the primary medium used in watercolor painting?",
					correctAnswer: "Water",
					possibleAnswers: ["Water", "Oil", "Acrylic", "Charcoal"],
				},
				{
					id: 4,
					question: "Who painted the Starry Night?",
					correctAnswer: "Vincent van Gogh",
					possibleAnswers: [
						"Vincent van Gogh",
						"Salvador Dalí",
						"Claude Monet",
						"Pablo Picasso",
					],
				},
				{
					id: 5,
					question: "What is a 3D work of art called?",
					correctAnswer: "Sculpture",
					possibleAnswers: ["Sculpture", "Painting", "Drawing", "Mosaic"],
				},
			],
			medium: [
				{
					id: 1,
					question: "Which artist is famous for his drip paintings?",
					correctAnswer: "Jackson Pollock",
					possibleAnswers: [
						"Jackson Pollock",
						"Andy Warhol",
						"Claude Monet",
						"Pablo Picasso",
					],
				},
				{
					id: 2,
					question:
						"What technique is used in glass art to create patterns by fusing glass together?",
					correctAnswer: "Fused Glass",
					possibleAnswers: [
						"Fused Glass",
						"Blown Glass",
						"Mosaic",
						"Encaustic",
					],
				},
				{
					id: 3,
					question: "Which art movement is Salvador Dalí associated with?",
					correctAnswer: "Surrealism",
					possibleAnswers: [
						"Surrealism",
						"Impressionism",
						"Cubism",
						"Expressionism",
					],
				},
				{
					id: 4,
					question: "Who is known for creating the sculpture 'David'?",
					correctAnswer: "Michelangelo",
					possibleAnswers: [
						"Michelangelo",
						"Leonardo da Vinci",
						"Donatello",
						"Raphael",
					],
				},
				{
					id: 5,
					question:
						"What is the technique of creating art by assembling objects called?",
					correctAnswer: "Collage",
					possibleAnswers: ["Collage", "Mosaic", "Sculpture", "Watercolor"],
				},
			],
			hard: [
				{
					id: 1,
					question: "Who painted the Sistine Chapel ceiling?",
					correctAnswer: "Michelangelo",
					possibleAnswers: [
						"Michelangelo",
						"Raphael",
						"Leonardo da Vinci",
						"Donatello",
					],
				},
				{
					id: 2,
					question:
						"What is the art movement that focuses on geometric shapes and abstract forms?",
					correctAnswer: "Cubism",
					possibleAnswers: [
						"Cubism",
						"Surrealism",
						"Expressionism",
						"Futurism",
					],
				},
				{
					id: 3,
					question:
						"Who is the famous artist known for creating large-scale sculptures of animals out of stainless steel?",
					correctAnswer: "Jeff Koons",
					possibleAnswers: [
						"Jeff Koons",
						"Henry Moore",
						"Alexander Calder",
						"Damien Hirst",
					],
				},
				{
					id: 4,
					question: "What is the technique of painting with wax called?",
					correctAnswer: "Encaustic",
					possibleAnswers: [
						"Encaustic",
						"Oil painting",
						"Watercolor",
						"Acrylic",
					],
				},
				{
					id: 5,
					question:
						"Who is known for the painting 'The Persistence of Memory'?",
					correctAnswer: "Salvador Dalí",
					possibleAnswers: [
						"Salvador Dalí",
						"Pablo Picasso",
						"Henri Matisse",
						"Georgia O'Keeffe",
					],
				},
			],
		},
	},

	{
		subjectName: "Music",
		description:
			"The study of sound, melody, harmony, and rhythm, in compositions and performances.",
		levels: {
			easy: [
				{
					id: 1,
					question: "Which instrument has black and white keys?",
					correctAnswer: "Piano",
					possibleAnswers: ["Piano", "Guitar", "Drums", "Flute"],
				},
				{
					id: 2,
					question: "Who is known as the King of Pop?",
					correctAnswer: "Michael Jackson",
					possibleAnswers: [
						"Michael Jackson",
						"Elvis Presley",
						"Madonna",
						"Prince",
					],
				},
				{
					id: 3,
					question: "What type of instrument is a trumpet?",
					correctAnswer: "Brass",
					possibleAnswers: ["Brass", "String", "Woodwind", "Percussion"],
				},
				{
					id: 4,
					question: "Which instrument is commonly used in jazz?",
					correctAnswer: "Saxophone",
					possibleAnswers: ["Saxophone", "Violin", "Clarinet", "Oboe"],
				},
				{
					id: 5,
					question: "What genre of music is Taylor Swift known for?",
					correctAnswer: "Pop/Country",
					possibleAnswers: ["Pop/Country", "Rock", "Classical", "Jazz"],
				},
			],
			medium: [
				{
					id: 1,
					question: "Who composed the 'Four Seasons'?",
					correctAnswer: "Antonio Vivaldi",
					possibleAnswers: [
						"Antonio Vivaldi",
						"Ludwig van Beethoven",
						"Johann Sebastian Bach",
						"Wolfgang Amadeus Mozart",
					],
				},
				{
					id: 2,
					question: "Which band is known for the album 'Abbey Road'?",
					correctAnswer: "The Beatles",
					possibleAnswers: [
						"The Beatles",
						"The Rolling Stones",
						"Pink Floyd",
						"Queen",
					],
				},
				{
					id: 3,
					question: "What musical term means 'play loudly'?",
					correctAnswer: "Forte",
					possibleAnswers: ["Forte", "Piano", "Allegro", "Adagio"],
				},
				{
					id: 4,
					question: "Which classical composer was deaf?",
					correctAnswer: "Ludwig van Beethoven",
					possibleAnswers: [
						"Ludwig van Beethoven",
						"Johann Sebastian Bach",
						"Wolfgang Amadeus Mozart",
						"Frédéric Chopin",
					],
				},
				{
					id: 5,
					question: "Which instrument is played by plucking the strings?",
					correctAnswer: "Harp",
					possibleAnswers: ["Harp", "Piano", "Drums", "Flute"],
				},
			],
			hard: [
				{
					id: 1,
					question:
						"What is the term for a melody that is played against another melody?",
					correctAnswer: "Counterpoint",
					possibleAnswers: ["Counterpoint", "Harmony", "Chords", "Polyphony"],
				},
				{
					id: 2,
					question: "Who composed the opera 'The Magic Flute'?",
					correctAnswer: "Wolfgang Amadeus Mozart",
					possibleAnswers: [
						"Wolfgang Amadeus Mozart",
						"Ludwig van Beethoven",
						"Giuseppe Verdi",
						"Richard Wagner",
					],
				},
				{
					id: 3,
					question: "What is the term for a gradual increase in volume?",
					correctAnswer: "Crescendo",
					possibleAnswers: ["Crescendo", "Forte", "Legato", "Staccato"],
				},
				{
					id: 4,
					question:
						"What is the name of the famous composer known for writing 'Eine kleine Nachtmusik'?",
					correctAnswer: "Wolfgang Amadeus Mozart",
					possibleAnswers: [
						"Wolfgang Amadeus Mozart",
						"Ludwig van Beethoven",
						"Johann Sebastian Bach",
						"Frédéric Chopin",
					],
				},
				{
					id: 5,
					question: "What term refers to the speed of a piece of music?",
					correctAnswer: "Tempo",
					possibleAnswers: ["Tempo", "Rhythm", "Time signature", "Meter"],
				},
			],
		},
	},

	{
		subjectName: "Physical Education",
		description: "The study of physical fitness, sports, and healthy living.",
		levels: {
			easy: [
				{
					id: 1,
					question: "How many players are on a soccer team?",
					correctAnswer: "11",
					possibleAnswers: ["11", "10", "12", "9"],
				},
				{
					id: 2,
					question: "What is the primary sport played with a bat and ball?",
					correctAnswer: "Baseball",
					possibleAnswers: ["Baseball", "Soccer", "Basketball", "Tennis"],
				},
				{
					id: 3,
					question: "What is the activity of swimming primarily good for?",
					correctAnswer: "Cardio",
					possibleAnswers: ["Cardio", "Strength", "Flexibility", "Speed"],
				},
				{
					id: 4,
					question: "Which sport involves throwing a disc?",
					correctAnswer: "Frisbee",
					possibleAnswers: ["Frisbee", "Football", "Volleyball", "Tennis"],
				},
				{
					id: 5,
					question: "What do you use to play tennis?",
					correctAnswer: "Racket",
					possibleAnswers: ["Racket", "Bat", "Club", "Stick"],
				},
			],
			medium: [
				{
					id: 1,
					question: "In which sport would you find a 'spike'?",
					correctAnswer: "Volleyball",
					possibleAnswers: ["Volleyball", "Tennis", "Football", "Basketball"],
				},
				{
					id: 2,
					question: "What is the primary muscle worked when doing push-ups?",
					correctAnswer: "Chest",
					possibleAnswers: ["Chest", "Legs", "Arms", "Back"],
				},
				{
					id: 3,
					question: "Which sport is played with a net and a shuttlecock?",
					correctAnswer: "Badminton",
					possibleAnswers: ["Badminton", "Tennis", "Squash", "Racquetball"],
				},
				{
					id: 4,
					question: "What exercise is best for strengthening your core?",
					correctAnswer: "Plank",
					possibleAnswers: ["Plank", "Sit-up", "Crunch", "Push-up"],
				},
				{
					id: 5,
					question: "Which sport is known as the 'king of sports'?",
					correctAnswer: "Soccer",
					possibleAnswers: ["Soccer", "Basketball", "Football", "Tennis"],
				},
			],
			hard: [
				{
					id: 1,
					question: "In which sport would you find a 'triple axel'?",
					correctAnswer: "Figure skating",
					possibleAnswers: ["Figure skating", "Gymnastics", "Diving", "Skiing"],
				},
				{
					id: 2,
					question: "What is the most common injury in American football?",
					correctAnswer: "Concussion",
					possibleAnswers: ["Concussion", "Fracture", "Sprain", "Torn ACL"],
				},
				{
					id: 3,
					question:
						"What term is used to describe a full-body workout that includes running, swimming, and cycling?",
					correctAnswer: "Triathlon",
					possibleAnswers: ["Triathlon", "Decathlon", "Marathon", "Biathlon"],
				},
				{
					id: 4,
					question: "What is the primary objective of the sport of rugby?",
					correctAnswer: "Try",
					possibleAnswers: ["Try", "Touchdown", "Goal", "Point"],
				},
				{
					id: 5,
					question:
						"What is the term for the maximum heart rate during intense exercise?",
					correctAnswer: "Anaerobic threshold",
					possibleAnswers: [
						"Anaerobic threshold",
						"Resting heart rate",
						"Target heart rate",
						"Heart rate reserve",
					],
				},
			],
		},
	},
];
