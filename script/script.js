function soon() {
    a=document.getElementsByTagName("a")
    for (var i=0;i<a.length;i++){
        if(a[i].href=="soon.html"){
            console.log(a[i])
            a[i].style.backgroundColor="red"
        }
    }
}