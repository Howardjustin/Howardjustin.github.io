let brush = document.getElementById("c").getContext("2d")
let w = 400    
let h = 400
let dx = 10
let rects = [[50, 100, 50], [200, 250, 50], [300, 200, 50]]

setInterval(drawFrame, 200)

function drawFrame() {
    updateData()
    drawBackground()
    drawRect()
}
function updateData() {
    for (let i = 0; i < rects.length; ++i) {
        rects[i][0] -= dx
        if(rects[i][0] < 0) {
            rects[i][0] = w
        }
    }
}
function drawBackground() {
    brush.fillStyle = "#DDDDDD"
    brush.fillRect(0, 0, w, 3/4*h)
    brush.fillStyle = "#00FF00"
    brush.fillRect(0, 3/4*h, w, 1/4*h)
}
function drawRect() {
    for (let i = 0; i < rects.length; ++i) {
        brush.fillStyle = "#FF0000"
        brush.fillRect(rects[i][0], rects[i][1], rects[i][2], 3/4*h-rects[i][1])
   }
}