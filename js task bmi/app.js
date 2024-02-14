let boy=+prompt('enter the boy');
let ceki=+prompt('enter the ceki');
netice=ceki/(boy*boy);
    if(netice<18.5){
        console.log( 'adamin BMI-si azdir, ariqdir.' );
    }else if(netice<25){
        console.log('adamin BMI-si normal beden olcusune sahibdir. ');
    }else if(netice<30){
        console.log('adamin BMI-si kokdur.');
    }else{
        console.log('obese-dir');
    }
