import { F_bottomData } from "./bottom.js";

const app = () => {
    
    const data = document.querySelector('.js-bottom-data');
    const jsUl = document.querySelectorAll('.js-ul li');
    const titles = document.querySelectorAll('.title li div');
 
    F_bottomData(data,jsUl,titles);

};

document.addEventListener('DOMContentLoaded', app);

