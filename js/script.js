window.addEventListener('DOMContentLoaded', function(){ //сработает после того, когда прогрузится полностью дом структура
    'use strict'; //строгий режим

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

// функция ниже скрывает все tabContent
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');  //   удаляем класс show, который в css прописан. 
            tabContent[i].classList.add('hide');    // добавляем класс hide
        }
    }
    hideTabContent(1);

// функция ниже показывает определенный tabContent    
    function showTabcontent(b) {
        if (tabContent[b].classList.contains('hide')) {   // проверяет наличие класса 
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
 // используется дилегирование событий, чтобы не назначать обработчик событий на каждый элемент(вкладку) 
    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i=0; i<tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabcontent(i);
                    break;
                }
            }
        }
    });
});


// слайдер
const slides = document.querySelectorAll('.slide'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dots = document.querySelectorAll('.dot'); 

function activeSlide(n){ // n - это параметр,обозначающий номер слайда
    for (let slide of slides) {
        slide.classList.remove('active');
    }    
    slides[n].classList.add('active');
}

function activeDot(n){ // n - это параметр,обозначающий номер слайда
    for (let dot of dots) {
        dot.classList.remove('active');
    }    
    dots[n].classList.add('active');
}
let index = 0;
function nextSlide() {
    if (index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index);
    } else {
        index++;
        activeSlide(index);
        activeDot(index);
    }
}
function prevSlide() {
    if (index == 0) {
        index = slides.length - 1;
        activeSlide(index);
        activeDot(index);
    } else {
        index--;
        activeSlide(index);
        activeDot(index);
    }
}

dots.forEach(function(item, indexDot) {
    item.addEventListener('click', function(){
        index = indexDot;
        activeSlide(index);
        activeDot(index);
    })
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
