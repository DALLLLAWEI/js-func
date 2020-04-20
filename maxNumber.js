const maxNumber = function(arr) {
    let a = arr[0]
    for (var i = 0; i < arr.length; i++) {
        let n = arr[i]
        if (n > a) {
            a = n
        }
    }
    return a
}


const ensure = function(condition, error) {
    if (condition) {
        console.log('成功');
    } else {
        console.log(arguments, error);
    }
}

// let a = function() {
//     console.log(arguments);
// }

const test = function() {
    ensure(maxNumber([3,5,6,7,42,124]) === 124,'错误')
    ensure(maxNumber([13,5,6,7,42,124]) === 124,'错误')
    ensure(maxNumber([3,52,6,7,42,124]) === 124,'错误')
    ensure(maxNumber([3,533,6,7,42,124]) === 533,'错误')
    ensure(maxNumber([3,5,612,7,42,124]) === 612,'错误')
    ensure(maxNumber([3,5,6,791,42,124]) === 791,'错误')
}
test()
