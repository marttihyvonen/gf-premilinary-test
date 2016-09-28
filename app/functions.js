function getAgeRange() {
	ages = [];
	for(var i = 18; i < 100; i++) {
		ages[ages.length] = i;
	}
	return ages;
}



function generatePersons(amount) {
	
	var users = [];
	
	for(var i = 0; i < amount; i++) {
		users[users.length] = randomPerson();
	}
	
	return users;
}

function randomPerson() {
	var sexes = ["Male","Female"];
	
	var user = Object();
	user.id = generateId();
	
	user.gender = sexes[randomNumberBetween(0,1)];
	
	if(user.gender == "Female") {
		user.name = names['female'][randomNumberBetween(0,names['female'].length-1)];
	} else {
		user.name = names['male'][randomNumberBetween(0,names['male'].length-1)];
	}
	
	user.name += " " + names['surname'][randomNumberBetween(0,names['surname'].length-1)];
	
	user.age = randomNumberBetween(18,99).toString();
	user.edit_mode = false;
	
	return user;
}


function randomNumberBetween(range_start, range_end) {
	return Math.round((Math.random() * (range_end - range_start) + range_start));
}


function generateId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}