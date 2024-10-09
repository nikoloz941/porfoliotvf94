function test_age(){
    let age = prompt("Quelle est votre âge")
    if(age<18)
    {
        document.write("Attestation accès refusé vous êtes mineur !!");
        document.body.style.backgroundColor ="red";


    }
    else 
    {
        document.write("Ok, vous êtes majeur.")
        document.body.style.backgroundColor ="green"
    }


}


function test_couleur(){
    let couleur = prompt("Donner une couleur")
    if (couleur == "rouge"){
        document.body.style.backgroundColor ="red"
    }

    else if (couleur == "bleu"){
         document.body.style.backgroundColor ="blue"
    }

    
    else if (couleur == "vert"){
        document.body.style.backgroundColor ="green"
   }
}

function affichage(){
    let prenom = prompt("saisir votre prénom");
    let nom = prompt("saisir votre nom");
    document.write ("<div style='border:5px solid blue; width:400px; height:300px; margin:auto;font-size:2em';>");
    document.write ("bonjour   "  + prenom +  "   " + nom);
    document.write("</div>");
}

