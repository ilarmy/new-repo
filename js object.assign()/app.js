//object.assign()----- teyinetme metodu
const course={
    name:'English'
};
const grade ={
    score:92
};
const finalResult=object.assign(course,grade);
console.log(finalResult);
//2ci hisse
//const finalResult=object.assign(`course,grade{teacher:Ilahe}`)
/*
yuxaridaki course score elave edib qiymeti 75 yazaq
const course={
    name:'English,
    score:75
};
amma cavab yenede 92 olacaq cunki sonuncu defe qebul edilmis arqument,2-ci arqument 1-ci arqument uzerinde nezareti ele kecirir.Ona gore yuxarida ne kecir kecsin axirda 2ci faktilo deyer olacaq.
obyekti clonelamasinda istifade ede bilerik.
const.copy=about.assign({},finalResult);
console.log(copy);
*/
