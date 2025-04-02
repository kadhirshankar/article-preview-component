// Select the share button and the hidden social icon box
const shareBtn = document.querySelector('.share-btn');
const shareIcons = document.getElementById('share-icons');

// Toggle the visibility of the share icon box when clicked
shareBtn.addEventListener('click', () => {
  shareIcons.classList.toggle('hidden');
});
