async function updatePronouns() {
    try {
        const response = await fetch('https://en.pronouns.page/api/profile/get/louisa.uno?version=2&props=pronouns');

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        function formatPronouns(pronouns) {
            if (pronouns.length === 1) return pronouns[0].value;
            if (pronouns.length > 1) return pronouns[0].value.split('/')[0] + '/' + pronouns[1].value.split('/')[0];
            return "N/A";
        }

        document.getElementById('pronounsEN').textContent = formatPronouns(data.profiles.en.pronouns);
        document.getElementById('pronounsDE').textContent = formatPronouns(data.profiles.de.pronouns);

    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        document.getElementById('pronounsEN').textContent = 'N/A';
        document.getElementById('pronounsDE').textContent = 'N/A';
    }
}

updatePronouns();
