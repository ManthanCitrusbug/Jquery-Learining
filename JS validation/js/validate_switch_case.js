function validate(){
    let name = document.getElementById("name").value;

    switch (name) {
        case "":
            document.getElementById("error_name").innerHTML = "Enter youre name.";
            break;
    
        default:
            break;
    }
}