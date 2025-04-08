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
		days = now.getDate() - targetDate.getDate();

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

const bdayDiff = calculateDifference(bday, false);
const e2Diff = calculateDifference(e2, true);

document.getElementById(
	"onE2"
).textContent = `${e2Diff.months}mo ${e2Diff.days}d`;
document.getElementById(
	"bdayin"
).textContent = `${bdayDiff.months}mo ${bdayDiff.days}d`;
