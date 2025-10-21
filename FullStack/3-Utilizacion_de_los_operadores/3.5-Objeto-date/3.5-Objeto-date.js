// new Date();
// new Date(cadena);
// new Date(número);
// new Date(año, mes, día, hora, minuto, segundo, milisegundo)
// new Date(now)

let a=new Date();
console.log(a)
let b=new Date("2023/04/29 6:15:34")
console.log(b)
let c=Date.now();
console.log (c)

// .getDay()
// .getFullYear()
// .getMonth();
// .getDate();
// .getHours();
// .getMinutes();
// .getSeconds();
// .getMilliseconds();
// .getTime();

let fecha = new Date()
console.log(fecha);

let f = fecha.getDay();
console.log(f);

let d = fecha.getDate();
console.log(d);

let e = fecha.getMonth();
console.log(e);

let g = fecha.getFullYear();
console.log(g);

let h = fecha.getHours();
console.log(h);

let i = fecha.getMinutes();
console.log(i);

let j = fecha.getSeconds();
console.log(j);

let k = fecha.getMilliseconds();
console.log(k);

let m = fecha.getTime();
console.log(m)

// Mostrar la fecha en la pagigna web
var miFecha = new Date();
console.log(miFecha.getHours() + ":" + miFecha.getMinutes() + ":" + miFecha.getSeconds());

// ---------------------------------------

var miFecha = new Date();
if (miFecha.getHours()<10) {
    horas="0"+miFecha.getHours();
} else {
    horas=miFecha.getHours();
}
if (miFecha.getMinutes<10) {
    min="0"+miFecha.getMinutes();
} else {
    min=miFecha.getMinutes();
}
if (miFecha.getSeconds<10) {
    seg="0"+miFecha.getSeconds();
} else {
    seg=miFecha.getSeconds();
}

// -----------------------------------

var miFecha = new Date();
horas = miFecha.getHours();
min = miFecha.getMinutes();
seg = miFecha.getSeconds();
if (horas>12) {
    momento="pm";
    horas-=12;
} else {
    momento="am";
}
if (horas<10) horas="0"+horas;
if (min<10) min="0"+min;
if (seg<10) seg="0"+seg;
console.log(horas + ":" + min + ":" + seg + " " + momento)