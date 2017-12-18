$(document).ready();
var luke = {
	name: 'Luke Skywalker',
	health: 100,
	attack: 12,
	cAttack: 12,
	battle: function() {

		this.attack += 12;
	}, 

};

var obi = {
	name: 'Obi Wan Kenobi',
	health: 160,
	attack: 10,
	cAttack: 10,
	battle: function() {

		//this.Health = this.Health - ;
		this.attack += 10;


	},

};
var sidious = {
	name: 'Darth Sidious',
	health: 150,
	attack: 15,
	cAttack: 15,
	battle: function() {

		//this.Health = this.Health - ;
		this.attack += 15;
	},

};
var maul = {
	name: 'Darth Maul',
	health: 100,
	attack: 20,
	cAttack: 20,
	battle: function() {

		//this.Health = this.Health - ;
		this.attack += 10
	}

};	

var mainPlayer = {};
var enemyPlayer = {};

// var darkSideAudio = document.createElement("audio");
//       darkSideAudio.setAttribute("src", "../darkSideRemix.mp3");
// var lightSideAudio = document.createElement("audio");
//       lightSideAudio.setAttribute("src", "../lightSideRemix.mp3");

// $('.lightSide').on('click', function() {
// 	lightSideAudio.play()
// 	document.alert('You clicked me');
// });

// $('.darkSide').on('click', function() {
// 	darkSideAudio.play()
// });

//This is where we will be making the main character and the enemy character
$('.character').on('click', function() {
	if (!jQuery.isEmptyObject(enemyPlayer) || $(this).hasClass('dead')) {return};
	var backgroundType = '';
	if ($(this).hasClass('lightSide')) {
		backgroundType = 'lightSide';
	};

	if (jQuery.isEmptyObject(mainPlayer)) {

		changeBackground(backgroundType);
		mainPlayer = assignChar($(this).attr('id'));
		$(this).addClass('mainChar');
		
	} else {

		enemyPlayer = assignChar($(this).attr('id'));
		$(this).addClass('enemyChar');

	};
	$(this).removeClass('character');
	$(this).appendTo($('.battleground'));
});

function changeBackground(forceSide) {


	var musicSrc = ''

	if (forceSide === 'lightSide') {
		musicSrc = './assets/lightSideRemix.mp3';
		$('.background').addClass('backgroundL');
		$('.background').removeClass('background');

	} else {
		musicSrc = './assets/darkSideRemix.mp3';
		$('.background').addClass('backgroundD');
		$('.background').removeClass('background');	
	};

	$('body').append('<audio src="' + musicSrc + '" autoplay loop></audio>');
};

// This is where we will switch between the IDs of the main Player
function assignChar(characterId) {
	switch (characterId) {

		case  'lukeSkywalker':
			return luke;
		case 'obiWanKenobi':
			return obi;
		case 'darthSidious':
			return sidious
		case 'angryRedAlienDude':
			return maul;
		default:
			return false;
	}
};



//Combat Mechanics
$('.button').on('click', function() {

	if (enemyPlayer.health <= 0) {
		mainPlayer.health = 0;
		return;
	}	
	
if (jQuery.isEmptyObject(enemyPlayer)) {return}
	enemyPlayer.health -= mainPlayer.attack;
	mainPlayer.health -= enemyPlayer.cAttack;
	mainPlayer.battle();
	console.log('Protag Health: ' + mainPlayer.health);
	console.log('Enemy Health: ' + enemyPlayer.health);
	console.log('Attack stat: ' + mainPlayer.attack);

	if (enemyPlayer.health <= 0) {
		enemyPlayer.health = 0;
		$('.enemyChar').addClass('dead');
		$('.enemyChar').removeClass('enemyChar');
		$('.dead').appendTo($('.graveyard'));
		enemyPlayer = {};
	}

});