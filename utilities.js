// utilities.js

// Function to select elements
export function fs(selector) {
    return document.querySelector(selector);
}

// Function to create multiple elements with attributes
export function createElements(elements) {
    return elements.map(({ tagName, content, attributes }) => {
        const element = document.createElement(tagName);
        element.innerHTML = content;

        setAttributes(element, attributes);
        return element;
    });
}

// Function to set multiple attributes to an element
export function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// AJAX Utility function for loading HTML templates
// utilities.js
// ... (other functions)

// AJAX Utility function for loading HTML templates with error handling
export function loadHtmlTemplate(url, targetElementId, callback = () => {}) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const targetElement = fs(targetElementId);
                targetElement.innerHTML = this.responseText;
                callback(targetElement);
            } else if (this.status === 404) {
                console.log("The following html template is not connected: " + url);
            }
        }
    };
    xhr.send();
}

