function verif() {
    m=document.getElementById("m")
    f=document.getElementById("f")
    if(!(m.checked || f.checked)){
        alert("invalide civilite");return false;
    }

    np=document.getElementById("np").value;
    if(np.length>=30){
        alert("invalide ");return false;
    }

    tel=document.getElementById("tel").value;
    if(tel.length!=8 || (tel.charAt(0)!="9" && tel.charAt(0)!="5" && tel.charAt(0)!="7" && tel.charAt(0)!="2")){
        alert("invalide telephone");return false;
    }

    em=document.getElementById("em").value;
    if(em.indexOf(".com")==-1 && em.indexOf(".fr")==-1){
        alert("invalide email");return false;
    }
    cem=document.getElementById("cem").value;
    if(em!=cem){
        alert("invalide confirmation email");return false;
    }

    function nespace(ch){
        nb=0
        for(i=0;i<ch.length;i++){
            if(ch.charAt(i)==" "){
                nb+=1
            }
        }
        return nb
    }
    ad=document.getElementById("ad").value;
    if(nespace(ad)>1 || nespace(ad)==0){
        alert("invalide adresse");return false;
    }

    ville=document.getElementById("ville");
    if(ville.selectedIndex==0){
        alert("invalide ville");return false;
    }

    cp=document.getElementById("cp").value;
    if(cp.length!=4){
        alert("invalide code postal");return false;
    }

}

bajout=document.getElementById("bajout");

function exist(ch,t){
    for(i=0;i<t.length;i++){
        if(ch==t[i].text){
            return true;
        }
    }
    return false;
}

function ajout() {
    ville=document.getElementById("ville");
    ajville=document.getElementById("ajville").value;
    if(exist(ajville,ville.options)){
        alert("ville deja existe");return false;
    }

    if(ajville!=''){
        ville.options[ville.length]=new Option(ajville)
    }
}
bajout.addEventListener("click",ajout)
