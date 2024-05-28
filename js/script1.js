const stars = document.querySelectorAll('.star');
const percentage = 80; // درصد مورد نظر
const numActiveStars = Math.ceil(percentage / 20);

stars.forEach((star, index) => {
    if (index < numActiveStars) {
        star.classList.add('active');
    } else {
        star.classList.remove('active');
    }
});