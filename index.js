let total = 0;
let numList = [];

document.getElementById("zero").onclick = function(){
    let zero = 0;
    numList.push(zero);
    
    document.getElementById("countLabel").textContent = zero;

}
document.getElementById("one").onclick = function(){
    let one = 1;
    numList.push(one);
    document.getElementById("countLabel").textContent = one;
}


document.getElementById("two").onclick = function(){
    let two = 2;
    numList.push(two);
    document.getElementById("countLabel").textContent = two;
}

document.getElementById("three").onclick = function(){
    let three = 3;
    numList.push(three);
    
    document.getElementById("countLabel").textContent = three;
}
document.getElementById("four").onclick = function(){
    let four = 4;
    numList.push(four);
    
    document.getElementById("countLabel").textContent = four;
}


document.getElementById("five").onclick = function(){
    let five = 5;
    numList.push(five);
    
    document.getElementById("countLabel").textContent = five;
}
document.getElementById("six").onclick = function(){
    let six = 6;
    numList.push(six);
    document.getElementById("countLabel").textContent = six;
}
document.getElementById("seven").onclick = function(){
    let seven = 7;
    numList.push(seven);
    document.getElementById("countLabel").textContent = seven;
}
document.getElementById("eight").onclick = function(){
    let eight = 8;
    numList.push(eight);
    document.getElementById("countLabel").textContent = eight;

}

document.getElementById("nine").onclick = function(){
    let nine = 9;
    numList.push(nine);
    document.getElementById("countLabel").textContent = nine;

}


document.getElementById("plus").onclick = function(){
    let plus = "+";
    numList.push(plus);
    
    document.getElementById("countLabel").textContent = plus;
    

}

document.getElementById("minus").onclick = function(){
    let minus = "-";
    numList.push(minus);
    
    document.getElementById("countLabel").textContent = minus;

}

document.getElementById("multiply").onclick = function(){
    let multiply = "*";
    numList.push(multiply);
    
    document.getElementById("countLabel").textContent = multiply;

}


document.getElementById("divide").onclick = function(){
    let divide = "/";
    numList.push(divide);
    
    document.getElementById("countLabel").textContent = divide;

}

document.getElementById("clear").onclick = function(){
    let clear = 0;

    numList.length = 0;

    
    document.getElementById("countLabel").textContent = clear;

}

document.getElementById("equal").onclick = function(){
    let total = numList[0];

    for (let i = 1; i < numList.length; i += 2) {
        let operator = numList[i];
        let nextNum = numList[i + 1];

        if (operator == "+") {
            total += nextNum;

        } else if (operator == "-") {
            total -= nextNum;
            

        }else if (operator == "*") {
            total *= nextNum;


        }else if (operator == "/"){
            total /= nextNum;

        }else {
            window.prompt("Error, please refresh")

        }


    }

    document.getElementById("countLabel").textContent = total;

}