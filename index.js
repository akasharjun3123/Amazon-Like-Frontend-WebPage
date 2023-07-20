document.addEventListener("DOMContentLoaded", function(){
    const images = ["Images/hero_image.jpg","Images/hero_image_2.jpg","Images/hero_image_3.jpg",
    "Images/hero_image_4.jpg","Images/hero_image_5.jpg",];
    const boxElement = document.querySelector(".background-sec");
    let imageIndex = 0;
    function upgradeBackgroundImage(){
        boxElement.style.backgroundImage = "linear-gradient(to bottom, transparent 50%, #e3e6e6 75%), url('"+images[imageIndex]+"')";
        
    }

    upgradeBackgroundImage();
    function nextImage(){
        imageIndex = (imageIndex+1)%images.length;
        upgradeBackgroundImage();
    }

    function prevImage(){
        imageIndex = (imageIndex-1+images.length)%images.length;
        upgradeBackgroundImage();
    }
    setInterval(nextImage,7000);
    const rightArrow = document.querySelector(".right-arrow");
    const leftArrow = document.querySelector(".left-arrow");

    rightArrow.addEventListener("click", nextImage);
    leftArrow.addEventListener("click", prevImage);
 
})