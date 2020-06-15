var userIdP=/^[A-Za-z]{1}[0-9]{3}$/g
var userName=/^[A-Za-z]{4,}/g
var userEmail=/@gmail.com$/g
var pass1=/[A-za-z]/g, pass2=/[0-9]/g, pass3=/[!@#\$%\^&\*]/g
var id,name5,email,pass,date,org="org1",admin=false

var users
var user2=function(id,name,email,pass,date,org,admin){
this.id=id
this.name=name
this.email=email
this.pass=pass
this.date=date
this.org=org
this.admin=admin
}
function validateCom(){
   var res=true
   res=validate()
if(res==false){
    return res
}
console.log("after id"+res)
res=validateN()
if(res==false){
    return res
}
console.log("after name"+res)
res=validateE()
if(res==false){
    return res
}
console.log("after email"+res)
res=validateP()
if(res==false){
    return res
}
res=org2()
if(res==false){
    return res
}
console.log("after pass"+res)
console.log(id, name5, email, pass,date,org,admin)
if(localStorage.getItem("users")==null){
    this.users=[]
}
else{
    this.users=JSON.parse(localStorage.getItem("users"))
}
var user=new user2(this.id,this.name5,this.email, this.pass, this.date,this.org,this.admin)
console.log(this.users)
users.push(user)
console.log(this.users)
localStorage.setItem("users", JSON.stringify(this.users))
localStorage.setItem("userOrg",this.org)
console.log(localStorage)
    return res;
}

 function validate(value){
    console.log(userIdP+""+value)
    var value=document.getElementById("userId").value
  if(value.match(this.userIdP)){
      console.log(value.match(this.userIdP))
      console.log("match")
      
      console.log(localStorage)
      document.getElementById("spanui").style.display="none"
      this.id=value
  }else if(value.match(this.userIdP)==null && value.length>4 || (value.length>0 &&value.length<4) ){
    console.log(value.match(this.userIdP)==false)
    console.log("unmatch")
    document.getElementById("spanui").style.display="block"
    document.getElementById("spanui").style.color="red"
    document.getElementById("spanui").innerHTML="Id must be 4 characters"
    return false
  }else if(value.length==0){
    console.log("unmatch")
    document.getElementById("spanui").style.display="none"
    document.getElementById("spanui").innerHTML=""
    return false
  }else{
      console.log(value.match(this.userIdP))
    console.log(value.match(this.userIdP)==null)
      console.log("unmatch")
      document.getElementById("spanui").style.display="block"
      document.getElementById("spanui").style.color="red"
      document.getElementById("spanui").innerHTML="Id should start with character and reamining 3 must be digits"
      return false
  }
 
}

function validateN(value){
    console.log(userName+""+value)
    var value=document.getElementById("userName").value
    if(value.match(this.userName)){
        console.log("match user")
    
        document.getElementById("spanun").style.display="none"
        this.name5=value
    }else if(value.length==0){
        console.log("unmatch")
        document.getElementById("spanun").style.display="none"
        document.getElementById("spanun").innerHTML=""
        return false
      }else{
        console.log("unmatch user")
        document.getElementById("spanun").style.display="block"
      document.getElementById("spanun").style.color="red"
        document.getElementById("spanun").innerHTML="Should contain atleast 4 charcters"
        return false
    }
}

function validateE(value){
    console.log(userEmail+""+value)
    var value=document.getElementById("email1").value
    if(value.match(userEmail)){
        console.log("match user email")
        document.getElementById("spanue").style.display="none"
        this.email=value
    }else if(value.length==0){
        console.log("unmatch")
        document.getElementById("spanue").style.display="none"
        document.getElementById("spanue").innerHTML=""
        return false
      }else{
        console.log("unmatch user email")
        document.getElementById("spanue").style.display="block"
      document.getElementById("spanue").style.color="red"
        document.getElementById("spanue").innerHTML="Should end with @gmail.com"
        return false
    }
}

function validateP(value){
    console.log(value+""+value)
    var value=document.getElementById("pwd1").value
if(value.match(pass1)&& value.match(pass2)&&value.match(pass3)&& value.length>=6){
    document.getElementById("spanup").style.display="none"
    console.log("pass match")
    this.pass=value
}else if(value.length==0){
    console.log("unmatch")
    document.getElementById("spanup").style.display="none"
    document.getElementById("spanup").innerHTML=""
    return false
  }else if(value.match(pass1)==null){
    console.log("pass unmatch")
    document.getElementById("spanup").style.display="block"
    document.getElementById("spanup").style.color="red"
      document.getElementById("spanup").innerHTML="Should contain atleast 1 character"
      return false
}else if(value.match(pass2)==null){
    console.log("pass unmatch")
    document.getElementById("spanup").style.display="block"
    document.getElementById("spanup").style.color="red"
      document.getElementById("spanup").innerHTML="Should contain atleast 1 digit"
      return false
}else if(value.match(pass3)==null){
    console.log("pass unmatch")
    document.getElementById("spanup").style.display="block"
    document.getElementById("spanup").style.color="red"
      document.getElementById("spanup").innerHTML="Should contain atleast 1 special character like (!,@,#,$,%,^,&,*)"
      return false
}else{
    console.log("pass unmatch")
    document.getElementById("spanup").style.display="block"
    document.getElementById("spanup").style.color="red"
      document.getElementById("spanup").innerHTML="Should contain atleast 6 chararctes"
      return false
}
}

function validateAdmin(){
    var adminC=document.getElementById("adminCheck")
if(adminC.checked){
    console.log("checked in")
    this.admin=true
    
    console.log(localStorage)
}else{
    console.log("unchecked")

    console.log(localStorage)
}
}

function validateOrg(){
    var value=document.getElementById("myselect").value
    console.log(value)
}


function validateD(value){
var value=document.getElementById('dob').value
console.log(value)
this.date=value
}

function org2(){
    var value=document.getElementById("org").value
    var count=0
console.log(value)

var value2=document.getElementById("myselect").value
console.log(value2)
var orgArr2=JSON.parse(localStorage.getItem("orgArr"))
console.log(orgArr2)
for(let i in orgArr2){
    console.log(orgArr2[i])
    if(orgArr2[i]==value){
       count=1
       
          break
    }else{
        
    }
}
if(value2=='createOrg'){
    this.org=value
    }else {
        this.org=value2
    }
    console.log(this.org)
    console.log(count)
if(value.length==0 && value2=='createOrg'){
    document.getElementById('orgVerify')
    document.getElementById("orgVerify").style.display="block"
    document.getElementById("orgVerify").style.color="red"
    document.getElementById("orgVerify").innerHTML="please appropriate organization"
    return false 
}else if(count==1 && value2=='createOrg'){
    document.getElementById("orgVerify").style.display="block"
    document.getElementById("orgVerify").style.color="red"
    document.getElementById("orgVerify").innerHTML="Organization already exists"
    // document.getElementById("org").innerHTML=''
    // count=0
}else if(value2!=null){
    document.getElementById("orgVerify").style.display="none"
    document.getElementById("orgVerify").innerHTML=""
}else{
    document.getElementById("orgVerify").style.display="none"
      document.getElementById("orgVerify").innerHTML=""
}


return true
}
