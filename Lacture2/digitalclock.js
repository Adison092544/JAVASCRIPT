function digitalClock(num){
    Seconds = num%60;
    Mins = Math.floor((num/60)%60);
    Hours = Math.floor((num/60)/60);
    if (Seconds<10 && Mins<10 && Hours<10){
        console.log("0"+Hours+" : 0"+Mins+" : 0"+Seconds);
    }
    else if (Mins<10 && Hours<10){
        console.log("0"+Hours+" : 0"+Mins+" : "+Seconds);
    }
    else if (Hours<10){
        console.log("0"+Hours+" : "+Mins+" : "+Seconds);
    }
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));