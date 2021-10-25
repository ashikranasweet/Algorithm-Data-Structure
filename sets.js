const set = new Set([1, 2, 43, 4]);

console.log(...set.entries());

function mySet() {
  this.number = [];

  this.has = function (num) {
    return this.number.indexOf(num) >= 0;
  };

  this.add = function (num) {
    if (this.has(num)) {
      return this.number;
    } else {
      this.number.push(num);
      return this.number;
    }
  };
  this.values = function () {
    return this.number;
  };
  this.keys = function () {
    return [...this.number.keys()];
  };
  this.remove = function (num) {
    if (this.has(num)) {
      const ind = this.number.indexOf(num);
      this.number.splice(ind, 1);
      return true;
    } else {
      return false;
    }
  };

  this.length = function () {
    return this.number.length;
  };

  this.size = function () {
    return this.number.length;
  };
  this.clear = function () {
    this.number.length = 0;
    return this.number;
  };

  this.entries = function () {
    const numbers = [];
    for (let i = 0; i < this.number.length; i++) {
      numbers.push([this.number[i], this.number[i]]);
    }
    return numbers;
  };
}

const data = new mySet();

data.add(10);
data.add(11);
data.add({ name: 'alex' });
// data.add({ name: 'alex' });
console.log(data.remove(10));

console.log(data.keys());

console.log(data.entries());

console.log(data.clear());
console.log(data.values());
console.log(data.length());
