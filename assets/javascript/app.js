function x(){
    document.getElementById('cardHidden').style.display='block';
    var n = document.getElementById('normalPrice').value;
    var d = document.getElementById('discounts').value;
    var m = document.getElementById('maxCashback').value;

    var c = (n * d)/ 100;
    var r = n - c;
    var f = n - m;
    if (m < c){
        document.getElementById('cheap').innerHTML= 'Rp ' + m;
        document.getElementById('pay').innerHTML= 'Rp ' + f;
        document.getElementById('beforePrice').innerHTML= 'Rp ' + n;
    } else{
        document.getElementById('cheap').innerHTML= 'Rp ' + c;
        document.getElementById('pay').innerHTML= 'Rp ' + r;
        document.getElementById('beforePrice').innerHTML= 'Rp ' + n;
    }

}
