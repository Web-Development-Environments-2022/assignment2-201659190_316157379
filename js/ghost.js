lastCell = 0;

function GhostMove()
{
    diffX = Math.abs(monsterShape.i - shape.i);
    diffY = Math.abs(monsterShape.j - shape.j);
	board[monsterShape.i][monsterShape.j] = lastCell;
	if (shape.i < monsterShape.i)
	{ //up
		if (board[monsterShape.i-1][monsterShape.j] != 4) 
		{
			monsterShape.i--;
		}
		else if(board[monsterShape.i][monsterShape.j+1] != 4)
		{
			monsterShape.j++;
		}
		else if(board[monsterShape.i][monsterShape.j-1] != 4)
		{
			monsterShape.j--;
		}
	}
	else if (shape.i > monsterShape.i)
	{ //down
		if (board[monsterShape.i+1][monsterShape.j] != 4) 
		{
			monsterShape.i++;
		}
		else if(board[monsterShape.i][monsterShape.j+1] != 4)
		{
			monsterShape.j++;
		}
		else if(board[monsterShape.i][monsterShape.j-1] != 4)
		{
			monsterShape.j--;
		}
	}
	else if (shape.j > monsterShape.j)
	{ //right
		if (board[monsterShape.i][monsterShape.j + 1] != 4) 
		{
			monsterShape.j++;
		}
		else if(board[monsterShape.i+1][monsterShape.j] != 4)
		{
			monsterShape.i++;
		}
		else if(board[monsterShape.i-1][monsterShape.j] != 4)
		{
			monsterShape.i--;
		}
	}
	else if (shape.j < monsterShape.j)
	{ //left
		if (board[monsterShape.i][monsterShape.j - 1] != 4) 
		{
			monsterShape.i--;
		}
		else if(board[monsterShape.i+1][monsterShape.j] != 4)
		{
			monsterShape.i++;
		}
		else if(board[monsterShape.i-1][monsterShape.j] != 4)
		{
			monsterShape.i--;
		}
	}
    lastCell = board[monsterShape.i][monsterShape.j];
	board[monsterShape.i][monsterShape.j] = 5;
}

function drawGhost(ctx, center) 
{
	ctx.beginPath();
	ctx.strokeStyle="black";
	ctx.lineWidth="1";
	ctx.fillStyle="rgba(255, 255, 255, 0.4)";
	ctx.beginPath(); //upper part
	ctx.moveTo(center.x, center.y);
	ctx.quadraticCurveTo(center.x + 15, center.y - 70, 2*center.x + 30, 2*center.y);
	ctx.moveTo(center.x, center.y);
	ctx.lineTo(center.x + 30, center.y);
	ctx.strokeStyle = 'black';
	ctx.stroke();
	ctx.fill();
	ctx.closePath();
	ctx.fillStyle = "#000000"; // eye circles
	ctx.beginPath();
	ctx.arc(center.x + 10, center.y - 20, 2, 0, Math.PI * 8, true);
	ctx.strokeStyle = 'black';
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.arc(center.x + 18, center.y - 20, 2, 0, Math.PI * 8, true);
	ctx.strokeStyle = 'black';
	ctx.stroke();
	ctx.fill();
}