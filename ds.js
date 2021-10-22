// implement stack data structure by using object
// implement push, pop ,peek

function Stack() {
  this.count = 0;
  this.data = {};
  this.push = function (value) {
    this.data[this.count] = value;
    this.count += 1;
  };

  this.pop = function () {
    if (this.count === 0) {
      return undefined;
    } else {
      this.count--;
      let result = this.data[this.count];
      delete this.data[this.count];
      return result;
    }
  };
  this.output = function () {
    return this.data;
  };
  this.length = function () {
    return this.count;
  };
  this.peek = function () {
    if (this.count === 0) return;
    return this.data[this.count - 1];
  };
}

const res = new Stack();
res.push('alex');
res.push('rita');
console.log(res.length());
res.pop();
console.log(res.length());
res.push('react');
console.log(res.peek());
console.log(res.output());
