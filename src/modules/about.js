function loadAboutPage(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "About Alperen's Kebab";
    content.appendChild(title);

    const pOne = document.createElement("p");
    pOne.textContent = "Adress:"
    content.appendChild(pOne);

    const pTwo = document.createElement("p");
    pTwo.textContent = "Main Street 24"
    content.appendChild(pTwo);

    const pThree = document.createElement("p");
    pThree.textContent = "10115 Berlin"
    content.appendChild(pThree);

    const brOne = document.createElement("br");
    content.appendChild(brOne);

    const pFour = document.createElement("p");
    pFour.textContent = "Contact:"
    content.appendChild(pFour);

    const pFive = document.createElement("p");
    pFive.textContent = "Phone: +49 123456789"
    content.appendChild(pFive);

    const pSix = document.createElement("p");
    pSix.textContent = "Email: info@alperens-kebab.com"
    content.appendChild(pSix);

    const brTwo = document.createElement("br");
    content.appendChild(brTwo);

    const pSeven = document.createElement("p");
    pSeven.textContent = "Legal Notice:"
    content.appendChild(pSeven);

    const pEight = document.createElement("p");
    pEight.textContent = "This website is a fictional restaurant page created for web development learning. All information shown here is placeholder content and not connected to a real business."
    content.appendChild(pEight);
};

export default loadAboutPage;