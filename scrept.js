let input1 =  document.getElementById("inpt1")
let input2 =  document.getElementById("inpt2")
let btn = document.getElementById("btn")

btn.addEventListener("click", creetinst)

function creetinst() {
    let body = document.body;
    let table = document.createElement("table")


    for(let i = 0 ; i<input1.value ; i++){
        let tr = document.createElement("tr")
        table.appendChild(tr)   
        console.log(tr)
        for(let j = 0 ; j<input2.value ; j++){
            let td = document.createElement("td")
            tr.appendChild(td)

            // let txtinto = document.createTextNode("txt in to")
            /* td.appendChild(txtinto)    ====   */  
            td.innerHTML = ("td")


            td.style.border="1px solid black"
        }
    }

    body.appendChild(table)
    table.style.border="1px solid black";


}creetinst()  