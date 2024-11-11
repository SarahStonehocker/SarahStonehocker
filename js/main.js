const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["dog1.jpeg", "dog2.jpeg", "dog3.jpeg", "dog4.jpeg", "dog5.jpeg"];

/* Declaring the alternative text for each image file */
const alts = {
  "dog1.jpeg" : "golden retriever",
  "dog2.jpeg" : "German Shepard",
  "dog3.jpeg" : "Black Dog",
  "dog4.jpeg" : "Great Pyranses",
  "dog5.jpeg" : "lab Puppy"

  
}

/* Looping through images */
for (let i = 0; i < images.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', '../img/' + images[i]);
  newImage.setAttribute('alt', alts[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });
  

