function adduser(){
    var player_1_name = document.getElementById("player_input_1").value;
    var player_2_name = document.getElementById("player_input_2").value;
    localStorage.setItem("player_name_1" , player_1_name);
    localStorage.setItem("player_name_2" , player_2_name);
    window.location = "";
}