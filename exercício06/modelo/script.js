/*
function gerar() {
    let txtnum = document.querySelector('input#txtnum')
    let res = document.querySelector('div#res')

    if (txtnum.value.lenght == 0) {
        alert `[ERRO] Digite algum número!`
    } else {
        let n = txtnum.value
        let n0 = n * 0
        let n1 = n * 1
        let n2 = n * 2
        let n3 = n * 3
        let n4 = n * 4
        let n5 = n * 5
        let n6 = n * 6
        let n7 = n * 7
        let n8 = n * 8
        let n9 = n * 9
        let n10 = n * 10
        res.innerHTML = `
        <ul> 
        <li>0 x ${n} = ${n0}</li>
        <li>1 x ${n} = ${n1} </li>
        <li>2 x ${n} = ${n2} </li>
        <li>3 x ${n} = ${n3} </li>
        <li>4 x ${n} = ${n4} </li>
        <li>5 x ${n} = ${n5} </li>
        <li>6 x ${n} = ${n6} </li>
        <li>7 x ${n} = ${n7} </li>
        <li>8 x ${n} = ${n8} </li>
        <li>9 x ${n} = ${n9} </li>
        <li>10 x ${n} = ${n10}</li>
        </ul>
        `
    }
}
*/

function gerar() {
    var num = document.querySelector('input#txtnum')
    var n = Number(num.value)
    var tab = document.querySelector('select#seltab')

    if (num.value.length == 0){
        alert("[ERRO] Digite um numero.")
    }else{
        let c = 1
        tab.innerHTML=''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
        /*
        while (c<=10){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        */           
    }
}