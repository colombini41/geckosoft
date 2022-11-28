GIPHYSOFT

Dopo aver creato da terminale una nuova cartella progetto Angular nominata "geckosoft", ho aperto quest'ultima in VSCode. In VSCode, da terminale, ho successivamente implementato Angular Material con il comando 'ng add @angular/material'.

Sempre da terminale, ho creato i vari componenti di cui necessitavo, oltre al servizio per poter prendere le Gif dal sito di GIPHY (giphysoft.service nella cartella servizi).

In seguito, sono andato mano a mano ad editare i vari componenti e i loro collegamenti (con ad esempio app-component che richiama i tre componenti Body, Header e Footer) aiutandomi con Material, implementando di volta in volta i vari moduli a me necessari.

Nel servizio "Giphysoft" ho innanzitutto importato "httpClient" per poi creare una connessione http grazie alla Gif URL che si trova nella sezione endpoint/Trending del sito di Giphy: tra questi, ho inserito anche la mia chiaveAPI necessaria per svolgere le richieste da GIPHY.

Dopodichè, ho creato una grid list - sfruttando Material - in cui ogni cella contiene una gif. Gif proposte in rapporto di 1a1 ma limitate dal max-height di 250px impostato tramite css per evitare sconvenienti a livello di resa grafica.

Grazie alla barra di ricerca è possibile cercare le gif a proprio piacimento, ricerca che, ogni qualvolta viene digitato un solo carattere, ricava dinamicamente dal sito Giphy le gif inerenti.

Al clic su ognuna di queste gif, è possibile aprire un Dialog in cui viene presentata la gif stessa, con alcuni dati inerenti ad essa. Quando presenti, infatti, il titolo, la data di caricamento, la URL originaria e lo username vengono estrapolati (grazie all'interpolazione) dall'array di tutte le gif presenti in quel momento.

Tramite una checkbox ho implementato la possibilità di ordinare le gif presenti in un certo momento (anche in seguito a una ricerca e non solo su quelle di partenza) in base alla data di caricamento, in ordine decrescente e crescente.

Ho infine inserito un footer per dare una linearità all'applicazione, footer che riporta alcuni miei contatti tra cui LinkedIn e GitHub.
