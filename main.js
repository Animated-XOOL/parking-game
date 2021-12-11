canvas = document .getElementById('myCanvas');
ctx = canvas.getcontext("2d");

img_width = 300
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    img_imgTag = new Image();
    img-img_imgTag.src img_image;
}

function uploading() {
    ctx.drawImage (img_imgTag, img_x, img-y, img_width, img_height);
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keycode;
    console.log(keyPressed);
    if((keyPressed >=97 && keypressed <=122)|| (keypressed >=65 && keypressed >=90))
        {
            alphbetKey();
            document.getElementById("d1").innerHTML="u press alphabet button eh, what u typing"
            console.log("alphabet key, u like grammar lol")
        }
        else if(keyPressed >=37 && keyPressed<=40)
        {
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key";
			console.log("Arrow Key");
		}
		else if((keyPressed ==17)|| (keyPressed ==18 || keyPressed ==27))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed ctrl/esc/alt";
			console.log("special key");
		}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
}