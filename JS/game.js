document.getElementById("currentlocation").value=get_hero_position();
document.getElementById("energy").value=get_energy();

// get the coordinates of the position the hero is at
function get_hero_position(){
	return hero.row_coordinate + ", " + hero.column_coordinate;
}

// update location of the hero
 function updateloc(){
 	document.getElementById("currentlocation").value=get_hero_position();	
 }

// get the amount of energy the hero has left
function get_energy(){
	return hero.energy;
}
// decrement energy by one
function update_energy(){
	hero.energy--;
	document.getElementById("energy").value = get_energy();
}

function movement()
{
	updateloc();
	bog(); //Checks to see if moving into a bog. We can change this later
	       //such that it checks for all types of terrain 
	update_energy();
	noEnergy();
	win_game();
	encounter_power_bar();	// Checks to see if hero has found a power bar
}

// TODO should i call the graphic movement functions from these functions below?
// that's what makes sense to me as the hero shouldn't be able to graphically move if
// they aren't legally allowed to

// ALSO, im not currently adding to the list of visited cells

 function move_up()
{
  // do we need to check if there is enough energy to move here?
   if (hero.row_coordinate == (mapSize - 1)) // if at top of map
    hero.row_coordinate = 0;
  else
    hero.row_coordinate += 1;
   move_hero_up_graph();
   display_one_block_around(hero.row_coordinate, hero.column_coordinate);
   movement();
}
 function move_left()
{
  if (hero.column_coordinate == 0) // at left edge of map
    hero.column_coordinate = (mapSize - 1);
  else
    hero.column_coordinate -= 1;
   move_hero_left_graph();
   display_one_block_around(hero.row_coordinate, hero.column_coordinate);
   movement();
}
 function move_right()
{
  if (hero.column_coordinate == (mapSize-1)) // at right edge of map
    hero.column_coordinate = 0;
  else
    hero.column_coordinate += 1;
   move_hero_right_graph();
   display_one_block_around(hero.row_coordinate, hero.column_coordinate);
   movement();
}
 function move_down()
{
  if (hero.row_coordinate == 0) // if at bottom of map
    hero.row_coordinate = (mapSize - 1);
  else
    hero.row_coordinate -= 1;
   move_hero_down_graph();
   display_one_block_around(hero.row_coordinate, hero.column_coordinate);
   movement();
}

//Function for hero movement in a bog. If their energy is less than 3,
//game over, otherwise walking into a bog take two energy points
function bog()
{
	if (hero.energy < 3) {
            alert("You don't have enough energy to get out!");
            game_over();
        }

        //alert("You are in a bog, extra energy consumed!");
        hero.energy--;
    
}
