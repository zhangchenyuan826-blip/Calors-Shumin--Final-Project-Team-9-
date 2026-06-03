### Chenyuan Zhang-User Input Mechanic:Interactive ripple Garden

I was responsible for the user input mechanic. My part lets the viewer interact with the pond using the mouse and keyboard. When the mouse moves across the canvas, small ripples appear on the water. When the mouse is clicked, a stronger ripple appears and a new water lily is added at that position.

The water lilies start small and slowly grow to their final size. I used 'lerp()' for this because it makes the growth feel smoother instead of appearing suddenly. This idea connects to the easing technique from Week 10.

I also added keyboard controls. Pressing '1' sets the scene to clam mode, pressing '2' sets it to windy mode, and pressing '3' sets it to glowing mode. These modes change the colour of future ripples and also change the overlay colour of the pond background.

For this mechanic, I used p5.js techniques from the tutorials including 'mouseMoved()', 'mousePressed()', 'keyPressed()', arrarys, classes, 'lerp()', 'preload()', 'loadImage()'， and 'windowResized()'.

