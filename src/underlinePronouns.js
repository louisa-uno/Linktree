const pronounElements = document.querySelectorAll(".pronouns");

pronounElements.forEach((element) => {
	element.addEventListener("mouseenter", () => {
		pronounElements.forEach((el) => el.classList.add("underline-all"));
	});

	element.addEventListener("mouseleave", () => {
		pronounElements.forEach((el) => el.classList.remove("underline-all"));
	});
});
