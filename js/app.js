
var Queue = function()
{
	this.queue = new Array();
	this.top = 0;

	this.push = function(element) {
		this.queue.push(element);
		return this;
	};

	this.shift = function(element) {
		return this.queue.shift();
	};

	this.remove = function() {
		this.queue.shift();
		return this;
	};

	this.count = function() {
        for (var key in this.queue){
            this.top ++;
        }
		return this.top;
	};

	this.length = function() {
		return this.queue.length;
	};

	this.empty = function() {
		return (this.queue.length === 0);
	};

	this.getQueue = function() {
		return this.queue;
	};
};


