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
// let boy = Number(prompt('Lütfen boyunuzu giriniz'));
// let kilo = Number(prompt('Lütfen kilonuzu giriniz'));

// let vki = (boy, kilo) => {
//   let ind = kilo / (boy ** 2);
// console.log('ind', ind)
//   console.log('calculator', boy ** 2);
//   console.log('calculator2', boy *boy);
//   if (ind < 18.5) {
//     return 'zayıf';
//   } else if (ind>=18 && ind<25) {
//     return 'normal';
//   } else if (ind>=25 && ind<30) {
//     return 'kilolu';
//   } else {
//     return 'obese';
//   }
// };

// console.log('vücut index =', vki(boy, kilo));

///************************************************ */

//Kullanıcıdan aldığımız kelime(Hamit Mızrak) maskeleme yapalım ?

// let kelime = prompt('Lütfen adınız ve soyadınızı giriniz');

// let masked = (kelime) => {
//   let yeniKelime = kelime.split(' ');

//   let yeniKelime1 = yeniKelime[0];
//   let yeniKelime2 = yeniKelime[1];
//   let element = '';
//   for (let index = 0; index < yeniKelime1.length; index++) {
//     //element  += array[index];
//     console.log('index', yeniKelime1[index]);
//     if (index === 0) {
//       element += yeniKelime1[index];
//     } else {
//       element += '*';
//     }
//   }

//   let element2 = '';
//   for (let index = 0; index < yeniKelime2.length; index++) {
//     //element  += array[index];
//     console.log('index', yeniKelime2[index]);
//     if (index === 0) {
//       element2 += yeniKelime2[index];
//     } else {
//       element2 += '*';
//     }
//   }

//   return element + ' ' + element2;
// };

// console.log('isminizin maskelenmiş hali=', masked(kelime));

///******************************************** */
//Kullanıcıdan aldığımız sayı kadar random sayı oluştursun bunuda Diziye atasın

let sayi = Number(prompt('Lütfen sayı giriniz'));
let randomNumber = (sayi) => {
  let element = [];

  for (let i = 0; i < sayi; i++) {
    element.push(Math.floor(Math.random() * 100 + 1));
    //element += ","+ Math.floor(Math.random() * sayi + 1);
  }
  // a1-) Bu sayılar arasındaki en büyük sayıyı bulsun
  enBuyukEleman(element);
  let enBuyukElaman2 = enBuyukEleman(element);
  console.log('en büyük eleman =', enBuyukElaman2);

  // a2-) Bu sayılar arasındaki en büyük sayıyı bulsun ve bunun karekököünü alsın
  enBuyukElemanınKarakökü(enBuyukElaman2);
  let karakökü2 = enBuyukElemanınKarakökü(enBuyukElaman2);
  console.log('karakökü2', karakökü2);

  // a3-) Bu sayılar arasındaki en küçük sayıyı bulsun
  let enKucukEleman2 = enKucukEleman(element);
  console.log('enKucukEleman', enKucukEleman2);
  console.log('element', element);

  // a4-) en küçüğünün karesini alan function
  let enKucukKaresi2 = enKucukSayınınKaresi(enKucukEleman2);
  console.log('enKucukKaresi2', enKucukKaresi2);

  //a4-) Bu sayılar toplamını yapsın (sum)
  sayılarınToplamı(element);
  let diziSayılarınToplamı = sayılarınToplamı(element);
  console.log('diziSayılarınToplamı', diziSayılarınToplamı);
  //a5-) bu sayılarda tek olanları başka bir diziye atayalım ve kaç tane tek olduğunu bulalım
  tekSayılar(element);
  let tekSayılar2 = tekSayılar(element);
  console.log('tekSayılar2', tekSayılar2);
  console.log('tekSayıların sayısı', tekSayılar2.length);
  // a6-) bu sayılarda çift olanları başka bir diziye atayalım ve kaç tane çift olduğunu bulalım.
  ciftSayılar(element);
  let ciftSayılar2 = ciftSayılar(element);
  console.log('ciftSayılar2', ciftSayılar2);
  console.log('ciftSayıların sayısı =', ciftSayılar2.length);
  return element;
};

let enBuyukEleman = (element) => {
  let enBuyuk = element[0];
  for (let i = 0; i < element.length; i++) {
    if (element[i] > enBuyuk) {
      enBuyuk = element[i];
    }
  }

  //console.log('enBuyukkk2', enBuyuk);
  return enBuyuk;
};

let enKucukEleman = (element) => {
  let enKuyuk = element[0];
  for (let i = 0; i < element.length; i++) {
    if (element[i] < enKuyuk) {
      enKuyuk = element[i];
    }
  }

  //console.log('enKuyukkk2', enKuyuk);
  return enKuyuk;
};

let enBuyukElemanınKarakökü = (enBuyuk2) => {
  let enBuyukSayınınKarakökü1 = Math.sqrt(enBuyuk2);
  return enBuyukSayınınKarakökü1;
};

let enKucukSayınınKaresi = (sayi) => {
  let sayi2 = sayi * sayi;
  return sayi2;
};

let sayılarınToplamı = (element) => {
  let toplamSayı = 0;
  for (let i = 0; i < element.length; i++) {
    toplamSayı += Number(element[i]);
  }
  return toplamSayı;
};

let tekSayılar = (element) => {
  let tekler = [];
  for (let i = 0; i < element.length; i++) {
    if (Number(element[i]) % 2 == 1) {
      tekler.push(Number(element[i]));
    }
  }
  return tekler;
};

let ciftSayılar = (element) => {
  let ciftler = [];
  for (let i = 0; i < element.length; i++) {
    if (Number(element[i]) % 2 == 0) {
      ciftler.push(Number(element[i]));
    }
  }
  return ciftler;
};

console.log('random sayı =', randomNumber(sayi));
