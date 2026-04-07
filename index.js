const mainHeading = document.querySelector('main-heading');
console.log(mainHeading);

const introParagraph = document.querySelector('.intro-paragraph');
console.log(introParagraph);

const allParagraphs = document.querySelectorAll('.intro-paragraph');
console.log(allParagraphs);

/// Selecting the second paragraph options 
const secondParagraph = allParagraphs[1];
console.log(secondParagraph);

const secondParagraphNthChild = document.querySelector('p:nth-child(2)');
console.log(secondParagraphNthChild);


/// using getElement by id 
const mainHeadingByid = document.getElementById('main-heading');
console.log(mainHeadingByid);

const introParagraphByClassName = document.getElementsByClassName('introParagraphByClassName');
console.log(introParagraphByClassName);

/// Manipulating the DOM
mainHeadingByid.textContent = "Hello, Javascript in the DOM";
mainHeadingByid.style.color = "green";
mainHeadingByid.style.fontSize = "54px";

//// Event handling
/// events are actions that occur in the browser, such as clicks, key presses or page loads. 
// we can listen for these events and execute code in response to them    
// Examples include ; 1. Click event, 2. Mouseover event, 3. keydown event
/// 4. input event, 5. submit event

const changeButton = document.querySelector("#change-paragraph");
changeButton.addEventListener("click", function () {
    secondParagraph.textContent = "Paragraph has been changed!";
    secondParagraph.style.color = "red";
    secondParagraph.style.fontSize = "24px";
});

