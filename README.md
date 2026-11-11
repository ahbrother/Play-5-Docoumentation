# overall
This Website is supposed to be an easy and fun way to explore creative Coding aswell as Web-Developement and perhaps in the future even Web-Design. The idea is to do short or long sprints in creative coding, in order to explore and get better at p5js. The focus there is not to get a single, perfect project, but rather a lot of projects, where i explore old and new concepts and learn new things on the go.
In this file i also have multiple kind of things going on, to further explore VS-Code and Git. Through that i hope to understand and learn more about web-developement and how i can build a file, maybe in the future even how to organize such a file in a clever and clean way. But thats for later, when there is more stuff going on :)
The whole thing is set up with the min.js library and included the tailwind cli, so i can work offline and am not dependet on internet access.

# important!!
## starting tailwindcss (required each day, when starting to work)
npx @tailwindcss/cli -i input.css -o output.css --watch

# what is going on?
## assets folder
a folder to store needed assets like data, images, etc.

## css folder, style css
original, base css from the html site if i'm correct. here i could also add my own CSS classes if i would want to. probably not the best idea since it would like concurrent with tailwinds classes.

## js folder
here we have our javascript library. i'm currently using the p5.min library, since it allows me to work offline. 

## output folder
here we save output from the different sketches. since i originally planned to work with different sketches, it was meant to be a place where i can store output. 
Currently probably more kind of a process-folder, where i can see how the different sketches were created.

## Jupiter Notebook
here i have a Jupiter notebook, which was used to turn a CSV file into a JSON, which is my prefered way to work with data.

## index html
the structure of the website. initally used only to look at the different sketches (originally there was no plan to combine them into one website). 
Now this is the place where we combine everything and give it structure.

## input css
only used to load tailwind css

# sketches folder
contains all sketches, for better overview

## circles
basically drawing a single circle with a stroke on a black background. the circle grows and shrinks with the noise and frameCount functions. it follows the mouseY pos, and through the blendMode function we get the interesting look.

## interactiveLines
after working with lines in two other projects, i wanted to add interaction to the lines. this sketch is not dependent on data, but is rather an experiment on how to add interaction. Also important to notice how to combine mulitple functions with instance modes.

## LinesSketch
first sketch to work with lines only. wanted to combine them with data and see how i could animate them. dont like it at all, so it is currently not displayed.

## newLines
continuation from LinesSketch. Also displaying real data, but without the animation. was trying to explore, how i could display mainly one specific part of the data (trends), using only one form. 

## output css
tailwind's watcher updates automatically which classes are applied to the website and loads them here. DO NOT MODIFY! 

## sketch.js
first sketch, using only the rectangle as a form.
i started with a simple rect, added data to it and eventually even moved to the 3D Sphere using WEBGL.
    here the rect turns into a box, but the principle remains the same.
    just figured out that one can even use light in webgl, which is amazing!


# notes:
## putting multiple sketches into one "website"
to do so, we need to give each sketch an individual id (f.e: canvas1). then inside the html we load the id's inside multiple divs. and also load all the sketches i want with the script tag.
but then i also have to change all my sketches so they work with instance modes (p.stroke, p.circle, etc..)
check out codeSprint_Michi_1709
