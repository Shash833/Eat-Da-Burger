$(function () {

    //When user clicks 'devour' button, retrieve id value and update database through PUT request
    $(".devourButton").on("click", function (event) {
        let chosenId = { id: parseInt($(this).data("id")) };
        $.ajax("/api/burgers/" + chosenId.id, {
            type: "PUT",
            data: chosenId.id
        }).then(
            function () {
                console.log("Burger has been devoured");
                location.reload();
            }
        );
    });

    //When user submits new Burger, create new entry in database through POST request
    $("form").on("submit", function (event) {
        event.preventDefault();
        const newBurger = {
            burgerName: $("#newBurger").val().trim()
        }
        if (newBurger.burgerName) {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("New burger added");
                    location.reload();
                }
            );
        }
        else {
            location.reload()
        }

    });
})