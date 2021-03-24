document.getElementById('btn').addEventListener('click',addEle);
function addEle(){
    var pattern = /@gmail.com/i;
    var mobilepatt = /[0-9]/;
    var name = document.getElementById("name").value;
    var passName = document.getElementById("box1");
    passName.innerHTML = name;
    var email = document.getElementById("email").value;
    var passEmail =  document.getElementById("box3");
    passEmail.innerHTML = email;
    var mobile =  document.getElementById("mobile").value;
    var passMobile =  document.getElementById("box2");
    passMobile.innerHTML= mobile;
    var mobileval = mobile.match(mobilepatt);
    if(name===''&&email===''&&mobile==='')
    alert("fill name email and mobile");
    else if(name.length<3)
    alert("minlength should be 3");
    else if(mobile.length!=10 )
    alert("moblie length should be 10");
    else if(!email.match(pattern))
    alert("enter valid email");
    else
    document.getElementById("demo").style.visibility= 'visible';
 
    
}
document.getElementById('del').addEventListener('click',delEle);
function delEle(){
    document.getElementById("demo").style.visibility= 'hidden';
}