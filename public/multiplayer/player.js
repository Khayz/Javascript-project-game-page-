const $video = document.querySelector("#video");

const options = {
  rootMargin: "0px 0px 0px 0px",
  threshold: 1
};

const callback = (entries, observer) => {
  if (entries[0].isIntersecting) {
    $video.play();
    !!$video.muted;
  } else {
    $video.pause();
  }
};

const observer = new IntersectionObserver(callback, options);

observer.observe($video);
