/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const 
        adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        genres = poster.querySelector('.promo__genre'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event)=> {
        event.preventDefault();

        const  newFilm = addInput.value;
        const favorite = checkbox.checked;

        movieDB.movies.push(newFilm); // Push - Нового фильма в базу 
        sortArr(movieDB.movies); // Сортировка списка по алфавиту.

        creteMovieList(movieDB.movies, movieList);

        event.target.reset();
    });

    //Удаление элемента со страницы.     
    const deleteAdv = (arr) => {
        arr.forEach(item => { 
            item.remove();
        });
    }
    
    const makeChanges = () => {
        //Перенаименование элемента на странице.
        genres.textContent = 'Драмма';
        
        //Изменение заднего фона постера.
        poster.style.backgroundImage = 'url(img/bg.jpg)';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function creteMovieList(films, parent) {
        //Очиска элемента со списком фильмов.
        parent.innerHTML = "";

        //Добавление списка фильмов и его нумерация.
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item"> ${i + 1 + ". "} ${film}
                <div class="delete"></div>
            </li>`; 

        });
    }
    sortArr(movieDB.movies);
    makeChanges();
    deleteAdv(adv);
    creteMovieList(movieDB.movies, movieList);  
});