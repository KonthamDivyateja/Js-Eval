async function runSequentially(tasks,delay){
    const results=[];
    for(let i=0;i<tasks.length;i++){
        try{
            const result=await tasks[i]();
            results.push(result);
            if(i<tasks.length-1){
                await new Promise(resolve=> setTimeout(resolve,delay));
            }
        } catch(err){
            throw err;
        }
    }
    return results;
}