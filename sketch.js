let img,
    bubbles = [],
    bubble,
    bg,
    paragraph;

function preload() {
    img = loadImage('bubble.png');
}

function setup() {
    paragraph = createP();
    bg = loadImage('ocean.jpg');
    createCanvas(windowWidth, windowHeight);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bg);
    
    showCounter();
    for (bubble of bubbles){
        bubble.show();
        bubble.move();
        bubble.reflect();
        bubble.kill();
    }
}

function mousePressed(){
    if ((mouseX < width - 50) && (mouseX > 50) && (mouseY < height - 50) && (mouseY > 50)){bubbles.push(new Bubble(mouseX, mouseY));}
}

class Bubble {
    constructor (x, y){
        this.x0 = x;
        this.y0 = y;
        this.x = x;
        this.y = y;
        this.vx = random(-5, 5);
        this.vy = random(-5, 5);
    }

    show(){
        if ((this.x < width - 50) && (this.x > 50) && (this.y < height - 50) && (this.y > 50)){
        img.resize(100, 0);
        image(img, this.x, this.y);
        }
    }

    move(){
        this.x += this.vx;
        this.y += this.vy;
    }

    reflect(){
        if ((this.x > width - 50) || (this.x < 50)){
            this.vx *= -1;
        }
        if ((this.y > height - 50) || (this.y < 50)){
            this.vy *= -1;
        }
    }
    kill(){
        if (dist(this.x, this.y, mouseX, mouseY)<150 && dist(this.x0, this.y0, mouseX, mouseY)>150 && mouseIsPressed == true){
           bubbles.splice(bubbles.indexOf(this), 2);
        }
       
    }
}


function showCounter(){
    
    paragraph.html(bubbles.length);
    paragraph.position(30,30);
    paragraph.style('font-size', '5.4rem');
    paragraph.style('color', 'white');
    
}