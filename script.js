function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const comparisonWrappers = document.querySelectorAll(".comparison-wrapper");

    comparisonWrappers.forEach(wrapper => {
        const beforeImage = wrapper.querySelector(".before-image img");
        const slider = wrapper.querySelector(".slider");
        const sliderHandle = wrapper.querySelector(".slider-handle");

        let isSliding = false;

        const moveSlider = (x) => {
            const rect = wrapper.getBoundingClientRect();
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
});

const fileInput = document.getElementById("file");
const fileNamesDiv = document.getElementById("file-names");

// Array to store selected files
let selectedFiles = [];

// Update file display list
function updateFileList() {
    fileNamesDiv.innerHTML = ""; // Clear the current list

    selectedFiles.forEach((file, index) => {
        const fileDiv = document.createElement("div");
        fileDiv.classList.add("file-item");
        fileDiv.setAttribute("data-index", index);

        const fileName = document.createElement("span");
        fileName.textContent = file.name;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-file");
        removeBtn.textContent = "X";
        removeBtn.addEventListener("click", () => {
            removeFile(index);
        });

        fileDiv.appendChild(fileName);
        fileDiv.appendChild(removeBtn);
        fileNamesDiv.appendChild(fileDiv);
    });
}

function SendMail() {
    var params = {
        first_name : document.getElementById("first_name").value, 
        last_name : document.getElementById("last_name").value, 
        email_id : document.getElementById("email_id").value, 
        phone_number : document.getElementById("phone_number").value, 
        message : document.getElementById("message").value 
    }
    emailjs.send("service_blvov4c", "template_7k001oh", params).then(function (res) {
         alert("Success! " + res.status);
    })
}