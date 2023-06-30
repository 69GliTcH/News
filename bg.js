const container = document.querySelector(".container");
for (var i = 1; i <= 50; i++) {
    const blocks = document.createElement("block");
    blocks.classList.add("block");
    blocks.style.backgroundImage="url('images/"+i+".jpg')";
    container.appendChild(blocks);
}

function animateBlocks() {
    anime({
        targets: '.block',
        translateX: function () {
            return anime.random(-700, 700);
        },
        translateY: function () {
            return anime.random(-500, 500);
        },
        scale: function () {
            return anime.random(1, 5);
        },
        easing: 'linear',
        duration: 3200,
        delay: anime.stagger(10),
        complete: animateBlocks,
    })
}
animateBlocks()
