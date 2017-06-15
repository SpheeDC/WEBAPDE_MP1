/**
 * Created by paoloandreiseril on 6/10/17.
 */
var root = 'https://jsonplaceholder.typicode.com';
// users JSON array should contain all info from /users JSON objects
var users = [];
// contains id of post, user who made the post, and the content
var posts = [];

function about() {
    alert('We are the HTML, CSS, Javascript Developers and Swift soon. :)\nWelcome to the Fakes.');
}

function loadData() {
    getAllUsers();

    for (var i = 1; i <= 9; i++) {
        document.getElementById('name' + i).innerHTML = users[i - 1].attr("username");
    }

    // set up the posts
}
function getAllUsers() {
    $.ajax({
        url: root + '/users/',
        method: 'GET'
    }).then(function(data) {
        users = data;
    });
}

// for the profile of each user
function getPostsOfUser(id) {
    $.ajax({
        url: root + '/users/' + id + '/posts',
        method: 'GET'
    }).then(function (data) {

    })
}

// should make use of document.createElement(), and element.setAttribute()
function viewMorePosts() {

}

function hideBackground() {
    document.getElementById('grayHideBackground').style.display = "block";
    document.getElementById('listBtn').style.color = "white";
}

/*function showBackground() {
    document.getElementById('grayHideBackground').style.display = "none";
    document.getElementById('listBtn').style.color = "black";
}*/

/*function goToProfile(userID) {
    console.log("I'm clicked.");
}
*/



