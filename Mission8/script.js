document.addEventListener('DOMContentLoaded', () => {
    const liste = document.getElementById('liste');
    const titre = document.getElementById('titre');
    const description = document.getElementById('description');
    const demo = document.getElementById('demo');
    const voirSolution = document.getElementById('voir-solution');
    const solution = document.getElementById('solution');

    // Définir les exercices directement dans le code
    const exercices = [
        {
            titre: "Addition de deux nombres",
            description: "Créez une fonction addition(a, b) qui retourne la somme de a et b.",
            solution: "function addition(a, b) {\\n    return a + b;\\n}",
            demo: {
                inputs: ["a", "b"],
                action: "addition"
            }
        },
        {
            titre: "Inverser une chaîne",
            description: "Créez une fonction qui renvoie une chaîne inversée.",
            solution: "function inverser(chaine) {\\n    return chaine.split('').reverse().join('');\\n}",
            demo: {
                inputs: ["chaine"],
                action: "inverser"
            }
        },
        {
            titre: "Trouver le maximum entre deux nombres",
            description: "Créez une fonction max(a, b) qui retourne le plus grand des deux nombres.",
            solution: "function max(a, b) {\\n    return a > b ? a : b;\\n}",
            demo: {
                inputs: ["a", "b"],
                action: "max"
            }
        },
        {
            titre: "Vérifier si un nombre est pair ou impair",
            description: "Créez une fonction estPair(n) qui retourne vrai si le nombre est pair, faux sinon.",
            solution: "function estPair(n) {\\n    return n % 2 === 0;\\n}",
            demo: {
                inputs: ["n"],
                action: "estPair"
            }
        },
        {
            titre: "Calculer la factorielle d’un nombre",
            description: "Créez une fonction factorielle(n) qui retourne la factorielle d’un nombre n.",
            solution: "function factorielle(n) {\\n    return n <= 1 ? 1 : n * factorielle(n - 1);\\n}",
            demo: {
                inputs: ["n"],
                action: "factorielle"
            }
        },
        {
            titre: "Compter les voyelles dans une chaîne",
            description: "Créez une fonction compterVoyelles(chaine) qui retourne le nombre de voyelles dans une chaîne.",
            solution: "function compterVoyelles(chaine) {\\n    return (chaine.match(/[aeiouy]/gi) || []).length;\\n}",
            demo: {
                inputs: ["chaine"],
                action: "compterVoyelles"
            }
        },
        {
            titre: "Trouver le carré d’un nombre",
            description: "Créez une fonction carre(n) qui retourne le carré d’un nombre n.",
            solution: "function carre(n) {\\n    return n * n;\\n}",
            demo: {
                inputs: ["n"],
                action: "carre"
            }
        }
    ];

    // Afficher les exercices
    exercices.forEach((exercice, index) => {
        const li = document.createElement('li');
        li.textContent = exercice.titre;
        li.addEventListener('click', () => afficherExercice(exercice));
        liste.appendChild(li);
    });

    // Fonction pour afficher un exercice
    function afficherExercice(exercice) {
        titre.textContent = exercice.titre;
        description.textContent = exercice.description;
        demo.innerHTML = '';

        // Ajouter les zones de saisie pour les entrées utilisateur
        exercice.demo.inputs.forEach(input => {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = `Entrez ${input}`;
            inputField.id = input;
            demo.appendChild(inputField);
        });

        // Ajouter un bouton pour tester l'exercice
        const button = document.createElement('button');
        button.textContent = 'Tester';
        button.addEventListener('click', () => {
            const args = exercice.demo.inputs.map(input => 
                document.getElementById(input).value
            );
            const result = window[exercice.demo.action](...args);
            alert(`Résultat : ${result}`);
        });
        demo.appendChild(button);

        // Gestion de la solution
        solution.style.display = 'none';
        voirSolution.onclick = () => {
            solution.style.display = 'block';
            solution.textContent = exercice.solution;
        };
    }

    // Ajouter les fonctions globales des exercices
    window.addition = (a, b) => parseFloat(a) + parseFloat(b);
    window.inverser = (chaine) => chaine.split('').reverse().join('');
    window.max = (a, b) => Math.max(a, b);
    window.estPair = (n) => n % 2 === 0;
    window.factorielle = (n) => n <= 1 ? 1 : n * window.factorielle(n - 1);
    window.compterVoyelles = (chaine) => (chaine.match(/[aeiouy]/gi) || []).length;
    window.carre = (n) => n * n;
});
document.addEventListener('DOMContentLoaded', () => {
    const liste = document.getElementById('liste');
    const titre = document.getElementById('titre');
    const description = document.getElementById('description');
    const demo = document.getElementById('demo');
    const voirSolution = document.getElementById('voir-solution');
    const solution = document.getElementById('solution');

    // Définir les exercices
    const exercices = [
        {
            titre: "Addition de deux nombres",
            description: "Créez une fonction addition(a, b) qui retourne la somme de a et b.",
            solution: "function addition(a, b) { return a + b; }",
            demo: { inputs: ["a", "b"], action: "addition" }
        },
        {
            titre: "Inverser une chaîne",
            description: "Créez une fonction qui renvoie une chaîne inversée.",
            solution: "function inverser(chaine) { return chaine.split('').reverse().join(''); }",
            demo: { inputs: ["chaine"], action: "inverser" }
        },
        {
            titre: "Calculer la puissance d’un nombre",
            description: "Créez une fonction qui retourne un nombre élevé à une puissance donnée.",
            solution: "function puissance(base, exposant) { return Math.pow(base, exposant); }",
            demo: { inputs: ["base", "exposant"], action: "puissance" }
        },
        {
            titre: "Vérifier si une chaîne est un palindrome",
            description: "Créez une fonction qui retourne vrai si une chaîne est un palindrome.",
            solution: "function estPalindrome(chaine) { return chaine === chaine.split('').reverse().join(''); }",
            demo: { inputs: ["chaine"], action: "estPalindrome" }
        },
        {
            titre: "Convertir des degrés Celsius en Fahrenheit",
            description: "Créez une fonction qui convertit des degrés Celsius en Fahrenheit.",
            solution: "function celsiusVersFahrenheit(c) { return (c * 9/5) + 32; }",
            demo: { inputs: ["c"], action: "celsiusVersFahrenheit" }
        },
        {
            titre: "Vérifier si un nombre est premier",
            description: "Créez une fonction qui retourne vrai si un nombre est premier.",
            solution: `function estPremier(n) { 
                if (n <= 1) return false; 
                for (let i = 2; i < n; i++) { 
                    if (n % i === 0) return false; 
                } 
                return true; 
            }`,
            demo: { inputs: ["n"], action: "estPremier" }
        },
        {
            titre: "Compter les mots dans une phrase",
            description: "Créez une fonction qui retourne le nombre de mots dans une phrase.",
            solution: "function compterMots(phrase) { return phrase.split(' ').length; }",
            demo: { inputs: ["phrase"], action: "compterMots" }
        },
        {
            titre: "Trier un tableau de nombres",
            description: "Créez une fonction qui trie un tableau de nombres en ordre croissant.",
            solution: "function trierTableau(tab) { return tab.sort((a, b) => a - b); }",
            demo: { inputs: ["tab"], action: "trierTableau" }
        },
        {
            titre: "Générer un tableau de nombres aléatoires",
            description: "Créez une fonction qui génère un tableau de n nombres aléatoires.",
            solution: "function genererTableau(n) { return Array.from({length: n}, () => Math.floor(Math.random() * 100)); }",
            demo: { inputs: ["n"], action: "genererTableau" }
        },
        {
            titre: "Calculer la somme des nombres dans un tableau",
            description: "Créez une fonction qui prend un tableau de nombres et retourne leur somme.",
            solution: "function sommeTableau(tab) { return tab.reduce((acc, val) => acc + parseFloat(val), 0); }",
            demo: { inputs: ["tab"], action: "sommeTableau" }
        },
        {
            titre: "Trouver les nombres pairs dans un tableau",
            description: "Créez une fonction qui retourne uniquement les nombres pairs d'un tableau donné.",
            solution: "function nombresPairs(tab) { return tab.filter(n => n % 2 === 0); }",
            demo: { inputs: ["tab"], action: "nombresPairs" }
        },
        {
            titre: "Calculer le périmètre d’un cercle",
            description: "Créez une fonction qui retourne le périmètre d’un cercle à partir de son rayon.",
            solution: "function perimetreCercle(rayon) { return 2 * Math.PI * rayon; }",
            demo: { inputs: ["rayon"], action: "perimetreCercle" }
        },
        {
            titre: "Remplacer les voyelles par une autre lettre",
            description: "Créez une fonction qui remplace toutes les voyelles d'une chaîne par un caractère donné.",
            solution: "function remplacerVoyelles(chaine, char) { return chaine.replace(/[aeiouy]/gi, char); }",
            demo: { inputs: ["chaine", "char"], action: "remplacerVoyelles" }
        },
        {
            titre: "Trouver le plus petit nombre d'un tableau",
            description: "Créez une fonction qui retourne le plus petit nombre dans un tableau donné.",
            solution: "function minimumTableau(tab) { return Math.min(...tab); }",
            demo: { inputs: ["tab"], action: "minimumTableau" }
        },
        {
            titre: "Fusionner deux tableaux",
            description: "Créez une fonction qui prend deux tableaux et retourne un tableau fusionné, sans doublons.",
            solution: "function fusionnerTableaux(tab1, tab2) { return [...new Set([...tab1, ...tab2])]; }",
            demo: { inputs: ["tab1", "tab2"], action: "fusionnerTableaux" }
        }
    ];

    // Afficher les exercices
    exercices.forEach((exercice) => {
        const li = document.createElement('li');
        li.textContent = exercice.titre;
        li.addEventListener('click', () => afficherExercice(exercice));
        liste.appendChild(li);
    });

    // Fonction pour afficher un exercice
    function afficherExercice(exercice) {
        titre.textContent = exercice.titre;
        description.textContent = exercice.description;
        demo.innerHTML = '';
        exercice.demo.inputs.forEach(input => {
            const inputField = document.createElement('input');
            inputField.type = 'text';
            inputField.placeholder = `Entrez ${input}`;
            inputField.id = input;
            demo.appendChild(inputField);
        });
        const button = document.createElement('button');
        button.textContent = 'Tester';
        button.addEventListener('click', () => {
            const args = exercice.demo.inputs.map(input => document.getElementById(input).value);
            const result = window[exercice.demo.action](...args);
            alert(`Résultat : ${result}`);
        });
        demo.appendChild(button);
        solution.style.display = 'none';
        voirSolution.onclick = () => {
            solution.style.display = 'block';
            solution.textContent = exercice.solution;
        };
    }

    // Ajouter les fonctions globales
    window.addition = (a, b) => parseFloat(a) + parseFloat(b);
    window.inverser = chaine => chaine.split('').reverse().join('');
    window.puissance = (base, exposant) => Math.pow(base, exposant);
    window.estPalindrome = chaine => chaine === chaine.split('').reverse().join('');
    window.celsiusVersFahrenheit = c => (c * 9 / 5) + 32;
    window.estPremier = n => {
        if (n <= 1) return false;
        for (let i = 2; i < n; i++) if (n % i === 0) return false;
        return true;
    };
    window.compterMots = phrase => phrase.split(' ').length;
    window.trierTableau = tab => tab.split(',').map(Number).sort((a, b) => a - b);
    window.genererTableau = n => Array.from({ length: parseInt(n) }, () => Math.floor(Math.random() * 100));
    window.sommeTableau = tab => tab.split(',').map(Number).reduce((acc, val) => acc + val, 0);
    window.nombresPairs = tab => tab.split(',').map(Number).filter(n => n % 2 === 0);
    window.perimetreCercle = rayon => 2 * Math.PI * parseFloat(rayon);
    window.remplacerVoyelles = (chaine, char) => chaine.replace(/[aeiouy]/gi, char);
    window.minimumTableau = tab => Math.min(...tab.split(',').map(Number));
    window.fusionnerTableaux = (tab1, tab2) => [...new Set([...tab1.split(','), ...tab2.split(',')])];
});

