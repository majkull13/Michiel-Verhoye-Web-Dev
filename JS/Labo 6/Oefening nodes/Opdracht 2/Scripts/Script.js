const setup = () => {
    let list = document.getElementsByTagName('li');
    for (var i = 0; i < list.length; i++) {
        list[i].className = 'listitem';
    }
    let list2 = document.getElementsByClassName("listitem")
    for(var i = 0; i<list2.length; i++) {
        list2[i].style.color = "red";
    }

    const img = document.createElement('img');
    img.src="images/danku.jpg";
    document.body.appendChild(img);
}
window.addEventListener("load", setup)