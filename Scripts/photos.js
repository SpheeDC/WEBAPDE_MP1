var photos = [];
var counter = 0;

function loadPhotos() {
    // get all photos first from the fake server and store it in a local JSON array
    $.ajax({
        "url": root + '/photos',
        "method": 'GET'
    }).then(function(data) {
        console.log("I passed thru here.");
        photos = data;
    });

    var photoc = document.getElementById('photocontainer');
    // place in the first 10 photos in each specified div .class
    for (var i = 1; i <= 10; i++) {
        var newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'pic');
        var img = document.createElement('img');
        img.src = photos[i - 1]['thumbnailUrl'];
        newdiv.appendChild(img);
        photoc.appendChild(newdiv);
    }

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
        var photoc = document.getElementById('photocontainer');
        for (var i = 1; i <= 10; i++) {
            var newdiv = document.createElement('div');
            newdiv.setAttribute('class', 'pic');
            var img = document.createElement('img');
            img.src = 'Images/picture-placeholder.png';
            newdiv.appendChild(img);
            photoc.appendChild(newdiv);
        }

        counter += 10;
    }
}

function getAllPhotosFrom(albumId) {
    $.ajax({
        "url": root + '/albums' + albumId + '/photos',
        "method": 'GET'
    }).then(function(data) {
        return data;
    })
}