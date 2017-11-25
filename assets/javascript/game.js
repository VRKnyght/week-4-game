$(document).ready();

var skywalker = document.getElementById('#lukeSkywalker');
var kenobi = document.getElementById('#obiWanKenobi');
var palpatine = document.getElementById('#darthSidious');
var redAlien = document.getElementById('#angryRedAlienDude');


var luke = {
	Name: 'Luke Skywalker',
	Health: 100,
	Attack: 12,
	cAttack: 12,
	image: skywalker,
	battle: function() {

		this.Attack = this.Attack + 12;
	},

};

var obi = {
	Name: 'Obi Wan Kenobi',
	Health: 120,
	Attack: 10,
	cAttack: 10,
	image: kenobi,
	battle: function() {

		//this.Health = this.Health - ;
		this.Attack = this.Attack + 10;

	},

};
var sidious = {
	Name: 'Darth Sidious',
	Health: 150,
	Attack: 15,
	cAttack: 15,
	image: palpatine,	
	battle: function() {

		//this.Health = this.Health - ;
		this.Attack = this.Attack + 15;
	},

};
var maul = {
	Name: 'Darth Maul',
	Health: 100,
	Attack: 20,
	cAttack: 20,
	image: redAlien,
	battle: function() {

		//this.Health = this.Health - ;
		this.Attack = this.Attack + 10
	}

};	

var heroArray = [luke, obi, sidious, maul]
var lukeSkywalker = $('#lukeSkywalker');
var obiWanKenobi = $('#obiWanKenobi');
var darthMaul = $('#darthMaul');
var angryRedAlienDude = $('#angryRedAlienDude');
var mainChar = false;
var enemyChar =false; 

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
		if ($(this).hasClass('lightSide')) {
		$('.background').addClass('backgroundL');
		$('.background').removeClass('background');
	} else {
		$('.background').addClass('backgroundD');
		$('.background').removeClass('background');	
	};

	if (mainChar === false) {

		$(this).appendTo($('.mainCharPool'));
		$(this).addClass('mainChar');
		$(this).removeClass('character');



		mainChar = true;
		return mainChar;
	};

	if (enemyChar === false && mainChar === true) {

		$(this).appendTo($('.enemyCharPool'));
		$(this).addClass('enemyChar');
		$(this).removeClass('character');

		enemyChar = true;
	};
});





//Combat Mechanics
$('.button').on('click', function() {
	
	if ($('.mainChar').has('#lukeSkywalker')) {
			luke.battle();
			console.log(luke.Attack);
		} else if ($('.mainChar').has('#obiWanKenobi')) {
			obi.battle();
			console.log(obi.Attack);
		} else if ($('.mainChar').has('#darthSidious')) {
			sidious.battle();
			console.log(sidious.Attack);
		} else if ($('.mainChar').has('#angryRedAlienDude')) {
			maul.battle();
			console.log(maul.Attack);
	};
	
	if ($('.enemyChar').has('#lukeSkywalker')) {
	 		luke.counter();
	 	} else if ($('.mainChar').has('#obiWanKenobi')) {
			obi.counter();
	 	} else if ($('.mainChar').has('#darthSidious')) {
	 		sidious.counter();
	 	} else if ($('.mainChar').has('#angryRedAlienDude')) {
	 		maul.counter();
	};

 