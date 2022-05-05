document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#name").innerHTML = localStorage.getItem("name")
    document.querySelector("#text").style.background = localStorage.getItem("color")

})

document.getElementById('select-all').onclick = function() {
    var checkboxes = document.getElementsByName('motivations');
    for (var checkbox of checkboxes) {
        checkbox.checked = this.checked;
    }
}