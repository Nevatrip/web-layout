export function toggleAttr(element, attrName){
    if (element.getAttribute(attrName) === "true")
        element.setAttribute(attrName, "false");
    else element.setAttribute(attrName, "true");
}