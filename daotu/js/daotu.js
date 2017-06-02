/*
 * 创建圆角矩形和居中文字
 * var ctx =document.getElementById("myCanvas").getContext("2d");
 * ctx.lineWidth = 5;
 * ctx.strokeStyle = "#F00";
 * ctx.roundRect(50,50,100,50,5, 'A', 16).stroke();
 * lw: lineWidth，矩形线宽
 * ss：strokeStyle，矩形边框颜色
 * x: 相对于 canvas 的 x 坐标
 * y: 相对于 canvas 的 y 坐标
 * w: 矩形的宽度
 * h: 矩形的高度
 * r: 矩形的圆角半径
 * 后面可接 文字内容，文字大小，文字字体。
 */
CanvasRenderingContext2D.prototype.roundRect = function (lw, ss, x, y, w, h, r) {
    if (w < 2 * r) r = w / 2;
    if (h < 2 * r) r = h / 2;
    this.beginPath();
    this.moveTo(x+r, y);
    this.arcTo(x+w, y, x+w, y+h, r);
    this.arcTo(x+w, y+h, x, y+h, r);
    this.arcTo(x, y+h, x, y, r);
    this.arcTo(x, y, x+w, y, r);
    this.closePath();

    this.lineWidth = lw;
    this.strokeStyle = ss;

    if('undefined' != typeof arguments[7]){
        var word = arguments[7];
        console.log(word.length);
        var font_size = 14;
        var font_family = "Arial";
        if('undefined' != typeof arguments[8]) font_size = arguments[8];
        if('undefined' != typeof arguments[9]) font_family = arguments[9];
        this.textAlign="center";
        this.font = font_size+"px " + font_family;
        this.fillText(word, x+(w/2), y+(h/2)+(font_size/2)-2);
    }
    return this;
}


