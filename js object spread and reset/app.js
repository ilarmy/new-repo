/*
spread yayilma menasini verir yayilma operatoru 3 dovrdur,bu operator coxlu arqument elementleri veya deyisenleri gozlenilen 
yerlerde ifadeleri genislendirmeye imkan verir.
JavaScript-də yayılma(the spread) operatoru massivlərdə və sətirlərdəki dəyərləri fərdi elementlərə genişləndirir, 
reset operator isə istifadəçi tərəfindən müəyyən edilmiş məlumatların dəyərlərini JavaScript massivinə qoyur. 

*/
const a = [1,2,3];
const b = [3,4,5];
const c = [...a , ...b];
console.log(c); 
/*
consoloe bele bir cavab cixir
Array(6)0: 1
1: 2
2: 3
3: 3
4: 4
5: 5
length: 6
Burada Spread operatoru (...) a və b massivinin qiymətlərini götürür və onları yeni c massivinə yayır. 
Spread operatoru funksiya çağırışlarında da istifadə edilə bilər. 
*/