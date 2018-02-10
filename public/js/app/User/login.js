

function  loginUser() {
    var username = document.getElementById('login_input').value;
    if(username == "attendee" ||username == "lecturer" ||username == "moderator" ){
        $.post(API_LOGIN,{ "username": username },
            function(data, status){
                if (data) {
                    window.location.replace(API_MAIN)
                }
                else {
                    console.log("Error. status code: , ", status);
                    alert("Error: Please enter 'attendee' or 'lecturer' or 'moderator'")
                }
            });
    }
    else {
        alert("Error: Please enter 'attendee' or 'lecturer' or 'moderator'");
    }
}