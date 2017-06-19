/**
 * Created by paoloandreiseril on 6/10/17.
 */
var root = 'https://jsonplaceholder.typicode.com';
var users = [];
var posts = [];
var counter = 0;

function loadData() {
    "use strict";
    getAllUsers();
    getAllPosts();

    // show only the first 10 posts
    for (var i = 0; i <= 9; i++) {
        $("#title" + i).text(posts[i]['title']);
        var newuser = getUser(posts[i]['userId']);
        $("#post" + i).text(posts[i]['body']);
    }
    counter += 10;
    console.log(counter);
}
function getAllUsers() {
    "use strict";
    $.ajax({
        url: root + '/users/',
        method: 'GET'
    }).then(function(data) {
        users = data;
    });
}

function getAllPosts() {
    $.ajax({
        url: root + '/posts/',
        method: 'GET'
    }).then(function (data) {
        posts = data;
    })
}

function getUser(userId) {
    // function body to follow
    for (var i = 0; i < users.length; i++) {
        if (users[i]['id'] === userId) {
            return users[i];
        }
    }
    return null;
}
// for the profile of each user
function getPostsOfUser(id) {
    $.ajax({
        url: root + '/users/' + id + '/posts',
        method: 'GET'
    }).then(function (data) {
        // function body to follow
    })
}

// should make use of document.createElement(), and element.setAttribute()
function viewMorePosts() {
    if (counter === 100) {
        alert("No more posts to show.");
    }
    else {
        
    }
}
/*function goToProfile(userID) {
    console.log("I'm clicked.");
}
*/



