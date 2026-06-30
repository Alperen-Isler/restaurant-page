function loadHomePage(){
    const content = document.querySelector("#content");

    const title = document.createElement("h1");
    title.textContent = "Alperen's Kebab"
    content.appendChild(title);

    const pOne = document.createElement("p");
    pOne.textContent = "Fresh Kebab, seasoned meat and homemade sauces.";
    content.appendChild(pOne);
    const brOne = document.createElement("br");
    content.appendChild(brOne);

    const pTwo = document.createElement("p");
    pTwo.textContent = "At Alperen's Kebab, we serve classic kebab with fresh ingredients and bold flavor.";
    content.appendChild(pTwo);
    const brTwo = document.createElement("br");
    content.appendChild(brTwo);
    
    const pThree = document.createElement("p");
    pThree.textContent = "Our bread is served warm and crispy, our vegetables are sliced fresh every day and our sauces add the perfect finishing touch.";
    content.appendChild(pThree);
    const brThree = document.createElement("br");
    content.appendChild(brThree);

    const pFour = document.createElement("p");
    pFour.textContent = "Opening Hours:";
    content.appendChild(pFour);

    const pFive = document.createElement("p");
    pFive.textContent = "Monday - Friday: 11:00 - 22:00";
    content.appendChild(pFive);

    const pSix = document.createElement("p");
    pSix.textContent = "Saturday - Sunday: 12:00 - 23:00";
    content.appendChild(pSix);
};

export default loadHomePage;