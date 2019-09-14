// Node Exercise 2

function average(test_scores){
    var sum = 0;
    test_scores.forEach(score => {
        sum += score;
    });
    console.log((Math.round(sum / test_scores.length)));
};

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should return 68
