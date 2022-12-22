export default class liveNotify {
  constructor(selector) {
    this.notify = document.querySelector(selector);
    if(!this.notify) return;
    
    this.closeButton = this.notify.querySelector('.close');
    this.showTimeNotify = +this.notify.dataset.timeVisible || 15000;
    this.notifyContent = this.notify.querySelector('.dke_live-notify__text').innerHTML;

    this.closeButton.addEventListener('click', () => {
      //(true) - говорит о том что пользователь сам закрыл, 
      //         она больше не будет видна если контент ее не измениться
      this.hideNotify(true);
    });

    if(this.notifyContent !== localStorage.getItem('notifyContent')){
      //Если контент всплывашки изменился то показывать ее в любом случае
      localStorage.setItem('notifyContent', this.notifyContent);
      localStorage.removeItem('notifyClosed');
      this.showNotify(this.showTimeNotify);
    }else if(!localStorage.getItem('notifyClosed')){
      //Если пользователь не закрывал всплывашку?
      this.showNotify(this.showTimeNotify);
    }
  }

  showNotify(showTime = 15000) {
    this.notify.classList.add('show');
    setTimeout(() => {
      this.hideNotify();
    }, showTime);
  }
  hideNotify(closedByUser = false) {
    this.notify.classList.remove('show');
    if(closedByUser){
      localStorage.setItem('notifyClosed', 'closed');
    }
  }
}