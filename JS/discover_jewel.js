// Load the royal jewels into a random cell in the map.
function create_royal_jewel()
{
  //jewel.x = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  //jewel.y = Math.floor(Math.random()*(mapSize)); //max coordinate (24,24)
  //map[jewel.x][jewel.y].obstacle = "Jewel";  // use to display jewel image in the cell
}

// Get the x,y location of the royal jewels
function get_jewel_loc()
{
  return jewel.x +',' +jewel.y;
}

// If the hero's location equals the jewel's location, player wins the game
// Game ends once jewels are collected
function win_game()
{
  // TODO this if statement is changed for the demo to use '.obstacle' because
  // create_royal_jewel() isn't called in demo, so jewel.x & jewel.y aren't being set
  //if ( (eval(hero.row_coordinate) == eval(jewel.x)) && (eval(hero.column_coordinate) == eval(jewel.y)) )
  if (map[hero.row_coordinate][hero.column_coordinate].obstacle == "Jewel")
	  
  {
    var jewel_sound = document.getElementById('jewel_sound');
    var soundFlag = true;
    if(soundFlag)
    {
   	jewel_sound.pause();
	jewel_sound.currentTime = 0;
	jewel_sound.play();
	soundFlag = false;
    }
    alert("Royal Jewel Found! Game over.");
    game_over();
  }
}

// This assumes if the hero moves to the royal jewels with their last energy they win the game.
// Otherwise, the hero runs out of energy and loses the game.
function noEnergy() {
  if (hero.energy == 0 && ((eval(hero.row_coordinate) == eval(jewel.x)) && (eval(hero.column_coordinate) == eval(jewel.y))))
    return;
  if (hero.energy == 0) {
    alert ("You ran out of energy!");
    game_over();
    var noenergy_sound = document.getElementById('noenergy_sound');
    var soundFlag = true;
    if(soundFlag)
    {
   	noenergy_sound.pause();
	noenergy_sound.currentTime = 0;
	noenergy_sound.play();
	soundFlag = false;
    }
  }
}


