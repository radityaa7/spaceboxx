const photoModules = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
});

// Ubah path lengkap ("../assets/team/bima.jpg") jadi key nama file saja ("bima.jpg")
const photos = Object.fromEntries(
  Object.entries(photoModules).map(([path, url]) => [path.split('/').pop(), url])
);

function resolvePhoto(filename, fallbackUrl) {
  return filename && photos[filename] ? photos[filename] : fallbackUrl;
}

export const team = [
  {
    name: 'Raditya Rangga',
    role: 'Founder & IT Security Analis',
    initials: 'RI',
    photoFile: 'img_ridho.png', // <- nama file di src/assets/team/
    photo: resolvePhoto('img_ridho.png'),
    bio: 'Memimpin arah kerja project dan strategi pengamanan sistem di setiap project SPACEBOX.',
    tags: ['IT Project Manager', 'IT Analis Cyber Security', 'Wordpress Developer','UI/UX Designer'],
  },
  {
    name: 'Rivaldi ',
    role: 'Cyber Security & Back-End Developer',
    initials: 'AD',
    photoFile: 'aldi_kuda.png',
    photo: resolvePhoto('aldi_kuda.png'),
    bio: 'Merancang pengalaman digital yang intuitif dari riset hingga prototipe.',
    tags: ['Cyber Security', 'Back-end',''],
  },
  {
    name: 'Dicky',
    role: 'Iot and Security',
    initials: 'AW',
    photoFile: 'fototolol.png',
    photo: resolvePhoto('fototolol.png', 'https://api.dicebear.com/7.x/notionists/svg?seed=Arka-Wijaya&backgroundColor=071426'),
    bio: 'Membangun dan mengembangkan sistem software serta integrasi teknis.',
    tags: ['Web Dev', 'IoT'],
  },
];