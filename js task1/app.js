let number=50;
let user=+prompt('reqem necedir');
let cehd=1;
while(user!==number){
    user=+prompt('reqem necedir');
    cehd++;
}
console.log('kapital bank hesbinizda 1000 azn pul var');
if(cehd===1){
    console.log(`1000 azn qazandiniz ${cehd}`);
}else if(cehd<5){
    console.log(`750 azn qazandiniz ${cehd}`);
}else if(cehd<9){
    console.log(`250 azn qazandiniz ${cehd}`);
}else{
    console.log(`-250 azn qazandiniz ${cehd}`);
}