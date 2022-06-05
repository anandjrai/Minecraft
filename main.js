var canvas=new fabric.Canvas("myCanvas");
block_width=30;
block_height=30;
player_x=10;
player_y=10;
var player_object="";
var block_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function (Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function newImage(get_image){
    fabric.Image.fromURL(get_image,function (Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypresed=e.keyCode;
    if(e.shiftKey==true&&keypressed=="80"){
     block_width=block_width+10;
     block_height=block_height+10;
document.getElementById("current_width").innerHTML=block_width;
document.getElementById("current_height").innerHTML=block_height;

    }
    if(e.shiftKey==true&&keypressed=="77"){
        block_width=block_width-10;
        block_height=block_height-10;
   document.getElementById("current_width").innerHTML=block_width;
   document.getElementById("current_height").innerHTML=block_height;
   
       }
       if(keypresed=="38"){
           up();
       }
       if(keypresed=="40"){
           down();
       }
       if(keypresed=="37"){
           left();
       }
       if(keypresed=="39"){
           right();
       }
       if(keypresed=="87"){
           newImage("wall.jpg");
           console.log("w");
       }

       if(keypresed=="71"){
        newImage("ground.png");
        console.log("g");
    }

    if(keypresed=="76"){
        newImage("light_green.png");
        console.log("l");
    }
    if(keypresed=="84"){
        newImage("trunk.jpg");
        console.log("t");
    }

    if(keypresed=="82"){
        newImage("roof.jpg");
        console.log("r");
    }

    if(keypresed=="89"){
        newImage("yellow_wall.png");
        console.log("y");
    }

    if(keypresed=="68"){
        newImage("dark_green.png");
        console.log("d");
    }

    if(keypresed=="85"){
        newImage("unique.png");
        console.log("u");
    }

    if(keypresed=="67"){
        newImage("cloud.jpg");
        console.log("c");
    }
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x>=0){
        player_x=player_x-block_width;
        canvas.remove(player_object);
        player_update();
    }

}

function right(){
    if(player_x<=700){
        player_x=player_x+block_width;
        canvas.remove(player_object);
        player_update();
    }
}