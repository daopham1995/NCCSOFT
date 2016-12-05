function Stack()
{
    this.stack = new Array();

	this.push = function(element) {
		this.stack.push(element);
	};

	this.pop = function() {
		return this.stack.pop();
	};

	this.count = function() {
        var count = 0;
		for (var key in this.stack) {
			++count;
		}
		return count;
	};

	this.length = function() {
		return this.stack.length;
	};

	this.empty = function() {
		return (this.stack.length = 0);
	};

	this.getStack = function() {
		return this.stack;
	};
};