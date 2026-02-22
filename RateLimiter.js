function createRateLimiter(limit,interval){
    let count=0;
    let timer=null;
    return function(){
        if(!timer){
            timer=setInterval(()=>{
                count=0;
            },interval);
            
        }
        if(count<limit){
            count++;
            return "Allowed";
        }
        else{
            return "Rate limit exceeded";
        }
    };
}