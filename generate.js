const fs = require('fs');

// Fonction principale
async function generateCard() {
    console.log("Démarrage de la génération...");

    // Tes vraies stats (tu pourras remplacer ça par des requêtes API plus tard)
    const myStars = "7";
    const myCommits = "448";

    // 1. On lit le template SVG qu'on a créé à l'étape 1
    let svgTemplate = fs.readFileSync('template.svg', 'utf8');

    // 2. On remplace les faux mots par tes vrais chiffres
    let finalSvg = svgTemplate
        .replace('{{STARS}}', myStars)
        .replace('{{COMMITS}}', myCommits);

    // 3. On sauvegarde le résultat dans un nouveau fichier !
    fs.writeFileSync('stats.svg', finalSvg);
    
    console.log("Fichier stats.svg généré avec succès !");
}

generateCard();
