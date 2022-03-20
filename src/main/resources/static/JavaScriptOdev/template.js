
//üslü sayı alan fonksiyon yazalım Math.pow()
// örnek : 2 üssü 4 = 16 
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

let tabanSayisi= Number(prompt("Lütfen bir sayı giriniz"));
let ussuSayisi= Number(prompt("Lütfen bir sayı giriniz"));

let usluSayı2 = (baseNumber,powerOfNumber)=>{

  let result= Math.pow(baseNumber,powerOfNumber);
  //console.log("result",result);

   return result;
}


console.log("üslü sayı = ",usluSayı2(tabanSayisi,ussuSayisi));
usluSayı2(tabanSayisi,ussuSayisi);