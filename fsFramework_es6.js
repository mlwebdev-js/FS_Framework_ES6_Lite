// Define a class for our framework
class FSFramework {
    constructor() {
      this.createElements();
    }
  
    createElements() {
      const elements = [
        'a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 
        'bdi', 'bdo', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 
        'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 
        'details', 'dfn', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 
        'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 
        'h6', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 
        'ins', 'kbd', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 
        'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 
        'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 
        'progress', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'samp', 'script', 
        'section', 'select', 'slot', 'small', 'source', 'span', 'strong', 
        'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 
        'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 
        'u', 'ul', 'var', 'video', 'wbr'
      ];
  
      elements.forEach(tag => {
        this[tag + '_'] = () => document.createElement(tag);
      });
    }
  
    ID = selector => document.getElementById(selector);
    TAG = selector => document.getElementsByTagName(selector)[0];
    CLASS = (selector, index = 0) => document.getElementsByClassName(selector)[index];
    NAME = selector => document.getElementsByName(selector)[0];
    QUERY = selector => document.querySelector(selector);
    QueryAll = selector => document.querySelectorAll(selector);
    GetValue = selector => document.querySelector(selector).value;
    ElEvent = (element, event, func) => element.addEventListener(event, func);
    CREATE = tagName => document.createElement(tagName);
    LStoreItem = (key, value) => localStorage.setItem(key, value);
    SetAttributes = (element, attributes) => Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    
    AddElementOnTag = (parentTag, childTag, innerHTML) => {
      const child = this.CREATE(childTag);
      const parent = this.TAG(parentTag);
      parent.appendChild(child);
      child.innerHTML = innerHTML;
      return { parent, child, innerHTML };
    };
  
    AddElementOnId = (parentId, childTag, innerHTML) => {
      const child = this.CREATE(childTag);
      const parent = this.ID(parentId);
      parent.appendChild(child);
      child.innerHTML = innerHTML;
      return { parent, child, innerHTML };
    };
  
    DoIf = (condition, func) => {
      if (condition) func();
    };
  
    IfElse = (condition, func1, func2) => {
      condition ? func1() : func2();
    };
  }
  
  // Usage example
  const fs = new FSFramework();
  const div = fs.div_();
  div.innerHTML = "Hello, World!";
  document.body.appendChild(div);
  