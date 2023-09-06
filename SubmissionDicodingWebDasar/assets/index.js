let card = document.querySelectorAll('.card');
for (cards of card) {
    cards.addEventListener('mouseover', function (event) {
        if (event.target.id === "pubg") {
            event.target.setAttribute("src", "assets/image/pubg-player.jpg");
            return;
        } else if (event.target.id === "ml") {
            event.target.setAttribute("src", "assets/image/ml-player.jpg");
            return;
        }
        else if (event.target.id === "ff") {
            event.target.setAttribute("src", "assets/image/ff-player.jpg");
            return;
        }
        else if (event.target.id === "others") {
            event.target.setAttribute("src", "assets/image/other-ba.jpg");
            return;
        }
    });

    cards.addEventListener('mouseout', function (event) {
        if (event.target.id === "pubg") {
            event.target.setAttribute("src", "assets/image/pubg.jpeg");
            return;
        }
        if (event.target.id === "ml") {
            event.target.setAttribute("src", "assets/image/ml.jpeg");
            return;
        }
        if (event.target.id === "ff") {
            event.target.setAttribute("src", "assets/image/ff.jpeg");
            return;
        }
        if (event.target.id === "others") {
            event.target.setAttribute("src", "assets/image/others.jpeg");
            return;
        }
    });
}