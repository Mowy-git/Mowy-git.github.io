const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const x = document.querySelector(".x");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");

const equals = document.querySelector(".equals");

const result = document.querySelector(".bot");
const toptext = document.querySelector(".top");

plus.addEventListener("click", () => {
    check();
    result.innerHTML = result.innerHTML + " + ";
});

minus.addEventListener("click", () => {
    check();
    result.innerHTML = result.innerHTML + " - ";
});

divide.addEventListener("click", () => {
    check();
    result.innerHTML = result.innerHTML + " / ";
});

multiply.addEventListener("click", () => {
    check();
    result.innerHTML = result.innerHTML + " * ";
});


equals.addEventListener("click", calculate);

function operates(num1, operation, num2) {
    if (operation == "+") {
        return Number(num1) + Number(num2);
    } else if (operation == "-") {
        return Number(num1) - Number(num2);
    } else if (operation == "*") {
        return Number(num1) * Number(num2);
    } else if (operation == "/") {
        return Number(num1) / Number(num2);
    }
}

function calculate() {
    if (!result.innerHTML.includes("=")) {
        const split = result.innerHTML.split(" ");
        result.innerHTML = operates(split[0],split[1],split[2]);
    }
}

function check() {
    const split = result.innerHTML.split(" ");
    if (split.length >= 3) {
        calculate();
    }
}

one.addEventListener("click", () => {
    putNum(1);
});

two.addEventListener("click", () => {
    putNum(2);
});

three.addEventListener("click", () => {
    putNum(3);
});

four.addEventListener("click", () => {
    putNum(4);
});

five.addEventListener("click", () => {
    putNum(5);
});

six.addEventListener("click", () => {
    putNum(6);
});

seven.addEventListener("click", () => {
    putNum(7);
});

eight.addEventListener("click", () => {
    putNum(8);
});

nine.addEventListener("click", () => {
    putNum(9);
});

// idk how to do this, the temporary solution can only input one . every calculations
dot.addEventListener("click", () => {
    if (!result.innerHTML.includes("."))
        result.innerHTML += ".";
});

x.addEventListener("click", () => {
    result.innerHTML = result.innerHTML.substring(0, result.innerHTML.length - 1);

    if (result.innerHTML.length === 0)
        result.innerHTML = 0;
});

clear.addEventListener("click", () => {
    result.innerHTML = 0;
})

function putNum(number) {
    if (result.innerHTML == 0)
        result.innerHTML = number;
    else {
        result.innerHTML += number;
    }
}