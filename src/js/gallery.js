import 'blueimp-gallery/js/blueimp-gallery-indicator.js';
import blueimp from 'blueimp-gallery';

export default class Gallery {
  constructor(gallerySelector, sliderItemsSelector, sliderSelector) {
    this.galleryContainer = document.querySelector(gallerySelector);
    this.sliderItemsContainer = document.querySelector(sliderItemsSelector);

    if(this.galleryContainer){
      this.initGallery(this.galleryContainer);
    }
    if(this.sliderItemsContainer){
      this.initSlider(this.sliderItemsContainer, sliderSelector);
    }
  }

  initSlider(sliderItemsContainer, sliderSelector){
    const options = {
      container: sliderSelector,
      carousel: true,
      thumbnailIndicators: true,
      startSlideshow: false,
      stretchImages: true
    }
    blueimp(sliderItemsContainer.getElementsByTagName('a'), options);
  }
  initGallery(galleryContainer){
    galleryContainer.onclick = function (event) {
      event = event || window.event
      const target = event.target || event.srcElement
      const link = target.src ? target.parentNode : target
      const options = { 
        index: link, 
        event: event,
      }
      const links = this.getElementsByTagName('a')
      blueimp(links, options)
    }
  }
}