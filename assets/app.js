var questions = [{
	'title': 'Cats brains are most similar to that of a/an...',
	'options': ['dog', 'human', 'lion', 'catfish'],
	'correct': 'human'
}, {
	'title': 'The first cat in space was...',
	'options': ['American', 'British', 'French', 'Japanese'],
	'correct': 'French'
}, {
	'title': 'A cat can jump as high as...',
	'options': ['twice its height', 'three times its height', 'four times its height', 'five times its height'],
	'correct': 'five times its height'
}, {
	'title': 'Isaac Newton had a cat named ...',
	'options': ['Gravity', 'Bucket', 'Spithead', 'Curly'],
	'correct': 'Spithead'
}, {
	'title': 'Cats spend 2/3rds of their life....',
	'options': ['Cleaning themselves', 'sleeping', 'hunting', 'purring'],
	'correct': 'sleeping'
}, {
	'title': 'The oldest cat on record lived ...',
	'options': ['48 years', '38 years', '43 years', '27 years'],
	'correct': '38 years'
}];

var currentQuestion;
var questionIndex;
var numCorrect = 0;
var numWrong = 0;
var score = numCorrect/questions.length * 100;

$(document).ready(function() {
	$("#gameScreen").hide();
	$("#start").on("click",function(){
		startGame();
	});

	$(".option-btn").on('click', function() {
		var id = $(this).attr('id');
		var ans = $("#"+id).text();
		var correct = checkAnswer(ans);
		var text = '';

		if(correct) {
			numCorrect++;
			text = 'correct';

		}
		else {
			numWrong++;
			text = 'wrong';
		}

		alert(text);

		if(questionIndex < questions.length -1) {
			questionIndex++;
			currentQuestion = questions[questionIndex];
			displayQuestion();
		}
		else {
			alert('Done! Your score =' + score + '%' );
		}

	});
$(".btn").mouseup(function(){
    $(this).blur();
})
});


function startGame() {

	$("#startScreen").hide();
	$("#gameScreen").show();

	shuffle(questions);
	questionIndex = 0;

	currentQuestion = questions[0];
	displayQuestion();
};

function displayQuestion() {

	$("#questionTitle").text(currentQuestion.title);
	$("#first").text(currentQuestion.options[0])
	$("#second").text(currentQuestion.options[1])
	$("#third").text(currentQuestion.options[2])
	$("#fourth").text(currentQuestion.options[3]);

};

function checkAnswer(val) {
	if(currentQuestion.correct == val) {
		return true;
	}

	return false;
}



	
	// var questions;
	// $.getJSON( "trivia.json", function( data ) {
	// questions = data.questions;


	// console.log(questions);

	// 	// randomize questions

	// shuffle(questions);

		// loop through questions
		// keep track of stuff

// 	$("#game").hide();
// 	$("#start").click(function () {
// 	$("#game").show();

// 	$("#start-page").show();
// 	$("#start").click(function () {
// 	$("#start-page").hide();


// 	$(function () {

// 	var questions = $('#questions');
// 	var next_btn = $('#next');

// 	next_btn.on('click', function () {
// 	var active_question = questions.find('.active');

// 	if (active_question.find('input[type=radio]:checked').length) {
// 	    active_question.slideUp(500, function(){
// 	     active_question.removeClass('active');
// 		 })
// 		if(active_question.next('.question').length){
// 		    active_question.next('.question').addClass('active').slideDown(500);
// 		 }else {
// 		    alert('Thank you!');
// 		    alert(questions.serialize());
// 		    questions.hide();
// 		 }
// 	}else{
// 	    alert('Select answer!');
// 	}


// 	});




// });
// });
// });

// from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};