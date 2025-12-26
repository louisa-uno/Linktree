'use cache'

export async function Pronouns(): Promise<{ pronounsEN: string; pronounsDE: string }> {
	let pronounsEN = 'N/A';
	let pronounsDE = 'N/A';
	try {
		const response = await fetch('https://en.pronouns.page/api/profile/get/louisa.uno?version=2&props=pronouns');

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		type PronounEntry = { value: string };
		type LanguageProfile = { pronouns?: PronounEntry[] };
		type Profiles = { en?: LanguageProfile; de?: LanguageProfile };
		type ProfileResponse = { profiles?: Profiles };

		const data = (await response.json()) as ProfileResponse;

		function formatPronouns(pronouns?: PronounEntry[]): string {
			if (!pronouns || pronouns.length === 0) return "N/A";
			if (pronouns.length === 1) return pronouns[0].value;
			return pronouns[0].value.split('/')[0] + '/' + pronouns[1].value.split('/')[0];
		}

		pronounsEN = formatPronouns(data.profiles?.en?.pronouns);
		pronounsDE = formatPronouns(data.profiles?.de?.pronouns);

	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}

	return { pronounsEN, pronounsDE };
}