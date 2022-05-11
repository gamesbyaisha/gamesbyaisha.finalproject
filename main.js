document.addEventListener("DOMContentLoaded", function () {

    // document.querySelector("#education").addEventListener("keyup", function () {
    //     let val = this.value;
    //     localStorage.setItem("education", val)
    // })

    let radios = document.querySelectorAll('.radio'); 
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            let val = this.value;
            localStorage.setItem("education", val)
            document.querySelector("#education").innerHTML = localStorage.getItem("education")
        }
        // radios[i].addEventListener('change',function(){
        // })
    }
})



document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#name").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("name", val)
    })
})


document.addEventListener("DOMContentLoaded", function () {

        document.querySelector("#adjective").addEventListener("keyup", function () {
            let val = this.value;
            localStorage.setItem("adjective", val)
    })
})  

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#dislike").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("dislike", val)
})
})  

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#skills").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("skills", val)
    })
})


document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#interests").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("interests", val)
    })
})


document.addEventListener("DOMContentLoaded", function () {

    document.querySelector("#wanttobe").addEventListener("keyup", function () {
        let val = this.value;
        localStorage.setItem("wanttobe", val)
    })
})
    // let radios = document.querySelectorAll('.radio');
    // for (var i = radios.length - 1; i >= 0; i--) {
    //     radios[i].addEventListener('change', function () {
    //         localStorage.setItem("color", this.value)
    //     })
    // }


// function education(){
//     var education = document.getElementById("education");
//     var output = document.getElementById("output");
//     var education = output.value;
//     output.value = "Your level is " + education + "!"
//     }


    // const education = document.getElementById("education");

    // function radiobuttons()
    // {
    //     var radio1 = document.getElementById("radio1");
   

    // if (radio1.checked==true)
    //     alert("")
    // }

