### Interactive Water Lilies
### Inspiration
Our project is inspired by Claude Monet's Water Lilies series. Monet's paintings focus on light, reflections, atmosphere, and the changing appearance of nature. Rather than creating a static reproduction of the artwork, our team reinterpreted the pond as an interactive digital environment that responds to users, time, and sound.
The goal of the project is to transform Monet's peaceful water garden into a living experience where visitors can influence the pond through interaction while still preserving the calm and reflective qualities of the original artwork.
Techniques
This project was developed using p5.js and combines multiple interactive systems to create a dynamic environment.
Key techniques include:
preload()
loadImage()
loadSound()
mouseMoved()
mousePressed()
keyPressed()
lerp()
lerpColor()
p5.Amplitude()
p5.FFT()
Arrays
Classes
Particle Systems
Animation Loops (draw())
Conditional Statements (if/else)
Timers and frameCount
These techniques allow the pond to respond to user input, audio, and the passage of time.

### Mechanic Ownership
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

### Rui Li – Sound-Based Mechanic: Audio-Reactive Water Surface

I was responsible for the sound-based mechanic. My part allows the pond to respond dynamically to music and audio. The system analyses the sound using p5.js audio tools, including p5.Amplitude() and p5.FFT(), to measure the volume and frequency content of the music in real time.

As the music becomes louder, the water surface generates stronger ripples and more visible movement. Higher-frequency sounds create small sparkling particles across the pond, while lower-frequency sounds produce larger circular ripples that spread across the water. This makes the environment feel more alive and constantly changing rather than remaining static.

This mechanic connects closely to Claude Monet's Water Lilies because the original artwork focuses on reflections, light, and the surface of the water. By allowing sound to influence the movement of the pond, the artwork becomes an interactive and immersive experience that responds to its environment.

To create smooth visual reactions, I used amplitude values to control ripple size and particle generation. The ripples are continuously updated within the draw() loop so that the pond responds naturally to changes in the music over time.

For this mechanic, I used p5.js techniques from the tutorials including p5.Amplitude(), p5.FFT(), loadSound(), preload(), arrays, classes, particle systems, conditional statements, and animation loops within draw().

### AI Usage Statement

ChatGPT was used throughout this project as a learning and development support tool. AI assistance was used for brainstorming interaction ideas, explaining p5.js concepts, debugging code, generating example code snippets, and improving written documentation.

The sound-reactive mechanic, time-based mechanic, and user-input mechanic were designed, implemented, tested, and refined by the team members. AI-generated code and suggestions were adapted and modified to fit the specific requirements of the project. All final design decisions, coding integration, and evaluation were completed by the team.

AI contributed to the development process by providing technical guidance and feedback, while the final creative work and project outcome remained the responsibility of the authors.

### External References
Claude Monet. Water Lilies Series.
p5.js Reference:
https://p5js.org/reference/
p5.js Sound Library:
https://p5js.org/reference/#/libraries/p5.sound
OpenAI ChatGPT:
https://chatgpt.com/

### Interaction Instructions
Click the Play / Pause button to start or stop the music.
Move the mouse across the canvas to generate small water ripples.
Click anywhere on the pond to create a larger ripple and add a new water lily.
Press 1 to activate Calm Mode.
Press 2 to activate Windy Mode.
Press 3 to activate Glowing Mode.
Observe how the pond changes throughout the day-night cycle.
Listen to the music and watch how sound affects ripple strength, particles, and water movement.


