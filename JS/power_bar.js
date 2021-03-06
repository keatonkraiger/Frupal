// this function creates the power bar on the map at a random x,y location, is called once upon games start
function create_power_bar(){
    var row, column;
    var i = 0;
    var added = 0;
    while(i < mapSize*mapSize){
        row = Math.floor(Math.random()*(mapSize));
        column = Math.floor(Math.random()*(mapSize));

        // if this location contains other item already, loop again. default value for obstacle is "None"
        if(map[row][column].obstacle != "None"){
            ++i;
            continue;
        }
        else{
            map[row][column].obstacle = "Powerbar";
	    ++i;
	    ++added;
	    if(added == 5) // add up to 5 powerbar
              break;
        }
    }	
}

// function that removes the power bar from the map, this function is called once a power bar is purchased
function delete_power_bar(){
	remove_item_in_cell(hero.row_coordinate, hero.column_coordinate);
	map[hero.row_coordinate][hero.column_coordinate].obstacle = "None";
	powerbar.x = null;
	powerbar.y = null;
}
// this function asks the user if they want to purchase a powerbar once found
function encounter_power_bar(){
	if(map[hero.row_coordinate][hero.column_coordinate].obstacle == "Powerbar"){
		var ask = confirm("You found a power bar! It costs one whiffle and you will gain 20 units of energy. Would you like to purchase it?");
		var soundFlag = true;	
		if(ask == true)
		{
			// if the user says they want to purchase the power bar
			// but they do not have enough whiffles, they are notified
			if(hero.whiffles == 0){
				alert("You don't have enough whiffles to purchase a power bar!");	
			}
			else{
				if(soundFlag){
					var powerbar_sound = document.getElementById('powerbar_sound');
					powerbar_sound.pause();
					powerbar_sound.currentTime = 0;
					powerbar_sound.play();
					soundFlag = false;
				}
				hero.energy += 20;	
				hero.whiffles--;
				document.getElementById("whiffles").value = hero.whiffles;
				document.getElementById("energy").value = hero.energy;
				// remove the power bar once user purchases it
				delete_power_bar();	
		}
	}
}
}
