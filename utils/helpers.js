// Array
Array.prototype.eachSlice = function (size, callback) {
    for (var i = 0, l = this.length; i < l; i += size) {
      callback.call(this, this.slice(i, i + size));
    }
  };
  
Array.prototype.eachCons = function (num) {
    return Array.from({ length: this.length - num + 1 }, (_, i) =>
      this.slice(i, i + num)
    );
  };
  
// Set 
Set.prototype.intersection = function (other) {
    return new Set([...this].filter((e) => other.has(e)));
  };