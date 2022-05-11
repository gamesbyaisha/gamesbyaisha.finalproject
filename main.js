// document.addEventListener("DOMContentLoaded", function () {

//     // document.querySelector("#education").addEventListener("keyup", function () {
//     //     let val = this.value;
//     //     localStorage.setItem("education", val)
//     // })
//     var radios = document.getElementsByName("myRadios"); // list of radio buttons
//     var val = localStorage.getItem('education');
//     let radios = document.querySelectorAll('.radio'); 
//     for (i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             let val = this.value;
//             localStorage.setItem("education", val)
//             document.querySelector("#education").innerHTML = localStorage.getItem("education")
//         }
//         // radios[i].addEventListener('change',function(){
//         // })
//     }
// })

document.addEventListener("DOMContentLoaded", function () {

var frmGender = document.education.gender;
var prev = null;
for (var i = 0; i < frmGender.length; i++) {
   frmGender[i].addEventListener('change', function () {
      (prev) ? console.log(prev.value) : null;
      if (this !== prev) {
         prev = this;
      }
     //  console.log(this.value);
      document.getElementsByClassName("selectedEducation")[0].innerHTML = this.value;
      localStorage.setItem("gender", this.value);
      document.querySelector("#value").innerHTML = localStorage.getItem("gender")
 
   });
}
})

document.addEventListener("DOMContentLoaded", function () {
var frmPersonality = document.personality.myRadios;
var prev = null;
for (var i = 0; i < frmPersonality.length; i++) {
    frmPersonality[i].addEventListener('change', function () {
      (prev) ? console.log(prev.value) : null;
      if (this !== prev) {
         prev = this;
      }
      document.getElementsByClassName("selectedPersonality")[0].innerHTML = this.value;
      localStorage.setItem("myRadios", this.value);
      document.querySelector("#value").innerHTML = localStorage.getItem("myRadios")
 
   });
}
})


document.addEventListener("DOMContentLoaded", function () {

    var frmSalary = document.education.salary;
    var prev = null;
    for (var i = 0; i < frmSalary.length; i++) {
       frmSalary[i].addEventListener('change', function () {
          (prev) ? console.log(prev.value) : null;
          if (this !== prev) {
             prev = this;
          }
         //  console.log(this.value);
          document.getElementsByClassName("selectedSalary")[0].innerHTML = this.value;
          localStorage.setItem("salary", this.value);
          document.querySelector("#value").innerHTML = localStorage.getItem("salary")
     
       });
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

