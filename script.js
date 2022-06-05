const k1 = document.getElementById("k1");
const k2 = document.getElementById("k2");
const main = document.querySelector("main")

k1.addEventListener("click", inequality);
k2.addEventListener("click", equation);

function inequality() {
    main.innerHTML = "<h1>Nierówność Kwadratowa</h1><p>Nierówność – relacja porządku między dwoma wyrażeniami. Jest to więc jedno z następujących wyrażeń logicznych (formuł logicznych):</p><ul><li>a &#60; b</li><li>a &#62; b</li><li>a &#8804; b</li><li>a &#8805; b</li></ul><p>Dwie pierwsze nierówności nazywane są ostrymi lub mocnymi; dwie następne nieostrymi lub słabymi. Ostre są przeciwzwrotne.</p><p>Często terminem nierówność określa się także negację równości, czyli a &#8800; b.</p><p>Wyrażenie a nazywa się lewą stroną nierówności, b – prawą stroną nierówności.</p><p>Wyrażenia po obu stronach są stałymi ze zbioru liniowo uporządkowanego albo przy wartościowaniu stają się stałymi z tego zbioru.</p><p>Przykłady nierówności:</p><ul><li>1 &#60; 2</li><li>5 &#62; 10</li><li>x + 3 &#60; 6x</li></ul><p>Pierwsza nierówność jest prawdziwa, druga fałszywa, trzecia może być – w zależności od wartości x – prawdziwa lub fałszywa: dla x=10 jest prawdziwa, dla x=0 jest fałszywa.</p>";
}

function equation() {
    main.innerHTML = "<h1>Równanie Kwadratowe</h1><p>Równanie kwadratowe – równanie algebraiczne z jedną niewiadomą w drugiej potędze i opcjonalnie niższych. Innymi słowy równanie wielomianowe drugiego stopnia, czyli równanie postaci:</p><ul class='none'><li>ax<span>2</span> + bx + c = 0</li></ul><p>gdzie a,b,c są jego współczynnikami rzeczywistymi, zespolonymi bądź są elementami dowolnego ciała. Zakłada się, że a &#8800; 0, dzięki czemu równanie nie degeneruje się do równania liniowego. Współczynniki niekiedy nazywane są kolejno: kwadratowym, liniowym i stałym (bądź wyrazem wolnym).</p><p>Inną nazwą równania kwadratowego jest równanie drugiego stopnia.</p>";
}