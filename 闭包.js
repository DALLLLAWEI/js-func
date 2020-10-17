// 闭包
var init = (function() {
    var _number = 1
    return{
        getValue:function  () {
            return _number
        },

        addValue:function (b) {
            return _number + b
        },
        initI: function() {
            return init = null
        }
    }
})();


// 用完归零
// 立即执行函数
;(function() {
    console.log('吃瓜');
})();