function adjustImageAndText()
{
  const image = document.getElementById('profile-picture');
  const text = document.getElementById('intro-text-side');
  const aspectRatio = image.naturalHeight / image.naturalWidth;

  let currWidth = 0;
  image.style.width = `${currWidth}px`;
  image.style.display = 'block';

  while(true)
  {
    currWidth += 0.1;
    const currHeight = currWidth * aspectRatio;
    image.style.width = `${currWidth}px`;
    image.style.height = `${currHeight}px`;
    if (currHeight >= text.clientHeight) break;
  }
}

window.onload = adjustImageAndText;
