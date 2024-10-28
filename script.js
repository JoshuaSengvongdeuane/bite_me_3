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

 // Select the label and the text to change
 const labelOne = document.getElementById('card1');
 const labelTwo = document.getElementById('card2');
 const labelThree = document.getElementById('card3');
 const textToChange = document.getElementById('serviceText');

 // Add a click event listener to the label
 labelOne.addEventListener('click', function() {
     textToChange.textContent = "PMMA denture is a temporary denture choice that is cost-effective, biocompatible, easy to process and can be repaired or replaced frequently as needed.";
 });

 labelTwo.addEventListener('click', function() {
     textToChange.textContent = "Customize night guard is a design to protect the teeth and jaw from clinching and grinding. We take an impression of your teeth, then moulded over the model using a special material.";
 });

 labelThree.addEventListener('click', function() {
     textToChange.textContent = "Zirconia arch is a fixed dental prosthesis designed to replace the entire upper or lower arch of missing teeth. It is more durable, long-lasting, and natural look and feel.";
 });


document.getElementById('file').addEventListener('change', function() {
    const fileNamesContainer = document.getElementById('file-names');
    fileNamesContainer.innerHTML = ""; // Clear previous file names
    const files = this.files;
    for (let i = 0; i < files.length; i++) {
      const fileName = document.createElement('p');
      fileName.textContent = files[i].name;
      fileNamesContainer.appendChild(fileName);
    }
});

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}