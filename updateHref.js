function updateHref() {
    document.querySelectorAll(".pronouns").forEach((a) => {
        const opacity = parseFloat(window.getComputedStyle(a).opacity);
        if (opacity > 0.5) {
            a.setAttribute("href", "https://go.louisa.uno/pronomen");
        } else if (opacity < 0.5) {
            a.setAttribute("href", "https://go.louisa.uno/pronouns");
        }
    });
    requestAnimationFrame(updateHref);
}

updateHref();
