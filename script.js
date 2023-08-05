document.getElementById('saveBtn').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];
    const videoFile = document.getElementById('video').files[0];
  
    // Create blog elements
    const titleElement = document.createElement('h3');
    const contentElement = document.createElement('p');
    const mediaElement = document.createElement('div');
  
    titleElement.textContent = title;
    contentElement.textContent = content;
  
    if (imageFile) {
      const imgElement = document.createElement('img');
      imgElement.src = URL.createObjectURL(imageFile);
      mediaElement.appendChild(imgElement);
    }
  
    if (videoFile) {
      const videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(videoFile);
      videoElement.controls = true;
      mediaElement.appendChild(videoElement);
    }
  
    // Update the preview section
    const previewTitle = document.getElementById('previewTitle');
    const previewContent = document.getElementById('previewContent');
    const previewMedia = document.getElementById('previewMedia');
  
    previewTitle.textContent = title;
    previewContent.textContent = content;
    previewMedia.innerHTML = '';
    previewMedia.appendChild(mediaElement);
  });
  