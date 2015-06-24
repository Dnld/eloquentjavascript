//  solution to Eloquent JavaScript chapter 2, problem 3
//  build a chess board

var width = 14;
var height = 14;

for (var i = 0; i < width; i++) {
    var line = "";
    var position = ((i % 2 == 0 && " ") || "#")
    line += position;
    for (var j = 0; j < height - 1; j++) {
        position = ((position == " " && "#") || " ");
        line += position;
    };
    console.log(line);
};