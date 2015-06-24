//  solution to Eloquent JavaScript chapter 2, problem 3
//  build a chess board

for (var i = 0; i < 8; i++) {
    var line = "";
    var position = ((i % 2 == 0 && " ") || "#")
    line += position;
    for (var j = 0; j < 7; j++) {
        position = ((position == " " && "#") || " ");
        line += position;
    };
    console.log(line);
};