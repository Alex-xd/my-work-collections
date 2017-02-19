// Created by Boyuan on 2016.7.30

function addClass(element, iclass) {
    var eclass = element.getAttribute("class");

    eclass = eclass + " ";
    eclass = eclass.concat(iclass);
    element.setAttribute("class", eclass);

}

function removeClass(element, iclass) {
    var eclass = element.getAttribute("class");

    eclass = eclass.replace(iclass, "");
    element.setAttribute("class", eclass);
}

function replaceClass(element, iclass_name, to_class_name) {
    var eclass = element.getAttribute("class");

    eclass = eclass.replace(iclass_name, to_class_name);
    element.setAttribute("class", eclass);
}