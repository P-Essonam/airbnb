import { F_bottomData } from "./bottom.js";
import { sp } from "./swipe.js";

const app = () => {
    
    const data = document.querySelector('.js-bottom-data');
    const jsUl = document.querySelectorAll('.js-ul li');
    const titles = document.querySelectorAll('.title li div');
 
    F_bottomData(data,jsUl,titles);

    sp();

    function cacherElement() {
        let seuil = document.getElementById('maDiv').getBoundingClientRect().top;
        let monElement = document.getElementById('monElement');
  
        // Vérifier la position actuelle de défilement par rapport à la position de la div
        if (window.scrollY >= seuil) {
          monElement.style.display = 'none'; // Cacher l'élément
        } else {
          monElement.style.display = 'flex'; // Afficher l'élément
        }

        console.log(seuil);
    }
  
      // Écouter l'événement de défilement
    window.addEventListener('scroll', cacherElement);

};

document.addEventListener('DOMContentLoaded', app);

