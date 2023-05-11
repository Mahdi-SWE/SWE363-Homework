
function likeArticle() {
    var countElement = document.getElementById("count");
    var currentCount = parseInt(countElement.innerText);
    var newCount = currentCount + 1;
    countElement.innerText = newCount;
}