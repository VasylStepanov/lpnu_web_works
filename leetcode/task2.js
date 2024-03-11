const TimeLimitedCache = function() {
    this.cache = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
    const found = this.cache.has(key);
    if (found) clearTimeout(this.cache.get(key).ref);
    this.cache.set(key, {
        value,
        ref: setTimeout(() => this.cache.delete(key), duration)
    });
    return found;};

TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.count());
console.log(timeLimitedCache.set(1, 42, 2000));
console.log(timeLimitedCache.set(2, 82, 1000));
console.log(timeLimitedCache.get(1));
console.log(timeLimitedCache.get(1));


