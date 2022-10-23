let accordion = document.getElementsByClassName('accordion__item')


for(i = 0; i < accordion.length; i++) {
    let count = accordion[i]

    accordion[i].addEventListener('click' , () => {
        count.classList.toggle('accordion__item--expand')
        
    })
}