// get the values from the UI
function getValues() {
    // get values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // parse to int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // validate input values
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // we call generateNumbers
        let numbers = generateNumbers(startValue, endValue)
        // we call displayNumbers
        displayNumbers(numbers)
    } else {
        alert("You must enter integers for the app to work");
    }


}

// generate numbers from the start value to the end value
function generateNumbers(startValue, endValue) {
    let numbers = [];

    // get all numbers from start till end
    for (let i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

// display numbers and  bold the even numbers
function displayNumbers(numbers) {
    // create template rows
    let templateRows = "";

    let className = "";

    // loop through numbers array
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];

        if (number % 2 == 0) {
            className = "even";

        } else {
            className = "odd";
        }

        templateRows += `<tr><td class="ms-auto"><span class="${className}">${number}</span></td></tr>`;
        document.getElementById("results").innerHTML = templateRows;
    }
}

document.getElementById('btnSubmit').addEventListener('click', getValues);