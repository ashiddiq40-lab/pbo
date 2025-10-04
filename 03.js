class mahasiswa{
  constructor(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
  }

  belajar(){
    console.log(`${this.nama} sedang belajar.`);
  }

}

let mhs1 = new mahasiswa("Shiddiq", "202401110090", "Informatika");
mhs1.belajar();
