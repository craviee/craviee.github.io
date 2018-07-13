
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
                ["RFD", "http://sistemas.ihm.com.br/"]
            ]
        },

        {
            name: "News",
            items:
            [
                ["Arch Linux", "http://archlinux.org"],
                ["G1", "http://g1.globo.com/index.html"],
                ["G1 Mundo", "http://g1.globo.com/mundo/index.html"],
                ["G1 Tecnologia", "http://g1.globo.com/tecnologia/index.html"],
                ["Olhar Digital", "http://olhardigital.uol.com.br/home"],
                ["TechTudo", "http://www.techtudo.com.br/"],
                ["Inovacao Tecnologica", "http://www.inovacaotecnologica.com.br/index.php"],
                ["Info", "http://exame.abril.com.br/tecnologia/"],
                ["Clube do Hardware", "http://www.clubedohardware.com.br/"],
                ["Guia do PC", "http://www.guiadopc.com.br/"],
                ["DistroWatch", "http://distrowatch.com/"]
            ]
        },

        {
            name: "Social",
            items:
            [
                ["Gmail", "https://mail.google.com/"],
                ["Skype", "https://web.skype.com/"],
                ["Messenger", "https://www.messenger.com/"],
                ["LinkedIn", "https://www.linkedin.com/feed/"],
                ["RadioAnão", "https://www.dubtrack.fm/join/radioanao"]
            ]
        }
    ];
    $scope.links = links;
});
