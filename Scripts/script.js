/**
 * Created by paoloandreiseril on 6/10/17.
 */
var root = 'https://jsonplaceholder.typicode.com';
var users = [];
var posts = [];
var counter = 0;
function loadData() {
    getAllUsers();
    getAllPosts();

    var postSection = document.getElementById('postSection');

    /*
     <div class="leftColumn">
     <br>
     <div class="profilePic">
     </div>
     <div class="content">
     <p class="username">
     username
     </p>
     <p class="title">
     title
     </p>
     <p class="actualPost">
     akjuhyb ijuygtv uhy6tfr uhygb aasdnhb
     </p>
     </div>
     </div>
     */
    // show only the first 10 posts
    for (var i = 0; i <= 9; i++) {

        // get all the needed content

        console.log(i);
        console.log(posts[i]);
        var mainContent = posts[i]['body'];
        var userIdP = getUser(posts[i]['userId']);
        var nameOfUser = document.createTextNode(userIdP);
        var realTitle = document.createTextNode(String(posts[i]["title"]));
        var contentReal = document.createTextNode(mainContent);

        var newdiv = document.createElement('div');
        newdiv.setAttribute('class', 'leftColumn');
        newdiv.appendChild(document.createElement('br'));
        var profileImageDiv = document.createElement('div');
        profileImageDiv.setAttribute('class', 'profilePic');

        var contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'content');

        var usernamep = document.createElement('p');
        usernamep.setAttribute('class', 'username');
        usernamep.appendChild(nameOfUser);

        var titlep = document.createElement('p');
        titlep.setAttribute('class', 'title');
        titlep.appendChild(realTitle);

        var actualPostp = document.createElement('p');
        actualPostp.setAttribute('class', 'actualPost');
        actualPostp.appendChild(contentReal);

        contentDiv.appendChild(usernamep);
        contentDiv.appendChild(titlep);
        contentDiv.appendChild(actualPostp);

        postSection.appendChild(contentDiv);
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
    for (var i = 0; i < users.length; i++) {
        if (users[i]['id'] === userId) {
            return users[i]['username'];
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



