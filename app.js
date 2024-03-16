let plusbutn = document.getElementById('plus');
let minusbutn = document.getElementById('minus');
let tex = document.getElementById('numb');
let fee = document.getElementById('fee');
let fee2 = document.getElementById('fee2');

var numbo = 52;

var feenum;
var feecount;
var feenum2;
var feecount2;
var num
var count;

plusbutn.addEventListener('click', () => {

    num = parseInt(tex.innerText);
    count = num + 1;
    tex.innerText = count;
    feenum = parseInt(fee.innerText);
    feecount = feenum + 600;
    fee.innerText = feecount;
    feenum2 = parseInt(fee2.innerText);
    feecount2 = feenum2 + numbo + 600 - 52;
    fee2.innerText = feecount2;
    console.log("count = ", count);
})
minusbutn.addEventListener('click', () => {

    if (count <= 1) {
        document.getElementById('butni').style.display = 'none';
        document.getElementById('carty').style.display = 'none';
        document.getElementById('cancel').style.display = 'flex';
    }
    if (count == 1) {
        const v = 652
        fee2.innerText = v;
    }


    else {

        num = parseInt(tex.innerText);
        count = num - 1;
        tex.innerText = count;
        feenum = parseInt(fee.innerText);
        feecount = feenum - 600;
        fee.innerText = feecount;
        feenum2 = parseInt(fee2.innerText);
        feecount2 = feenum2 - numbo - 600 + 52;
        fee2.innerText = feecount2;
        console.log("count = ", count);
        console.log("num = ", num);
    }
})


let book = document.getElementById('book');

book.addEventListener('click', () => {
    document.getElementById('succs').style.display = 'block';
    document.getElementById('butni').style.display = 'none';
    document.getElementById('carty').style.display = 'none';
})
