function numberSplit(num){
    total = num%2;
    result = num/2;
    if (total != 0){
        console.log(Math.floor(result)+" , "+Math.floor(result+1));
    }
    else{
        console.log(Math.ceil(result)+" , "+Math.ceil(result));
    }
}

numberSplit(4);
numberSplit(10);
numberSplit(11);
numberSplit(-9);