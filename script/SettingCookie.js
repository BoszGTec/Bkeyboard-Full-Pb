var sel=document.getElementById("me_c")
var inp=document.getElementById("inp")
var colormode='1';

if(document.cookie!=''){
   
    var ck1=document.cookie.split(";")

    var ck2=ck1[1].split(":")
    colormode=ck2[1];
    

    ck2=ck1[0].split(":")
    sel.value=ck2[1]

    ck2=ck1[2].split(":")
    inp.value=ck2[1]
}
else{

setcookie()

}

thememode()
system_main()

function setcookie(){
    
    if(colormode)
    document.cookie="textmode:"+sel.value+";colormode:"+colormode+"; data:"+inp.value+";"

}
