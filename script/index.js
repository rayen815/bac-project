function soon() {
    a=document.getElementsByTagName("a")
    for (var i=0;i<a.length;i++){
        if( a[i].getAttribute('href')=="soon.html"){
            a[i].style.backgroundColor="rgba(255, 96, 96, 0.776)"
        }
    }
}