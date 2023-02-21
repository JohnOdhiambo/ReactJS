# ReactJS
React is a JavaScript library for building a reusable user interface(UI).It is used to build single page applications -An application which has only one HTML page.

JavaScript XML
JSX stands for JavaScript XML. JSX allows us to write HTML elements with JavaScript code.
It makes it easier to write and add HTML elements in React. JSX will be converted to JavaScript on browser using a transpiler - babel.js.
Babel is a library which transpiles JSX to pure JavaScript and latest JavaScript to older version.

For example, this JSX element has 3 HTML element which is h1.
	const header = (
  	  <header>
    	    <h1>Welcome to React JS</h1>
    	    <small>JavaScript Library</small>
  	  </header>
	)

Rendering a JSX Element
-The root div is the gateway to connect all react components to the index.html. In the script tag we will write our JavaScript, but the script type will be babel.
-After linking the babel library to our document, the next step is importing React and ReactDOM using CDN or link.
-In order to link React and ReactDOM, we attach both packages from CDN to the body of index.html.
-To test if React is linked to the index.html, try to check it by doing console.log(React). Open the browser console and you should get an object.
