// ─────────────────────────────────────────────────────────────
// IMPORT BANYAK GAMBAR SEKALIGUS (opsional, pola sama seperti team.js & services.js)
// ─────────────────────────────────────────────────────────────
// Taruh screenshot/gambar project di src/assets/portfolio/, lalu isi
// `imageFile` dengan nama file persis pada project yang sesuai.
// Kalau tidak diisi / file belum ada, card otomatis tetap pakai
// mockup UI abstrak seperti biasa (fallback aman, tidak error).
const imageModules = import.meta.glob('../assets/portfolio/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => [path.split('/').pop(), url])
);

const rawPortfolio = [
  {
    category: 'Web Deveplopment',
    title: 'Sistem Pelaporan Warga Asing (SIPWA)',
    description: 'A system that assists the NTB Regional Police in registering foreign nationals staying in hotels across NTB.',
    accent: 'from-sb-blue to-sb-cyan',
    imageFile: 'Sipwa.png', // contoh: 'smart-dashboard.jpg'
  },
  {
    category: 'Wordpress Development',
    title: 'Company Profile Aiesec Malaysia',
    description: 'Rebuilt AIESEC Malaysia Company Profile with a modern UI.',
    accent: 'from-sb-blue-dark to-sb-blue',
    imageFile: 'Aisec.png',
  },
  {
    category: 'Website',
    title: 'Sistem Adminitrasi Managemen Keuangan ',
    description: 'Sistem pemantauan lingkungan berbasis sensor dengan konektivitas cloud.',
    accent: 'from-sb-navy to-sb-blue',
    imageFile: 'SIMK.jpg',
  },
  // {
  //   category: 'UI/UX',
  //   title: 'Digital Product Platform',
  //   description: 'Perancangan pengalaman pengguna untuk platform produk digital multi-fitur.',
  //   accent: 'from-sb-cyan to-sb-blue-light',
  //   imageFile: null,
  // },
  // {
  //   category: 'Branding',
  //   title: 'Brand Identity System',
  //   description: 'Sistem identitas visual lengkap mulai dari logo hingga panduan penggunaan.',
  //   accent: 'from-sb-orange to-sb-orange-2',
  //   imageFile: null,
  // },
  // {
  //   category: 'Electronics',
  //   title: 'Custom Electronics Prototype',
  //   description: 'Purwarupa perangkat elektronik custom untuk kebutuhan industri spesifik.',
  //   accent: 'from-sb-blue to-sb-navy',
  //   imageFile: null,
  // },
];

export const portfolio = rawPortfolio.map((project) => ({
  ...project,
  image: project.imageFile && images[project.imageFile] ? images[project.imageFile] : null,
}));