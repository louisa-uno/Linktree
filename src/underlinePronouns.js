const pronounElements = document.querySelectorAll(".pronouns");

pronounElements.forEach((element) => {
	element.addEventListener("mouseenter", () => {
		pronounElements.forEach((el) => {
			el.style.textDecoration = "underline";
		});
	});

	element.addEventListener("mouseleave", () => {
		pronounElements.forEach((el) => {
			el.style.textDecoration = "none";
		});
	});
});
