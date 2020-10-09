// 队列
var Queue = function() {
    this.data = []
}

// 入队
Queue.prototype.enqueue = function(ele) {
    this.data.push(ele)
}

// 出队
Queue.prototype.dequeue = function(ele) {
    return this.data.slice(0, 1)[0]
}

// 获取长度
Queue.prototype.length = function() {
    return this.data.length
}

// 清空队列
Queue.prototype.empty = function() {
    this.data = []
}
