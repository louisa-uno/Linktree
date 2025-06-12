const bday = new Date(new Date().getFullYear(), 5, 14);
const e2 = new Date("2024-07-01");

function calculateDifference(targetDate, isPast) {
	const now = new Date();
	let months, days;

	if (isPast) {
		months =
			now.getMonth() -
			targetDate.getMonth() +
			12 * (now.getFullYear() - targetDate.getFullYear());
		days = now.getDate() - targetDate.getDate() + 1;

		if (days < 0) {
			months--;
			days += new Date(
				targetDate.getFullYear(),
				targetDate.getMonth() + 1,
				0
			).getDate();
		}
	} else {
		if (now > targetDate) {
			targetDate.setFullYear(targetDate.getFullYear() + 1);
		}
		months =
			targetDate.getMonth() -
			now.getMonth() +
			12 * (targetDate.getFullYear() - now.getFullYear());
		days = targetDate.getDate() - now.getDate();

		if (days < 0) {
			months--;
			days += new Date(
				now.getFullYear(),
				now.getMonth() + 1,
				0
			).getDate();
		}
	}

	return { months, days };
}

function formatDuration(months, days) {
	if (months === 0 && days === 0) {
		return "0d";
	} else if (months === 0) {
		return `${days}d`;
	} else if (days === 0) {
		return `${months}m`;
	} else {
		return `${months}m ${days}d`;
	}
}

document.getElementById("onE2").textContent = formatDuration(
	calculateDifference(e2, true).months,
	calculateDifference(e2, true).days
);
document.getElementById("bdayin").textContent = formatDuration(
	calculateDifference(bday, false).months,
	calculateDifference(bday, false).days
);
