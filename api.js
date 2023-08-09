const URL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';


function resultHandler(res){
    let table = document.getElementById("intertable").getElementsByTagName("tbody")[0];
    for(index in res.data){
        let row = table.insertRow();
        let yearCell = row.insertCell(0);
        let popCell = row.insertCell(1);
        yearCell.innerHTML = res.data[index]["Year"];
        popCell.innerHTML = res.data[index]["Population"];
        
    }
}



function getData() {
    fetch(URL)
        .then(response => {return response.json();
        }).then(data => {
            resultHandler(data);
        }).catch(error => {
            console.log(error);
        });
}

getData();