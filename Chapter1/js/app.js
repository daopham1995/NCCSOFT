function Queue() {
	this.queue = new Array();

	this.push = function (element) {
		this.queue.push(element);
	};

	this.shift = function (element) {
		return this.queue.shift();
	};

	this.remove = function () {
		this.queue.shift();
		return this;
	};

	this.count = function () {
		var count = 0;
		for (var key in this.queue) {
			++count;
		}
		return count;
	};

	this.length = function () {
		return this.queue.length;
	};

	this.empty = function () {
		return (this.queue.length = 0);
	};

	this.getQueue = function () {
		return this.queue;
	};
};


