lastCell = [0, 0, 0, 0];

var monstersLocation = [
	{
		i: 0,
		j: 0
	},
	{
		i: 0,
		j: 10
	},
	{
		i: 10,
		j: 0
	},
	{
		i: 10,
		j: 10
	},
];

var ghost1 = new Image();
ghost1.src = "./Images/regular_ghost.png";
ghost1.onerror = function(){
	alert("img1 error");
}

var ghost2 = new Image();
ghost2.src = "./Images/yellow_ghost.png";
ghost2.onerror = function(){
	alert("img2 error");
}

var ghost3 = new Image();
ghost3.src = "./Images/blue_ghost.png";
ghost3.onerror = function(){
	alert("img3 error");
}

var ghost4 = new Image();
ghost4.src = "./Images/pink_ghost.jpg";
ghost4.onerror = function(){
	alert("img4 error");
}

var ghosts = [ghost1, ghost2, ghost3, ghost4];


function GhostMove()
{
    // diffX = Math.abs(activeMonsters.i - shape.i);
    // diffY = Math.abs(activeMonsters.j - shape.j);
	for(var k = 0; k < monsters; k++)
	{
		board[activeMonsters[k].i][activeMonsters[k].j] = lastCell[k];
		if (shape.i < activeMonsters[k].i)
		{ //up
			if (board[activeMonsters[k].i-1][activeMonsters[k].j] != 4) 
			{
				activeMonsters[k].i--;
			}
			else if(board[activeMonsters[k].i][activeMonsters[k].j+1] != 4)
			{
				activeMonsters[k].j++;
			}
			else if(board[activeMonsters[k].i][activeMonsters[k].j-1] != 4)
			{
				activeMonsters[k].j--;
			}
		}
		else if (shape.i > activeMonsters[k].i)
		{ //down
			if (board[activeMonsters[k].i+1][activeMonsters[k].j] != 4) 
			{
				activeMonsters[k].i++;
			}
			else if(board[activeMonsters[k].i][activeMonsters[k].j+1] != 4)
			{
				activeMonsters[k].j++;
			}
			else if(board[activeMonsters[k].i][activeMonsters[k].j-1] != 4)
			{
				activeMonsters[k].j--;
			}
		}
		else if (shape.j > activeMonsters[k].j)
		{ //right
			if (board[activeMonsters[k].i][activeMonsters[k].j + 1] != 4) 
			{
				activeMonsters[k].j++;
			}
			else if(board[activeMonsters[k].i+1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i++;
			}
			else if(board[activeMonsters[k].i-1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i--;
			}
		}
		else if (shape.j < activeMonsters[k].j)
		{ //left
			if (board[activeMonsters[k].i][activeMonsters[k].j - 1] != 4) 
			{
				activeMonsters[k].i--;
			}
			else if(board[activeMonsters[k].i+1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i++;
			}
			else if(board[activeMonsters[k].i-1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i--;
			}
		}
		lastCell[k] = board[activeMonsters[k].i][activeMonsters[k].j];
		board[activeMonsters[k].i][activeMonsters[k].j] = 5;
	}
	// board[activeMonsters.i][activeMonsters.j] = lastCell;
	// if (shape.i < activeMonsters.i)
	// { //up
	// 	if (board[activeMonsters.i-1][activeMonsters.j] != 4) 
	// 	{
	// 		activeMonsters.i--;
	// 	}
	// 	else if(board[activeMonsters.i][activeMonsters.j+1] != 4)
	// 	{
	// 		activeMonsters.j++;
	// 	}
	// 	else if(board[activeMonsters.i][activeMonsters.j-1] != 4)
	// 	{
	// 		activeMonsters.j--;
	// 	}
	// }
	// else if (shape.i > activeMonsters.i)
	// { //down
	// 	if (board[activeMonsters.i+1][activeMonsters.j] != 4) 
	// 	{
	// 		activeMonsters.i++;
	// 	}
	// 	else if(board[activeMonsters.i][activeMonsters.j+1] != 4)
	// 	{
	// 		activeMonsters.j++;
	// 	}
	// 	else if(board[activeMonsters.i][activeMonsters.j-1] != 4)
	// 	{
	// 		activeMonsters.j--;
	// 	}
	// }
	// else if (shape.j > activeMonsters.j)
	// { //right
	// 	if (board[activeMonsters.i][activeMonsters.j + 1] != 4) 
	// 	{
	// 		activeMonsters.j++;
	// 	}
	// 	else if(board[activeMonsters.i+1][activeMonsters.j] != 4)
	// 	{
	// 		activeMonsters.i++;
	// 	}
	// 	else if(board[activeMonsters.i-1][activeMonsters.j] != 4)
	// 	{
	// 		activeMonsters.i--;
	// 	}
	// }
	// else if (shape.j < activeMonsters.j)
	// { //left
	// 	if (board[activeMonsters.i][activeMonsters.j - 1] != 4) 
	// 	{
	// 		activeMonsters.i--;
	// 	}
	// 	else if(board[activeMonsters.i+1][activeMonsters.j] != 4)
	// 	{
	// 		activeMonsters.i++;
	// 	}
	// 	else if(board[activeMonsters.i-1][activeMonsters.j] != 4)
	// 	{
	// 		activeMonsters.i--;
	// 	}
	// }
    // lastCell = board[activeMonsters.i][activeMonsters.j];
	// board[activeMonsters.i][activeMonsters.j] = 5;
}

function drawGhost(ctx, center) 
{
	for(var k = 0; k < monsters; k++)
	{
		ctx.drawImage(ghosts[k], center.x - 18, center.y - 20, 35, 50);

	}
	// ctx.beginPath();
	// ctx.strokeStyle="black";
	// ctx.lineWidth="1";
	// ctx.fillStyle="rgba(255, 255, 255, 0.4)";
	// ctx.beginPath(); //upper part
	// ctx.moveTo(center.x, center.y);
	// ctx.quadraticCurveTo(center.x + 15, center.y - 70, 2*center.x + 30, 2*center.y);
	// ctx.moveTo(center.x, center.y);
	// ctx.lineTo(center.x + 30, center.y);
	// ctx.strokeStyle = 'black';
	// ctx.stroke();
	// ctx.fill();
	// ctx.closePath();
	// ctx.fillStyle = "#000000"; // eye circles
	// ctx.beginPath();
	// ctx.arc(center.x + 10, center.y - 20, 2, 0, Math.PI * 8, true);
	// ctx.strokeStyle = 'black';
	// ctx.stroke();
	// ctx.fill();
	// ctx.beginPath();
	// ctx.arc(center.x + 18, center.y - 20, 2, 0, Math.PI * 8, true);
	// ctx.strokeStyle = 'black';
	// ctx.stroke();
	// ctx.fill();
}

function GetEaten()
{
	for(var k = 0; k < monsters; k++)
	{
		if(activeMonsters[k].i == shape.i && activeMonsters[k].j == shape.j)
		{
			return true;
		}
	}
	return false;
}