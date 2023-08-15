function addUser(){
    UserName=document.getElementById("UserName").value;
    localStorage.setItem("Nombre de usuario", UserName);
    window.location="kwitter_room.html"
}