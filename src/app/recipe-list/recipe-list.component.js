
//   const heart = document.querySelector(".heart");
//   const animationHeart = document.querySelector
//   (".animation-heart");

//   heart.addEventListener('click', () => {
//     animationHeart.classList.add('popup');
//     HeaderComponent.classList.add('fill-color');
//     animationHeart.classList.add('animation');
//     HeaderComponent.classList.add('fill-color');
//   })

//   animateHeart.addEventListener('click', () => {
//     animateHeart.classList.remove
//     ('animation');
//     heart.classList.remove('fill-color');
//   })

// document.addEventListener('DOMContentLoaded', function() {
//     const heart = document.querySelector(".heart");
//     const animationHeart = document.querySelector(".animation-heart");
//     // const HeaderComponent = document.querySelector(".your-header-component-class"); 

//     heart.addEventListener('click', () => {
//         animationHeart.classList.add('popup');
//         HeaderComponent.classList.add('fill-color');
//         animationHeart.classList.add('animation');
//     });

//     animationHeart.addEventListener('click', () => {
//         animationHeart.classList.remove('animation');
//         heart.classList.remove('fill-color');
//     });
// });


document.addEventListener('DOMContentLoaded', function() {
    const hearts = document.querySelectorAll(".heart");
    console.log(hearts);
    const animationHearts = document.querySelectorAll(".animation-heart");
    console.log(animationHearts);

    hearts.forEach((heart, index) => {
        const animationHeart = animationHearts[index];

        heart.addEventListener('click', () => {
            animationHeart.classList.add('popup', 'animation-heart');
            // heart.classList.add('fill-color'); // I noticed you had 'HeaderComponent' here, but it seems like you want to change the heart's color.
            heart.classList.add('.heart.fill-color');
            console.log(animationHeart);
        });

        animationHeart.addEventListener('click', () => {
            animationHeart.classList.remove('animation-heart');
            heart.classList.remove('fill-color');
        });
    });
});

console.log(document.addEventListener);
