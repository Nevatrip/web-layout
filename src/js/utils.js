export function toggleAttr(element, attrName){
  if (element.getAttribute(attrName) === 'true')
      element.setAttribute(attrName, 'false');
  else element.setAttribute(attrName, 'true');
}

export function offset(element) {
  const rect = element.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { 
    top: rect.top + scrollTop, 
    left: rect.left + scrollLeft 
  };
}