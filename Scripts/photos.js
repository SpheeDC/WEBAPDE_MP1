
function loadPhotos() {

}
function viewMorePhotos() {

}

function getAllPhotosOf(albumId) {
    $.ajax({
        "url": root + '/albums' + albumId + '/photos',
        "method": 'GET'
    }).then(function(data) {
        return data;
    })
}