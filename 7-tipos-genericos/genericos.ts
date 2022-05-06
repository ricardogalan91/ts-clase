function generico<T>(value: T) {
    if(typeof value==='boolean'){
        console.log('soy un booleano!')
    }else{
        console.log('soy un '+typeof value);
    }
}

generico<number>(12);
generico<boolean>(true);