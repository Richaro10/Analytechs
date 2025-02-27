import AdmZip from 'adm-zip';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const zip = new AdmZip();

// Ajouter les fichiers SVG
const files = [
  'src/components/icons/Logo.tsx',
  'src/components/icons/LogoIcon.tsx'
];

files.forEach(file => {
  zip.addLocalFile(join(__dirname, file));
});

// Générer le fichier zip
zip.writeZip('analytechs_svg1.zip');

console.log('Le fichier analytechs_svg1.zip a été créé avec succès!');