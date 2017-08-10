var xPos = 400;
var yPos = 400;
var xPos2 = 600;
var yPos2 = 250;
var x = 5;
var y = 3;
var x2 = 5;
var y2 = 3;
var xRecPos = 400;
var play = true;
var score = 0;
var level2 = false;
function setup(){
    createCanvas(800, 800);
    background(153);
}


function draw(){
    background(153);

    if(play == true){
        ellipse(xPos, yPos, 50, 50);
        if(level2 == true){
            ellipse(xPos2, yPos2, 50, 50);
        }
    }
    xPos += x;
    yPos += y;
    if(level2 == true){
        xPos2 += x2;
        yPos2 += y2;
    }
   
    if(xPos - 25 < 0 || xPos + 25 > 800){
        x = -x;
    }

    if(yPos - 25 < 0){
        y = -y;
    }   
    if(level2 == true){
        if(xPos2 - 25 < 0 || xPos2 + 25 > 800){
            x2 = -x2;
        }

        if(yPos2 - 25 < 0){
            y2 = -y2;
        }   
    }
    fill(244, 66, 92);
    rect(xRecPos, 770, 200, 30);  

    if (xRecPos > 800 - 170){
        xRecPos = 10;
    } else if (xRecPos+80 < 8 ){
        xRecPos = 620;
    }

    if((yPos+25 >= 770 && yPos+25 <= 825) && ((xPos+25 >= xRecPos) && (xPos+25 <= xRecPos + 200)) ){ // x to x + 200
        y = -y;
        x = -x;
        score += 100;
        $('#score').text('Score: ' + score);
    }else if(yPos >= 800){
        textSize(90);
        text("YOU LOSE!", 0, 400);
        play = false;
        
    }
    if(level2 == true){
        if((yPos2+25 >= 770 && yPos2+25 <= 825) && ((xPos2+25 >= xRecPos) && (xPos2+25 <= xRecPos + 200)) ){ // x to x + 200
            y2 = -y2;
            x2 = -x2;
            score += 100;
            $('#score').text('Score: ' + score);
        }else if(yPos2 >= 800){
            textSize(90);
            text("YOU LOSE!", 0, 400);
            play = false;
        }
    }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xRecPos -= 100;
  } else if (keyCode === RIGHT_ARROW) {
    xRecPos += 100;
  }
}

function reset(){
    play = true;
    xPos = 400;
    yPos = 400;
    if(level2 == true){
        xPos2 = 600;
        yPos2 = 250;
    }
    score = 0;
    $('#score').text('Score: ' + score);
    draw();
}

function nextLevel(){
    level2 = true;
    reset();

}

function firstLevel(){
    level2 = false;
    reset();
}