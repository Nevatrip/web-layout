export default class LiveNotify {
  constructor(selector) {
    this.notify = document.querySelector(selector);
    if(!this.notify) return;
    
    this.closeButton = this.notify.querySelector('.js_dke_live-notify__close');
    this.showTimeNotify = +this.notify.dataset.timeVisible || 15000;
    this.notifyContent = this.notify.querySelector('.js_dke_live-notify__text').innerHTML;

    this.closeButton?.addEventListener('click', () => {
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
    this.notify.classList.add('js_dke_live-notify_show');
    setTimeout(() => {
      this.hideNotify();
    }, showTime);
  }
  hideNotify(closedByUser = false) {
    this.notify.classList.remove('js_dke_live-notify_show');
    if(closedByUser){
      localStorage.setItem('notifyClosed', 'closed');
    }
  }
}