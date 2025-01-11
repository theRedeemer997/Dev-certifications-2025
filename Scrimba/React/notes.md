# React
React is a front end library
advantages of react --
- largest ecosystem/community
- `composable` - can be used to create reusable and interchangeable 
pieces of web that can be combined in various ways to create
complex systems
- `Declarative` - the library handles the tedious tasks and we dont have to worry about that

## create react app using the vite
npm create vite@latest

## difference between libraries and framework
 - the `library` is a collection of reusable code 
and reduces the need to write repititive things.
 - can control how it is used 
 - but `framework` is like a predetermined architecture 
that is you follow a specified pattern of development.
 - the framework expects us to follow what they have 
in their doc and they do not expect to do any customization

## challenges
### react-facts
`complete the index.jsx file`
```JavaScript
/**
* Challenge: set up a new React app from scratch!
* Hints:
* 1. Need to import the method to create a new root
*    from the "react-dom/client" package)
* 2. Use that root to render some JSX. For now, just render
*    an h1 element that says anything you want.
     */
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
    <h1>I am Manu Mathew and I am currently feeling sleepy!!</h1>
);
```



