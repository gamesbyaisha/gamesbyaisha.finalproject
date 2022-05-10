document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#name").innerHTML = localStorage.getItem("name")
    // document.querySelector("#text").style.background = localStorage.getItem("name")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#education").innerHTML = localStorage.getItem("education")
    // document.querySelector("#text").style.background = localStorage.getItem("education")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#wanttobe").innerHTML = localStorage.getItem("wanttobe")
    // document.querySelector("#text").style.background = localStorage.getItem("education")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#skills").innerHTML = localStorage.getItem("skills")
    // document.querySelector("#text").style.background = localStorage.getItem("education")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#interests").innerHTML = localStorage.getItem("interests")
    // document.querySelector("#text").style.background = localStorage.getItem("education")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#adjective").innerHTML = localStorage.getItem("adjective")
    // document.querySelector("#text").style.background = localStorage.getItem("education")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#dislike").innerHTML = localStorage.getItem("dislike")
    // document.querySelector("#text").style.background = localStorage.getItem("education")

})

document.getElementById('select-all').onclick = function() {
    var checkboxes = document.getElementsByName('motivations');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
}