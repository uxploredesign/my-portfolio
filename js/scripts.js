function menuToggle() {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle") {
        x.className += " responsive";
    } else {
        x.className = "navtoggle";
    }
}

function adjustNavItemsWidth() {
    var navItems = document.querySelectorAll('.navtoggle nav li');
    var maxWidth = 0;
  
    // Find the width of the widest item
    navItems.forEach(function(item) {
      if(item.offsetWidth > maxWidth) {
        maxWidth = item.offsetWidth;
      }
    });
  
    // Set all items to that width
    navItems.forEach(function(item) {
      item.style.width = maxWidth + 'px';
    });
  }
  
  // Adjust the widths when the page loads
  window.onload = adjustNavItemsWidth;