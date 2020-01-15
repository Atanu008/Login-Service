
function validateName(name){
    
    var regName = /^[A-Za-z]+$/;
    if(!regName.test(name)){
      return false;
    }
    return true;
  }
function  validateEmail(email) {
    var regEmail= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(regEmail.test(email))
      return true;
    return false;
  }