//Mine is sitll adding the space after the alert - fix this later
function addToDo(){
    let text = $("#txt-task").val();

    let toDo={
        text:text,
        user:"Michael"
    };

    displayToDo(toDo.text);
    if (text === ""){
            alert("Text field is empty");   
            return false;
    }else{
        // displayToDo();
        $("#txt-task").val("");
    }
    $("#txt-task").focus();
}

function displayToDo(toDo){
    let li = `<li>${toDo} <button type="button" class="btn btn-danger">Move</button></li>`;
    $("#pending-list").append(li);
}

function addToFinished(){

    $("#finished-list").append($("#pending-list"));
   
}

function init(){

// sense the events here - click
    $(".btn-primary").click(addToDo);
    $("#txt-task").keypress(function(e){
        if(e.key === "Enter"){
            addToDo();
        }
    });
    $(".btn-danger").click(addToFinished);

}

window.onload=init;

