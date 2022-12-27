import { showDropDownList } from './drop-down-list.js';

// открытие/закрытие списка с достопримечательностями
export function sightList() {
  const btnSee = document.querySelector('.dke_sight__btn');
  btnSee?.addEventListener('click', showDropDownList);
}
