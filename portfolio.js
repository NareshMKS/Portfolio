var i = 0;
var txt = 'Full-Stack Developer';
var speed = 100;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("prof").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        // Reset variables to loop
        i = 0;
        document.getElementById("prof").innerHTML = ""; // Clear the content
        setTimeout(typeWriter, speed); // Restart the typewriter effect
    }
}
typeWriter();