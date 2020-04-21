const reverse = function(string) {
    let l = string.length - 1
    let result = ''
    for (var i = l; i >= 0; i--) {
        let str = string[i]
        result += str
    }
    return result
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
    ensure(reverse('taoyan') === 'nayoat','错误')
    ensure(reverse('fan') === 'naf','错误')
    ensure(reverse('keai') === 'iaek','错误')
    ensure(reverse('iloveyou') === 'uoyevoli' ,'错误')
    ensure(reverse('ln') === 'nl','错误')
    ensure(reverse('dw') === 'wd','错误')
}
test()
