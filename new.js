document.addEventListener('DOMContentLoaded', function initForm() {
    new FroalaEditor('#content')
});

function validate() {

    var context = document.getElementById("content").value

    if (context == "") {
        alert("please add context")
    }
}