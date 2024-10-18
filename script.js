document.addEventListener("DOMContentLoaded", function () {
    const comparisonWrapper = document.querySelector(".comparison-wrapper");
    const beforeImage = document.querySelector(".before-image img");
    const slider = document.querySelector(".slider");
    const sliderHandle = document.querySelector(".slider-handle");

    let isSliding = false;

    const moveSlider = (x) => {
        const rect = comparisonWrapper.getBoundingClientRect();
        let offsetX = x - rect.left;
        offsetX = Math.max(0, Math.min(offsetX, rect.width)); // Limit to container width

        let percentage = (offsetX / rect.width) * 100;
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        slider.style.left = `${percentage}%`;
    };

    sliderHandle.addEventListener("mousedown", function (e) {
        isSliding = true;
        e.preventDefault(); // Prevent default drag behavior
    });

    window.addEventListener("mouseup", function () {
        isSliding = false;
    });

    window.addEventListener("mousemove", function (e) {
        if (!isSliding) return;
        moveSlider(e.clientX);
    });

    // For mobile support
    sliderHandle.addEventListener("touchstart", function (e) {
        isSliding = true;
        e.preventDefault();
    });

    window.addEventListener("touchend", function () {
        isSliding = false;
    });

    window.addEventListener("touchmove", function (e) {
        if (!isSliding) return;
        moveSlider(e.touches[0].clientX);
    });
});


