$(document).ready ( function() {
    function fill_news() {
        var url = "https://lenta.ru/rss/top7";
        url = 'https://cors-anywhere.herokuapp.com/' + url;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var items = xhr.responseXML.querySelectorAll('item > title');
                if (items.length > 0) {
                    var news = "";

                    // Пусть новостей будет всегда 5
                    for (var i = 0; i < 5; i++) {
                        var text = items[i].textContent;

                        if (i === 0 || i === 4) {
                            news += "<div class='lightgray'>" + text + "</div>";

                        } else if (i === 1 || i === 3) {
                            news += "<div class='gray'>" + text + "</div>";

                        } else {
                            news += "<div class='black'>" + text + "</div>";
                        }

                        news += "<hr>";
                    }

                    document.querySelector('#newsblock').innerHTML = news;
                }
            }
        };

        xhr.send(null);
        setTimeout("fill_news()", 1800000);
    }

    fill_news();
});