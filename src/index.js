import './registerRedirectClick.js';
import './updateHref.js';
import './updatePronouns.js';
import './codecorner.js';


// Ensure the function is used
document.querySelectorAll('.profilePictureContainer').forEach(el => {
    el.addEventListener('click', registerRedirectClick);
});
