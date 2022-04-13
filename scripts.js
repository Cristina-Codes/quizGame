const quiz = {};

quiz.questions = [
	'What does “www” stand for in a website browser?',
	'What geometric shape is generally used for stop signs?',
	'Who was the first woman to win a Nobel Prize (in 1903)?',
	'What is the most consumed manufactured drink in the world?',
	'Which country invented ice cream?',
	'Dump, floater, and wipe are terms used in which team sport?'
];

// correct answers in lower case to compare strings to player answers
quiz.correctAnswers = ["World Wide Web", "Octagon", "Marie Curie", "Tea", "China", "Volleyball"];

// empty array to push player answers into
quiz.answersArray = [];
quiz.actualScore = 0;
quiz.clickCounter = 0;

// querying elements
quiz.startGame = document.querySelector("#startGame");
quiz.submitAnswer = document.querySelector("#submitAnswer");
quiz.questionDisplay = document.querySelector("#questions");
quiz.answers = document.querySelector('input');


// gameplay controls
quiz.startGame.addEventListener('click', (e) => {
	e.preventDefault();
	quiz.startGame.classList.toggle('hidden');
	quiz.submitAnswer.classList.toggle('hidden');
	quiz.answers.removeAttribute('disabled');
	quiz.questionDisplay.innerHTML = `${quiz.questions[quiz.clickCounter]}`;
	quiz.clickCounter++;
})

quiz.submitAnswer.addEventListener('click', (e) => {
	e.preventDefault();
	if(quiz.clickCounter < 6){
		const indexNum = quiz.clickCounter;
		quiz.questionDisplay.innerHTML = `${quiz.questions[indexNum]}`;
		quiz.clickCounter++;
		//run the value through the titlecase function
		quiz.titleCase(quiz.answers.value);
		quiz.answers.value = "";
	} else {
		quiz.answers.classList.add('hidden'); //not
		quiz.submitAnswer.classList.add('hidden'); //not
		console.log("woohoo"); //working
	}
})


// Display player/correct answers - the display changes based on screen size
// document.getElementById("answers").onclick=function() {
// 	if($(window).width() > 767) {
// 		hide('answers');
// 		hide('score');
// 		document.getElementById('resultsDisplay').innerHTML = `
// 		<table>
// 			<tr>
// 				<thead>
// 					<td>Correct Answers</td>
// 					<td>Your Answers</td>
// 				</thead>
// 			</tr>
// 			<tr>
// 				<td>
// 					<ol>
// 						<li>${correctAnswers[0]}</li>
// 						<li>${correctAnswers[1]}</li>
// 						<li>${correctAnswers[2]}</li>
// 						<li>${correctAnswers[3]}</li>
// 						<li>${correctAnswers[4]}</li>
// 						<li>${correctAnswers[5]}</li>
// 					</ol>
// 				</td>
// 				<td>
// 					<ol>
// 						<li>${answersArray[0]}</li>
// 						<li>${answersArray[1]}</li>
// 						<li>${answersArray[2]}</li>
// 						<li>${answersArray[3]}</li>
// 						<li>${answersArray[4]}</li>
// 						<li>${answersArray[5]}</li>
// 					</ol>
// 				</td>
// 			</tr>
// 		</table>`
// 		show('resultsDisplay');
// 	}
// };


// titleCase and push to answersArray
quiz.titleCase = (answerValue) => {
	const newValue = answerValue.toLowerCase().split(' ').map((word) => {
		return word.replace(word[0], word[0].toUpperCase());
	}).join(' ');
	quiz.answersArray.push(newValue);
}


// Find the score
function scoreTracker(Id){
	for(i=0;i<6;i++){
	if(answersArray[i] == correctAnswers[i]){
	actualScore++;}
	}}         

