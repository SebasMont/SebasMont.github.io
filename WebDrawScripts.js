
var drawScreen = document.getElementById("drawScreen")
var lienzo = drawScreen.getContext("2d");
var pencil = {
   widthLine: 3,
   lineColor: "black"
}
var blueColor = document.getElementById("blueColor");
/*blueColor variable is temporal, I need to make a function to select diferent colors from html buttons*/
var menuButton = document.getElementsByName("menu");
var selectButton = document.getElementsByName("select");
var eraseButton = document.getElementById("delete");
   blueColor.addEventListener("click", selectColor);
   eraseButton.addEventListener("click", eraseLine);
   drawScreen.addEventListener("mousedown", beginLine);
   document.addEventListener("mousemove", beginLine);

   function selectColor() {
      pencil.lineColor = "blue";
      return pencil.lineColor;
   }
   function drawLine(widthLine, xstart, ystart, xfinal, yfinal) {
      lienzo.beginPath();
      lienzo.strokeStyle = pencil.lineColor;
      lienzo.lineWidth = widthLine;
      lienzo.moveTo(xstart, ystart);
      lienzo.lineTo(xfinal, yfinal);
      lienzo.stroke();
      lienzo.closePath();
   }
   function selectItem(item) {
      var item;
   }
   function eraseLine(event) {
      pencil.lineColor = "white";
      if(event.button == 0 && event.buttons == 1) {
         drawLine(10, event.offsetX, event.offsetY, event.offsetX+7, event.offsetY+7);
      }
      else {}
   }
   function getInfo(event) {
      console.log(event);
      /*This function is for getting information about events through console.*/
   }
   function beginLine(event) {
      if(event.button == 0 && event.buttons == 1) {
         drawLine(3, event.offsetX, event.offsetY, event.offsetX+2, event.offsetY+2);
      }
      /*This funtion has to improve, lines are not continous*/
      else {}
   }
   function moveLine(event) {
      if(event.button == 0 && event.buttons == 1) {
         drawLine(3, event.offsetX, event.offsetY, event.offsetX+0.5, event.offsetY+0.5);
      }
      /*Temporal function.*/
      else {}
   }