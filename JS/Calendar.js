const date = new Date();

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const trainedDaysOfCurrentMonth = [];

for (let i = 0; i < date.getDate(); i++) {
	if (Math.random() < 0.5) {
		trainedDaysOfCurrentMonth.push(i + 1);
	}
}

const renderCalendar = () => {
	date.setDate(1);

	const monthDays = document.querySelector(".days");

	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate();

	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();

	const firstDayIndex = date.getDay();

	const lastDayIndex = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDay();

	const nextDays = 7 - lastDayIndex - 1;

	document.querySelector(".date h1").innerHTML = months[date.getMonth()];

	document.querySelector(".date p").innerHTML = new Date().toDateString();

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
	}

	for (let i = 1; i <= lastDay; i++) {
		if (
			i === new Date().getDate() &&
			date.getMonth() === new Date().getMonth()
		) {
			days += `<div class="today">${i}</div>`;
		} else {
			if (
				trainedDaysOfCurrentMonth.indexOf(i) != -1 &&
				date.getMonth() === new Date().getMonth()
			) {
				days += `<div class="trained">${i}</div>`;
			} else {
				days += `<div>${i}</div>`;
			}
		}
	}

	for (let j = 1; j <= nextDays; j++) {
		days += `<div class="next-date">${j}</div>`;
		monthDays.innerHTML = days;
	}
};

document.querySelector(".prev").addEventListener("click", () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();

function exportFunction() {
	let exportData = [];
	for (let i = 0; i < trainedDaysOfCurrentMonth.length; i++) {
        let dd = padNumber(trainedDaysOfCurrentMonth[i]);
        let mm = padNumber(date.getMonth());
        let yyyy = date.getFullYear();
		exportData.push(yyyy + "-" + mm + "-" + dd);
	}
    console.log(exportData);
}

function padNumber(number) {
    if(number < 10){
        return "0" + number;
    }
    else {
        return number;
    }
}
