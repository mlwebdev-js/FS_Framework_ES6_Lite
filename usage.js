// Instantiate the framework
const fs = new FSFramework();

// Example 1: Using ID to get an element by its ID
const myDiv = fs.ID('myDivId');

// Example 2: Using TAG to get the first element of a tag
const firstParagraph = fs.TAG('p');

// Example 3: Using CLASS to get an element by its class
const myClassElement = fs.CLASS('myClass', 0); // 0 for the first element

// Example 4: Using NAME to get the first element with a specific name
const inputByName = fs.NAME('inputName');

// Example 5: Using QUERY to query a single element
const navBar = fs.QUERY('.navbar');

// Example 6: Using QueryAll to query all elements matching a selector
const allDivs = fs.QueryAll('div');

// Example 7: Using GetValue to get the value of an input field
const inputValue = fs.GetValue('#myInput');

// Example 8: Using ElEvent to attach an event to an element
fs.ElEvent(myDiv, 'click', () => alert('Div clicked!'));

// Example 9: Using CREATE to create a new element
const newSpan = fs.CREATE('span');

// Example 10: Using LStoreItem to store a value in localStorage
fs.LStoreItem('key', 'value');

// Example 11: Using SetAttributes to set multiple attributes to an element
fs.SetAttributes(newSpan, { 'class': 'highlight', 'id': 'newSpan' });

// Example 12: Using AddElementOnTag to add a child element to a parent selected by tag
fs.AddElementOnTag('body', 'div', 'This is a new div inside the body');

// Example 13: Using AddElementOnId to add a child element to a parent selected by ID
fs.AddElementOnId('myDivId', 'p', 'This is a new paragraph inside the div');

// Example 14: Using DoIf to execute a function if a condition is true
fs.DoIf(true, () => console.log('Condition is true'));

// Example 15: Using IfElse to execute one of two functions based on a condition
fs.IfElse(true, 
          () => console.log('Condition is true'), 
          () => console.log('Condition is false'));

// Example 16: Creating elements using the created element methods
const newArticle = fs.article_();
newArticle.innerHTML = 'New article content';
document.body.appendChild(newArticle);
