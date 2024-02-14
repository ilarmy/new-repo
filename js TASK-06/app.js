const n = +(prompt('Bir sayı girin: '));
let i = n;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i--;
}
