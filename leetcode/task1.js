function memoize(fn) {
    const cache = new Map;

    return function(...args){
        const key = String(args);
        if(cache.has(key)) {
            console.log("Return from cache " + cache.get(key));
            return cache.get(key);
        }

        const res = fn.apply(this, args);
        cache.set(key, res);
        console.log("Return from result " + res);
        return res;
    };
}

const memFactorial = memoize(function(a) {
    if(Number.isInteger(a)) {
        if(a <= 1)
            return 1;
        return a;
    } else
        return "Value is not a number";
});

const memCube = memoize(function(a) {
    if(Number.isInteger(a))
        return a * a * a;
    return "Value is not a number";
});


memFactorial(5);
memFactorial("asda");
memFactorial(5);
memCube(5);
memCube(5);
memCube("asda");
memCube(4);
