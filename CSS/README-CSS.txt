1. What is it ?
    - CSS is Cascading Style Sheet. 
    - It is style sheet language that works with 
        markup pages like html

2. Selector: 
    - See this link for full reference: 
    https://www.w3schools.com/cssref/css_selectors.asp

3. Positioning and box model: 
    a. Positioning: 
        - static: 
            +, This is the default position.
            +, Element with this position will be
                rendered according to html
            +, offset (top, bottom, left, right) 
                won't work on this position
            +, padding and margin still works
        
        - relative: 
            +, Position based on the default position 
                (static position)
            +, Difference from static: able to use offset
                (top, bottom, left, right)
        
        - absolute: 
            +, Positioning based on the closest parent
                that also have absolute value in position
            +, If no parents have absolute, it will render 
                based on <html>
        
        - fixed: 
            +, Positioning based on the viewport
            +, Not affected by scroll
    
        Full notes here: 
        https://github.com/Trung28899/Code/blob/master/Resources%20(%20Web%2CJava%2CC_C%2B%2B%2C%20Database%20)/Web%20development/CSS%20NOTES/1-CSS%20positioning%20notes/CSS%20Positioning.txt
    
    b. Box model: 
        - Content > Padding > Border > Margin
        See this link for full reference: 
        https://www.w3schools.com/css/css_boxmodel.asp

4. CSS Layout:
    a. CSS grid: 
        - flexbox is 1 dimensional layout, css grid
            is 2 dimensional layout
        - See folder CSS-grid:
            +, index.html: basic attribute: 
                display: grid;
                grid-template-columns: 70% 30%;
                grid-gap: 1em;

            +, index2.html: 
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows: minmax(100px, auto);
                /* grid-auto-rows: 100px; /* setting height of rows */
            
            +, index3.html:
                grid-column: 1/3; > take space from 1-3 horizontally
                grid-row: 1/3; > take space from 1-3 vertically
                See this diagram to understand: 
                https://github.com/Trung28899/Code/blob/master/Resources%20(%20Web%2CJava%2CC_C%2B%2B%2C%20Database%20)/Web%20development/CSS%20NOTES/3-CSS%20Grid/diagram.png

    b. CSS flex-box: 
        - See file CSS-flex
        
5. Media Queries and Responsive Designs: 

    a. Media Queries: 6 screen Queries
    - Desktop view, Large Laptop, Medium Laptop, Tablet, Phone, Small Phone

    b. Responsive Designs: 
    - Fluid width: The idea of using % instead of px
    - View Ports: 
        +, Setting View Ports gives the browser instructions 
        on how to control the page's dimensions and scaling.

        +, See this for reference: 
        https://www.w3schools.com/css/css_rwd_viewport.asp

            
Advanced Concepts: 
1. Styling unit (px, em, rem, %, vs, vh)
    a. Absolute unit: 
        - Standard measure like cm, mm, etc.
        - px is absolute unit
    
    b. Relative unit: 
        - %: 
            +, relative unit to parent unit
                or default size

        - vw /vh: 
            +, relative unit to entire view width
            +, 1vw = 1% of the entire view width
            +, vh is the same, except it works for height

        - rem / em: 
            +, rem: relative to root html font-size
            +, em: relative unit to parent's font-size
            +, different browser has differnt default 
                font-size