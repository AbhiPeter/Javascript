var a = 10; //global scope is decalred

function call() {
    var b = 20; //local varible
    console.log(a); //global varibale is accesed

    console.log(b); //local varbleis called in function
}

call(); //function is called