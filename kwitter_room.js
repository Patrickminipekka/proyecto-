
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDcm_IIjViFVqHeulioQ0UM84WxdJ5Sy0I",
      authDomain: "kwitter-57914.firebaseapp.com",
      projectId: "kwitter-57914",
      storageBucket: "kwitter-57914.appspot.com",
      messagingSenderId: "590848318115",
      appId: "1:590848318115:web:e71f5258a564b6fc0dbd16"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Bienvenido"+user_name;

    function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
      
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
console.log("Room_names"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("outpout").innerHTML+=row;
      //Final del código
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
