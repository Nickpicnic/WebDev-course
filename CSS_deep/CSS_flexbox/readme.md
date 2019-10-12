# CSS FlexBox

* **Basic Elements:**
    * Flex **container**
        * makes context for flexbox
        * keep inside flex-elements
        * can be block or line
    * Flex **element**

        * *Example:*
            * ul (flex-container)
            * li (flex-element)
        

    * **Axis:**
        * Main 
        * Perpendicular


* **options**:
    * **display: flex**
        * create a block element *full-width*
    * **display: inline-flex**
        * create a inline element 

    * **flex-direction:**
        *change direction of elements layout*
        * row *(by default)*
        * column
        * row-reverse
        * column-reverse

    * **flex-wrap:**
        * nowrap *(by default)*
        * wrap
        * wrap-reverse

    * **justify-content:**
        * flex-start *(by default)*
        * center 
        * flex-end
        * space-around
        * space-between

    * **order:**
        *for flex-element*
        * 0 *by default*
    
    * **flex-grow, flex-shrink, flex-basis:**
        *for flex-element*
        * flex-grow
            * 0 *(by default)*
        * flex-shrink
            * 1 *(by default)*
        * flex-basis
            * auto *(by default)*

    * **flex:**
        *for flex-element*
        * set param by default instead of **grow, shrink** and **basis**

    * **align-items, align-content, align-self:**
        *for aligning element by perpendicular axis*
        * align-items 
            * stretch *(by default)*
            * flex-start
            * center
            * flex-end
        * align-content
            *for container*
            * stretch *(by default)*
            * flex-start
            * center
            * flex-end
        * align-self
            *for flex-element*
            * flex-start
            * center
            * flex-end
        
