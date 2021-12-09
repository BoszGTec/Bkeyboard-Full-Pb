function thememode(){
    var mode=document.getElementById("theme");
    if(colormode=='0'){
        setcookie();
        colormode='1';
        mode.style='transform: translateX(15px);'
        var dt='--bgcolor : #fff;'
        dt+='--color : rgb(24, 24, 24);'
        dt+=' --el-bgcolor : #fff;'
        dt+='--el-color : rgb(24, 24, 24);'
        dt+=' --el-fs-color: #000;'
        dt+=' --el-bd: #000;'
        dt+='--footer-color:rgb(56, 56, 70);'
        dt+='--footer-bd : rgb(168, 174, 179);'
        dt+='--shadow-el : rgba(153, 153, 153, 0);'
        document.body.style=dt
    }
    else{
        setcookie();
        colormode='0';
        mode.style='transform: translateX(0px);'
        document.body.style=''
    }
    
    
}
