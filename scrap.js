var ANCESTRY_FILE = "[\n  " + [
  '{"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"}',
  '{"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"}',
  '{"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"}',
  '{"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"}',
  '{"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null}',
  '{"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null}',
  '{"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"}',
  '{"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"}',
  '{"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"}',
  '{"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null}',
  '{"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"}',
  '{"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"}',
  '{"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"}',
  '{"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null}',
  '{"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"}',
  '{"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"}',
  '{"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null}',
  '{"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"}',
  '{"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"}',
  '{"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"}',
  '{"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"}',
  '{"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"}',
  '{"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"}',
  '{"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"}',
  '{"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"}',
  '{"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"}',
  '{"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"}',
  '{"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"}',
  '{"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"}',
  '{"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}',
  '{"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"}',
  '{"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"}',
  '{"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}'
].join(",\n  ") + "\n]";

// var fun = function() {
//     var x = "level 1";
//     var fun2 = function() {
//         var x = "level 2";
//         var fun3 = function() {
//             var x = "level 3";
//             console.log(x);
//         };
//         console.log(x);
//         fun3();
//     };
//     console.log(x);
//     fun2();
// };

// fun();

// var s = 1;
// console.log(s);

// {
//     var s = 2;
//     console.log(s);
// }

// console.log(s);

// function sayHello() {
//     console.log("hello");
// }

// sayHello("");

// console.log(sq(5));

// function sq(n) {
//     return n * n;
// }

// function c() {
//     return e();
// }

// function e() {
//     return c();
// }


// function additionWrapper(n) {
//     return (function(input) {
//         return n + input;
//     });
// }

// var addTwo = additionWrapper(2);

// console.log(addTwo(10));



// function returnWrapper(n) {
//     console.log(n + " will return in local variable");
//     return (function() {return n;});
// }

// var wrapSix = returnWrapper(6);

// console.log(wrapSix());


// function multiplier(m) {
//     return (function(n) {
//         return n * m;
//     });
// }

// var timesSeven = multiplier(7);

// console.log(timesSeven(9));


// var myObj = {
//     name: "Donald",
//     age: 31,
//     location: "NYC"
// };

// for (var i in myObj) {
//     console.log(i, ":", myObj[i]);
// }

// var arr = [];

// arr.name = "arr";
// arr.push(1);
// arr.push([1,2]);

// for (var i in arr) {
//     console.log(i, ":", arr[i]);
// }

// for (var i = 0; i < arr.length; i++) {
//     console.log(i, arr[i]);
// }

// var points = [
//     {x: 0, y: 0},
//     {x: 1, y: 1}
// ];

// points.dist = function() {
//     var p1 = this[0];
//     var p2 = this[1];
//     var a = p2.x - p1.x;
//     var b = p2.y - p1.y;
//     var distance = Math.sqrt(a*a + b*b);
//     return distance; 
// };

// console.log(points.dist());

// var s = "Donald";

// console.log(s);

// var mack = [];
// mack.push("Mack");
// mack.push("the", "knife");
// console.log(mack.length);
// console.log(mack);
// console.log(mack.join(" "));
// mack.pop();
// console.log(mack.length);
// console.log(mack.join(" "));

// var obj = {};
// obj.a = "A";
// obj.b = "B";
// obj.c = obj.c;
// if ("b" in obj) {console.log("b in obj");} else {console.log("b not in object");}
// console.log(obj.b);
// console.log(obj.c);
// console.log("changing value of obj.b...");
// obj.b = "C";
// console.log(obj.b);
// console.log(obj.c);
// console.log("setting obj.b to undefined...");
// obj.b = undefined;
// if ("b" in obj) {console.log("b in obj");} else {console.log("b not in object");}
// console.log(obj.b);
// delete obj.b;
// if ("b" in obj) {console.log("b in obj");} else {console.log("b not in object");}
// console.log(obj.b);
// var obj1 = {a: "A"};
// var obj2 = obj1;

// var testObjs = function(o1, o2) {
//     if (o1 === o2) {
//         console.log("same objects");
//     } else {
//         console.log("different objects");
//     }
// };

// testObjs(obj1, obj2);

// var obj3 = {a: "A"};

// testObjs(obj2, obj3);

// obj1.a = "B";

// console.log(obj2.a);

// testObjs(obj2, obj1);

// var a = 1;
// var b = 1;

// if (a === b) {console.log("same");} else {console.log("different");}

// a += 1;

// if (a === b) {console.log("same");} else {console.log("different");}

// a -= 1;

// if (a === b) {console.log("same");} else {console.log("different");}

// var fam = ["Don", "Nan", "Don", "Tom"];
// console.log(fam.indexOf("Nan"));

// console.log("coconuts".slice(4));

// function argToArray() {
//     var arr = [];
//     for (var i = 0; i < arguments.length; i++) {
//         arr.push(arguments[i]);
//     }
//     return arr;
// }

// console.log(typeof argToArray(1, 2, 3));

// console.log(Math.PI);

// function hundoRando() {
//     for (var i = 0; i < 100; i++) {
//         var n = Math.floor(Math.random() * 2);
//         console.log((n == 1 && "true") || "false");
//     }
// }

// hundoRando();

// var arr = [1,2,3];
// console.log(arr);
// arr = arr.reverse();
// console.log(arr);

// var a = "hello";
// console.log(a);

// var multiply = function (a, b) {
//   //An internal comment
//   return a * b;
// };

// console.log(multiply.toString());

// products = [
//        { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
//        { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
//        { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
//        { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
//        { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
//     ];

//   var i,j,hasMushrooms, productsICanEat = [];

//     for (i = 0; i < products.length; i+=1) {
//         if (products[i].containsNuts === false) {
//             hasMushrooms = false;
//             for (j = 0; j < products[i].ingredients.length; j+=1) {
//                if (products[i].ingredients[j] === "mushrooms") {
//                   hasMushrooms = true;
//                }
//             }
//             if (!hasMushrooms) productsICanEat.push(products[i]);
//         }
//         console.log(hasMushrooms);
//     }

// console.log(productsICanEat);

// var forEach = function (arr, action) {
//   l = arr.length;
//   for (var i = 0; i < l; i++) {
//     action(arr[i]);
//   }
// };

// arr1 = [1, 2, 3, 4, 5];

// forEach(arr1, console.log);

// var names = ['Don', 'Nancy', 'Donald', 'Thomas'];

// forEach(names, function(name) {
//   console.log('Hello, ' + name);
// });

// _.forEach(arr1, console.log);

// arr1.forEach(function (i, j, k) {
//   console.log(i + ' is at index ' + j + ' of the array ' + k.join(', '));
// });

// var explain = function(func) {
//   return function(arg) {
//     console.log('calling ' + String(arg));
//     var result = func(arg);
//     console.log('the result of which is ' + result);
//   };
// }; 

// var addFive = function(n) {
//   return n + 5;
// };

// explain(addFive)(3);

// var unless = function(test, result) {
//   if (!test) {
//     result(); 
//   }
// };

// var behave = 0;

// unless(behave, function() {
//   console.log('go to bed');
// });

// var repeat = function(times, action) {
//   for (var i = 1; i <= times; i++) {
//     action(i);
//   }
// };

// var sayHello = function(n) {
//   console.log('hello (time no. ' + n + ')');
// };

// repeat(5, sayHello);

var family = {
  son1 : 'Donald',
  son2 : 'Thomas',  
};

// var sayHello = function(name) {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log('Hello, ' + arguments[i]);
//   }
// };

// sayHello.call(null, ['Donald', 'Thomas']);

// var string = JSON.stringify(family);

// console.log(string);

// console.log(JSON.parse(string).son1);

var ancestry = JSON.parse(ANCESTRY_FILE);
// console.log(ancestry);

var filter = function(arr, test) {
  var passed = [];
  for (var i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      passed.push(arr[i]);
    }
  }
  return passed;
};

var livedIn20thCentury = filter(ancestry, function(person) {
  return person.born >= 1900 && person.died <= 2000;
});

var map = function(arr, transform) {
  var mapped = [];
  for (var i = 0; i < arr.length; i++) {
    mapped.push(transform(arr[i]));
  }
  return mapped;
};

var namesOfThoseWhoLivedIn20thCentury = map(livedIn20thCentury, 
  function(person) {
    return person.name;
  }
);

console.log(namesOfThoseWhoLivedIn20thCentury);





