

var bubbleSort = function(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            let n = j + 1
            if (array[j] > array[n]) {
                [array[j], array[n]] = [array[n], array[j]]
            }
        }
    }
    // console.
    console.log(typeof array,array,);
    return array
}


var ensure = function(condition, error) {
    if (condition) {
        console.log('成功');
    } else {
        console.log(error);
    }
}


var test = function() {
    ensure(bubbleSort([1,3,2,5,32,13,32]).toString() === [1,2,3,5,13,32,32].toString(), '错误')
    ensure(bubbleSort([1, 33, 22, 15, 32, 13, 32]).toString() === [1, 13, 15, 22, 32, 32, 33].toString(), '错误')
    ensure(bubbleSort([1, 213, 82, 05, 32, 13, 32]).toString() === [1, 05, 3, 5, 13, 32, 32].toString(), '错误')
    ensure(bubbleSort([1, 213, 82, 05, 32, 13, 32]).toString() === [1, 5, 13, 32, 32, 82, 213].toString(), '错误')
    ensure(bubbleSort([1, 353, 2, 531, 32, 13, 32]).toString() === [1, 2, 13, 32, 32, 353, 531].toString(), '错误')
    ensure(bubbleSort([1, 3, 2, 51, 32, 13, 32]).toString() === [1, 2, 3, 13, 32, 32, 51].toString(), '错误')
}

test()
