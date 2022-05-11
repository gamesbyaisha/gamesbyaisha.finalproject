document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('button').addEventListener("click", generateWords);
})

document.addEventListener("DOMContentLoaded", function () {
var usergender = localStorage.getItem("gender");
   // document.getElementById('name').innerHTML = username;
   // Below commented out because <span id="gender"> does not exist on page
   // document.getElementById('gender').innerHTML = usergender;

   if (usergender === 'high school'){
      document.getElementById('greetz').innerHTML = 'high school';
   }else if (usergender === 'middle school'){
      document.getElementById('greetz').innerHTML = 'middle school';
   }else if (usergender === 'phD'){
        document.getElementById('greetz').innerHTML = 'phD';
   }else if (usergender === 'masters'){
        document.getElementById('greetz').innerHTML = 'masters';
   }else if (usergender === 'college'){
        document.getElementById('greetz').innerHTML = 'college';
   }else{
      document.getElementById('greetz').innerHTML = 'unknown';
   }
})


document.addEventListener("DOMContentLoaded", function () {
    var userpersonality = localStorage.getItem("expectations");
   
       if (userpersonality === 'introvert'){
          document.getElementById('personality').innerHTML = 'introvert';
       }else{
          document.getElementById('personality').innerHTML = 'extrovert';
       }
    })

document.addEventListener("DOMContentLoaded", function () {
        var usersalary = localStorage.getItem("expectations");
       
            if (usersalary === '$20k'){
              document.getElementById('salary').innerHTML = '$20k';
            }if (usersalary === '$50k'){
                document.getElementById('salary').innerHTML = '$50k';
            }if (usersalary === '$75k'){
                document.getElementById('salary').innerHTML = '$75k';
            }if (usersalary === '$100k'){
                document.getElementById('salary').innerHTML = '$100k';
            }else{
              document.getElementById('salary').innerHTML = '$150k';
        }
})

function generateWords() {
    let rm = RiTa.markov(2);
    rm.addText(artistConk);
    let sentences = rm.generate(1);
    document.querySelector("#generated").innerHTML = sentences;
}

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#name").innerHTML = localStorage.getItem("name")
    // document.querySelector("#text").style.background = localStorage.getItem("name")

})

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#motivations").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("motivations", val)
    })
})  
document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#motivations").innerHTML = localStorage.getItem("motivations")
    // document.querySelector("#text").style.background = localStorage.getItem("name")

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

// document.getElementById('select-all').onclick = function() {
//     var checkboxes = document.getElementsByName('motivations');
//     for (var checkbox of checkboxes) {
//         checkbox.checked = this.checked;
//     }
// }
