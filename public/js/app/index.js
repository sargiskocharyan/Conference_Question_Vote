var data_main = {};


$(document).ready(function(){

    getAppData(function (err, res) {
        if (!err) {
            data_main = res;
        }
        else {
            console.log(err);
        }

    });

});



function getAppData(completion){

    $.get(API_MAIN_DATA, function(data, status){
        if (data) {
            completion(null, data);
        }
        else {
            console.log("error has occurred, status :", status.toString());
        }
    });
};

function updateQuestion(value, id){

    $.post(API_UPDATE_QUESTION,{ question_id: id, priority: value},
        function(data, status){
            if (data) {
                location.reload();
            }
            else {
                console.log("Error. status code: , ", status);
            }
        });
}

function closeQuestion(id){

    $.post(API_UPDATE_QUESTION,{ question_id: id, status: "closed"},
        function(data, status){
            if (data) {
                location.reload();
            }
            else {
                console.log("Error. status code: , ", status);
            }
        });
}

function deleteQuestion(id){
    $.post(API_DELETE_QUESTION,{ question_id: id },
        function(data, status){
            if (data) {
                location.reload();
            }
            else {
                console.log("Error. status code: , ", status);
            }
        });
}

function  addNewQuestion() {
    let content = document.getElementById('new_question_id').value;
    let priority =  document.getElementById('new_question_priority_id').value;
    if (priority == null){
        priority = 0;
    }
    if (content != "") {
        const data = {content:content, priority:priority, owner:dm.user, status:"open"};
        $.post(API_ADD_QUESTION, data,
            function(returnedData){
                location.reload();
                console.log(returnedData);
            }).fail(function(){
            console.log("error");
        });
    }
}

function logOutUser(username){
    $.post(API_LOGOUT,{ username: username },
        function(data, status){
            if (data) {
                window.location.reload();
            }
            else {
                console.log("Error. status code: , ", status);
            }
        });

}


