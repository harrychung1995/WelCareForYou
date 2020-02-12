var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

	// This function will display the specified tab of the form ...
function showTab(n) {
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	// ... and fix the Previous/Next buttons:
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 2)) {
		//document.getElementById("nextBtn").style.display = "none";
        document.getElementById("nextBtn").innerHTML = "Submit";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	// ... and run a function that displays the correct step indicator:
	fixStepIndicator(n)
}

//Next Previous button
function nextPrev(n) {    
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;    
	// Hide the current tab:
    if (currentTab != 2) {
        x[currentTab].style.display = "none";
    }
    if (currentTab == 2 && n == -1) {
        x[currentTab].style.display = "none";
    }
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
    if (currentTab >= (x.length-1)) {
        //...the form gets submitted:
        //document.getElementById("nextBtn").style.display = "none";
        currentTab = 2;
        document.getElementById("form1").submit();
        //return false;
    }
    else {
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }
	
}

//validate of the input
function validateForm() {
	// This function deals with validation of the form fields
	var x, y, i, valid = true;
	x = document.getElementsByClassName("tab");
	
	y = x[currentTab].getElementsByTagName("select");
	z = x[currentTab].getElementsByTagName("input");
	// A loop that checks every input field in the current tab:

    switch (currentTab) {
        case 0:
            if (y[0].value == "") {
                document.getElementById("invalidAge").style.display = "inline-block";
                document.getElementById("invalidAge").innerHTML = "Please select your age group";
                valid = false;
            }
            else if (y[0].value == "My age is below 50") {
                document.getElementById("invalidAge").style.display = "inline-block";
                document.getElementById("invalidAge").innerHTML = "Invalid";
                alert("Sorry, our target audience are those over 50+ years old. If you 'd like to get help, please go for other resources. Thank you");
                valid = false;
            }
            else {
                document.getElementById("invalidAge").style.display = "none";
            }

            if (y[1].value == "") {
                document.getElementById("invalidGender").style.display = "inline-block";
                document.getElementById("invalidGender").innerHTML = "Please select your gender";
                valid = false;
            }
            else {
                document.getElementById("invalidGender").style.display = "none";
            }
            break;

        case 1:
            if (y[0].value == "" ) {
                document.getElementById("invalidSuburb").style.display = "inline-block";
                document.getElementById("invalidSuburb").innerHTML = "Please select a suburb";
                valid = false;
            }
            else {
                document.getElementById("invalidSuburb").style.display = "none";
            }

            if (z[0].value == "") {
                document.getElementById("invalidSalary").style.display = "inline-block";
                document.getElementById("invalidSalary").innerHTML = "Enter your salary (Max value: 5,000)";
                valid = false;
            }
            else if (z[0].value > 5000) {
                document.getElementById("invalidSalary").style.display = "inline-block";
                document.getElementById("invalidSalary").innerHTML = "Invalid! The maximum salary is 5,000";
                valid = false;
            }
            else if (z[0].value < 0) {
                document.getElementById("invalidSalary").style.display = "inline-block";
                document.getElementById("invalidSalary").innerHTML = "Invalid! Only positive number is available";
                valid = false;
            }
            else {
                document.getElementById("invalidSalary").style.display = "none";
            }            
            break;

        case 2:
            if (z[0].value == "") {
                document.getElementById("invalidRent").style.display = "inline-block";
                valid = false;
            }
            else if (z[0].value > 5000) {
                document.getElementById("invalidRent").style.display = "inline-block";
                document.getElementById("invalidRent").innerHTML = "Invalid! The maximum rent is $5,000";
                valid = false;
            }
            else if (z[0].value < 0) {
                document.getElementById("invalidRent").style.display = "inline-block";
                document.getElementById("invalidRent").innerHTML = "Invalid! Only positive number is available";
                valid = false;
            }
            else {
                document.getElementById("invalidRent").style.display = "none";
            }           

            if (y[0].value == "") {
                document.getElementById("invalidRoom").style.display = "inline-block";
                document.getElementById("invalidRoom").innerHTML = "Please select the number of bedrooms you need.";
                valid = false;
            }
            else {
                document.getElementById("invalidRoom").style.display = "none";
            }            
            break;
        default:
        // code block
    } 

   
	// If the valid status is true, mark the step as finished and valid:
	if (valid) {
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	return valid; // return the valid status
}

	// This function removes the "active" class of all steps...
function fixStepIndicator(n) {

	var i, x = document.getElementsByClassName("step");
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	//... and adds the "active" class to the current step:
	x[n].className += " active";
}

