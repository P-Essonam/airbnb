import { F_bottomData } from "./bottom.js";
import { sp } from "./swipe.js";

const app = () => {
    
    const data = document.querySelector('.js-bottom-data');
    const jsUl = document.querySelectorAll('.js-ul li');
    const titles = document.querySelectorAll('.title li div');
 
    F_bottomData(data,jsUl,titles);

    sp();

};

document.addEventListener('DOMContentLoaded', app);

