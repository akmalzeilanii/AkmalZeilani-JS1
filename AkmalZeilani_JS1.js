// Nama : Akmal Zeilani
// Kelas : B Morning
// if-else, nested if
let peminjamanbuku = 2;
if (peminjamanbuku >= 5) {
  console.log("Anda masih bisa meminjam buku.");
} else {
  console.log("Anda harus mengembalikan buku terlebih dahulu.");
}

// switch case
let hari = "libur";
switch (hari) {
  case "libur":
    console.log("Hari ini kita libur.");
    break;
  case "galibur":
    console.log("Hari ini kita ga libur.");
    break;
  default:
    console.log("Apa itu hari libur?");
}

// for statement
for (let x = 1; x <= 10; x++) {
  console.log(x);
}

// while
let hitung = 1;
while (hitung <= 5) {
  console.log(hitung);
  hitung++;
}

// do while
let nilai = 1;
do {
  console.log(nilai);
  nilai++;
} while (nilai <= 5);

// function
function sapa(nama) {
  console.log("Hai, " + nama  + "!");
}

sapa("Akmal Zeilani");