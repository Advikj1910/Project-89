var player1_name = localStorage.getItem("player_name_1");
var player2_name = localStorage.getItem("player_name_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send(){
    var number1 = document.getElementById("Number_1").value;
    var number2 = document.getElementById("Number_2").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    var question = "<h4>" + number1 + "X" + number2 +"</h4>";
    var input_box = "<br> answer = <input type = 'text' id = 'input_check_box'>";
    var b1 = "<br><br> <button onclick = 'check()'>Check</button>";
    var row = question + input_box + b1;
    document.getElementById("output").innerHTML = row;
    document.getElementById("Number_1").value = "";
    document.getElementById("Number_2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
    var get_ans = document.getElementById("input_chech_box").value;
    if(get_ans == actual_answer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;  
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn = " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn = " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn = " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn = " + player1_name;
    }
}