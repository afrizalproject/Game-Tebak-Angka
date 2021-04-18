alert('Tebak Angka bilangan desimal dari 1-10 \nKamu punya 3x kesempatan!');
var angkaRandom = parseInt((Math.random() * 10) + 1);
var lagi = true;
var hasil = '';

while (lagi) {
    for (index = 2; index >= 0; index--) {
        inputUser = prompt('masukkan angka untuk menebak jawaban:')
        if (inputUser) {
            if (inputUser == angkaRandom) {
                hasil = alert('tebakan anda benar \n anda menebak ' + angkaRandom);
                break;
            } else if (index == 0) {
                hasil = alert('Masih salah. Kesempatan Habis!\nAngka yang dicari adalah ' + angkaRandom);
                break;
            } else if (inputUser < angkaRandom) {
                hasil = alert('Tebakan salah(terlalu kecil), anda masih punya ' + index + ' kesempatan lagi!');
            } else if (inputUser > angkaRandom) {
                hasil = alert('Tebakan salah(terlalu besar), anda masih punya ' + index + ' kesempatan lagi!');
            } else {
                hasil = alert('input yang bener woy!!!')
            }
        } else {
            hasil = alert('Kalo ga niat gausah main!!!');
            break;
        }
    }
    lagi = confirm('mau main lagi?');
}
alert('makasih udah main :)');