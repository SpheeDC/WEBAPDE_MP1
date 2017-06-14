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
    for (var i = 1; i <= 10; i++) {
        getUser(i);
    }
    for (var j = 1; j <= 10; j++) {
        getPostsOfUser(j);
    }
}
function getUser(id) {
    $.ajax({
        url: root + '/users/' + id,
        method: 'GET'
    }).then(function(data) {
        users.push(data);
    });
}

function getPostsOfUser(id) {
    $.ajax({
        url: root + '/users/' + id + '/posts',
        method: 'GET'
    }).then(function (data) {
        posts.push({
            "userId": "Hello", // not actual userId :)
            "userPosts": data
        });
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



