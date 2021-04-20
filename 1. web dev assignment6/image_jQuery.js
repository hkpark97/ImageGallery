$(document).ready(function () {
    loadAjaxData();
});

function loadAjaxData() {
    $.ajax({
        dataType: 'json',
        url: 'image.json',
        success: function (obj) {
            var index = 0;

            $("#previousBtn").click(previousImage);
            $("#nextBtn").click(nextImage);
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
        }
    });
};