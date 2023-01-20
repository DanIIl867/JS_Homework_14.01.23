let a = Number(prompt('Введіть число', ''));
let b = Number(prompt('Введіть степынь введеного числа', ''));
let i = 1;
let r = 1;

if (a != Number(a)) {
   alert('Число введено невірно!')
} else if (b != Number(b)) {
   alert('Степінь введено невірно!')
} else {
   while (i <= b) {
      r = r * a
      i +- 1
   }
   alert(r)
}