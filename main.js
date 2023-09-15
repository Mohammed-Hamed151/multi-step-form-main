let submitform = document.querySelectorAll("form");
let submitformButtons = document.querySelectorAll("form button[type='submit']");
let usernameInput = document.getElementById("name");
let usernameError = document.querySelector(".usernameError");
let useremailInput = document.getElementById("email");
let usernumberInput = document.getElementById("number");
let usernumError = document.querySelector(".usernumError");
let sidebarNum = document.querySelectorAll(".sidebar ul li .num");
let contents = document.querySelectorAll(".content");
// &&&&&&&&&&
let pricenums = document.querySelectorAll("n");
let priceperiods = document.querySelectorAll("c");
let pricePerperiod = document.querySelector(".content .payment .switch input");
let monthly = document.querySelector(".monthly");
let yearly = document.querySelector(".yearly");
let freeMonths = document.querySelectorAll(".freeMonth");
let totalper = document.querySelector("v");
let lastcheckednums = document.querySelectorAll(".four div:first-child n");
let totalnum = document.querySelector(".Total n");
let levelNames = document.querySelectorAll(".levelName");
let levelprices = document.querySelectorAll(".levelprice n");

let selectedlevel = document.querySelector(".selectedlevel");
let selectedlevelprice = document.querySelector(".selectedlevelprice n");
let selctedperiod = document.querySelector(".selctedperiod");
// &&&&&&&&&&
let selectServices = document.querySelectorAll(".select-service");
let selectedservicesdiv = document.querySelector(".selectedservices");
let servicesNames = document.querySelectorAll(".serviceName");
let servicePricescontainer = document.querySelectorAll(".servicePrice");
let servicePricescontainerNum = document.querySelectorAll(".servicePrice n");
let thirdNextButton = document.querySelector(".three button[type='submit']");
let secondNextButton = document.querySelector(".two button[type='submit']");

// &&&&&&&&&&
let backButtons = document.querySelectorAll(".back");
let radios = document.querySelectorAll(".content .level > label input");
let changeButton = document.querySelector(".change ");
// &&&&&&&&&&
buttonDiv = document.querySelector(".button");
let counter = 0;

changeButton.addEventListener("click", function () {
	counter = -1;
	switchto_Next_Active(sidebarNum, contents);
});
// FUNCTIONS
// prevent submit form
submitform.forEach((form) => {
	form.addEventListener("submit", function (event) {
		event.preventDefault();
	});
});

// handling pages on next step button clicked
submitformButtons[0].addEventListener("click", function () {
	checkInput();
});

submitformButtons[1].addEventListener("click", function () {
	radiochecked();
});
submitformButtons[2].addEventListener("click", function () {
	switchto_Next_Active(sidebarNum, contents);
});
submitformButtons[3].addEventListener("click", function () {
	switchto_Next_Active(sidebarNum, contents);
});

// handling pages on back  button clicked
backButtons.forEach((button) => {
	button.addEventListener("click", () => {
		switchto_back_Active(contents, sidebarNum);
	});
});

// functions
function checkInput() {
	if (
		!usernameInput.value == "" &&
		!useremailInput.value == "" &&
		!usernumberInput.value == ""
	) {
		// {
		// 	if (!isNaN(usernameInput.value[0])) {
		// 		usernameError.style.display = "block";
		// 		console.log(usernumberInput.value.length);
		// 	} else {
		// 		usernameError.style.display = "none";
		// 	}
		// 	if (usernumberInput.value.length < 11) {
		// 		usernumError.style.display = "block";
		// 		console.log(usernumberInput.value.length);
		// 	} else {
		// 		usernumError.style.display = "none";
		// 	}
		// }
		// else
		switchto_Next_Active(sidebarNum, contents);
	}
}

// handleng radio border
radios.forEach((radio, index) => {
	radio.addEventListener("click", () => {
		radios.forEach((e) => {
			e.checked = false;
			e.parentElement.style.border = "solid 1px #ddd";
		});
		radio.checked = true;
		radio.parentElement.style.border = "1px solid black";
	});
});

function radiochecked() {
	let end = false;

	radios.forEach((radio) => {
		if (radio.checked == true) {
			end = true;
		}
	});
	if (end) {
		switchto_Next_Active(sidebarNum, contents);
	}
}

// swtich fuctions
function switchto_Next_Active(eles1, eles2) {
	eles1.forEach((e) => {
		e.classList.remove("active");
	});
	eles2.forEach((e) => {
		e.classList.remove("active");
	});
	counter++;
	if (counter == 4) {
		eles1[counter - 1].classList.add("active");
		eles2[counter].classList.add("active");
	} else {
		eles1[counter].classList.add("active");
		eles2[counter].classList.add("active");
	}
}

// back Button
function switchto_back_Active(eles1, eles2) {
	eles1.forEach((e) => {
		e.classList.remove("active");
	});
	eles2.forEach((e) => {
		e.classList.remove("active");
	});
	counter--;
	eles1[counter].classList.add("active");
	eles2[counter].classList.add("active");
}

// handling price
pricePerperiod.addEventListener("click", () => {
	pricePerperiod.classList.toggle("active");
	freeMonths.forEach((e) => e.classList.toggle("active"));
	selctedperiod.innerHTML = "";
	hanlding_monthly_yearly();
});
// handling yearly and monthly
function hanlding_monthly_yearly() {
	if (!pricePerperiod.classList.contains("active")) {
		monthly.style.color = "hsl(213, 96%, 18%)";
		yearly.style.color = "hsl(231, 11%, 63%)";
		pricenums.forEach((num) => {
			num.innerHTML = +num.innerHTML / 10;
		});
		priceperiods.forEach((per) => {
			per.innerHTML = "mo";
		});
		selctedperiod.innerHTML = "(Monthly)";
		totalper.innerHTML = "(perMonthly)";
		if (window.innerWidth <= 375) {
			contents.forEach((c) => (c.style.top = "95px"));
		}
	} else {
		monthly.style.color = "hsl(231, 11%, 63%)";
		yearly.style.color = "hsl(213, 96%, 18%)";
		pricenums.forEach((num) => {
			num.innerHTML = +num.innerHTML * 10;
		});
		priceperiods.forEach((per) => {
			per.innerHTML = "yr";
		});
		totalper.innerHTML = "(perYearly)";
		selctedperiod.innerHTML = "(Yearly)";
		// 60
		if (window.innerWidth <= 375) {
			contents.forEach((c) => (c.style.top = "60px"));
		}
	}
}
selectServices.forEach((service) => {
	service.addEventListener("click", () => {
		service.classList.toggle("active");
	});
});
secondNextButton.addEventListener("click", () => {
	selectedlevel.innerHTML = "";
	selectedlevelprice.innerHTML = "";
	radios.forEach((radio, index) => {
		if (radio.checked == true) {
			selectedlevel.innerHTML = levelNames[index].innerHTML;
			selectedlevelprice.innerHTML = levelprices[index].innerHTML;
		}
	});
});
thirdNextButton.addEventListener("click", () => {
	selectedservicesdiv.innerHTML = "";
	totalnum.innerHTML = "";
	let numarr = [];
	selectServices.forEach((service, index) => {
		if (service.classList.contains("active")) {
			let p = document.createElement("p");
			let firstspan = document.createElement("span");
			let secondspan = servicePricescontainer[index].cloneNode(true);
			firstspan.append(servicesNames[index].innerHTML);
			p.append(firstspan);
			p.append(secondspan);
			selectedservicesdiv.append(p);
			numarr.push(servicePricescontainerNum[index].innerHTML);
		}
	});
	numarr.push(selectedlevelprice.innerHTML);
	totalnum.innerHTML = numarr.reduce(
		(accumulator, currentValue) => accumulator + +currentValue,
		0
	);
});
console.log(isNaN(usernameInput.value[0]));
