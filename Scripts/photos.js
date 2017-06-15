var photos = [];

function loadPhotos() {
    // get all photos first from the fake server and store it in a local JSON array
    $.ajax({
        "url": root + '/photos',
        "method": 'GET'
    }).then(function(data) {
        console.log("I passed thru here.");
        photos = data;
    });

    var photoc = $("#photocontainer");
    // place in the first 9 photos in each specified div .class
    for (var i = 1; i <= 9; i++) {
        var img = $(document).createElement('img');
        img.src = photos[i - 1].thumbnailUrl;

        photoc.appendChild(img);
    }

}
function viewMorePhotos() {
    // place in the next 9 photos to view
}

function getAllPhotosFrom(albumId) {
    $.ajax({
        "url": root + '/albums' + albumId + '/photos',
        "method": 'GET'
    }).then(function(data) {
        return data;
    })
}