### Chenyuan Zhang-User Input Mechanic:Interactive ripple Garden

I was responsible for the user input mechanic. My part lets the viewer interact with the pond using the mouse and keyboard. When the mouse moves across the canvas, small ripples appear on the water. When the mouse is clicked, a stronger ripple appears and a new water lily is added at that position.

The water lilies start small and slowly grow to their final size. I used 'lerp()' for this because it makes the growth feel smoother instead of appearing suddenly. This idea connects to the easing technique from Week 10.

I also added keyboard controls. Pressing '1' sets the scene to clam mode, pressing '2' sets it to windy mode, and pressing '3' sets it to glowing mode. These modes change the colour of future ripples and also change the overlay colour of the pond background.

For this mechanic, I used p5.js techniques from the tutorials including 'mouseMoved()', 'mousePressed()', 'keyPressed()', arrarys, classes, 'lerp()', 'preload()', 'loadImage()'， and 'windowResized()'.


### Manyu Lin-Time-Based Mechanic:Day/Nigh Pond

I was responsible for the time-based mechanic. My part allows the pond environment to change automatically over time. The scene gradually moves through four different states: morning, daytime, sunset, and night. Each state has its own colour palette, brightness, and atmosphere, helping the pond feel more natural and alive.

As time passes, the background colours smoothly transition between different lighting conditions. I used lerpColor() to create smooth colour transitions rather than sudden changes. This idea connects to the interpolation and animation techniques introduced in Week 10.

I also added animated water lilies that respond to the time of day. During the day, the lilies gradually open and become larger, while at night they slowly close and shrink. I used lerp() to make these size changes smooth and organic, helping the flowers feel more lifelike.

This mechanic was inspired by Claude Monet's interest in painting the same landscape under different lighting conditions. Instead of creating a static image, the pond continuously evolves over time, showing how light and atmosphere can transform the same environment.

For this mechanic, I used p5.js techniques from the tutorials including frameCount, timers conditional statements(if/else), lerp(), lerpColor(),arrays, classes, particla systems, and animation loops within draw().
