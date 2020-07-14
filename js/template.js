console.log("Last Updated Trello PowerUp -- Hello World");

var DATE_ICON = "./assets/img/calendar-and-clock.png";

// var onBtnClick = function(t,opts) {
//     console.log(t);
//     console.log(opts);
//     console.log("Click");
// }

TrelloPowerUp.initialize({
    "card-badges": function(t,opts) {
        return t.card("all")
        .then(function(card) {
            var date = new Date(card.dateLastActivity);
            console.log(card);
            return [{
                text: `Last Updated: ${date.toLocaleDateString()}`,
                color: "sky",
                icon: DATE_ICON
            }];
        });
    },
    // "card-buttons": function(t,opts) {
    //     return [{
    //         icon: GRAY_ICON,
    //         text: "Sample Button",
    //         callback: onBtnClick,
    //         condition: "edit"
    //     }, {
    //         icon: GRAY_ICON,
    //         text: "Just a URL",
    //         condition: "always",
    //         url: "https://developer.atlassian.com/cloud/trello",
    //         target: "Trello Developer Site"
    //     }];
    // }
}),{
    appKey: ""
};