(function () {
  var buttonPlayPause = document.getElementById("button-play-pause");
  var video = document.getElementById("video");

  buttonPlayPause.addEventListener("click", function () {
    if (video.paused) {
      video.play();
      buttonPlayPause.classList.toggle("vp__button--play");
      buttonPlayPause.classList.toggle("vp__button--pause");
    } else {
      video.pause();
      buttonPlayPause.classList.toggle("vp__button--play");
      buttonPlayPause.classList.toggle("vp__button--pause");
    }
  });

  video.addEventListener("timeupdate" , function () {
    var duration = video.duration,
        currentTime = video.currentTime;
     // setTime(duration - currentTime);
    var progression = Math.floor(currentTime / duration * 100);
     console.log(progression);

      var progressStatus = document.getElementById("progress-status");
      progressStatus.style.width = progression + "%";

  })

})();