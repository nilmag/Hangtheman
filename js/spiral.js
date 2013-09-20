var Spiral = function() {
    "use strict";
    var total = 0;
    var size = 35;
    var x = 0;
    var y = 0;
    var direction = 'right';
    var id = 0;
    var colNumb = 0;
    var rowNumb = 0;
    var rowCount = 0;
    var colCount = 0;

    var drawNumber = function(x,y,id) {
        var newdiv = document.createElement('div');
        newdiv.style.width = size-2 + "px";
        newdiv.style.height = size-2 + "px";
        newdiv.style.position = "absolute";
        newdiv.style.left = (x*size) + 'px';
        newdiv.style.top = (y*size) + 'px';
        // newdiv.style.background = "#eee";
        newdiv.style.background = color();
        newdiv.style.textAlign = "center";
        newdiv.style.verticalAlign = "middle";
        newdiv.style.padding = "5px";
        newdiv.innerHTML = id;
        $('#spiral_container').append(newdiv);
    };
    var color = function() {
        var v = Math.floor((1 - (id / total)) * 96) + 128;
        return ("rgb(" + v + ", " + v + ", " + v + ")");
    };

    var draw = function(idd) {
        id = idd;
        switch (direction) {
            case "right":
                x++;
                if(x===colNumb) {
                    direction = "down";
                    colNumb--;
                }
                break;
            case "down":
                y++;
                if(y+1===rowNumb) {
                    direction = "left";
                    rowNumb--;
                }
                break;
            case "left":
                x--;
                if(x-1===colCount) {
                    direction = "up";
                    colCount++;
                }
                break;
            case "up":
                y--;
                if(y-1===rowCount) {
                    direction = "right";
                    rowCount++;
                }
                break;
            default:
                console.log('you are not supposed to be here');
        }
        drawNumber(x, y, id);
    };

    var render = function(row_numb, col_numb) {
        total = row_numb * col_numb;
        var array = [];
        for(var j=0; j<total; j++) {
            array.push(j+1);
        }
        console.log(array);
        colNumb = col_numb;
        rowNumb = row_numb;
        console.log('total numbers: ' + total);
        for(var i=1; i<total+1; i++) {
            // id=i;
            // draw();
            (function(index) {
                setTimeout(function() {draw(index);}, (20*i));
            })(i);
        }
    };

    return {
        makeSpiral: function(row_numb, col_numb) {
            render(row_numb, col_numb);
        }
    };
};

var mySpiral = new Spiral();
mySpiral.makeSpiral(20, 20);