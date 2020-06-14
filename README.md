## Mood Wallpapers

Aplikacja najpierw sprawdza Geolokalizację użytkownika, następnie odpytuje dwa kolejne API: DarkSky API w celu sprawdzenia pogody oraz Reverse Geolocation API w celu sprawdzenia miasta, w którym znajduje się użytkownik. Na podstawie tych dwóch API, odpytuje trzecie, Unsplash API, w celu zaproponowania odpowiednich tapet. Wyszukiwarka w prawym górnym rogu pozwala również na wyszukiwanie po własnych hasłach

### Zastosowane rozwiązania

- Wykorzystanie geolokalizacji wbudowanej w przeglądarkę
- Zmienne w zapytaniach API, dzięki wykorzystaniu hooka useState
- Zapisywanie zdjęć do "Ulubionych", przechowywane w localStorage
- Wyszukiwarka do własnych zapytań

### Pokonane przeszkody

- Wykorzystanie Promise.all w celu odpowiedniego wykorzystania dwóch pierwszych API jednocześnie
- Dependencies w hooku useEffect w celu kontroli ilości odpytań do API przy re-renderze
