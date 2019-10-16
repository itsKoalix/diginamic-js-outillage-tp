exports.numbers = function(){
    for(var i=1; i<=100; i++){
        console.log(i);
    }  
}

exports.even = function(){
    for(var i=2; i<=100; i+=2){
        console.log(i);
    } 
}

exports.odd = function(){
    for(var i=1; i<=100; i++){
        if(i%2 != 0){
            console.log(i);
        }
    }
}

