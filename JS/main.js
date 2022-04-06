
console.log(food)

function printAll(array) {
    let output = "";
    for (let i of array) {
        output += `Name: ${i.name} Type: ${i.type}<br>`;
    }
    document.getElementById('items').innerHTML = output;
}