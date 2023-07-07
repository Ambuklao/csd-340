function imageClicked(imageElement) {
	// Add 'rounded' class to clicked image
    imageElement.classList.add('rounded');
    // Assuming you have an array of new image sources
    var newImageSources = ["images/A2.jpg", "images/A3.jpg", "images/A4.jpg", "images/A5.jpg", "images/A6.jpg", "images/A7.jpg", "images/A8.jpg", "images/A9.jpg", "images/A10.jpg", "images/A11.jpg", "images/A12.jpg", "images/A13.jpg", "images/A14.jpg", "images/A15.jpg"];
    
    // Generate a random index
    var randomIndex = Math.floor(Math.random() * newImageSources.length);
    
    // Change the source of the clicked image
    imageElement.src = newImageSources[randomIndex];
}