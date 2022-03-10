// correct answers in lower case to compare strings to player answers
const correctAnswers = ["World Wide Web", "Octagon", "Marie Curie", "Tea", "China", "Volleyball"];

// empty array to push player answers into
let answersArray = [];

let actualScore = 0;

let clickCounter=0;




// Controls for gameplay
document.getElementById("button").onclick=function() {
	clickCounter++;
	if (clickCounter == 1) {
		document.getElementById("button").innerHTML = "Final Answer";
		hide("guess");
		hide("doya");
		show("q1");
		show("guess1");
	}

	if (clickCounter == 2) {
		answers("guess1");
		hide("q1");
		hide("guess1");
		show("q2");
		show("guess2")
	}

	if (clickCounter == 3) {
		answers("guess2");
		hide("q2");
		hide("guess2");
		show("q3");
		show("guess3");
	}

	if (clickCounter == 4) {
		answers("guess3");
		hide("q3");
		hide("guess3");
		show("q4");
		show("guess4");
	}

	if (clickCounter == 5) {
		answers("guess4");
		hide("q4");
		hide("guess4");
		show("q5");
		show("guess5");
	}

	if (clickCounter == 6) {
		answers("guess5");
		hide("q5");
		hide("guess5");
		show("q6");
		show("guess6");
	}


	if (clickCounter == 7) {
		answers("guess6");
		scoreTracker("guess6");
		hide("q6");
		hide("guess6");
		hide('questionsContainer');
		hide('button');
		show("score");
		show('answers');
		document.getElementById("score").innerHTML = "<p class='endScreen'>Whoa!</p>" + "<p>Your score is: " + actualScore + "/6</p>";
  }
}

// Display player/correct answers - the display changes based on screen size
document.getElementById("answers").onclick=function() {
	if($(window).width() > 767) {
		hide('answers');
		hide('score');
		document.getElementById('resultsDisplay').innerHTML = "<table><tr><thead><td>Correct Answers</td><td>Your Answers</td></thead></tr>" + 
		"<tr><td><ol><li>World Wide Web</li><li>Octagon</li><li>Marie Curie</li><li>Tea</li><li>China</li><li>Volleyball</li></ol></td>" +
		"<td><ol><li>" + answersArray[0] + "</li><li>" + answersArray[1] + "</li><li>" + answersArray[2] + "</li><li>" + answersArray[3] + 
		"</li><li>" + answersArray[4] + "</li><li>" + answersArray[5] + "</li></ol></td></tr></table>"
		show('resultsDisplay');
}else{
		hide('answers');
		hide('score');
		document.getElementById('resultsDisplay').innerHTML = "<table><tr><td>Correct Answers</td></tr><tr>" +
		"<td><ol><li>World Wide Web</li><li>Octagon</li><li>Marie Curie</li><li>Tea</li><li>China</li><li>Volleyball</li></ol></td>" +
		"</tr><tr><td>Your Answers</td></tr><tr><td><ol><li>" + answersArray[0] + "</li><li>" + answersArray[1] + "</li><li>" + answersArray[2] + 
		"</li><li>" + answersArray[3] + "</li><li>" + answersArray[4] + "</li><li>" + answersArray[5] + "</li></ol></td></tr></table>"
		show('resultsDisplay');
}
};

// Hide/show elements
function hide(Id) {
document.getElementById(Id).style.display = "none";
}

function show(Id){
document.getElementById(Id).style.display ="block";
}

// Push player answers to array
function answers(Id){
let temp = document.getElementById(Id).value.toLowerCase().split(' ').map(function(word) {
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
answersArray.push(temp);
}

// Find the score
function scoreTracker(Id){
	for(i=0;i<6;i++){
	if(answersArray[i] == correctAnswers[i]){
	actualScore++;}
	}}         

