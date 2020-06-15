var users
if(localStorage.getItem("users")==null){
    users=[]
}
else{
    users=JSON.parse(localStorage.getItem("users"))
}
console.log(users)
if(users!=null){
for(let i=0;i<users.length;i++){
console.log(users[i].id, users[i].name,users[i].email,users[i].pass,users[i].date,users[i].org,users[i].admin)
}
}
tableC(localStorage.getItem('userOrg'),0)
var tempArr=new Array()
function tableC(userOrgVal,num){
    var selectOrg=document.getElementById("myselect").value
    console.log(userOrgVal)
    console.log(num)
    if(num==0){
        selectOrg=userOrgVal
        num++
    }
    console.log(selectOrg)
    this.tempArr=[]
    this.users.forEach(element=>{
        
        if(element.org==selectOrg){
           
        this.tempArr.push(element)
    }
})

var tableRows=document.querySelectorAll("tr")
console.log(tableRows)
for(let i=1;i<tableRows.length;i++){
    tableRows[i].remove()
}

console.log(this.tempArr)
localStorage.setItem("tempArr", JSON.stringify(this.tempArr))
var tempArr5=tempArr.sort(function(a,b){
    var dateA=new Date(a.date)
    var dateB=new Date(b.date)
    return dateA-dateB
})
console.log(tempArr)
console.log(tempArr5)
this.tempArr.forEach(element=>{
var table=document.getElementsByTagName("table")
var table1=table[0]
console.log(table1)
console.log(table1.tBodies)
var tableB=table1.tBodies
var newRow=table1.insertRow(table1.rows.length)
console.log(newRow)
newRow.classList.add(element.org)
newRow.setAttribute("id", element.id)
var cell0=newRow.insertCell(0)
var cell1=newRow.insertCell(1)
var cell2=newRow.insertCell(2)
var cell3=newRow.insertCell(3)
var cell4=newRow.insertCell(4)
console.log(element.date)
var date=new Date(element.date)
var day=date.getDate()
var month=date.getMonth()
var year=date.getUTCFullYear()
var rDate=`${day}/${month+1}/${year}`
console.log(day)
console.log(month)
console.log(year)
console.log(element.date)
console.log(date)
console.log(rDate)
    cell0.innerHTML=element.id
    cell1.innerHTML=element.name
    cell2.innerHTML=element.email
    cell3.innerHTML=rDate
    var codeBlock='<div class="d-flex">'+'<button class="btn btn-info mr-1 btnDis editcopy"  id="'+element.id+'E" data-toggle="modal" data-target="#signUpModal">'+' <i class="fas fa-user-edit"></i>'+ ' Edit'+'</button>'+'<button class="btn btn-danger btnDis delcopy" data-toggle="modal" data-target="#Delete" id="'+element.id+'D" >'+'<i class="fas fa-trash"></i>'+ ' Delete'+'</button>'+ '</div>'
    cell4.innerHTML=codeBlock

})
localStorage.setItem("orgClass", this.tempArr[0].org)
this.tempArr=[]
console.log(this.tempArr)
}







var adminVal=localStorage.getItem("adminVal")
console.log(adminVal)
console.log(typeof adminVal)
if(adminVal=="true"){
adminVal=true
console.log(adminVal)
console.log(typeof adminVal)
console.log(document.querySelectorAll(".btnDis"))
// console.log(document.querySelectorAll(".btnDis").disabled)
// document.querySelectorAll(".btnDis").disabled=false
var btns=document.querySelectorAll(".btnDis")
     for(let i=0;i<btns.length;i++){
         btns[i].disabled=false
     }
}
else{
    adminVal=false
    console.log(adminVal)
    console.log(typeof adminVal)
    console.log(document.querySelectorAll(".btnDis"))
    // console.log(document.querySelectorAll(".btnDis").disabled)
    // document.querySelectorAll(".btnDis").disabled=true
     var btns=document.querySelectorAll(".btnDis")
     for(let i=0;i<btns.length;i++){
         btns[i].disabled=true
     }
}


// signUp/js file copy

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
var edited=localStorage.getItem('edited')
var editedId4=localStorage.getItem('editId4')
console.log(edited)
console.log(editedId4)
if(edited=='true'){
  for(let i in users){
       if(editedId4==users[i].id){
           console.log(users[i])
           users[i]=user
       }
       localStorage.setItem("edited",'false')
       localStorage.setItem("upModal",'true')
    }
}else{
    console.log("pushed ??")
    users.push(user)
}

console.log(this.users)
localStorage.setItem("users", JSON.stringify(this.users))
localStorage.setItem("userOrg",this.org)
if(edited!='true'){
localStorage.setItem("addModal",'true')
localStorage.setItem("addModalId", this.id)
}
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
    var value=document.getElementById("myselectss").value
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

var value2=document.getElementById("myselectss").value
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
