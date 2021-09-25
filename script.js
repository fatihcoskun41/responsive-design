   function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
        }
        
        function closeNav() {
          document.getElementById("mySidenav").style.width = "0";
        }



     let blue1= document.querySelectorAll("#blue-light1")
     let orange1 = document.querySelectorAll("#orange1")
     let gray1 = document.querySelectorAll("#gray1")

     let blue2= document.querySelectorAll("#blue-light2")
     let orange2 = document.querySelectorAll("#orange2")
     let gray2_1 = document.querySelectorAll("#gray2-1")
     let gray2_2 = document.querySelectorAll("#gray2-2")

     let blue3= document.querySelectorAll("#blue-light3")
     let orange3 = document.querySelectorAll("#orange3")
     let gray3 = document.querySelectorAll("#gray3")

     let blue4= document.querySelectorAll("#blue-light4")
     let orange4 = document.querySelectorAll("#orange4")
     let gray4 = document.querySelectorAll("#gray4")

function getyellowclick() {
    document.getElementById("getyellow").style.borderColor="yellow";
}
function changeFirstRow(){
  blue1.forEach(p=>p.id="gray1")
  orange1.forEach(p=>p.id="gray1")

}
function changeBackFirtRow(){
 blue1.forEach(p=>p.id="blue-light1")
 orange1.forEach(p=>p.id="orange1")
}

function changeSecondRow(){
  gray2_1.forEach(p=>p.id="blue-light2")
  gray2_2.forEach(p=>p.id="orange2")


}
function changeBackSecondRow(){
 gray2_1.forEach(p=>p.id="gray2-1")
 gray2_2.forEach(p=>p.id="gray2-2")

}


function changeThirdRow(){
  blue3.forEach(p=>p.id="gray3")
  orange3.forEach(p=>p.id="gray3")

}
function changeBackThirdRow(){
 blue3.forEach(p=>p.id="blue-light3")
 orange3.forEach(p=>p.id="orange3")
}


function change4Row(){
  blue4.forEach(p=>p.id="gray4")
  orange4.forEach(p=>p.id="gray4")

}
function changeBack4Row(){
 blue4.forEach(p=>p.id="blue-light4")
 orange4.forEach(p=>p.id="orange4")
}