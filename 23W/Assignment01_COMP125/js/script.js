//Emil Roland Marun 

window.addEventListener("load", (event) => {
    console.log("page is fully loaded")
    printTable();
});

const numOfRows = 10, numOfColumns = 10;

function printTable () {
    const tableElem = document.getElementById("multiplicationTable");

    for(let i = 1; i<=numOfRows; i++){//prints row
        const trItem = document.createElement("tr");
        tableElem.appendChild(trItem);

        for(let j = 1; j<=numOfColumns; j++){//prints column
            const tdItem = document.createElement("td");
            const textNode = document.createTextNode(i + ' * ' + j + ' = ' + (i*j));
            tdItem.appendChild(textNode);
            trItem.appendChild(tdItem);
        }
    }
}