/**
 * Created by paoloandreiseril on 6/15/17.
 */

function loadAlbums() {
    $.ajax({
        "url": root + '/albums',
        "method": 'GET'
    }).then(function(data) {
        console.log("I passed thru here.");
        for (var i = 0; i <= 10; i++) {
            // create the divs


        }
    })
}

function getAlbumsBy(userId) {

}

function getUser() {

}

