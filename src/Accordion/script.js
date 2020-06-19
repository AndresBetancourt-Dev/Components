
/*What we want it's to obtain an array an with this array we get all the buttons in the HTML */
/*We iterate through each button and add an eventlistener on click */
document.querySelectorAll('.accordion__button').forEach((button)=>{
    button.addEventListener('click',()=>{
    // We get the element sibling that in this case it's the content of the accordion button
       const accordionContent = button.nextElementSibling;

       //We toggle the classes depending if the accordion it's active or not
       button.classList.toggle('accordion__button--active')
       //If it's active that means we want to see the content
       if(button.classList.contains('accordion__button--active')){
           //We set the maxHeight depending on the scroll height a.k.a the auto height of the content
           accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
       }else{
           //If it's not active that means we want to close the accordion we set maxheight back to zero on the accordion content
           accordionContent.style.maxHeight = 0;
       }
       
    });
});