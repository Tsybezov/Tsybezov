'use strict';
//28. Получение элементов со страницы
    // const box = document.getElementById('box');
    //     console.log(box);

    // const btns = document.getElementsByTagName('button');
    //     console.log(btns[1]);

    // const circles = document.getElementsByClassName('circle');
    //  console.log(circles);

    // const hearts = document.querySelectorAll('.heart');
    //     hearts.forEach(item => {
    //         console.log(item);
    //     });

    // const oneHeart = document.querySelector('.heart');
    //     console.log(oneHeart);

//29. Действия с элементами на странице


    const box = document.getElementById('box'),
          btns = document.getElementsByTagName('button'),
          circles = document.getElementsByClassName('circle'),
          hearts = document.querySelectorAll('.heart'),
          oneHeart = document.querySelector('.heart'),
          wrapper = document.querySelector('.wrapper');

    // box.style.backgroundColor = 'blue';
    // box.style.width = "500px";
    // btns[1].style.borderRadius = '100%';
    box.style.cssText = `background-color: blue; width: 500px`;
    //     for(let i = 0; i < hearts.length; i++) {
    //         hearts[i].style.backgroundColor = 'blue';
    //     }

    hearts.forEach(item => {
        item.style.backgroundColor = 'blue';
    })

    const div = document.createElement('div');
    // const text = document.createTextNode('Hi world');

    div.classList.add('black');
    wrapper.append(div); // метод помещает элемент в конец объекта.
    //wrapper.appendChild(div);
    //wrapper.prepend(div); // метод помещает элемент в начало объекта.

    // hearts[0].before(div);
    // hearts[0].after(div);
    //wrapper.insertBefore(div, hearts[0]);
    //circles[0].remove();
    //wrapper.removeChild(hearts[1]);
    //hearts[0].replaceWith(circles[0]); 
    // wrapper.replaceChild(circles[0], hearts[0]);
    //div.innerHTML = "<h1>hello world</h1>";
    //div.textContent = "Hello";
    //div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");