// 栈
var Stack = function() {
    this.data = []
}

// 入栈
Stack.prototype.push = function(ele) {
    this.data.push(ele)
}

// 出栈
Stack.prototype.pop = function() {
    var index = this.data.length - 1
    return this.data.splice(index, 1)[0]
}

// 返回最新入栈的元素
Stack.prototype.top = function() {
    var index = this.data.length - 1
    return this.data[index]
}
