
let select = document.querySelectorAll(".currency")
let btn = document.getElementById("btn")
let input = document.getElementById("input")
let result = document.getElementById("result")

const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
    .then(resp => resp.json())
    .then((data) => selectUpdate(data))

function selectUpdate(data) {
    let selected = Object.entries(data)
    console.log(selected);


    for (i = 0; i < selected.length; i++) {
        let opt = `<option value="${selected[i][0]}">${selected[i][0]}<option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt

    }
}

btn.addEventListener("click", () => {
    let inputVal = input.value
    let curr1 = select[0].value
    let curr2 = select[1].value

    if (curr1 === curr2) {
        alert("Choose different Currency")
    } else {
        convert(curr1, curr2, inputVal)
    }
})

function convert(curr1, curr2, inputVal) {
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
        .then(resp => resp.json())
        .then((data) => {
            
           let finalVal = Object.values(data.rates)
           result.value = finalVal[0]
        });
}