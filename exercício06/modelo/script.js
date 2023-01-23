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
        <li> 1x ${n} = ${n1} </li>
        <li> 2x ${n} = ${n2} </li>
        <li> 3x ${n} = ${n3} </li>
        <li> 4x ${n} = ${n4} </li>
        <li> 5x ${n} = ${n5} </li>
        <li> 6x ${n} = ${n6} </li>
        <li> 7x ${n} = ${n7} </li>
        <li> 8x ${n} = ${n8} </li>
        <li> 9x ${n} = ${n9} </li>
        <li>10 x ${n} = ${n10}</li>
        </ul>
        `
    }
}