function example(){
    var a = 1;
    let b = 2;
    const c = 5;
    console.log(`old values of a:${a}, b:${b}, c:${c}`);
    if(true){
        var a = 10;
        let b = 20;
        const c = 50;
        console.log(`new values a:${a},b:${b},c:${c}`);
    };

    console.log(`a:${a}, b:${b}, c:${c}`)
}

// example()

numb = prompt("Enter a numver:")
console.log(numb)
