let isPrime= function(n){
    let flag = true;

    if(n == 1) {
        flag = false;
    }

    for(var i= 2; i <= parseInt(n/2); i++){
        if(n%i === 0){
            flag =  false;
            break;
        }
    }

    return flag;
}

exports.isPrime = isPrime;

exports.getFact= function(n){
    var res = [1];
    for(var i = 2; i <= parseInt(n/2) ; i++){
        if(n%i === 0)
            res.push(i);
    }
    res.push(n);
    return res;
}

exports.calFact= function(n){
    var fact = 1;
    for(var i = 2 ; i <= n; i++){
        fact *= i;
    }
    return fact;
}

exports.finPerfect = function(n){
    var sum = 1;
    var res = [];
    for(var i = 2; i <= parseInt(n/2); i++){
        if(n%i == 0)
            sum += i;
    }
    if(sum === n)
        return n+" is a Perfect Number";
    else
        return n+" is not a Perfect Number";
}

exports.getPrimes= function(arr){
    return arr.filter(elem => {
        return isPrime(elem)
    });
} 

exports.getLongest= function(arr){
    let str = "";

    arr.reduce( (maxSize, elem) => {
        if(elem.length > maxSize){
            maxSize = elem.length;
            str = elem;
        }
        return maxSize;
    } , 0);
    return str;
}


















