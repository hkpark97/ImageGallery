(function () {
    "use strict";

    const xhr = new XMLHttpRequest();

    xhr.onload = function loadFile () {
        const obj = JSON.parse(this.responseText);
        var index = 0;

        $("#nextBtn").click(nextImage);
        $("#previousBtn").click(previousImage);
        $("#updateBtn").click(updateImage);

        function nextImage() {
            if (index >= obj.length - 1) {
                index = 0;
            } else {
                index++;
            }
            changePic();
        }

        function previousImage() {
            if (index <= 0) {
                index = obj.length - 1;
            } else {
                index--;
            }
            changePic();
        }

        function updateImage() {
            index = 0;
            changePic();
        }

        function changePic() {
            var srcImg = "<img src='" + obj[index].url + "'>";
            $("#content").hide().html(srcImg).fadeIn("slow");
        }

        changePic();
        setInterval(nextImage, obj[index].time);
    };

    xhr.open('GET', 'img.txt');
    xhr.send();

})();
