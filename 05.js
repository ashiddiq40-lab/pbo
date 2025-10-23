// Kelas induk (superclass)
class Hewan {
 constructor(nama, jenis) {
  this.nama = nama;
  this.jenis = jenis;
 }
 suara() {
  return `${this.nama} bersuara...`;
 }
}
//*
// Kelas turunan (subclass)
class Kucing extends Hewan {
 constructor(nama, warna) {
  super(nama, "Kucing"); // Memanggil constructor superclass
  this.warna = warna;
 }
}
const milo = new Kucing("Milo", "Putih");
console.log(milo.nama);  // Milo
console.log(milo.jenis); // Kucing (Didapat dari superclass)
console.log(milo.suara()); // Milo bersuara...
//*
class Anjing extends Hewan {
 constructor(nama, warna) {
  super(nama, "Anjing");
  this.warna = warna;
 }
 // Overriding method
 suara() {
  return `${this.nama} menggonggong: Woof woof!`;
 }
}
const doge = new Anjing("Doge", "Coklat");
console.log(doge.suara()); // Doge menggonggong: Woof woof!
//*
class Serigala extends Hewan {
 constructor(nama, warna) {
  super(nama, "Serigala");
  this.warna = warna;
 }
 suara() {
  return super.suara() + " Auuuuu~";
 }
}
const alpha = new Serigala("Alpha", "Abu-abu");
console.log(alpha.suara()); // Alpha bersuara... Auuuuu~
//*
class Burung extends Hewan {
 constructor(nama) {
  super(nama, "Burung");
 }
 suara() {
  return `${this.nama} berkicau: Cip cip!`;
 }
}
const hewanList = [
 new Kucing("Milo", "Putih"),
 new Anjing("Buddy", "Hitam"),
 new Burung("Tweety")
];
hewanList.forEach(hewan => console.log(hewan.suara()));

