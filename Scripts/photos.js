var counter = 0;
var root = 'https://jsonplaceholder.typicode.com';
function loadPhotos() {
    // get all photos first from the fake server and store it in a local JSON array
    $.ajax({
        url: root + '/photos',
        method: 'GET'
    }).then(function(data) {
        console.log("I passed thru here.");
        var photoc = document.getElementById('photocontainer');
        // place in the first 10 photos in each specified div .class
        for (var i = 0; i < 10; i++) {
            var newdiv = document.createElement('div');
            newdiv.setAttribute('class', 'pic');
            var image = document.createElement('img');
            image.src = data[i]['thumbnailUrl'];

            // add hover on the newdiv

            $(newdiv).hover(function () {
                $(this).css("cursor", "pointer");
               $(this).css("-webkit-filter", "grayscale(75%)");
               $(this).css("filter", "grayscale(75%)");
            }, function () {
                $(this).css("-webkit-filter", "grayscale(0%)");
                $(this).css("filter", "grayscale(0%)");
            });
            newdiv.appendChild(image);
            photoc.appendChild(newdiv);
        }
    });
    counter += 10;
}
function viewMorePhotos() {
    // place in the next 9 photos to view
    /* <div class="pic">
            <img src="Images/picture-placeholder.png">
        </div> 
    */
    if (counter === 5000) {
        alert("No more photos to show.");
    }
    else {
        $.ajax({
            url: root + '/photos',
            method: 'GET'
        }).then(function(data) {
            console.log("I passed thru here.");
            var photoc = document.getElementById('photocontainer');
            // place in the next 20 photos in each specified div .class
            for (var i = counter; i < counter + 20; i++) {
                var newdiv = document.createElement('div');
                newdiv.setAttribute('class', 'pic');
                var image = document.createElement('img');
                image.src = data[i]['thumbnailUrl'];

                // add hover and also a pointer cursor on the image

                $(image).hover(function () {
                    $(this).css("cursor", "pointer");
                    $(this).css("-webkit-filter", "grayscale(100%)");
                    $(this).css("filter", "grayscale(100%)");
                }, function () {
                    $(this).css("-webkit-filter", "grayscale(0%)");
                    $(this).css("filter", "grayscale(0%)");
                });
                newdiv.appendChild(image);
                photoc.appendChild(newdiv);
            }
        });
        counter += 20;
    }
}

function getAlbumName(albumId) {
    $.ajax({
        url: root + "/albums/" + albumId,
        method: 'GET'
    }).then(function (data) {

    })
}