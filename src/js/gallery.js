import 'blueimp-gallery/js/blueimp-gallery-indicator.js';
import blueimp from 'blueimp-gallery';



export default function gallery() {
  blueimp(
    document.getElementById('blueimp-gallery-carousel_images').getElementsByTagName('a'),
    {
      container: '#blueimp-gallery-carousel',
      carousel: true,
      thumbnailIndicators: true,
      startSlideshow: false,
      stretchImages: true
    }
  );

  document.getElementById('links').onclick = function (event) {
    event = event || window.event
    var target = event.target || event.srcElement
    var link = target.src ? target.parentNode : target
    var options = { 
      index: link, 
      event: event,
    }
    var links = this.getElementsByTagName('a')
    blueimp(links, options)
  }
}