# Advanced DOM

* **Interacting with the DOM:**
    - Change / Remove HTML elements in the DOM / on the page
    - Change & Add CSS styles to elements
    - Read & Change elements attributes (href, src, alt, custom)
    - Create new HTML elements and insert them into the DOM / the page
    - Attach event listeners to elements (click, keypress, submit)

* In this section:
    - Navigating the DOM and the Query Selector
    - Changing the DOM / manipulating HTML elements, content & CSS
    - Interacting with forms & events (submit, click, keypress)
    - Creating new elements via JS and insert them into the DOM
    - Creating a mini reading list app
    

* Basics:
    * **Get Element By ID**
        *document - all the model object*
        - document.**getElementById**('some_id');
        - var something = document.getElementById('some_id');
    
    * **Get Elements By Class or Tag**
        - document.**getElementsByClassName**('some_class_name');
        - document.**getElementsByTagName**('some_tag_name');
        
        - var some_list = document.getElementsByClassName('some_class_name');
            *you can iterate through it*
            - for (let i = 0; o < some_list.length; i++) { *do something with* some_list[i] }
                - *Array.from(titles).forEach(item => {*
                    - *console.log(item);*
                - *});*
        
    * **The Query Selector**
        - document.querySelector('#wrapper')
            - *similar to jQuiery $('#wrapper')*
        - document.querySelectorAll('#wrapper')
        
    * **Changing Text & HTML Context**
        - textContent 
        - innerHTML

    * **Nodes**
        *Everything in DOM is a **node***
        - nodeType
        - nodeName
        - hasChildNodes

    * **Traversing the DOM**
        - **Parent:**
            - parentNode
            - parentElement
        
        - **Child:** 
            - childNodes
            - children

        - **Siblings:** 
            - nextSibling
            - nextElementSibling
            - previousSibling
            - previousElementSibling

    * **Events**
        - **addEventListener**
            - click
            - input
            - keypress
        
        - **methods:**
            - e.target()
            - e.preventDefault

        - **remove:**
            - parent.removeChild()

    * **Event Bubbling** 
    
    * **Interacting with Forms**
        - document.forms

    * **Creating Elements**
        - document.createElement
        - .appendChild 
        - .textContent

    * **Styles & Classes**
        - .style
            - .style.color *for example*
            - .style.margin-top *for example*
        - .className
            - .className = "smth" *to make the only this class*
            - .className += "smth" *append to the classList*
        - .classList.add('smth');
        
    * **Attributes** 
        - .getAttribute('class') *return attribute*
        - .setAttribute('class', 'name-2'); *set new attribute*
        - .hasAttribute('class') *return true/false*
        - .removeAttribute('class') *remove attribute*

    * **Checkboxes & Change Events**
        - .checked

    * **Custom Search Filter**
        - document.forms[]
        - .indexOf()
        - addEventListener('keyup', ...)

    * **Tabbed Content**
    
    * **DOMContentLoaded Event**
    