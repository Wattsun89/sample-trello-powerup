console.log("Sample Trello PowerUp -- Hello World");

var GRAY_ICON = "https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg";

var onBtnClick = function(t,opts) {
    console.log("Click");
}

TrelloPowerUp.initialize({
    "card-badges": function(t,opts) {
        return t.card("all")
        .then(function(card) {
            var date = new Date();

            console.log(card);
            return [{
                text: date.toDateString(card.dateLastActivity),
                color: "blue"
            }, {
                text: card.idShort,
                color: "green"
            }];
        });
    },
    "card-buttons": function(t,opts) {
        return [{
            icon: GRAY_ICON,
            text: "Sample Button",
            callback: onBtnClick,
            condition: "edit"
        }, {
            icon: GRAY_ICON,
            text: "Just a URL",
            condition: "always",
            url: "https://developer.atlassian.com/cloud/trello",
            target: "Trello Developer Site"
        }];
    }
}),{
    appKey: ""
};