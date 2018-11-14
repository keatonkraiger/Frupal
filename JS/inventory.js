
// display inventory button onclick event: to display inventory block
$(".btn-inventory").click(function(){
    $("#inventory-list").slideToggle(300, change_btn_text);
});


/*
    The main function call to setup hero's inventory when clicked "start" or "continue" game.
*/
function setup_Inventory(){
    var num;
    for (x in hero.items){
        // if the item already added to the list, increase quantity by 1
        if(document.getElementById(hero.items[x])){
            num = $('#'+hero.items[x]+' .quantity').text();
            num = eval(num);
            ++num;
            $('#'+hero.items[x]+' .quantity').text(num);
        }

        // otherwise, add <li> element to inventory list with corrsponding name, quantity, and value.
        else{  
            $("#inventory-list").append("<li class='hero_item' id='" + hero.items[x] + "'>" +hero.items[x] + "&emsp;X<span class='quantity'>1</span>&emsp;(value: <span class='cost'>0</span> Whiffles)" + "</li>");
            $('#'+hero.items[x]+' .cost').text(get_purchase_value(hero.items[x]));  // set purchase value
        }
        
    }
}

// to return the purchase value of a specific item.
function get_purchase_value(item){
    if(item == "Axe"){
        return 10;
    }
    else if(item == "Shears"){
        return 20;
    }
    else if(item == "Pretty-Rock"){
        return 30;
    }
    else{
        return 1;  // default
    }
}


// to remove all items in the inventory and set hero.items to empty when "exit game"
function reset_Inventory(){
    $(".hero_item").remove();  // remove all <li> elements with class hero_item
    hero.items = [];  // empty item list
    if($(".btn-inventory").text() == "Hide Inventory"){
        $("#inventory-list").slideToggle(0, change_btn_text);
    }
}

// use to change button text between toggle
function change_btn_text(){
    if($(".btn-inventory").text() == "Display Inventory"){
        $(".btn-inventory").text("Hide Inventory");
    }
    else{
        $(".btn-inventory").text("Display Inventory");
    }
}
