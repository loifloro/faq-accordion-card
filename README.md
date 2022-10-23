# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/loifloro/faq-accordion-card)
- Live Site URL: [Github Pages](https://loifloro.github.io/faq-accordion-card/dist)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Sass
- Normalize.css


### What I learned

I also used the after pseudo element to put the arrow  icon in the right side of every question. I used tranform: rotate(180deg) to rotate the arrow when it is active. 
```css
&::after {
            content: url(../assets/images/icon-arrow-down.svg);
            display: inline;
            margin-left: auto;
            transition:  .5s;
        } 
```
In this project I learned that in order to get all the elements with the same classnames, 'for loop' is needed to be utilized. 

### Question - Why 'this' is not working? Instead I just used the let and created new variable. 


```js
let accordion = document.getElementsByClassName('accordion__item')

for(i = 0; i < accordion.length; i++) {
    let count = accordion[i]

    accordion[i].addEventListener('click' , () => {
        count.classList.toggle('accordion__item--expand')
        
    })
}
``` 

### Continued development 

On my upcoming projects, I'm going to still develop Javascript projects on Frontend Mentor.

### Useful resources

- [Using for loop on accordion](https://www.youtube.com/watch?v=5fb2aPlgoys&t=7205s) - This helped tp realize that pseudo elements can't be selected through the Javascript DOM, thus it need to have for loop



## Author
- Github - [loifloro](https://github.com/loifloro/)
- Frontend Mentor - [@loifloro](https://www.frontendmentor.io/profile/loifloro)
- Twitter - [@loisfloro](https://www.twitter.com/yourusername)

## Acknowledgments
Thank you Frontend Mentor for having projects that helps beginner to really enhance their knowledge.