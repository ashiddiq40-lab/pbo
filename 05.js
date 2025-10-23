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

// Kelas turunan (subclass)
class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing"); // Memanggil 
    constructor superclass
    this.warna = warna;
  }
}
const milo = new Kucing("Milo", "Putih");
console.log(milo.nama);  // Milo
console.log(milo.jenis); // Kucing (Didapat dari 
superclass)
console.log(milo.suara()); // Milo bersuara...
