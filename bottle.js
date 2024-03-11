function preload(){
    img=loadImage("bottle.webp");
    }
    
    function setup(){
        canvas = createCanvas(640,620);
        canvas.center();
       
    
    }
    
    function draw(){
        image( img ,0 ,0 ,640 ,620);
        fill('#0000CD');
        text("BLUE BOTTLE", 90 ,120);
        noFill();
        stroke('#0000CD')
        rect(90, 100, 200, 500);

        fill("#DAA520");
        text("YELLOW BOTTLE", 310 ,130);
        noFill();
        stroke("#DAA520")
        rect(300, 100, 200, 500);
        
    }