lastCell = [0, 0, 0, 0];

var monstersLocation = [
	{
		i: 0,
		j: 0
	},
	{
		i: 0,
		j: 14
	},
	{
		i: 14,
		j: 0
	},
	{
		i: 14,
		j: 14
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
ghost4.src = "./Images/pink_ghost.png";
ghost4.onerror = function(){
	alert("img4 error");
}

var ghosts = [ghost1, ghost2, ghost3, ghost4];

// var ghosts = [
// 	{
// 		image: ghost1,
// 		i: 0,
// 		j: 0 
// 	},
// 	{
// 		image: ghost1,
// 		i: 0,
// 		j: 14 
// 	},
// 	{
// 		image: ghost1,
// 		i: 14,
// 		j: 0 
// 	},
// 	{
// 		image: ghost1,
// 		i: 14,
// 		j: 14 
// 	}
// ];

function GhostMove()
{
    // diffX = Math.abs(activeMonsters.i - shape.i);
    // diffY = Math.abs(activeMonsters.j - shape.j);
	for(var k = 0; k < monsters; k++)
	{
		diffX = Math.abs(activeMonsters[k].i - shape.i);
		diffY = Math.abs(activeMonsters[k].j - shape.j);
		board[activeMonsters[k].i][activeMonsters[k].j] = lastCell[k];
		//pacman is up
		if (shape.i < activeMonsters[k].i )
		{ 
			// ghost need to go up
			if (activeMonsters[k].i > 0 && board[activeMonsters[k].i-1][activeMonsters[k].j] != 4) 
			{
				activeMonsters[k].i--;
			}
			// ghost need to go right
			else if(activeMonsters[k].j < cnt_squere-1 && board[activeMonsters[k].i][activeMonsters[k].j+1] != 4)
			{
				activeMonsters[k].j++;
			}
			//// ghost need to go left
			else if(activeMonsters[k].j > 0 && board[activeMonsters[k].i][activeMonsters[k].j-1] != 4)
			{
				activeMonsters[k].j--;
			}
		}
		//pacman is down
		else if (shape.i > activeMonsters[k].i)
		{ 
			// ghost need to go down
			if (activeMonsters[k].i < cnt_squere-1 && board[activeMonsters[k].i+1][activeMonsters[k].j] != 4) 
			{
				activeMonsters[k].i++;
			}
			// ghost need to go right
			else if(activeMonsters[k].j < cnt_squere-1 && board[activeMonsters[k].i][activeMonsters[k].j+1] != 4)
			{
				activeMonsters[k].j++;
			}
			// ghost need to go left
			else if(activeMonsters[k].j > 0 && board[activeMonsters[k].i][activeMonsters[k].j-1] != 4)
			{
				activeMonsters[k].j--;
			}
		}
		//pacman is right
		else if (shape.j > activeMonsters[k].j)
		{ 
			// ghost need to go right
			if (activeMonsters[k].j < cnt_squere-1 && board[activeMonsters[k].i][activeMonsters[k].j + 1] != 4) 
			{
				activeMonsters[k].j++;
			}
			// ghost need to go down
			else if(activeMonsters[k].i < cnt_squere-1 && board[activeMonsters[k].i+1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i++;
			}
			// ghost need to go up
			else if(activeMonsters[k].i > 0 && board[activeMonsters[k].i-1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i--;
			}
		}
		//pacman is left
		else if (shape.j < activeMonsters[k].j)
		{ 
			// ghost need to go left
			if (activeMonsters[k].j > 0 && board[activeMonsters[k].i][activeMonsters[k].j - 1] != 4) 
			{
				activeMonsters[k].j--;
			}
			// ghost need to go down
			else if(activeMonsters[k].i < cnt_squere-1 && board[activeMonsters[k].i+1][activeMonsters[k].j] != 4)
			{
				activeMonsters[k].i++;
			}
			// ghost need to go up
			else if(activeMonsters[k].i > 0 && board[activeMonsters[k].i-1][activeMonsters[k].j] != 4)
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

function drawGhost(ctx, center, ghost_img) 
{
		ctx.drawImage(ghost_img, center.x - 18, center.y - 20, 35, 50);
}

function GetEaten()
{
	for(var k = 0; k < activeMonsters.length; k++)
	{
		if(activeMonsters[k].i == shape.i && activeMonsters[k].j == shape.j)
		{
			return true;
		}
	}
	return false;
}

function resetGhostsLocation()
{
	for(var k = 0; k < monsters; k++)
	{
		if(lastCell[k] != 2 || lastCell[k] != 5)
		{
			board[activeMonsters[k].i][activeMonsters[k].j] = lastCell[k];
		}
		activeMonsters[k].i = monstersLocation[k].i;
		activeMonsters[k].j = monstersLocation[k].j;
		board[activeMonsters[k].i][activeMonsters[k].j] = 5;
		lastCell[k] = 0;
	}
}