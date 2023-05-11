function deleteArticle1() {

    const response = confirm("Are you sure to delete this article?");

    if (response) {

        const box = document.getElementById('par1');
        box.addEventListener('click', () => {
            box.remove();
        });
        console.log("Ok was pressed");

    } else {
        console.log("Cancel was pressed");
    }
}

function deleteArticle2() {

    const response = confirm("Are you sure to delete this article?");

    if (response) {

        const box = document.getElementById('par2');
        box.addEventListener('click', () => {
            box.remove();
        });
        console.log("Ok was pressed");

    } else {
        console.log("Cancel was pressed");
    }
}

function deleteArticle3() {

    const response = confirm("Are you sure to delete this article?");

    if (response) {

        const box = document.getElementById('par3');
        box.addEventListener('click', () => {
            box.remove();
        });
        console.log("Ok was pressed");

    } else {
        console.log("Cancel was pressed");
    }
}