function highestDigits(number){
    var result = number.split('');
    for (let i = 0 ; i < result.lenght ; i++){
        var total = 0;
        if(result[i+1]<result[i]){
            return total = result[i];
        }
        else{
            return total = result[i+1];
        }
    }
}
console.log(highestDigits(379));