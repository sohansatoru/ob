function preload(){
    img=loadImage("bed.jpg");
    }
    
    function setup(){
        canvas = createCanvas(640,420);
        canvas.center();
       
    
    }
    
    function draw(){
        image( img ,0 ,0 ,640 ,420);
        fill("#FF0000");
        text("BED", 50 ,220);
        noFill();
        stroke('#FF0000')
        rect(50, 200, 450, 250);
    
    
    }