export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string; // matches Icon.astro name
  policyCount: number;
}

export interface Policy {
  id: number;
  number: string;
  title: string;
  category: string;
  year: number;
  date: string;
  status: 'berlaku' | 'dicabut' | 'direvisi';
  type: 'Perda' | 'Perbup' | 'SK Bupati' | 'Pergub';
  summary: string;
  detail: string;
  documentUrl: string;
}

export const categories: Category[] = [
  { slug: 'infrastruktur',       name: 'Infrastruktur',        description: 'Jalan, jembatan, air bersih, dan fasilitas publik',           icon: 'infrastruktur',       policyCount: 42 },
  { slug: 'pendidikan',          name: 'Pendidikan',            description: 'Sekolah, beasiswa, dan kurikulum daerah',                     icon: 'pendidikan',          policyCount: 38 },
  { slug: 'kesehatan',           name: 'Kesehatan',             description: 'Puskesmas, BPJS, dan program kesehatan ibu dan anak',         icon: 'kesehatan',           policyCount: 31 },
  { slug: 'lingkungan-hidup',    name: 'Lingkungan Hidup',      description: 'Hutan, sungai, limbah, dan konservasi alam',                  icon: 'lingkungan-hidup',    policyCount: 27 },
  { slug: 'ekonomi-umkm',        name: 'Ekonomi & UMKM',        description: 'Usaha kecil, perizinan, pasar, dan investasi',               icon: 'ekonomi-umkm',        policyCount: 24 },
  { slug: 'pertanian-perikanan', name: 'Pertanian & Perikanan', description: 'Nelayan, petani, penyuluhan, dan hasil bumi',                 icon: 'pertanian-perikanan', policyCount: 22 },
  { slug: 'adat-budaya',         name: 'Adat & Budaya',         description: 'Hak ulayat, seni budaya, dan perlindungan adat',             icon: 'adat-budaya',         policyCount: 19 },
  { slug: 'pariwisata',          name: 'Pariwisata',            description: 'Destinasi wisata, promosi, dan infrastruktur pariwisata',     icon: 'pariwisata',          policyCount: 17 },
  { slug: 'tata-ruang',          name: 'Tata Ruang',            description: 'RTRW, izin bangunan, dan perencanaan wilayah',               icon: 'tata-ruang',          policyCount: 15 },
  { slug: 'hukum-peraturan',     name: 'Hukum & Peraturan',     description: 'Regulasi umum, ketertiban, dan pemerintahan',                icon: 'hukum-peraturan',     policyCount: 49 },
];

export const policies: Policy[] = [
  {
    id: 1,
    number: 'Perda No. 3 Tahun 2024',
    title: 'Pengelolaan dan Perlindungan Hutan Adat di Wilayah Kabupaten Jayapura',
    category: 'adat-budaya',
    year: 2024,
    date: '12 Maret 2024',
    status: 'berlaku',
    type: 'Perda',
    summary: 'Mengatur pengakuan, perlindungan, dan pengelolaan hutan adat oleh masyarakat hukum adat di Kabupaten Jayapura. Peraturan ini memuat mekanisme pemetaan wilayah adat, pembentukan lembaga pengelola, dan sanksi bagi pelanggaran.',
    detail: 'Peraturan Daerah ini lahir dari kebutuhan mendesak untuk melindungi hutan adat yang terancam konversi lahan. Perda ini mewajibkan setiap kampung untuk mendaftarkan wilayah hutan adatnya dalam peta resmi kabupaten, memberikan hak pengelolaan eksklusif kepada masyarakat adat setempat, serta melarang eksploitasi oleh pihak luar tanpa persetujuan adat yang terdokumentasi.',
    documentUrl: '#',
  },
  {
    id: 2,
    number: 'Perbup No. 11 Tahun 2024',
    title: 'Pemberian Beasiswa Pendidikan Tinggi bagi Putra-Putri Asli Papua Kabupaten Jayapura',
    category: 'pendidikan',
    year: 2024,
    date: '5 Februari 2024',
    status: 'berlaku',
    type: 'Perbup',
    summary: 'Menetapkan kriteria, mekanisme seleksi, dan besaran beasiswa pendidikan S1 dan S2 bagi warga asli Papua Kabupaten Jayapura. Mencakup 200 kuota per tahun dengan prioritas jurusan kesehatan, teknik, dan pendidikan.',
    detail: 'Peraturan Bupati ini merupakan revisi dari Perbup 2021, dengan penambahan kuota dan perluasan cakupan ke jenjang S2. Beasiswa mencakup biaya kuliah, biaya hidup, dan biaya buku. Penerima wajib menandatangani perjanjian pengabdian di Kabupaten Jayapura minimal 3 tahun setelah lulus.',
    documentUrl: '#',
  },
  {
    id: 3,
    number: 'SK Bupati No. 445/2024',
    title: 'Penetapan Puskesmas Keliling di 8 Kampung Terpencil Distrik Airu dan Kaureh',
    category: 'kesehatan',
    year: 2024,
    date: '18 April 2024',
    status: 'berlaku',
    type: 'SK Bupati',
    summary: 'Menetapkan jadwal dan rute operasional puskesmas keliling untuk 8 kampung terpencil yang tidak memiliki akses jalan darat. Layanan meliputi pemeriksaan umum, imunisasi, dan distribusi obat-obatan dasar setiap dua minggu.',
    detail: 'SK ini merespons temuan bahwa 8 kampung di Distrik Airu dan Kaureh belum terjangkau layanan kesehatan rutin. Tim puskesmas keliling terdiri dari 1 dokter, 2 perawat, dan 1 bidan, menggunakan transportasi perahu motor dan helikopter untuk kampung yang tidak dapat dijangkau jalur air.',
    documentUrl: '#',
  },
  {
    id: 4,
    number: 'Perda No. 7 Tahun 2023',
    title: 'Rencana Tata Ruang Wilayah (RTRW) Kabupaten Jayapura 2023–2043',
    category: 'tata-ruang',
    year: 2023,
    date: '20 November 2023',
    status: 'berlaku',
    type: 'Perda',
    summary: 'Menetapkan pola dan struktur ruang Kabupaten Jayapura untuk 20 tahun ke depan, meliputi kawasan lindung, kawasan budidaya, infrastruktur strategis, dan kawasan pengembangan ekonomi di pesisir Teluk Yotefa.',
    detail: 'RTRW ini merupakan pembaruan dari RTRW 2013 dan mengakomodasi pertumbuhan Kota Sentani sebagai pusat pelayanan utama, pengembangan Pelabuhan Depapre, serta perlindungan DAS Memberamo. Dokumen setebal 312 halaman ini menjadi acuan seluruh perizinan dan pembangunan di kabupaten.',
    documentUrl: '#',
  },
  {
    id: 5,
    number: 'Perbup No. 22 Tahun 2023',
    title: 'Standar Pelayanan Minimal Jalan Kampung dan Jembatan Desa di Kabupaten Jayapura',
    category: 'infrastruktur',
    year: 2023,
    date: '7 Agustus 2023',
    status: 'berlaku',
    type: 'Perbup',
    summary: 'Menetapkan standar kondisi minimum jalan kampung dan jembatan yang harus dipenuhi oleh setiap distrik. Mengatur mekanisme pelaporan kerusakan dan respons perbaikan dengan target waktu tanggap.',
    detail: 'Perbup ini lahir dari banyaknya keluhan warga soal jalan kampung yang rusak parah di musim hujan. Setiap distrik wajib membuat peta kondisi jalan tahunan, dan Dana Desa minimal 30% harus dialokasikan untuk pemeliharaan infrastruktur jalan.',
    documentUrl: '#',
  },
  {
    id: 6,
    number: 'SK Bupati No. 521/2023',
    title: 'Pembentukan Tim Percepatan Pengembangan UMKM Produk Unggulan Kabupaten Jayapura',
    category: 'ekonomi-umkm',
    year: 2023,
    date: '3 Mei 2023',
    status: 'berlaku',
    type: 'SK Bupati',
    summary: 'Membentuk tim lintas dinas untuk mengidentifikasi, membina, dan mempromosikan produk UMKM unggulan daerah. Target: 50 UMKM naik kelas per tahun melalui pelatihan, sertifikasi, dan akses pasar digital.',
    detail: 'Tim terdiri dari Dinas Koperasi, Dinas Perindustrian, Dinas Perdagangan, dan perwakilan asosiasi pengusaha lokal. Program kerja mencakup pelatihan, fasilitasi sertifikasi halal dan PIRT, serta akses ke platform e-commerce nasional.',
    documentUrl: '#',
  },
  {
    id: 7,
    number: 'Perda No. 2 Tahun 2023',
    title: 'Perlindungan dan Pengelolaan Lingkungan Hidup Berbasis Kearifan Lokal',
    category: 'lingkungan-hidup',
    year: 2023,
    date: '15 Februari 2023',
    status: 'berlaku',
    type: 'Perda',
    summary: 'Mengintegrasikan nilai-nilai kearifan lokal masyarakat adat dalam sistem perlindungan lingkungan hidup. Mengakui sasi (larangan adat) sebagai instrumen pengelolaan sumber daya alam yang sah secara hukum daerah.',
    detail: 'Perda ini merupakan yang pertama di Papua yang secara eksplisit mengakui sasi sebagai mekanisme perlindungan lingkungan. Pelanggaran sasi kini dapat diproses secara administratif melalui jalur hukum daerah. Perda juga mengatur izin lingkungan untuk kegiatan skala kecil di wilayah adat.',
    documentUrl: '#',
  },
  {
    id: 8,
    number: 'Perbup No. 5 Tahun 2022',
    title: 'Pengembangan Destinasi Wisata Alam Danau Sentani Berbasis Komunitas',
    category: 'pariwisata',
    year: 2022,
    date: '10 Maret 2022',
    status: 'berlaku',
    type: 'Perbup',
    summary: 'Menetapkan zonasi wisata Danau Sentani, standar pelayanan homestay komunitas, dan tata cara perizinan usaha wisata oleh masyarakat lokal. Melarang pembangunan hotel di zona lindung danau.',
    detail: 'Zona I (inti) dilindungi penuh; Zona II (penyangga) hanya untuk wisata non-motorized; Zona III (pemanfaatan) dapat dikembangkan dengan izin. Komunitas lokal diberi hak prioritas untuk usaha wisata di semua zona.',
    documentUrl: '#',
  },
  {
    id: 9,
    number: 'Perbup No. 18 Tahun 2022',
    title: 'Program Ketahanan Pangan dan Pengembangan Pertanian Organik Kabupaten Jayapura',
    category: 'pertanian-perikanan',
    year: 2022,
    date: '9 Juli 2022',
    status: 'berlaku',
    type: 'Perbup',
    summary: 'Menetapkan target produksi pangan lokal, program subsidi bibit dan pupuk organik, serta pembentukan Kelompok Tani Organik di setiap distrik. Menargetkan swasembada sayur dan umbi-umbian dalam 5 tahun.',
    detail: 'Program berfokus pada 5 komoditas unggulan: singkong, ubi jalar, sayuran dataran tinggi, sagu, dan ikan air tawar. Setiap kelompok tani mendapat pendampingan teknis dari Dinas Pertanian selama 2 tahun pertama.',
    documentUrl: '#',
  },
  {
    id: 10,
    number: 'Perda No. 4 Tahun 2022',
    title: 'Pemberdayaan dan Perlindungan Perempuan serta Anak di Kabupaten Jayapura',
    category: 'hukum-peraturan',
    year: 2022,
    date: '28 September 2022',
    status: 'berlaku',
    type: 'Perda',
    summary: 'Menetapkan sistem perlindungan terpadu bagi perempuan dan anak, termasuk pembentukan Pusat Pelayanan Terpadu (PPT) di setiap distrik, mekanisme pelaporan kekerasan, dan program pemberdayaan ekonomi perempuan adat.',
    detail: 'Perda ini mencakup 48 pasal yang mengatur pencegahan kekerasan, penanganan korban, rehabilitasi, dan reintegrasi. PPT di setiap distrik berfungsi sebagai one-stop service. Anggaran minimal 2% dari APBD wajib dialokasikan untuk program ini.',
    documentUrl: '#',
  },
  {
    id: 11,
    number: 'SK Bupati No. 188/2022',
    title: 'Penetapan Upah Minimum Kabupaten (UMK) Jayapura Tahun 2022',
    category: 'ekonomi-umkm',
    year: 2022,
    date: '20 November 2022',
    status: 'direvisi',
    type: 'SK Bupati',
    summary: 'Menetapkan Upah Minimum Kabupaten Jayapura sebesar Rp 3.561.932 per bulan untuk tahun 2022, naik 1,09% dari UMK 2021. SK ini kemudian direvisi dengan UMK 2023.',
    detail: 'UMK ini berlaku untuk seluruh pekerja/buruh yang bekerja di wilayah Kabupaten Jayapura, kecuali usaha mikro dan kecil yang menggunakan struktur upah berbasis kesepakatan.',
    documentUrl: '#',
  },
  {
    id: 12,
    number: 'Perda No. 1 Tahun 2021',
    title: 'Penyelenggaraan Pendidikan Berbasis Budaya Lokal di Satuan Pendidikan Dasar',
    category: 'pendidikan',
    year: 2021,
    date: '14 Juni 2021',
    status: 'berlaku',
    type: 'Perda',
    summary: 'Mewajibkan muatan lokal budaya Papua dalam kurikulum SD dan SMP, termasuk bahasa daerah, kesenian tradisional, dan pengetahuan ekologi lokal. Minimal 2 jam pelajaran per minggu.',
    detail: 'Dinas Pendidikan diwajibkan menyusun bahan ajar muatan lokal bersama tokoh adat dalam 2 tahun sejak pengesahan. Guru muatan lokal dapat direkrut dari masyarakat adat tanpa mensyaratkan ijazah S1 pendidikan.',
    documentUrl: '#',
  },
];

export const stats = {
  kecamatan: 19,
  kampung: 139,
  kebijakanTerdokumentasi: 384,
  wargaBerlangganan: 4820,
  tahunData: '2018–2024',
};
