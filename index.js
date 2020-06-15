var users
if(localStorage.getItem("users")==null){
users=[]
}else{
users=JSON.parse(localStorage.getItem("users"))
}
 console.log(users)
 if(users!=null){
 for(let i=0;i<users.length;i++){
 console.log(users[i].id, users[i].name,users[i].email,users[i].pass,users[i].date,users[i].org,users[i].admin)
   }
 }
 var successMsg=localStorage.getItem("successMsg2")
 console.log(successMsg)
 if(successMsg=='true'){
     console.log("in success block")
    document.getElementById("successMsg").style.display="block"
    document.getElementById("successMsg").innerHTML="Password changed successfully !"
    timeOut3()
    console.log(localStorage)
    localStorage.setItem("successMsg2", 'false')
    console.log(localStorage)
 }
console.log(localStorage)
 function validiateLog(){
var input=document.getElementById("email").value
var pwd=document.getElementById("pwd").value
var check='def'
for(let i in users){
    if((input==users[i].id || input==users[i].email) && pwd==users[i].pass){
        console.log('input'+input)
        console.log('element.id'+users[i].id)
        console.log('element.email'+users[i].email)
        console.log('pwd'+pwd)
        console.log("element.pass"+users[i].pass)
        localStorage.setItem("userOrg", users[i].org)
        check='correct'
        break
       }else{
         if((input==users[i].id || input==users[i].email) && pwd!=users[i].pass){
            console.log('input in else if'+input)
            console.log('element.id in else if'+users[i].id)
            console.log('element.email in else if'+users[i].email)
            console.log('pwd in else if'+pwd)
            console.log("element.pass in else if"+users[i].pass)
               //  wrong password
               check="wrongPwd"
               break
         }else {
            //  user doesnot exist
            console.log('input in else else '+input)
            console.log('element.id in else else '+users[i].id)
            console.log('element.email in else else '+users[i].email)
            console.log('pwd in else else'+pwd)
            console.log("element.pass in else else"+users[i].pass)
             check="noUser"
         }
       
       }
    }

 console.log(check)
if(check=="wrongPwd"){
    document.getElementById('msg').style.display="block"
document.getElementById('msg').innerHTML="Incorrect password"
document.getElementById('msg').style.color="red"
myFunction()
return false
}else if( check=="noUser"){
    document.getElementById('msg').style.display="block"
    document.getElementById('msg').innerHTML="User does not exist please signUp"
    document.getElementById('msg').style.color="red"
    myFunction()
 return false 
}else{

}
return false
}
function myFunction() {
    setTimeout(function(){ document.getElementById('msg').style.display="none" }, 3000);
  }
  function timeOut2(){
    setTimeout(function(){document.getElementById("msg3").style.display="none"
    document.getElementById("msg3").innerHTML=""
}, 5000)
  }
  function timeOut3(){
    setTimeout(function(){ document.getElementById("successMsg").style.display="none"
    document.getElementById("successMsg").innerHTML=""
}, 5000)
  }

  function myFunction() {
    setTimeout(function(){ document.getElementById('msg').style.display="none" }, 3000);
  }
   function passChange(){
    var email2=document.getElementById("email2").value
    var email3=document.getElementById("email3").value
    var email4=document.getElementById("email4").value
    if(email3==email4){
        for(let i in users){
            if(users[i].id==email2 || users[i].email==email2){
              users[i].pass=email3
            }
        }
        localStorage.setItem("users",JSON.stringify(users))
              localStorage.setItem("successMsg2", 'true')
              console.log(localStorage)
        // document.getElementById("signIn").style.display="block"
        // document.getElementById("signIn2").style.display="none"
        // document.getElementById("signIn3").style.display="none"
        // document.getElementById("successMsg").style.display="block"
        // document.getElementById("successMsg").innerHTML="Password changed successfully !"
        // timeOut3()
   }else{
       document.getElementById("msg3").style.display="block"
       document.getElementById("msg3").innerHTML="passwords do not match"
       document.getElementById("msg3").style.color="red"
       timeOut2()
       return false
   }
   return true
}

