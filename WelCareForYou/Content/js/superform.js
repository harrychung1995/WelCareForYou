var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
	// This function will display the specified tab of the form ...	
	var x = document.getElementsByClassName("tab");
	x[n].style.display = "block";
	// ... and fix the Previous/Next buttons:
	if (n == 0) {
		document.getElementById("prevBtn").style.display = "none";
	} else {
		document.getElementById("prevBtn").style.display = "inline";
	}
	if (n == (x.length - 1)) {
		//document.getElementById("nextBtn").style.display = "none";
		document.getElementById("nextBtn").innerHTML = "Submit";
	} else {
		document.getElementById("nextBtn").innerHTML = "Next";
	}
	// ... and run a function that displays the correct step indicator:
	fixStepIndicator(n)
}

//check the validation of  radios and show invalid message
function validate(x, y) {
	if (document.getElementById(x).checked || document.getElementById(y).checked) {

		document.getElementsByClassName("step")[currentTab].className += " finish";
		return true;
	}

	else {
		switch (currentTab) {
			case 0:
				document.getElementById("EmptyDate").style.display = "none";
				document.getElementById("InvalidDate").style.display = "none";
				document.getElementById("invalidRetire").style.display = "inline-block";
				document.getElementById("invalidEmployed").style.display = "inline-block";
				break;

			case 1:

				break;

			case 2:
				document.getElementById("invalidFinancial").style.display = "inline-block";
				document.getElementById("invalid3.1").style.display = "inline-block";
				document.getElementById("invalid3.2").style.display = "inline-block";
				//document.getElementById("invalid3.3").style.display = "inline-block";
				break;
			case 3:
				document.getElementById("tmc").style.display = "inline-block";
				break;
			case 4:
				document.getElementById("temporaryIncapacity").style.display = "inline-block";
				break;
			case 5:
				document.getElementById("permanentIncapacity").style.display = "inline-block";
				break;
			case 6:

				document.getElementById("lowSuper2").style.display = "inline-block";
				break;

			default:
			// code block
		}

		return false;
	}
}

//check the validation of four sets of  radio buttons and go to next step
function nextPrevCheckFour(n, a, b, c, d, e, f, g, h) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	if (!validate(a, b))
		return false;

	if (!validate(c, d))
		return false;

	if (!validate(e, f))
		return false;
	if (!validate(g, h))
		return false;
	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {

		//submitResult();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
}


//check the validation of one set of radio buttons and go to next step
function nextPrevCheck(n, a, b) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	if (!validate(a, b)) return false;
	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {

		//submitResult();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
}

//check the validation of two sets of radio buttons and go to next step

function nextPrevCheckTwo(n, a, b, c, d) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	if (n == 1 && !validateForm()) {

		return false;
	}
	//not retire not been selected ; if user is  retired, the following question would not show so don't need the validation
	else if (document.getElementById(b).checked) {

		//if (!validate(a, b)) return false;
		if (!validate(c, d)) return false;
	}
	else if (!validate(a, b)) {
		return false;
	}
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {

		//submitResult();
		return false;
	}
	//color
	document.getElementsByClassName("step")[currentTab].className += " finish";
	// Otherwise, display the correct tab:
	showTab(currentTab);
}

//If user select CG1/2/3/4, unchecked CG5
function checkCG() {
	var CG1 = $("input[name='CG1']:checked").val();
	var CG2 = $("input[name='CG2']:checked").val();
	var CG3 = $("input[name='CG3']:checked").val();
	var CG4 = $("input[name='CG4']:checked").val();
	var CG5 = $("input[name='CG5']:checked").val();
	if ((CG1 == "CG1" || CG2 == "CG2" || CG3 == "CG3" || CG4 == "CG4") && CG5 == "CG5") {


		document.getElementById("CG5").checked = false;

		return false;
	}
}

//If user select CG5, unchecked CG1/2/3/4
function checkCG5() {
	var CG1 = $("input[name='CG1']:checked").val();
	var CG2 = $("input[name='CG2']:checked").val();
	var CG3 = $("input[name='CG3']:checked").val();
	var CG4 = $("input[name='CG4']:checked").val();
	var CG5 = $("input[name='CG5']:checked").val();
	if ((CG1 == "CG1" || CG2 == "CG2" || CG3 == "CG3" || CG4 == "CG4") && CG5 == "CG5") {

		document.getElementById("CG1").checked = false;
		document.getElementById("CG2").checked = false;
		document.getElementById("CG3").checked = false;
		document.getElementById("CG4").checked = false;


	}
	return true;
}

//checklist validation and  next function
function nextPrevChecklist(n) {
	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	// Exit the function if any field in the current tab is invalid:
	var CG1 = $("input[name='CG1']:checked").val();
	var CG2 = $("input[name='CG2']:checked").val();
	var CG3 = $("input[name='CG3']:checked").val();
	var CG4 = $("input[name='CG4']:checked").val();
	var CG5 = $("input[name='CG5']:checked").val();
	if (CG1 != "CG1" && CG2 != "CG2" && CG3 != "CG3" && CG4 != "CG4" && CG5 != "CG5") {

		document.getElementById("invalidCheckbox").style.display = "inline-block";
		return false;
	}
	else {
		//color
		document.getElementsByClassName("step")[currentTab].className += " finish";
	}
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {
		return false;
	}

	// Otherwise, display the correct tab:
	showTab(currentTab);
}

//go back to the previous step
function nextPrev(n) {
	document.getElementById("EmptyDate").style.display = "none";
	document.getElementById("InvalidDate").style.display = "none";
	document.getElementById("invalidRetire").style.display = "none";
	document.getElementById("invalidEmployed").style.display = "none";

	document.getElementById("invalidCheckbox").style.display = "none";
	document.getElementById("invalidFinancial").style.display = "none";
	document.getElementById("invalid3.1").style.display = "none";
	document.getElementById("invalid3.2").style.display = "none";
	//document.getElementById("invalid3.3").style.display = "none";
	document.getElementById("tmc").style.display = "none";

	document.getElementById("temporaryIncapacity").style.display = "none";

	document.getElementById("permanentIncapacity").style.display = "none";


	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");

	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {
		//...the form gets submitted:
		//document.getElementById("nextBtn").style.display = "none";
		//document.getElementById("regForm").submit();
		//submitResult();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
}

//date validation
function validateForm() {
	// This function deals with validation of the form fields

	var x, y, i, valid = true;
	x = document.getElementById("datePickerId");

	if (x.value.length == 0) {
		document.getElementById("InvalidDate").style.display = "none";
		document.getElementById("EmptyDate").style.display = "block";

		return false;
	}

	var str = x.valueAsDate;
	year = str.getFullYear();
	if (year <= 1900) {
		document.getElementById("EmptyDate").style.display = "none";
		document.getElementById("InvalidDate").style.display = "block";
		return false;

	}
	else {

		return true;

	}
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

//calculate the Perservation age
function showPerservationAge() {
	var dateInp = document.getElementById('datePickerId');
	var perservationAge;
	var strBirthdayArr = dateInp.valueAsDate;

	var birthYear = strBirthdayArr.getFullYear();
	var birthMonth = strBirthdayArr.getMonth() + 1;
	var birthDay = strBirthdayArr.getDate();
	if (birthYear > 1964) {
		perservationAge = 60;
	}

	else if (!checkRetire()) {
		document.getElementById("displayMessage").innerHTML = "Your retirement age...";
		 perservationAge = 65;
		document.getElementById("displayPerservationAge").innerHTML = perservationAge;
		return perservationAge;
	}
	
	else if (birthYear == 1960 && birthMonth < 7) {
		perservationAge = 55;
	}
	
	else if (birthYear == 1960 && birthMonth >= 7) {
		perservationAge = 56;
	}
	else if (birthYear == 1961 && birthMonth <= 6) {
		perservationAge = 56;
	}
	else if (birthYear == 1961 && birthMonth >= 7) {
		perservationAge = 57;
	}
	else if (birthYear == 1962 && birthMonth <= 6) {
		perservationAge = 57;

	}
	else if (birthYear == 1962 && birthMonth >= 7) {
		perservationAge = 58;
	}

	else if (birthYear == 1963 && birthMonth <= 6) {
		perservationAge = 58;
	}
	else if (birthYear == 1963 && birthMonth >= 7) {
		perservationAge = 59;
	}
	else if (birthYear == 1964 && birthMonth <= 6) {
		perservationAge = 59;
	}
	else if (birthYear == 1964 && birthMonth > 6) {
		perservationAge = 60;
	}
	else if (birthYear < 1960 ) {
		perservationAge = 55;
	}
	//alert(perservationAge);
	document.getElementById("displayMessage").innerHTML = "Your perservation age";
	document.getElementById("displayPerservationAge").innerHTML = perservationAge;

	return perservationAge;
}

//calculate the current age
function showAge() {
	//var x = document.getElementsByClassName("tab");
	var dateInp = document.getElementById('datePickerId');
	//document
	//alert(dateInp.valueAsDate);
	var returnAge;

	var strBirthdayArr = dateInp.valueAsDate;

	var birthYear = strBirthdayArr.getFullYear();
	var birthMonth = strBirthdayArr.getMonth() + 1;
	var birthDay = strBirthdayArr.getDate();

	d = new Date();
	var nowYear = d.getFullYear();
	var nowMonth = d.getMonth() + 1;
	var nowDay = d.get;

	if (nowYear == birthYear) {
		returnAge = 0;
	}
	else {
		var ageDiff = nowYear - birthYear;
		if (ageDiff > 0) {
			if (nowMonth == birthMonth) {
				var dayDiff = nowDay - birthDay;
				if (dayDiff < 0) {
					returnAge = ageDiff - 1;

				}
				else {
					returnAge = ageDiff;
				}
			}
			else {
				var monthDiff = nowMonth - birthMonth;
				if (monthDiff < 0) {
					returnAge = ageDiff - 1;
				}
				else {
					returnAge = ageDiff;
				}
			}
		}
		else {
			returnAge = -1;
		}
	}

	return returnAge;
}

// calculate whether reach preservation age + 39 weeks
function comparePreAndAge() {
	var dateInp = document.getElementById('datePickerId');
	var returnAge;
	var strBirthdayArr = dateInp.valueAsDate;

	var perYear = strBirthdayArr.getFullYear() + showPerservationAge();
	var perMonth = strBirthdayArr.getMonth() + 1;
	var perDay = strBirthdayArr.getDate();

	var preDate = new Date(perYear, perMonth, perDay);
	document.getElementById('displayPerservationDate').innerHTML = perDay + "/" + perMonth + "/" + perYear;
	
	d = new Date();
	var difference = parseInt(d - preDate) / (24 * 3600 * 1000);
	if (difference > 273) {

		return true;
	}
	else {
		return false;
	}

}

//show the reslt section bases on user's input in the first step (different situation bases on their age)
function show() {
	comparePreAndAge();

	if (!validateForm()) {
		return false;
	}

	
	if (showAge() < 15 && !comparePreAndAge()) {
		
		var previous = document.getElementById("SuperQuestionnair");
		previous.style.display = "none";
		var previous = document.getElementById("SuperIntro");
		previous.style.display = "none";
		document.getElementById("displayPerservationAge").innerHTML = 60;
		var section2 = document.getElementById("SuperResultIneligible");
		section2.style.display = "block";

		var dateInp = document.getElementById('datePickerId');
		var age = document.getElementById("AgeSectionFalse");
		
		age.style.display = "block";
		
		document.getElementById('SuperResultIneligible').scrollIntoView({
			behavior: 'smooth'
		});
	}

	if (showAge() >= 65) {
		//alert('test');
		var previous = document.getElementById("SuperQuestionnair");
		previous.style.display = "none";
		var result = document.getElementById("SuperResultEligible");
		result.style.display = "block";
		var section1 = document.getElementById("AgeSectionTrue");
		section1.style.display = "block";
		var intro = document.getElementById("SuperIntro");
		intro.style.display = "none";
		document.getElementById('SuperResultEligible').scrollIntoView({
			behavior: 'smooth'
		});
	}

	// age reach perservation age and user already retired
	if (showAge() >= showPerservationAge() && checkRetire()) {
		//comparePreAndAge();
		var previous = document.getElementById("SuperIntro");
		previous.style.display = "none";
		var previous = document.getElementById("SuperQuestionnair");
		previous.style.display = "none";
		var result = document.getElementById("SuperResultEligible");
		result.style.display = "block";
		var section1 = document.getElementById("AgeSectionTrue");
		section1.style.display = "block";

		document.getElementById('SuperResultEligible').scrollIntoView({
			behavior: 'smooth'
		});
	}

	/*//not retire cannot get early access
	if (!checkRetire()) {
		var age = document.getElementById("AgeSectionFalse");
		age.style.display = "block";

	}*/
	

}

//In the final step, submit the form and decide what section result will show
function submitResult(a, b) {
	var x = document.getElementsByClassName("tab");
	if (!validate(a, b)) return false;
	currentTab = x.length;
	if (currentTab >= (x.length - 1)) {
		var previous = document.getElementById("SuperQuestionnair");
		previous.style.display = "none";
		var intro = document.getElementById("SuperIntro");
		intro.style.display = "none";
		var result = document.getElementById("SuperResultEligible");

		result.style.display = "block";
		document.getElementById('SuperResultEligible').scrollIntoView({
			behavior: 'smooth'
		});

		
/*
		if (showAge() < showPerservationAge()) {
			var section1 = document.getElementById("AgeSectionFalse");
			section1.style.display = "block";
		}*/

		

		//all question is no
		if (!checkCompassionateGrounds() && !checkTmc() && !checkLowSuper() && !checkTemporaryIncapacity()
			&& !checkPermanentIncapacity() && !checkFinancialTwo() && !comparePreAndAge()) {
			//put an ineligible section here
			var section2 = document.getElementById("SuperResultIneligible");
			section2.style.display = "block";
			var eligiblePage = document.getElementById("SuperResultEligible");
			eligiblePage.style.display = "none";

			var age = document.getElementById("AgeSectionFalse");
			age.style.display = "block";
			document.getElementById('SuperResultIneligible').scrollIntoView({
				behavior: 'smooth'
			});
		}
		if (checkCompassionateGrounds()) {
			var section2 = document.getElementById("compassionateSection");
			section2.style.display = "block";
		}
		if (checkTmc()) {
			var section3 = document.getElementById("tmcSection");
			section3.style.display = "block";
		}
		if (checkLowSuper()) {
			var section4 = document.getElementById("lowSuperSection");
			section4.style.display = "block";
		}
		if (checkTemporaryIncapacity()) {
			var section5 = document.getElementById("temporaryIncapacitySection");
			section5.style.display = "block";
		}
		if (checkPermanentIncapacity()) {
			var section6 = document.getElementById("permanentIncapacitySection");
			section6.style.display = "block";
		}

		if (checkFinancialTwo()) {
			var section8 = document.getElementById("financialSectionPart");
			section8.style.display = "block";
		}
		if (checkFinancialThree() && comparePreAndAge()) {
			var section8 = document.getElementById("financialSectionPart");
			if (section8.style.display == "block") {
				section8.style.display = "none";
			}
			var section7 = document.getElementById("financialSectionAll");
			section7.style.display = "block";
		}
		document.getElementById('SuperResultEligible').scrollIntoView({
			behavior: 'smooth'
		});
	}

}

//algorthm of checking the checkbox list in step 2
function checkCompassionateGrounds() {

	var CG1 = $("input[name='CG1']:checked").val();
	var CG2 = $("input[name='CG2']:checked").val();
	var CG3 = $("input[name='CG3']:checked").val();
	var CG4 = $("input[name='CG4']:checked").val();
	if (CG1 == "CG1" || CG2 == "CG2" || CG3 == "CG3" || CG4 == "CG4") {
		return true;
	}

}
//check the input to know whether retire section could show in the result page
function checkRetire() {
	var radioValue = $("input[name='retire']:checked").val();
	if (radioValue == "Yes") {
		//if user already retired, do not need to ask whether he/she is employed.
		document.getElementById('employed').style.display = 'none';

		return true;
	}
	if (radioValue == "No") {
		//if user is not retired,  ask whether he/she is employed.
		document.getElementById('invalidRetire').style.display = 'none';
		document.getElementById('employed').style.display = 'block';
		var retireAge = 65;
		
		return false;
	}
}

//check the input to know whether Terminal Medical Condition section could show in the result page
function checkTmc() {
	var radioValue = $("input[name='tmc']:checked").val();
	if (radioValue == "Maybe") {
		return true;
	}
}
//check the input to check whether Temporary Incapacity section could show in the result page
function checkTemporaryIncapacity() {
	var radioValue = $("input[name='temporaryIncapacity']:checked").val();
	if (radioValue == "Maybe") {
		return true;
	}
}


//check the input to check whether Permanent Incapacity section could show in the result page
function checkPermanentIncapacity() {
	var radioValue = $("input[name='permanentIncapacity']:checked").val();
	if (radioValue == "Maybe") {
		return true;
	}
}

//check the input to check whether low super section could show in the result page
function checkLowSuper() {
	var radioValue1 = $("input[name='lowSuper1']:checked").val();
	var radioValue2 = $("input[name='lowSuper2']:checked").val();
	if (radioValue1 == "No" && radioValue2 != "No") {
		return true;
	}
}

// alorithm in step 3 fiancial hardship
//arrive perservation age + 39 weeks
function checkFinancialThree() {

	if (document.getElementById('maybeCheck').checked) {
		var radioValue1 = $("input[name='financialHardship1']:checked").val();
		var radioValue2 = $("input[name='financialHardship2']:checked").val();
		var radioValue3 = $("input[name='financialHardship3']:checked").val();
		//var radioValue3 = $("input[name='financialHardship3']:checked").val();
		if (radioValue1 == "Yes" && radioValue2 == "Yes" && radioValue3 == "Yes") {
			return true;
		}
	}
}

// alorithm in step 3 fiancial hardship
function checkFinancialTwo() {

	if (document.getElementById('maybeCheck').checked) {
		var radioValue1 = $("input[name='financialHardship1']:checked").val();
		var radioValue2 = $("input[name='financialHardship2']:checked").val();


		if (radioValue1 == "Yes" && radioValue2 == "Yes") {
			return true;
		}
	}
}

// alorithm in step 3 fiancial hardship
function checkFinancialTwo() {

	if (document.getElementById('maybeCheck').checked) {
		var radioValue1 = $("input[name='financialHardship1']:checked").val();
		var radioValue2 = $("input[name='financialHardship2']:checked").val();


		if (radioValue1 == "Yes" && radioValue2 == "Yes") {
			return true;
		}
	}
}


// section show in step 3 fiancial hardship
function finCheckShowThePanel() {
	if (document.getElementById('noCheck').checked) {
		//reach perservation age + 39 weeks

		document.getElementById('ifMaybe').style.display = 'none';
		

	}

	else {
		document.getElementById('ifMaybe').style.display = 'block';
	}

}

//check the validation of three sets of radio buttons and go to next step
function nextPrevCheckThree(n, a, b, c, d, e, f) {

	// This function will figure out which tab to display
	var x = document.getElementsByClassName("tab");
	//nocheck selected, if user select nocheck, the following questions would not show so don't need the validation
	if (!document.getElementById(b).checked) {
		
		//2 questions
		
			if (!validate(a, b))
				return false;
			if (!validate(c, d))
				
			return false;
			if (!validate(e, f))
				return false;
		
		
	}
	//color
	document.getElementsByClassName("step")[currentTab].className += " finish";
	// Exit the function if any field in the current tab is invalid:
	if (n == 1 && !validateForm()) return false;
	// Hide the current tab:
	x[currentTab].style.display = "none";
	// Increase or decrease the current tab by 1:
	currentTab = currentTab + n;
	// if you have reached the end of the form... :
	if (currentTab >= x.length) {

		//submitResult();
		return false;
	}
	// Otherwise, display the correct tab:
	showTab(currentTab);
}