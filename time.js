var date = new Date();
var current_hour = date.getHours();

switch (current_hour){
    case 21:
    case 22:
    case 23:
        document.getElementById("bode").className = "b10";
        break;
    case 0:
    case 1:
        document.getElementById("bode").className = "b11";
        break;
    case 2:
    case 3:
    case 4:
        document.getElementById("bode").className = "b12";
        break;
    case 5:
    case 6:
        document.getElementById("bode").className = "b1";
        break;
    case 7:
    case 8:
        document.getElementById("bode").className = "b2";
        break;
    case 9:
    case 10:
        document.getElementById("bode").className = "b3";
        break;
    case 11:
    case 12:
        document.getElementById("bode").className = "b4";
        break;
    case 13:
    case 14:
        document.getElementById("bode").className = "b5";
        break;
    case 15:
    case 16:
        document.getElementById("bode").className = "b6";
        break;
    case 17:
    case 18:
        document.getElementById("bode").className = "b7";
        break;
    case 19: 
        document.getElementById("bode").className = "b8";
        break;
    case 20:
        document.getElementById("bode").className = "b9";
        break;
}
