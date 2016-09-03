$(document).ready(function() {
	var questions = [{
		text: 'What color is the sky?'
		choices: 
			{text = 'blue',
			correct = true
			},      
			{text = 'red',
			correct = false
			},
			{text = 'green',
			correct = false
			},      
			{text = 'yellow',
			correct = false
			}


		}

		]};
$("#start").on("click",function(){
	$("#start").hide()
});

	
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

// // from http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// function shuffle(array) {
//   var currentIndex = array.length, temporaryValue, randomIndex;

//   // While there remain elements to shuffle...
//   while (0 !== currentIndex) {

//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     // And swap it with the current element.
//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }

//   return array;
// };