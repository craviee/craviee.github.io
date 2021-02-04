
let app = angular.module('homepage', []);

app.controller('scriptController', function($scope)
{
    let links =
    [
        {
            name: "Work",
            items:
            [
                ["Outlook", "https://outlook.office.com/mail/inbox"],
                ["MS Teams", "https://teams.microsoft.com/"],
                ["IHM Systems", "http://sistemas.ihm.com.br"],
                ["Azure DevOps","https://dev.azure.com/"],
                ["GlassFrog","https://app.glassfrog.com/"],
                ["SGI", "http://sgi.ihm.com.br"]
            ]
        },
        {
            name: "Social",
            items:
            [
                ["Prontonmail", "https://mail.protonmail.com/login"],
                ["Whatsapp", "https://web.whatsapp.com/"],
                ["Discord", "https://discord.com/login"]
            ]
        },
        {
            name: "Stuff",
            items:
            [
                ["Saco Cheio TV", "https://www.sacocheio.tv/login.php"],
                ["Radio Garden","http://radio.garden/"],
                ["Library Genesis", "http://gen.lib.rus.ec/"],
                ["Pomodoro", "https://tomato-timer.com/"],
                ["DrawIO", "https://www.draw.io/"],
                ["YTMP3","https://ytmp3.cc/"],   
                ["Free Games", "https://isthereanydeal.com/specials/#/filter:&giveaway,&active"]
            ]
        },
    ];
    $scope.links = links;
});
