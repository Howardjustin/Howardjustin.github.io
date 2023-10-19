// Pattern 1 (using while-loop)
let canvas1 = document.getElementById("canvas1");
let painter1 = canvas1.getContext("2d");
painter1.fillStyle = "#000000"; // Set the fill color to Black
painter1.fillRect(0,0,400,400)
painter1.fillStyle = "#FF0000"
painter1.fillRect(10,10,20,20)

let x1 = 10;
let y1 = 10;
let squareSize1 = 20;
let spacing1 = 10;
let i1 = 0;

while (i1 < 13) { // 8 squares to meet the requirement
  painter1.fillRect(x1, y1, squareSize1, squareSize1);
  x1 += squareSize1 + spacing1;
  y1 += squareSize1 + spacing1;
  i1++;
}

// Pattern 2 (using for-loop)
let canvas2 = document.getElementById("canvas2");
let painter2 = canvas2.getContext("2d");
painter2.fillStyle = "#000000"; // Set the fill color to Red
painter2.fillRect(0,0,400,400)
painter2.fillStyle = "#FF0000"
painter2.fillRect(0,0,0,0)


let x2 = 10; // Start the second pattern to the right
let y2 = 10;
let squareSize2 = 20;
let spacing2 = 10;
let i2 = 5;

for (let row = 0; row < 13; row++) {
  for (let col = 0; col < 13; col++) {
    painter2.fillRect(x2 + col * (squareSize2 + spacing2), y2 + row * (squareSize2 + spacing2), squareSize2, squareSize2);
    i2++;
  }
}
