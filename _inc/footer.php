  <script>
    function practiceLength() {
      var homeSceneSlider = document.getElementById("home-scene__slider").value;
      window.location.href = 'contemplation-' + homeSceneSlider + 'min.html';

    }
    function outputUpdate(min) {
      document.querySelector('#minutes').value = min;
    }
  </script>
</html>