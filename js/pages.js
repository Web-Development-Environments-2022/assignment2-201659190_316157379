/////////////////////// welcome section ///////////////////////////
function Welcome()
{

	// window.localStorage.clear();
	if(current_user === "")
	{

		$(".screen").hide();
		$("#welcome_menu").show();
		if(getUser(users[0].username) === null)
		{
			setUserToStorage(users[0]);
		}
	}
	else
	{
		window.clearInterval(interval);
		music.pause();
		music.currentTime = 0;
		$(".screen").hide();
		$("#after_login").show();
	}

}
/////////////////////////////////////////////////////////////

/////////////////////// local storage ///////////////////////////

// get users from local storage
function getUser(username)
{
	var user = null;
	var keys = Object.keys(localStorage);
	for(var i = 0; i < keys.length; i++)
	{
		if(username === keys[i])
		{
			
			user = localStorage.getItem(keys[i]);
			user = (JSON.parse(user));
			break;
		}
	}
	return user;
}

function setUserToStorage(user)
{
	localStorage.setItem(user.username, JSON.stringify(user));
}
/////////////////////////////////////////////////////////////


/////////////////////// register section ///////////////////////////
function Register()
{
	window.clearInterval(interval);
	$(".screen").hide();
	$("#register_menu").show();
}

// register user to game
function NewUser()
{
	var username = document.querySelector("#reg_username").value;
	if (getUser(username) !== null)
	{
		alert("username exist in the system");
	}
	else
	{
		addUser();
		$(".screen").hide();
		$("#welcome_menu").show();
	}

	//clear the inputs after submit
	$('#register_form').each(function()
	{
		this.reset();
	});
}


// register user to game
function addUser()
{
    var user = document.querySelector("#reg_username").value;
    var pass = document.querySelector("#reg_password").value;
    var first_name = document.querySelector("#first_name").value;
    var last_name = document.querySelector("#last_name").value;
    var email = document.querySelector("#email").value;
    var birthdate = document.querySelector("#date").value;
    fullName = first_name.concat(" ", last_name);
    var user = {
        username: user, 
        password: pass, 
        full_name: fullName, 
        email: email, 
        birthdate: birthdate,
    };
    // users.push(user);
	setUserToStorage(user);
    alert("User added to game");
}

/////////////////////////////////////////////////////////////


/////////////////////// login section ///////////////////////////
function Login()
{
	window.clearInterval(interval);
	$(".screen").hide();
	$("#login_menu").show();
}

function CheckLogin()
{
	//clear the inputs after submit
	var username = document.querySelector("#username").value;
	var password = document.querySelector("#password").value;
	user = getUser(username);
	if(user !== null)
	{
		if(user.password === password)
		{
			current_user = user.username;
			$(".screen").hide();
			$("#after_login").show();
			document.getElementById("userToPut").innerHTML = "User: " + current_user;
			document.getElementById("userToPut2").innerHTML = "User: " + current_user;
		}
		else
		{
			alert("username or passowrd not correct");
		}
	}
	else
	{
		alert("username or passowrd not correct");
	}
	$('#login_form').each(function()
	{
		this.reset();
	});
}


////////////////////////////////////////////////////////////////////


/////////////////////// logout section ///////////////////////////

function Logout()
{
	current_user = "";
	$(".screen").hide();
	$("#welcome_menu").show();
}


////////////////////////////////////////////////////////////////////



/////////////////////// setting section ///////////////////////////
function Setting()
{
	document.getElementById("up_button").innerHTML = key_play.up;
	document.getElementById("down_button").innerHTML = key_play.down;
	document.getElementById("right_button").innerHTML = key_play.right;
	document.getElementById("left_button").innerHTML = key_play.left;
	document.getElementById("game_food").value = game_food;
	document.getElementById("game_time").value = game_time;
	document.getElementById("monster_number").value = monster_number;
	document.getElementById("ball1_color").value = game_food_color.color1;
	document.getElementById("ball2_color").value = game_food_color.color2;
	document.getElementById("ball3_color").value = game_food_color.color3;
	$(".screen").hide();
	$("#setting_menu").show();
}

function UpButton()
{
	document.getElementById("up_button").innerHTML = "";
	// bind the button to function that "listen" to keyboard and when user click on key it
	// take it and unbind the button so no keys will be added
	$("#up_button").bind({
		keyup: function(e){
		document.getElementById("up_button").innerHTML = e.key;
		$("#up_button").unbind("keyup");
	}
	});

}

function DownButton()
{
	document.getElementById("down_button").innerHTML = "";
	$("#down_button").bind({
		keyup: function(e){
			document.getElementById("down_button").innerHTML = e.key;
			$("#down_button").unbind("keyup");
		}
	});
}

function RightButton()
{
	document.getElementById("right_button").innerHTML = "";
	$("#right_button").bind({
		keyup: function(e){
			document.getElementById("right_button").innerHTML = e.key;
			$("#right_button").unbind("keyup");
		}
	});
}

function LeftButton()
{
	document.getElementById("left_button").innerHTML = "";
	$("#left_button").bind({
		keyup: function(e){
			document.getElementById("left_button").innerHTML = e.key;
			$("#left_button").unbind("keyup");
		}
	});
}

function SaveSetting()
{
	key_play.up = document.getElementById("up_button").innerHTML;
	key_play.down = document.getElementById("down_button").innerHTML;
	key_play.right = document.getElementById("right_button").innerHTML;
	key_play.left = document.getElementById("left_button").innerHTML;
	game_food_color.color1 = document.querySelector("#ball1_color").value;
	game_food_color.color2 = document.querySelector("#ball2_color").value;
	game_food_color.color3 = document.querySelector("#ball3_color").value;
	game_food = document.querySelector("#game_food").value;
	game_time = document.querySelector("#game_time").value;
	monster_number = document.querySelector("#monster_number").value;
	Welcome();
}

function ResetSetting()
{
	key_play = {up: "ArrowUp", down: "ArrowDown", right: "ArrowRight", left: "ArrowLeft"};
	game_food_color = {color1: "#0000FF", color2: "#FF0000", color3: "#00FF00"};
	game_food = 50;
	game_time = 60;
	monster_number = 1;
	document.getElementById("up_button").innerHTML = key_play.up;
	document.getElementById("down_button").innerHTML = key_play.down;
	document.getElementById("right_button").innerHTML = key_play.right;
	document.getElementById("left_button").innerHTML = key_play.left;
	document.getElementById("game_food").value = game_food;
	document.getElementById("game_time").value = game_time;
	document.getElementById("monster_number").value = monster_number;
	document.getElementById("ball1_color").value = game_food_color.color1;
	document.getElementById("ball2_color").value = game_food_color.color2;
	document.getElementById("ball3_color").value = game_food_color.color3;
}
function RandomSetting()
{ 
	document.getElementById("up_button").innerHTML = "ArrowUp";
	document.getElementById("down_button").innerHTML = "ArrowDown";
	document.getElementById("right_button").innerHTML = "ArrowRight";
	document.getElementById("left_button").innerHTML = "ArrowLeft";
	document.getElementById("game_food").value = Math.floor(Math.random()*(90-50+1) + 50);
	document.getElementById("game_time").value = 60 + Math.floor(Math.random()*500);
	document.getElementById("monster_number").value = Math.floor(Math.random()*(4-1+1)+1);
	document.getElementById("ball1_color").value = "#" + Math.floor(Math.random()*16777215).toString(16);
	document.getElementById("ball2_color").value = "#" + Math.floor(Math.random()*16777215).toString(16);
	document.getElementById("ball3_color").value = "#" + Math.floor(Math.random()*16777215).toString(16);
}

///////////////////////////////////////////////////////////////////



/////////////////////// about section ///////////////////////////
function About() {
	window.clearInterval(interval);
	$("#about_menu").dialog({
		model: true,
		//autoOpen: false,
		title: "test",
		hight: 600,
		width: 800,
		draggable: false,
		resizable: false,
		closeOnEscape: true,
		show: 
		{
		effect: "blind",
		duration: 500
		},
		
		hide: 
		{
		effect: "explode",
		duration: 700
		},
		clickOutside: true,
		clickOutsideTrigger: ".dialog"
		
	});
	$( ".dialog" ).click(function() {
		$( "#about_menu" ).dialog( "open" );
	});


}
$.widget( "ui.dialog", $.ui.dialog, {
	options: {
	  clickOutside: true, // Determine if clicking outside the dialog shall close it
	  clickOutsideTrigger: "#about_menu" // Element (id or class) that triggers the dialog opening 
	},
  
	open: function() {
	  var clickOutsideTriggerEl = $( this.options.clickOutsideTrigger );
	  var that = this;
	  
	  if (this.options.clickOutside){
		// Add document wide click handler for the current dialog namespace
		$(document).on( "click.ui.dialogClickOutside" + that.eventNamespace, function(event){
		  if ( $(event.target).closest($(clickOutsideTriggerEl)).length == 0 && $(event.target).closest($(that.uiDialog)).length == 0){
			that.close();
		  }
		});
	  }
	  
	  this._super(); // Invoke parent open method
	},
	
	close: function() {
	  var that = this;
	  
	  // Remove document wide click handler for the current dialog
	  $(document).off( "click.ui.dialogClickOutside" + that.eventNamespace );
	  
	  this._super(); // Invoke parent close method 
	},  
  
  });
////////////////////////////////////////////////////////////////


/////////////////////// game section ///////////////////////////
function Game_page()
{
	window.clearInterval(interval);
	$(".screen").hide();
	$("#game_page").show();
	context = canvas.getContext("2d");
	Start();
}

///////////////////////////////////////////////////////////////