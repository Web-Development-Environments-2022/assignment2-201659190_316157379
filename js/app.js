var context;
var shape = new Object();
var monsterShape = new Object(); // delete after finish the monster array

var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var current_user = "";
var food1Point = 5;
var food2Point = 15;
var food3Point = 25;
var striks;
var faceDirect = [30, 0.15 * Math.PI, 1.85 * Math.PI, 5, 15, 5, 0, 2 * Math.PI];
var music = new Audio("./audio/pacman2.wav");
var bonusTime = 10;
var cnt = 121;
pac_color = "yellow";
var hourGlass = new Image();
hourGlass.src = "./Images/hourglass.png";
hourGlass.onerror = function(){
	alert("img error");
}
var activeMonsters;
var monsters






$(document).ready(function() 
{
	checkRegisteration();
	validateLoginInput();
	CheckSetting();
	// Welcome();
	Game_page();
});



function Start() {
	activeMonsters = new Array();
	up_arrow.value = key_play.up;
	down_arrow.value = key_play.down;
	right_arrow.value = key_play.right;
	left_arrow.value = key_play.left;
	food1_color.value = game_food_color.color1
	food2_color.value = game_food_color.color2
	food3_color.value = game_food_color.color3
	food_amount.value = game_food;
	time_count.value = game_time;
	monsters_amount.value = monster_number; 
	striks = 5;
	time_elapsed = game_time;
	board = new Array();
	score = 0;
	var food1 = Math.round(0.6*game_food);
	var food2 = Math.round(0.3*game_food);
	var food3 = Math.round(0.1*game_food);
	var pacman_remain = 1;
	monsters = parseInt(monster_number);
	food = game_food;

	// add ghosts to defualt location
	for (var k=0; k < monsters; k++)
	{
		activeMonsters.push(monstersLocation[k]);
		// board[activeMonsters[k].i, activeMonsters[k].j] = 5;
		// alert(activeMonsters[k].j);
	}


	for (var i = 0; i < 11; i++) {

		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 11; j++) 
		{
			// skip on all monsters location
			// if (i === activeMonsters[k].i && j === activeMonsters[k])
			// {
			// 	continue;
			// }
			var obj = activeMonsters.find(obj => obj.i === i && obj.j === j);
			if(obj !== undefined)
			{
				board[i][j] = 5;
			}
			else if ((i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2) ||
				(i == 8 && j == 8) ||
				(i == 7 && j == 8) ||
				(i == 6 && j == 8) ||
				(i == 6 && j == 8)
			) {
				// 4 indicate wall
				board[i][j] = 4;
			}
			else 
			{
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food1) / cnt) 
				{
					food1--;
					// 1.1 indicate food1
					board[i][j] = 1.1;
				} 
				else if (randomNum <= (1.0 * food2) / cnt) 
				{
					food2--;
					// 1.2 indicate food2
					board[i][j] = 1.2;
				} 
				else if (randomNum <= (1.0 * food3) / cnt) 
				{
					food3--;
					// 1.3 indicate food3
					board[i][j] = 1.3;
				
				} 
				else if (randomNum < (1.0 * (pacman_remain + (food1+food2+food3))) / cnt) 
				{
					shape.i = i;
					shape.j = j;
					pacman_remain--;
					board[i][j] = 0;
					

				} else {
					// 0 indicate empty location
					board[i][j] = 0;
				}
			}
			cnt--;
		}
	}
	board[shape.i][shape.j] = 2;
	while (food1 > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1.1;
		food1--;
	}
	while (food2 > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1.2;
		food2--;
	}
	while (food3 > 0) {
		var emptyCell = findRandomEmptyCell(board);
		board[emptyCell[0]][emptyCell[1]] = 1.3;
		food3--;
	}

	// add hourglass to canvas to add time to pacman if he eat it
	var emptyCell = findRandomEmptyCell(board);
	board[emptyCell[0]][emptyCell[1]] = 3;



	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.key] = true;

		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.key] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 100);// 250
	intervalMonster = setInterval(GhostMove, 300);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 10 + 1);
	var j = Math.floor(Math.random() * 10 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 10 + 1);
		j = Math.floor(Math.random() * 10 + 1);
	}
	return [i, j];
}


function GetKeyPressed() {
		//up
		if (keysDown[key_play.up]) {
			
			return 1;
		}
		//down
		if (keysDown[key_play.down]) {
			return 2;
		}
		//left
		if (keysDown[key_play.left]) {
			return 3;
		}
		//right
		if (keysDown[key_play.right]) {
			return 4;
		}
}

function Draw() {
	// music.play();
	context.clearRect(0, 0, canvas.width, canvas.height); //clean board
	// canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	lblstrikes.value = striks;
	for (var i = 0; i < 11; i++) {
		for (var j = 0; j < 11; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			// shape and color of pacman
			if (board[i][j] == 2) 
			{
				context.beginPath();
				// pacman body
				context.arc(center.x, center.y, faceDirect[0], faceDirect[1], faceDirect[2]); // half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				// pacman eyes
				context.arc(center.x + faceDirect[3], center.y - faceDirect[4],
							faceDirect[5], faceDirect[6], faceDirect[7]);
				context.fillStyle = "black"; //color
				context.fill();
				// shapes and color of the foods
			} else if (board[i][j] == 1.1) 
			{
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = game_food_color.color1; //color
				context.fill();
			} else if (board[i][j] == 1.2) 
			{
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = game_food_color.color2; //color
				context.fill();
			} else if (board[i][j] == 1.3) 
			{
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = game_food_color.color3; //color
				context.fill();
			} 
			// hourglass that grent time bonus
			else if (board[i][j] == 3) 
			{
					context.drawImage(hourGlass, center.x - 10, center.y - 15, 25, 35);
			}
			// shape and color of the wells
			 else if (board[i][j] == 4) 
			 {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "black"; //color
				context.fill();
			}
			else if(board[i][j] == 5)
			{
				drawGhost(context, center);
			}
		}
	}
}

function UpdatePosition() 
{
	board[shape.i][shape.j] = 0;
	
	var x = GetKeyPressed();
	if (x == 1) { //up
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
			faceDirect = [30, 1.65 * Math.PI, 1.35 * Math.PI, 15, 10, 5, 0, 2 * Math.PI];
		}
	}
	if (x == 2) { //down
		if (shape.j < 10 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
			faceDirect = [30, 0.65 * Math.PI, 0.35 * Math.PI, 15, 0, 5, 0, 2 * Math.PI];
		}
	}
	if (x == 3) { //left
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
			faceDirect = [30, 1.15 * Math.PI, 0.85 * Math.PI, -5, 15, 5, 0, 2 * Math.PI];
		}
	}
	if (x == 4) { //right
		if (shape.i < 10 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
			faceDirect = [30, 0.15 * Math.PI, 1.85 * Math.PI, 5, 15, 5, 0, 2 * Math.PI];
		}
	}

	/// remind the user he have 10 seconds to finsih the game
	if ( time_elapsed <= game_time * 0.1) {
		pac_color = "green";
	}
	var food1 = Math.round(0.6*game_food);
	var food2 = Math.round(0.3*game_food);
	var food3 = Math.round(0.1*game_food);
	
	if (score === (food1 * food1Point + food2 * food2Point + food3 * food3Point)) {
		window.clearInterval(interval);
		window.clearInterval(intervalMonster);
		window.alert("Winner");	
		// music.pause();
		Welcome();
	}
	else if(time_elapsed <= 0 || striks === 0)
	{
		if (time_elapsed <= 0)
		{
			time_count.value = 0;
		}
		if(score < 100)
		{
			alert("You are better than " + score + " points")
		}
		else
		{
			window.alert("Loser");
		}
		window.clearInterval(interval);
		window.clearInterval(intervalMonster);
		music.pause();
		Welcome();
	}


	// for(var k = 0; k < monsters;)
	// {

	// }


	// pacman get eaten by ghost
	else if(shape.i === monsterShape.i && shape.j === monsterShape.j)
	{
		window.clearInterval(interval);
		window.clearInterval(intervalMonster);
		alert("you get eaten");
		striks--;
		if(score <= 10)
		{
			score = 0
		}
		else
		{
			score = score - 10;
		}
		if (lastCell == 2)
		{
			lastCell = 0;
		}
		lblstrikes.value = striks;
		board[monsterShape.i][monsterShape.j] = lastCell;
		monsterShape.i = 0;
		monsterShape.j = 0;
		board[monsterShape.i][monsterShape.j] = 0;
		interval = setInterval(UpdatePosition, 100);// 250
		intervalMonster = setInterval(GhostMove, 300);

		time_elapsed = time_elapsed - 0.1;
		Draw();
	}
	else 
	{
	// score configuration
		if (board[shape.i][shape.j] == 1.1) {
			score = score + food1Point;
		} else if(board[shape.i][shape.j] == 1.2) {
			score = score + food2Point;
		} else if(board[shape.i][shape.j] == 1.3) {
			score = score + food3Point;
		}
		//pacman get bonus time when he ate the hourglass
		if(board[shape.i][shape.j] == 3)
		{
			time_elapsed = time_elapsed + bonusTime;
		}
		board[shape.i][shape.j] = 2;
		time_elapsed = time_elapsed - 0.1;
		Draw();
	}
}




