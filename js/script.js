
let app = angular.module('homepage', []);

app.controller('scriptController', function($scope)
{
    let links =
    [
        {
            name: "AM",
            items:
            [
                ["Slack", "http://antmicro.slack.com"],
                ["Redmine", "https://dev.antmicro.com/"]
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
            name: "Social",
            items:
            [
                ["Prontonmail", "https://mail.protonmail.com/login"],
                ["Gmail", "https://mail.google.com/"],
                ["LinkedIn", "https://www.linkedin.com/in/craviee/"],
                ["Github", "https://github.com/"],
                ["RadioAnão", "https://www.dubtrack.fm/join/radioanao"]
            ]
        },

        {
            name: "Stuff",
            items:
            [
                ["Saco Cheio TV", "https://www.sacocheio.tv/login.php"],
                ["Library Genesis", "http://gen.lib.rus.ec/"],
                ["Pomodoro", "https://tomato-timer.com/"],
                ["DrawIO", "https://www.draw.io/"],
                ["YTMP3","https://ytmp3.cc/"]        
            ]
        },

    ];
    $scope.links = links;
});
