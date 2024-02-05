var boutonGauche = document.getElementById('boutonGauche');
var boutonDroit = document.getElementById('boutonDroit');
var image = document.getElementById('image');
var container = document.getElementsByClassName('container')[0];
var texte = document.getElementById('texte');
var boutons = document.getElementsByClassName('boutons')[0];
var gif = document.getElementById('gif');
var tailleInitialeDroit = parseFloat(window.getComputedStyle(boutonDroit).fontSize);
var largeurInitialeDroit = parseFloat(window.getComputedStyle(boutonDroit).width);
var hauteurInitialeDroit = parseFloat(window.getComputedStyle(boutonDroit).height);
var musique = document.getElementById('musique');
var boutonMusique = document.getElementById('boutonMusique');
var lancerSite = document.getElementById('lancerSite');
var menuPrincipal = document.getElementById('menuPrincipal');
var mots = ["j'ai dit non ", "t'es gentil mais...", "pas pour moi ", "pq tu me parles", "laches ca fdp", "t'as pronote","je prefererai un autre", "je te meprise", "tu me degoutes" ,"lache moi on est juste pote", "j'ai un copain", "tout sauf toi", "t'as fait un code pour me demander ça ", "t'es terrifiant", "ne t'approche plus de moi", "jvais appeler la police fdp"]; // ajoutez plus de mots si nécessaire
var indexMot = 0;
// Événement de clic pour lancer le site et jouer la musique
lancerSite.addEventListener('click', function() {
    // Afficher le contenu principal et cacher le menu principal
    container.style.display = 'block';
    menuPrincipal.style.display = 'none';

    // Jouer la musique
    musique.play();
});

/* Gestion de la musique avec le boutonMusique
boutonMusique.addEventListener('click', function() {
    if (musique.paused) {
        musique.play();
        this.textContent = "Pause";
    } else {
        musique.pause();
        this.textContent = "Lancer la musique";
    }
});*/
// Événement pour le bouton gauche
boutonGauche.addEventListener('click', function() {
    
    // Masquer les autres éléments
    texte.style.display = 'none';
    boutons.style.display = 'none';
    gif.style.display = 'none';

    // Agrandir et afficher l'image
    image.style.display = 'block';
    image.style.width = '100%';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    this.classList.add('bouton-animate-shrink');
    setTimeout(() => this.classList.remove('bouton-animate-shrink'), 500); // Retirer la classe après l'animation
musique.play();
});

boutonDroit.addEventListener('click', function() {
    // Augmenter la taille et la largeur du bouton gauche
    var tailleActuelleGauche = parseFloat(window.getComputedStyle(boutonGauche).fontSize);
    var largeurActuelleGauche = parseFloat(window.getComputedStyle(boutonGauche).width);
    boutonGauche.style.fontSize = (tailleActuelleGauche + 10) + 'px';
    boutonGauche.style.width = (largeurActuelleGauche + 35) + 'px'; // augmentation de la largeur

    // Réinitialiser le bouton droit à sa taille initiale puis le réduire
this.style.fontSize = tailleInitialeDroit + 'px';
this.style.width = largeurInitialeDroit + 'px';
this.style.height = hauteurInitialeDroit + 'px';
if (tailleInitialeDroit > 20) { // Utiliser un point pour le nombre décimal
    tailleInitialeDroit -= 2; // Réduire la taille initiale pour le prochain clic
    largeurInitialeDroit -= 10;
    hauteurInitialeDroit -= 5;
    hauteurInitialeGif -=10;
    largeurInitialeGif -=20;
    tailleInitialeGif -=4


}
if (tailleInitialeDroit <= 15) {
    boutons.classList.add('bouton-centre');
} else {
    boutons.classList.remove('bouton-centre');
}


    // Changer le texte du bouton droit
    this.textContent = mots[indexMot];
    indexMot = (indexMot + 1) % mots.length;
    this.classList.add('bouton-animate-grow');
    setTimeout(() => this.classList.remove('bouton-animate-grow'), 500); // Retirer la classe après l'animation
    
    musique.play();
});
