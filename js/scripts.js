function readData() {
	const dd = document.getElementById("dd").value; //get value of date inputted 
	const mm = document.getElementById("mm").value; //get value of month inputted 
	const yy = document.getElementById("yy").value; //get value of year inputted
	const male = document.getElementById("male").checked; //returns true if male button is selected and false if unselected
	const female = document.getElementById("female").checked; // returns true if female button is selected and false if unselected
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; //array for days
	const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //array for male Akan names
	const  femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //array for female Akan names
	const birthDate = new Date(mm + '/' + dd + '/' + yy);
	const  dayOfTheWeek = birthDate.getDay(); //calculation of day of the week

	if (dd <= 0 || dd > 31) { //ensures user enters a date and validates date entered for months with 31 days
		document.getElementById("error").innerText = "Please enter a valid date!" //shows error message by replacing the HTML content of id=error 
		document.getElementById("error").style.color = "red"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	} else if ((mm === "April" || mm === "June" || mm === "September" || mm === "November") && (dd <= 0 || dd > 30)) { //ensures user enters a date and validates date entered for months with 30 days
		document.getElementById("error").innerText = "Please enter a valid date!" //shows error message by replacing the HTML content of id=error 
		document.getElementById("error").style.color = "red"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	} else if (mm === "Select Month") { //ensures user selects a month
		document.getElementById("error").innerText = "Please select a month!" //shows error message by replacing the HTML content of id=error
		document.getElementById("error").style.color = "red"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	} else if (yy <= 0 || yy > 2021) { //ensures user enters a year and the year entered is valid and doesn't exceed 2020
		document.getElementById("error").innerText = "Please enter a valid year!" //shows error message by replacing the HTML content of id=error
		document.getElementById("error").style.color = "red"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	} else if ((mm === "February") && (dd <= 0 || dd > 29) && (0 == yy % 4)) { //sets limit for valid date for the month of February in a leap year to 29
		document.getElementById("error").innerText = "Please enter a valid date!" //shows error message by replacing the HTML content of id=error
		document.getElementById("error").style.color = "red"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	} else if ((mm === "February") && (dd <= 0 || dd > 28) && (0 != yy % 4)) { //sets limit for valid date for the month of February in a non-leap year to 28 
		document.getElementById("error").innerText = "Please enter a valid date!" //shows error message by replacing the HTML content of id=error
		document.getElementById("error").style.color = "red"
		document.getElementById("result").style.textAlign = "center"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	} else if (male === true) { //styling of results for a male user
		document.getElementById("result").innerHTML = "Hello, you were born on" + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + maleNames[dayOfTheWeek] + "!" //shows result by replacing the  HTML content in the id=result
		document.getElementById("result").style.color = "black"
		document.getElementById("result").style.padding = "10% 12% 10% 12%"
		document.getElementById("result").style.fontFamily = "'Poppins', sans-serif"
		document.getElementById("result").style.textAlign = "center"
	} else if (female === true) { //styling results of a female user
		document.getElementById("result").innerHTML = "Hello, you were born on a " + days[dayOfTheWeek] + ".\n" + "Your Akan name is " + femaleNames[dayOfTheWeek] + "!" //shows result by replacing the HTML content in the id=result
		document.getElementById("result").style.color = "black"
		document.getElementById("result").style.padding = "10% 12% 10% 12%"
		document.getElementById("result").style.fontFamily = "'Poppins', sans-serif"
		document.getElementById("result").style.textAlign = "center"
	} else if ((female === false) && (male === false)) { //ensures user selects at least one gender
		document.getElementById("error").innerText = "Please select gender!" //shows error message by replacing the HTML content of id=error
		document.getElementById("error").style.color = "red"
		document.getElementById("result").style.textAlign = "center"
		document.getElementById("result").fontFamily = "'Poppins', sans-serif"
	}
}