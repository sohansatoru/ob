function preload(){
    img=loadImage("hall.jpg");
    }
    
    function setup(){
        canvas = createCanvas(640,420);
        canvas.center();
       
    
    }
    
    function draw(){
        image( img ,0 ,0 ,640 ,420);
        fill("#0000CD");
        text("DESK", 50 ,220);
        noFill();
        stroke('#0000CD')
        rect(50, 200, 250, 200);

        fill("#FF0000");
        text("TV", 310 ,170);
        noFill();
        stroke('#FF0000')
        rect(300, 150, 230, 150);
        
    }