<div class="home-scene">
  <h2 class="home-scene__h2">Practice Length: 
    <span class="home-scene--em__h2">
      <output for="home-scene__slider" id="minutes">5</output> minutes
    </span>
  </h2>
  
  <!-- html range slider -->
  <input id="home-scene__slider" 
    type="range" 
    min="5" 
    max="20" 
    step="5" 
    value="5" 
    oninput="outputUpdate(value)
  "/>

</div>