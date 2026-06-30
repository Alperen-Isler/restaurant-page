function loadMenuPage(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Menu";
    content.appendChild(title);

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    content.appendChild(cardContainer);

    const cardDöner = document.createElement("div");
    cardDöner.classList.add("card");
    cardDöner.classList.add("döner");
    const pDöner = document.createElement("p");
    pDöner.textContent = "Döner";
    const pDönerPrice = document.createElement("p");
    pDönerPrice.textContent = "9€";
    cardDöner.appendChild(pDöner);
    cardDöner.appendChild(pDönerPrice);
    cardContainer.appendChild(cardDöner);

    const cardDönerTeller = document.createElement("div");
    cardDönerTeller.classList.add("card");
    cardDönerTeller.classList.add("döner-teller");
    const pDönerTeller = document.createElement("p");
    pDönerTeller.textContent = "Döner Teller";
    const pDönerTellerPrice = document.createElement("p");
    pDönerTellerPrice.textContent = "12€";
    cardDönerTeller.appendChild(pDönerTeller);
    cardDönerTeller.appendChild(pDönerTellerPrice);
    cardContainer.appendChild(cardDönerTeller);

    const cardDürüm = document.createElement("div");
    cardDürüm.classList.add("card");
    cardDürüm.classList.add("dürüm");
    const pDürüm = document.createElement("p");
    pDürüm.textContent = "Dürüm";
    const pDürümPrice = document.createElement("p");
    pDürümPrice.textContent = "9€";
    cardDürüm.appendChild(pDürüm);
    cardDürüm.appendChild(pDürümPrice);
    cardContainer.appendChild(cardDürüm);

    const cardIskender = document.createElement("div");
    cardIskender.classList.add("card");
    cardIskender.classList.add("iskender");
    const pIskender = document.createElement("p");
    pIskender.textContent = "Iskender";
    const pIskenderPrice = document.createElement("p");
    pIskenderPrice.textContent = "16€";
    cardIskender.appendChild(pIskender);
    cardIskender.appendChild(pIskenderPrice);
    cardContainer.appendChild(cardIskender);

    const cardAdanaKebab = document.createElement("div");
    cardAdanaKebab.classList.add("card");
    cardAdanaKebab.classList.add("adana-kebab");
    const pAdanaKebab = document.createElement("p");
    pAdanaKebab.textContent = "Adana Kebab";
    const pAdanaKebabPrice = document.createElement("p");
    pAdanaKebabPrice.textContent = "13€";
    cardAdanaKebab.appendChild(pAdanaKebab);
    cardAdanaKebab.appendChild(pAdanaKebabPrice);
    cardContainer.appendChild(cardAdanaKebab);

    const cardKebabMix = document.createElement("div");
    cardKebabMix.classList.add("card");
    cardKebabMix.classList.add("kebab-mix");
    const pKebabMix = document.createElement("p");
    pKebabMix.textContent = "Kebab Mix";
    const pKebabMixPrice = document.createElement("p");
    pKebabMixPrice.textContent = "21€";
    cardKebabMix.appendChild(pKebabMix);
    cardKebabMix.appendChild(pKebabMixPrice);
    cardContainer.appendChild(cardKebabMix);
}

export default loadMenuPage;