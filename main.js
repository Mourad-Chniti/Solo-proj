document.getElementById("signup").style.display = "none"
document.getElementById("homepage").style.display = "none"
document.getElementById("btn2").style.display = "none"
// document.getElementById("Information").style.display = "none"
// document.getElementById("skyhigh").style.display = "none"
/////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
function storage(){
    const mail=document.getElementById("ema")
const pss=document.getElementById("pass")
if  (mail.value.length!== 0 && pss.value.length!== 0) {
    localStorage.setItem("email",document.getElementById("ema").value)
    localStorage.setItem("passWord",document.getElementById("pass").value)
    localStorage.setItem("code",document.getElementById("pass").value)
}
}
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
function hide(){
    document.getElementById("sign").style.display = "none"
    document.getElementById("signup").style.display = ""
    document.getElementById("btn").style.display = "none"
    document.getElementById("btn1").style.display = "none"
    document.getElementById("btn2").style.display = ""
}
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function seePass() {
    var pss = document.getElementById("pass");
    if (pss.type === "password") {
        pss.type = "text";
    } else {
        pss.type = "password";
    }
  }
  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  function checkInput(){
     const pss=document.getElementById("pass").value
    const mail=document.getElementById("ema").value
     if(pss.length!==0 &&mail.length!==0){
        document.getElementById("login").style.display = "none"
        document.getElementById("homepage").style.display = ""
        document.getElementById("img").style.display = "none"


      }
      else{alert("Fill Your Information ");}
  }
  ///////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  //   /  /                
//  $("#btn2").on("click",function(){
//    $("#signup").show()
//  })

$( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
$( ".squad" ).hide()
$( ".war" ).hide()
$( ".warth" ).hide()
$( ".sas" ).hide()
$( ".split" ).hide()
$( ".attack" ).hide()
$( ".demon" ).hide()
$( ".hello" ).hide()
$( ".boss" ).hide()




$( ".movie-list-item-button" ).on( "click", function() {
  $( ".sky" ).show()
   $ (".movie-list").hide();
   
   $ (".movie-list-title").hide()
})
$( "#venom" ).on( "click", function() {
  $( ".sky" ).hide()
  $( ".venom" ).show()
   $ (".movie-list").hide();
   $ (".movie-list-title").hide()
})
$( "#free" ).on( "click", function() {
  $( ".sky" ).hide()
$( ".venom" ).hide()
$ (".movie-list-title").hide()
  $( ".free" ).show()
   $ (".movie-list").hide();
})
$( "#mortal" ).on( "click", function() {
  $( ".sky" ).hide()
$( ".venom" ).hide()
$ (".movie-list-title").hide()
$( ".free" ).hide()
  $( ".mortal" ).show()
   $ (".movie-list").hide();
})
$( "#day" ).on( "click", function() {
  $( ".sky" ).hide()
  $ (".movie-list-title").hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$( ".mortal" ).hide()
  $( ".day" ).show()
   $ (".movie-list").hide();
})
$( "#girl" ).on( "click", function() {
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".mortal" ).hide()
$( ".day" ).hide()
  $( ".girl" ).show()
   $ (".movie-list").hide();
})
$( "#squad" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$ (".movie-list-title").hide()
$( ".free" ).hide()
  $( ".squad" ).show()
   $ (".movie-list").hide();
})
$( "#war" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".squad" ).hide()
  $( ".war" ).show()
   $ (".movie-list").hide();
})
$("#home").on("click",function(){
  // $("#Action").show()
  // $ ("#sec2").show()
  // $ ("#sec3").show()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
$( ".squad" ).hide()
$( ".war" ).hide()
})
$( "#warth" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".squad" ).hide()
  $( ".war" ).hide()
   $ (".movie-list").hide()
   $( ".warth" ).show()
})
$( "#sas" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".squad" ).hide()
  $( ".war" ).hide()
  $( ".warth" ).hide()
   $ (".movie-list").hide()
   $( ".sas" ).show()
})
$( "#split" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
$( ".warth" ).hide()
$( ".sas" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".squad" ).hide()
  $( ".war" ).hide()
   $ (".movie-list").hide()
   $( ".split" ).show()
})
$( "#attack" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
$( ".warth" ).hide()
$( ".sas" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".squad" ).hide()
  $( ".war" ).hide()
  $( ".split" ).hide()
   $ (".movie-list").hide()
   $( ".attack" ).show()
})
$( "#demon" ).on( "click", function() {
  $( ".mortal" ).hide()
$( ".day" ).hide()
$( ".girl" ).hide()
$( ".warth" ).hide()
$( ".sas" ).hide()
  $( ".sky" ).hide()
$( ".venom" ).hide()
$( ".free" ).hide()
$ (".movie-list-title").hide()
$( ".squad" ).hide()
  $( ".war" ).hide()
  $( ".split" ).hide()
   $ (".movie-list").hide()
   $( ".attack" ).hide()
   $( ".demon" ).show()

})
$( "#hello" ).on( "click", function() {
  $( ".mortal" ).hide()
  $( ".day" ).hide()
  $( ".girl" ).hide()
  $( ".warth" ).hide()
  $( ".sas" ).hide()
    $( ".sky" ).hide()
  $( ".venom" ).hide()
  $( ".free" ).hide()
  $ (".movie-list-title").hide()
  $( ".squad" ).hide()
    $( ".war" ).hide()
    $( ".split" ).hide()
     $ (".movie-list").hide()
     $( ".attack" ).hide()
     $( ".demon" ).hide()
     $(".hello").show()
})
$( "#boss" ).on( "click", function() {
  $( ".mortal" ).hide()
  $( ".day" ).hide()
  $( ".girl" ).hide()
  $( ".warth" ).hide()
  $( ".sas" ).hide()
    $( ".sky" ).hide()
  $( ".venom" ).hide()
  $( ".free" ).hide()
  $ (".movie-list-title").hide()
  $( ".squad" ).hide()
    $( ".war" ).hide()
    $( ".split" ).hide()
     $ (".movie-list").hide()
     $( ".attack" ).hide()
     $( ".demon" ).hide()
     $(".hello").hide()
     $(".boss").show()
})
$( "#five" ).on( "click", function() {
  $( ".mortal" ).hide()
  $( ".day" ).hide()
  $( ".girl" ).hide()
  $( ".warth" ).hide()
  $( ".sas" ).hide()
    $( ".sky" ).hide()
  $( ".venom" ).hide()
  $( ".free" ).hide()
  $ (".movie-list-title").hide()
  $( ".squad" ).hide()
    $( ".war" ).hide()
    $( ".split" ).hide()
     $ (".movie-list").hide()
     $( ".attack" ).hide()
     $( ".demon" ).hide()
     $(".hello").hide()
     $(".boss").hide()
     $(".five").show() 
    
    })
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// $( "#ACTION" ).on( "click", function() {
//   $ (".movie-list-title").hide()
//   $ ("#sec2").hide()
//   $ ("#sec3").hide()
// $("#Action").show()
// })

// $( "#LOVE" ).on( "click", function() {
//   $ (".movie-list-title").hide()
//   $ ("#sec2").hide()
//   $ ("#sec3").show()
// $("#Action").hide()
// })