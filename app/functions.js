function get_age_range() {
	ages = [];
	for(var i = 18; i < 100; i++) {
		ages[ages.length] = i;
	}
	return ages;
}



function generate_users(amount) {
	
	var users = [];
	
	for(var i = 0; i < amount; i++) {
		users[users.length] = random_user();
	}
	
	return users;
}

function random_user() {
	
	var sexes = ["Male","Female","Not sure"];
	
	var first_names = ["John","David","Sarah","Linda"];
	var surnames = ["Doe","Connor", "McDavid","Smith"];
	
	var user = Object();
	user.id = generate_id();
	user.name = first_names[random_number_between(0,first_names.length-1)] + " " + 
		surnames[random_number_between(0,surnames.length-1)];
	
	user.gender = sexes[random_number_between(0,1)];
	user.age = random_number_between(18,99).toString();
	user.edit_mode = false;
	
	return user;
}


function random_number_between(range_start, range_end) {
	return Math.round((Math.random() * (range_end - range_start) + range_start));
}


function generate_id() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}