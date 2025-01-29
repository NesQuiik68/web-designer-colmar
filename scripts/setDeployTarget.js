const fs = require('fs');
const path = require('path');

const packageJsonPath = path.join(__dirname, '..', 'package.json');

// Lire le package.json
const packageJson = require(packageJsonPath);

const target = process.argv[2];

if (target === 'gh-pages') {
    // Configuration pour GitHub Pages
    packageJson.homepage = "https://nesquiik68.github.io/web-designer-colmar";
} else if (target === 'ionos') {
    // Configuration pour IONOS
    delete packageJson.homepage;
} else {
    console.error('Target must be either "gh-pages" or "ionos"');
    process.exit(1);
}

// Écrire les modifications dans package.json
fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n'
);

console.log(`Successfully configured for ${target} deployment`);
