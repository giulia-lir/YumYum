function printAll(array) {
    let output = "";
    for (let i of array) {
        output += `Name: ${i.name} Type: ${i.type}<br>`;
    }
    document.getElementById('items').innerHTML = output;
}



function randomize() {
    const foodTable = document.getElementsByClassName("food");
    for(let i = 0; i < 14; i++) {
        let randomNumber = Math.floor((Math.random() * mainCourses.length));
        console.log(i + " " + randomNumber)
        foodTable[i].innerHTML = mainCourses[randomNumber].title;
    }

}