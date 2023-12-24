// File: main.js

// main.js
import { fs, createElements, setAttributes, loadHtmlTemplate } from './utilities.js';

document.addEventListener('DOMContentLoaded', () => {
    // Dynamically create buttons
    const buttons = createElements([
        {
            tagName: 'button',
            content: 'Load About Page',
            attributes: { 'id': 'loadAbout' }
        },
        {
            tagName: 'button',
            content: 'Load Contact Page',
            attributes: { 'id': 'loadContact' }
        }
        // ... other buttons
    ]);

    // Code to create other elements
    const additionalElements = createElements([
        {
            tagName: 'p',
            content: 'This is a paragraph',
            attributes: { 'id': 'id1','class': 'my-custom-class' }
        },
        {
            tagName: 'p',
            content: 'This is a paragraph 2',
            attributes: { 'id': 'id2', 'class': 'my-custom-class' }
        }
        // ... other elements
    ]);

    // Append all elements to the root
    const root = fs('#root');
    [...buttons, ...additionalElements].forEach(
        element => root.appendChild(element));

    // Set attributes for styling (example)
    setAttributes(root, {'style': 'text-align: center; padding: 20px;'});

    // Add event listeners for buttons
    fs('#loadAbout').addEventListener('click', () => {
        loadHtmlTemplate('about.html', '#contentArea');
    });

    fs('#loadContact').addEventListener('click', () => {
        loadHtmlTemplate('contact.html', '#contentArea');
    });

    // Add event listeners for other buttons as needed
});




//Previous
/*
import { fs, createElements, setAttributes, loadHtmlTemplate } from './utilities.js';

document.addEventListener('DOMContentLoaded', () => {
    // Dynamically create buttons
     // Existing code to create buttons
     const buttons = createElements([
        {
            tagName: 'button',
            content: 'Load About Page',
            attributes: { 'id': 'loadAbout' }
        },
        {
            tagName: 'button',
            content: 'Load Contact Page',
            attributes: { 'id': 'loadContact' }
        }
        // ... other buttons
    ]);

    // Code to create other elements
    const additionalElements = createElements([
        {
            tagName: 'img',
            content: '',
            attributes: { 'src': 'path/to/image.jpg', 'alt': 'A descriptive text' }
        },
        {
            tagName: 'p',
            content: 'This is a paragraph',
            attributes: { 'class': 'my-custom-class' }
        }
        // ... other elements
    ]);
    

    // Append buttons to the root
    const root = fs('#root');
    // buttons.forEach(button => {
    //     root.appendChild(button);
    // });

    // Set attributes for styling (example)
    setAttributes(root, {'style': 'text-align: center; padding: 20px;'});

    // Add event listeners for buttons
    fs('#loadAbout').addEventListener('click', () => {
        loadHtmlTemplate('about.html', '#contentArea');
    });

    fs('#loadContact').addEventListener('click', () => {
        loadHtmlTemplate('contact.html', '#contentArea');
    });

    // Add event listeners for other buttons as needed


    // Append all elements to the root
    const root = document.querySelector('#root');
    [...buttons, ...additionalElements].forEach(element => root.appendChild(element));


});
*/