const submitform = document.querySelectorAll("form");
const submitformButtons = document.querySelectorAll(
	"form button[type='submit']"
);
const usernameInput = document.getElementById("name");
const usernameError = document.querySelector(".usernameError");
const useremailInput = document.getElementById("email");
const useremailError = document.querySelector(".useremailError");
const usernumberInput = document.getElementById("number");
const usernumError = document.querySelector(".usernumError");
const sidebarNum = document.querySelectorAll(".sidebar ul li .num");
const contents = document.querySelectorAll(".content");

// &&&&&&&&&&
const pricenums = document.querySelectorAll(".n");
const priceperiods = document.querySelectorAll(".c");
const pricePerperiod = document.querySelector(
	".content .payment .switch input"
);
const monthly = document.querySelector(".monthly");
const yearly = document.querySelector(".yearly");
const freeMonths = document.querySelectorAll(".freeMonth");
const totalper = document.querySelector("v");
const lastcheckednums = document.querySelectorAll(".four div:first-child .n");
const totalnum = document.querySelector(".Total .n");
const levelNames = document.querySelectorAll(".levelName");
const levelprices = document.querySelectorAll(".levelprice .n");

const selectedlevel = document.querySelector(".selectedlevel");
const levelError = document.querySelector(".levelError");
const selectedlevelprice = document.querySelector(".selectedlevelprice .n");
const selctedperiod = document.querySelector(".selctedperiod");
// &&&&&&&&&&
const selectServices = document.querySelectorAll(".select-service");
const selectedservicesdiv = document.querySelector(".selectedservices");
const servicesNames = document.querySelectorAll(".serviceName");
const servicePricescontainer = document.querySelectorAll(".servicePrice");
const servicePricescontainerNum = document.querySelectorAll(".servicePrice .n");
const thirdNextButton = document.querySelector(".three button[type='submit']");
const secondNextButton = document.querySelector(".two button[type='submit']");

// &&&&&&&&&&
const backButtons = document.querySelectorAll(".back");
const radios = document.querySelectorAll(".content .level > label input");
const changeButton = document.querySelector(".change ");
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
	handlingErrorMessages();
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
	button.addEventListener("click", () => {
		levelError.classList.remove("active");
	});
});

// functions
function checkInput() {
	if (
		!usernameInput.value == "" &&
		!useremailInput.value == "" &&
		usernumberInput.value !== "" &&
		usernumberInput.value.length === 11 &&
		usernumberInput.value[0] === "0" &&
		usernumberInput.value[1] === "1"
	) {
		// All conditions are met
		usernumError.classList.remove("active");

		switchto_Next_Active(sidebarNum, contents);
	} else {
		usernumError.classList.add("active");
		if (usernumberInput.value === "") {
			usernumError.innerHTML = "this field is requierd";
		}
		if (usernumberInput.value.length !== 11) {
			usernumError.innerHTML =
				"Number in Invalid, must start with 01 <br> and 11 charcter";

			console.log(usernumError.innerHTML);
		}
		if (usernumberInput.value[0] !== "0") {
			usernumError.innerHTML =
				"NUmber in Invalid, must start with 01 <br> and 11 charcter";

			console.log(usernumError.innerHTML);
		}
		if (usernumberInput.value[1] !== "1") {
			usernumError.innerHTML =
				"NUmber in Invalid, must start with 01 <br> and 11 charcter";
			console.log(usernumError.innerHTML);
		}
	}
}
if (usernumberInput.value.length != 11) {
	console.log(usernumberInput.value);
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
		} else {
			levelError.classList.add("active");
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
// handling Error Messages
function handlingErrorMessages() {
	if (usernameInput.value == "") {
		usernameError.classList.add("active");
	} else {
		usernameError.classList.remove("active");
	}
	// ##
	if (useremailInput.value == "") {
		useremailError.classList.add("active");
	} else {
		useremailError.classList.remove("active");
	}
	// ##
	if (usernumberInput.value == "") {
		usernumError.classList.add("active");
	} else {
		if (!usernumberInput.value.length == 11) {
			usernumError.classList.remove("active");
			usernumError.innerHTML = "INvalid Number, Number MUST be 11 charcters";
		} else if (usernumberInput.value[0] != 0 || usernumberInput.value[1] != 1) {
			usernumError.classList.remove("active");
			usernumError.innerHTML = "INvalid Number, Number MUST start with 01";
		}
	}
}
