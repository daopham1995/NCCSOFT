function Stack()
{
    this.stack = new Array();
    this.top = 0;

	this.push = function(element) {
		stack.push(element);
	};

	this.pop = function() {
		return this.stack.pop();
	};

	this.count = function() {
        for (var key in this.stack){
            this.top ++;
        }
		return this.top;
	};

	this.length = function() {
		return this.stack.length;
	};

	this.empty = function() {
		return (this.stack.length === 0);
	};

	this.getStack = function() {
		return this.stack;
	};
};