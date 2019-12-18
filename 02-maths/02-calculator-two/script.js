/*Step 1: define function calc()
Step 2: define variables for the input in the operand fields
Step 3: create switch function
Step 4: name each case after the id in question
 */

function calc(operator) {
    let a = +document.getElementById("op-one").value;
    let b = +document.getElementById("op-two").value;
    switch (operator) {
        case 'addition':
            alert(a + b)
            break;
        case 'substraction':
            alert(a - b)
            break;
        case 'multiplication':
            alert(a * b)
            break;
        case 'division':
            alert(a / b)
    }
};