let lastClickTime = 0;

function registerRedirectClick() {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 500) {
        window.location.href = "https://go.louisa.uno/flame";
    }
    lastClickTime = currentTime;
}

document.querySelector('.profilePictureContainer').addEventListener('click', registerRedirectClick);
