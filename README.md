# JS Zadatak:

Prikazati top news sa zadatog api endpoint-a (link sa dokumentacijom api-ja je ispod).
Korisnik treba da moze da vidi top news za odradjenu zemlju GB ili US. (Srbiju ne koristimo jer
su neke vesti na cirilici pa search ne bi radio). Vesti su prikazane kao thumbnail-ovi (title, slika i
opis).
Klikom na More > korisnik otvara vest gde mu se prikazuju title, slika i sadrzaj vesti. (odabir
zemlje je disable). Sadrzaj (content) koji dolazi sa servera je ogranicen na 260 karaktera posto
koristimo Developer account i to je u redu.
Korisnik na sekciji Categories moze da vidi top 5 vesti za odredjene katagorije koje api
dozvoljava(Entertainment, General, Health, Science, Sport, Technology). Na izlistane vesti za
svaku kategoriju je moguce kliknuti posle cega se otvara gore pomenuti layout za vest.
Na svaku kategoriju moze da se klikne posle cega aplikacija treba da prikaze sve vesti za
kliknutu kategoriju.
Kada klikne ne neku od kategorija ucitavaju se sve top vesti za tu kategoriju (odabir zemlje je
enable i korisnik moze da menja za koju zemlju zeli vesti iz kategorije npr science). Svaka
kategorija moze da se expand/collapse i vesti su prikazane u jednom redu sa indikatorom ako
nisu sve vidljive. Klikom na idikator < ili > vesti se pomeraju za jednu poziciju uz odgovarajucu
tranziciju/animaciju po izboru.
Search sekcija sadrzi input polje u kojem korisnik moze da unese termin koji zeli da pretrazuje u
top news. Na stranici se prikaziju sve vesti koje zadovoljavaju kriterijum pretrage. (promena
zemlje je enable).
Resenje zadatka treba da bude responsive. (Layout na manjim uredjajima je ostavljan
kandidatu na mastu).
Zadatak nije potrebno uraditi u celosti da bi bio validan i pregledan.
Zadatak je pozeljno uraditi kao projekat koji ce jednog dana ici na produkciju i na kom ce raditi
tim ljudi i odrzavati ga.

API: https://newsapi.org/docs/endpoints/top-headlines

Wireframes project online: https://wireframe.cc/pro/pp/5747016a3202923
