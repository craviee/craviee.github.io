
let app = angular.module('homepage', []);

app.controller('scriptController', function($scope)
{
    let links =
    [
        {
            name: "IHM",
            items:
            [
                ["E-mail", "https://outlook.office.com/"],
                ["RFD", "http://sistemas.ihm.com.br/"],
                ["Slack", "https://automation-ihm.slack.com/"]
            ]
        },
        
        {
            name: "PUT",
            items:
            [
                ["E-mail", "https://poczta.student.put.poznan.pl/"],
                ["eLogin", "https://estudent2.put.poznan.pl"],
                ["Moodle", "https://moodle.put.poznan.pl/"]
            ]
        },

        {
            name: "News",
            items:
            [
                ["Feedly", "https://feedly.com"]
            ]
        },

        {
            name: "Social",
            items:
            [
                ["Habitica", "https://habitica.com/"],
                ["Gmail", "https://mail.google.com/"],
                ["Prontonmail", "https://mail.protonmail.com/login"],
                ["Skype", "https://web.skype.com/"],
                ["Messenger", "https://www.messenger.com/"],
                ["LinkedIn", "https://www.linkedin.com/feed/"],
                ["RadioAnão", "https://www.dubtrack.fm/join/radioanao"]
            ]
        },

        {
            name: "Stuff",
            items:
            [
                ["Saco Cheio Podcast", "http://www.arthurpetry.com/podcastgen/"],
                ["Library Genesis", "http://gen.lib.rus.ec/"],
                ["Pomodoro", "https://tomato-timer.com/"],
                ["DrawIO", "https://www.draw.io/"],
                ["IsThereAnyDeal?","https://isthereanydeal.com/"]
            ]
        },

    ];
    $scope.links = links;
});
