
         function show(num,change){
                   var menu=document.getElementById(num);
                   var change=document.getElementById(change);
                   if(change.innerHTML=="+"){
                             change.innerHTML="-";
                  }else{
                              change.innerHTML="+";
                 }
                 if(menu.style.display=='none'){
                      menu.style.display='';
                  }else{
                       menu.style.display='none';
                  }
        }
  