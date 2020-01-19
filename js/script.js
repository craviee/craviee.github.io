
let app = angular.module('homepage', []);

app.controller('scriptController', function($scope)
{
    let links =
    [
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
                ["Github", "https://github.com/"]
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
                ["YTMP3","https://ytmp3.cc/"],
                ["Warcraft 3 Store","https://us.shop.battle.net/pt-br/family/warcraft-iii"]
            ]
        },

    ];
    $scope.links = links;
});
