const bday = new Date(new Date().getFullYear(), 5, 14);
const e2 = new Date("2024-07-01");

function ymdDiff(start, end) {
	let years = end.getFullYear() - start.getFullYear();
	let months = end.getMonth() - start.getMonth();
	let days = end.getDate() - start.getDate();

	if (days < 0) {
		months -= 1;
		const prevMonthDate = new Date(end.getFullYear(), end.getMonth(), 0);
		const daysInPrevMonth = prevMonthDate.getDate();
		days += daysInPrevMonth;
	}

	if (months < 0) {
		months += 12;
		years -= 1;
	}

	return { years, months, days };
}

function calculateDifference(targetDate, isPast) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const t = new Date(
		targetDate.getFullYear(),
		targetDate.getMonth(),
		targetDate.getDate()
	);

	if (isPast) {
		const { years, months, days } = ymdDiff(t, today);
		return { years, months, days };
	} else {
		let next = new Date(today.getFullYear(), t.getMonth(), t.getDate());
		if (next < today) {
			next.setFullYear(next.getFullYear() + 1);
		}
		const { years, months, days } = ymdDiff(today, next);
		return { years, months, days };
	}
}

function formatDuration(years, months, days) {
	if (years === 0 && months === 0 && days === 0) {
		return "0d";
	}
	const parts = [];
	if (years > 0) parts.push(`${years}y`);
	if (months > 0 || years > 0) parts.push(`${months}m`);
	if (days > 0 || months > 0 || years > 0) parts.push(`${days}d`);
	return parts.join(" ");
}

const e2Diff = calculateDifference(e2, true);
document.getElementById("onE2").textContent = formatDuration(
	e2Diff.years,
	e2Diff.months,
	e2Diff.days
);

const bdayDiff = calculateDifference(bday, false);
document.getElementById("bdayin").textContent = formatDuration(
	bdayDiff.years,
	bdayDiff.months,
	bdayDiff.days
);
