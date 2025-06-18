let inputBahan = document.getElementById('inputBahan');
let btnTambah = document.getElementById('btnTambah');
let listBahan = document.getElementById('listBahan');
let btnCari = document.getElementById('btnCari');
let hasilResep = document.getElementById('hasilResep');

let bahanUser = [];

let daftarResep = [
  { nama: 'Telur Dadar Keju', bahan: ['telur', 'keju', 'garam', 'lada'], deskripsi: 'Telur dadar dengan keju.' },
  { nama: 'Roti Bakar Coklat', bahan: ['roti', 'mentega', 'coklat'], deskripsi: 'Roti bakar coklat.' },
  { nama: 'Pancake Sederhana', bahan: ['tepung', 'telur', 'susu', 'gula'], deskripsi: 'Pancake sederhana.' },
  { nama: 'Smoothie Pisang', bahan: ['pisang', 'susu', 'madu', 'es batu'], deskripsi: 'Minuman pisang segar.' },
  { nama: 'bakso bakar', bahan: ['terigu', 'lada', 'garam', 'daging'], deskripsi: 'bakso bakar enak.' },
  {nama: 'brownis panggang', bahan: ['terigu', 'coklat', 'mentega', 'gula'], deskripsi: 'brownis coklat.' },
  {nama: 'nasi goreng', bahan: ['nasi', 'telur', 'garam', 'bawang merah','bawang putih'], deskripsi: 'nasi goreng.' },
  {nama: 'pie susu', bahan: ['terigu', 'susu ', 'mentega', 'keju'], deskripsi: 'pie susu berkualitas.' },
  { nama: 'Spaghetti Aglio Olio', bahan: ['spaghetti', 'bawang putih', 'minyak zaitun', 'cabai'], deskripsi: 'Spaghetti sederhana dengan bawang putih dan cabai.' },
  { nama: 'Sate Ayam', bahan: ['ayam', 'kecap', 'bawang putih', 'tusuk sate'], deskripsi: 'Daging ayam bakar dengan saus kecap.' },
  { nama: 'Es Teh Manis', bahan: ['teh', 'gula', 'es batu'], deskripsi: 'Minuman teh manis dingin.' },
  { nama: 'Es Jeruk', bahan: ['jeruk', 'gula', 'es batu'], deskripsi: 'Minuman segar dari jeruk.' },
  { nama: 'Gado-Gado', bahan: ['sayur', 'tahu', 'tempe', 'saus kacang'], deskripsi: 'Salad sayuran khas Indonesia.' },
  { nama: 'Soto Ayam', bahan: ['ayam', 'bawang', 'soun', 'seledri'], deskripsi: 'Sup ayam khas Indonesia.' },
  { nama: 'Capcay', bahan: ['wortel', 'kubis', 'brokoli', 'ayam'], deskripsi: 'Tumis sayur campur yang lezat.' },
  { nama: 'Martabak Manis', bahan: ['tepung', 'gula', 'susu kental', 'coklat'], deskripsi: 'Kue tebal manis dengan topping coklat.' },
  { nama: 'Martabak Telur', bahan: ['telur', 'daun bawang', 'kulit martabak'], deskripsi: 'Martabak isi telur dan sayuran.' },
  { nama: 'Es Campur', bahan: ['jelly', 'buah', 'susu', 'sirup'], deskripsi: 'Minuman dingin dengan berbagai isian.' },
  { nama: 'Nasi Uduk', bahan: ['nasi', 'santan', 'daun salam', 'bawang'], deskripsi: 'Nasi gurih dengan aroma santan.' },
  { nama: 'Nasi Kuning', bahan: ['nasi', 'santan', 'kunyit'], deskripsi: 'Nasi berwarna kuning khas Indonesia.' },
  { nama: 'Ayam Bakar', bahan: ['ayam', 'kecap', 'bumbu halus'], deskripsi: 'Ayam panggang dengan bumbu manis.' },
  { nama: 'Ayam Goreng', bahan: ['ayam', 'tepung', 'garam', 'lada'], deskripsi: 'Ayam goreng crispy.' },
  { nama: 'Es Buah', bahan: ['buah-buahan', 'sirup', 'susu', 'es batu'], deskripsi: 'Minuman segar berisi buah potong.' },
  { nama: 'Es Kopi Susu', bahan: ['kopi', 'susu', 'gula', 'es batu'], deskripsi: 'Minuman kopi susu kekinian.' },
  { nama: 'Pempek', bahan: ['ikan', 'tepung', 'cuka', 'gula'], deskripsi: 'Makanan khas Palembang dengan cuka hitam.' },
  { nama: 'Kwetiau Goreng', bahan: ['kwetiau', 'telur', 'ayam', 'sawi'], deskripsi: 'Mie pipih goreng lezat.' },
  { nama: 'Seblak', bahan: ['kerupuk', 'bakso', 'sayur', 'bumbu pedas'], deskripsi: 'Kerupuk pedas khas Bandung.' },
  { nama: 'Bubur Ayam', bahan: ['beras', 'ayam', 'kerupuk', 'kacang'], deskripsi: 'Bubur nasi dengan topping ayam.' },
  { nama: 'Siomay', bahan: ['ikan', 'tepung', 'tahu', 'telur'], deskripsi: 'Siomay dengan saus kacang.' },
  { nama: 'Batagor', bahan: ['ikan', 'tepung', 'tahu', 'saus kacang'], deskripsi: 'Bakso tahu goreng khas Bandung.' },
  { nama: 'Kolak Pisang', bahan: ['pisang', 'santan', 'gula merah'], deskripsi: 'Pisang manis dengan kuah santan.' },
  { nama: 'Pisang Goreng', bahan: ['pisang', 'tepung', 'minyak'], deskripsi: 'Pisang digoreng dengan balutan tepung.' },
  { nama: 'Tahu Isi', bahan: ['tahu', 'sayur', 'tepung'], deskripsi: 'Tahu isi goreng dengan sayuran.' },
  { nama: 'Bakwan', bahan: ['tepung', 'wortel', 'kol', 'seledri'], deskripsi: 'Gorengan campuran sayur.' },
  { nama: 'Lumpia', bahan: ['kulit lumpia', 'sayur', 'ayam'], deskripsi: 'Gorengan isi sayur dan ayam.' },
  { nama: 'Mie Rebus', bahan: ['mie', 'telur', 'sayur', 'bumbu'], deskripsi: 'Mie berkuah hangat.' },
  { nama: 'Es Milo', bahan: ['milo', 'susu', 'es batu'], deskripsi: 'Minuman coklat dingin segar.' },
  { nama: 'Puding Coklat', bahan: ['agar-agar', 'coklat', 'susu'], deskripsi: 'Dessert coklat lembut dan dingin.' },
];

btnTambah.onclick = function() {
  let bahan = inputBahan.value.trim().toLowerCase();
  if (bahan && !bahanUser.includes(bahan)) {
    bahanUser.push(bahan);
    tampilkanBahan();
    inputBahan.value = '';
  }
}

function tampilkanBahan() {
  listBahan.innerHTML = '';
  bahanUser.forEach((bahan, index) => {
    let li = document.createElement('li');
    li.textContent = bahan + ' ';
    let btnHapus = document.createElement('button');
    btnHapus.textContent = 'Hapus';
    btnHapus.onclick = function() {
      bahanUser.splice(index, 1);
      tampilkanBahan();
    }
    li.appendChild(btnHapus);
    listBahan.appendChild(li);
  });
}

btnCari.onclick = function() {
  let hasil = '';
  daftarResep.forEach(resep => {
    let total = resep.bahan.length;
    let cocok = 0;

    resep.bahan.forEach(b => {
      bahanUser.forEach(input => {
        if (b.includes(input) || input.includes(b)) {
          cocok++;
        }
      });
    });

    let persentase = (cocok * 100) / total;

    if (persentase >= 50) {
      hasil += `<h3>${resep.nama} (Kecocokan: ${persentase.toFixed(0)}%)</h3>`;
      hasil += `<p>${resep.deskripsi}</p>`;
      hasil += `<p><strong>Bahan:</strong> ${resep.bahan.join(', ')}</p><hr>`;
    }
  });

  hasilResep.innerHTML = hasil || 'Tidak ada resep yang cocok.';
}
