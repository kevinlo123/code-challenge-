function reveal_pass(check_box){
    var textbox_elem = document.getElementById("password");
    if(check_box.checked)
    textbox_elem.setAttribute("type", "text");
    else
    textbox_elem.setAttribute("type", "password");
  }
