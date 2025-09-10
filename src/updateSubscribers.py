import requests
from bs4 import BeautifulSoup
import fileinput

request = requests.request("GET", "https://vidiq.com/youtube-stats/channel/UC0xHqOSwS-kQioNw0NoeIFA/")

soup = BeautifulSoup(request.text, 'html.parser')

results = soup.find_all('span', class_='text-xl font-semibold text-white md:text-[28px]')
for result in results:
	if 'K' in result.text:
		subscriber_tag = result
		break
if subscriber_tag:
    subscribers = subscriber_tag.text.strip()
    print(subscribers)
else:
    raise("Subscriber count not found")

with fileinput.FileInput("index.html", inplace=True) as file:
    for line in file:
        print(line.replace("YOUTUBE_SUBSCRIBERS", subscribers), end='')
