
setInterval(function() {
    $('.slideshow > div:first')
      .appendTo('.slideshow');
      },20000);


function setNewImage()
      {
         document.getElementById("poster1").src="images/2.jpg";
      }
      function setOldImage()
      {
          document.getElementById("poster1").src="images/helptogether.jpg";
      }




function validate()
{
    var text=document.getElementById("el").value;

    var regx=/^([a-z A-Z 0-9\.-]+)@([a-z 0-9 -]+).([a-z]{2,3})$/;

    if(regx.test(text))
      { 
        document.getElementById("lbtext").innerHTML="Registered";
        document.getElementById("lbtext").style.visibility="visible";
        document.getElementById("lbtext").style.color="green";
        document.getElementById("lbtext").style.fontSize="20px";
      }
    else
      {
       document.getElementById("lbtext").innerHTML="Invalid";
       document.getElementById("lbtext").style.visibility="visible";
       document.getElementById("lbtext").style.color="red";
      }
}
