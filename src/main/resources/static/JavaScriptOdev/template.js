//üslü sayı alan fonksiyon yazalım Math.pow()
//örnek : 2 üssü 4 = 16
// let usluSayı = (baseNumber,powerOfNumber)=>{

//   if(baseNumber<0)
//     return 1;

//     let result=1;

//     for (let i = 0; i < powerOfNumber; i++) {
//       result *= baseNumber;

//     }

//     return result;
// }

// let tabanSayisi= Number(prompt("Lütfen bir sayı giriniz"));
// let ussuSayisi= Number(prompt("Lütfen bir sayı giriniz"));
// console.log("üslü sayı = ",usluSayı(tabanSayisi,ussuSayisi));

// let tabanSayisi= Number(prompt("Lütfen bir sayı giriniz"));
// let ussuSayisi= Number(prompt("Lütfen bir sayı giriniz"));

// let usluSayı2 = (baseNumber,powerOfNumber)=>{

//   let result= Math.pow(baseNumber,powerOfNumber);
//   //console.log("result",result);

//    return result;
// }

// console.log("üslü sayı = ",usluSayı2(tabanSayisi,ussuSayisi));
//usluSayı2(tabanSayisi,ussuSayisi);

//****************************************************************** */
//dereceyi fahrenhayta çeviren function
// let sayi = Number(prompt('Lütfen bir sayı giriniz'));
// let hesapla = (sayi) => {
//   let derece = sayi * 1.8 + 32;

//   return derece.toFixed(3);
// };

// console.log(sayi + ' derece = ' + hesapla(sayi) + " Fahrenheit'dir");

//**************************************************************************** */
//
//Mutlak değer hesaplayan function yazalım ? Math.abs()

// let sayi = Number(prompt('Lütfen bir sayı giriniz'));
// let mutlakHesapla = (sayi) => {
//   let mutlak = Math.abs(sayi);

//   return mutlak;
// };

// console.log(sayi + ' mutlak değeri = ' + mutlakHesapla(sayi) );
////*********************************************** */

//v.k.i
let boy = Number(prompt('Lütfen boyunuzu giriniz'));
let kilo = Number(prompt('Lütfen kilonuzu giriniz'));

let vki = (boy, kilo) => {
  let ind = kilo / (boy ** 2);
console.log('ind', ind)
  console.log('calculator', boy ** 2);
  console.log('calculator2', boy *boy);
  if (ind < 18.5) {
    return 'zayıf';
  } else if (ind>=18 && ind<25) {
    return 'normal';
  } else if (ind>=25 && ind<30) {
    return 'kilolu';
  } else {
    return 'obese';
  }
};

console.log('vücut index =', vki(boy, kilo));
