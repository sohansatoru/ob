function preload(){
    img=loadImage("fruit.avif");
    }
    
    function setup(){
        canvas = createCanvas(640,420);
        canvas.center();
       
    
    }
    
    function draw(){
        image( img ,0 ,0 ,640 ,420);
        fill("#FF0000");
        text("FRUIT BASKET", 60 ,120);
        noFill();
        stroke('#FF0000')
        rect(50, 100, 500, 250);
    
    
    }