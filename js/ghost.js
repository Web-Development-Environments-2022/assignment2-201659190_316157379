var lastCell = [0, 0, 0, 0];
var lastSteps = [-1, -1, -1, -1];
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

function GhostMove()
{
	for(var k = 0; k < monsters; k++)
	{
		// diffX = Math.abs(activeMonsters[k].i - shape.i);
		// diffY = Math.abs(activeMonsters[k].j - shape.j);
		if(lastCell[k] == 2)
		{
			lastCell[k] = 0;
		}
		else
		{
			board[activeMonsters[k].i][activeMonsters[k].j] = lastCell[k];
		}
		//pacman is up
		if (shape.i < activeMonsters[k].i )
		{ 
			// ghost need to go up
			if (CheckStepUp(k))
			{
				activeMonsters[k].i--;
			}
			// ghost need to go right
			else if(CheckStepRight(k))
			{
				activeMonsters[k].j++;
			}
			//// ghost need to go left
			else if(CheckStepLeft(k))
			{
				activeMonsters[k].j--;
			}
		}
		//pacman is down
		else if (shape.i > activeMonsters[k].i)
		{ 
			// ghost need to go down
			if (CheckStepDown(k))
			{
				activeMonsters[k].i++;
			}
			// ghost need to go right
			else if(CheckStepRight(k))
			{
				activeMonsters[k].j++;
			}
			// ghost need to go left
			else if(CheckStepLeft(k))
			{
				activeMonsters[k].j--;
			}
		}
		//pacman is right
		else if (shape.j > activeMonsters[k].j)
		{ 
			// ghost need to go right
			if (CheckStepRight(k))
			{
				activeMonsters[k].j++;
			}
			// ghost need to go down
			else if(CheckStepDown(k))
			{
				activeMonsters[k].i++;
			}
			// ghost need to go up
			else if(CheckStepUp(k))
			{
				activeMonsters[k].i--;
			}
		}
		//pacman is left
		else if (shape.j < activeMonsters[k].j)
		{ 
			// ghost need to go left
			if (CheckStepLeft(k))
			{
				activeMonsters[k].j--;
			}
			// ghost need to go down
			else if(CheckStepDown(k))
			{
				activeMonsters[k].i++;
			}
			// ghost need to go up
			else if(CheckStepUp(k))
			{
				activeMonsters[k].i--;
			}
		}
		if(lastCell[k] !== 5)
		{
			lastCell[k] = board[activeMonsters[k].i][activeMonsters[k].j];
			board[activeMonsters[k].i][activeMonsters[k].j] = 5;
		}
	}
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

function CheckStepUp(k)
{
	if (activeMonsters[k].i > 0 && 
		board[activeMonsters[k].i-1][activeMonsters[k].j] != 4 &&
		board[activeMonsters[k].i-1][activeMonsters[k].j] != 5)
	{
		return true;
	}
	return false;
}

function CheckStepDown(k)
{
	if (activeMonsters[k].i < cnt_squere && 
		board[activeMonsters[k].i+1][activeMonsters[k].j] != 4 && 
		board[activeMonsters[k].i+1][activeMonsters[k].j] != 5)
	{
		return true;
	}
	return false;
}

function CheckStepRight(k)
{
	if (activeMonsters[k].j < cnt_squere && 
		board[activeMonsters[k].i][activeMonsters[k].j+1] != 4 && 
		board[activeMonsters[k].i][activeMonsters[k].j+1] != 5)
	{
		return true;
	}
	return false;
}

function CheckStepLeft(k)
{
	if (activeMonsters[k].j > 0 && 
		board[activeMonsters[k].i][activeMonsters[k].j-1] != 4 && 
		board[activeMonsters[k].i][activeMonsters[k].j-1] != 5)
	{
		return true;
	}
	return false;
}