/**
 * Created by paoloandreiseril on 6/10/17.
 */
var root = 'https://jsonplaceholder.typicode.com';
// to keep track of the number of posts that are currently displayed
var counter = 0;

function loadData() {
    loadPosts();
    // show only the first 10 posts
    counter += 10;
    console.log(counter);
}
function loadPosts() {
    $.ajax({
        url: root + '/posts/',
        method: 'GET'
    }).then(function (data) {
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
        var postSectionP = document.getElementById('postSection');
        // show the first 10 posts only
        for (var i = 0; i <= 9; i++) {

            var name = $.ajax({
                url: root + "/users/" + data[i]['userId'],
                method: 'GET'
            }).then(function (e) {
                //noinspection JSAnnotator
                this = e.username;
            });
            var mainContent = data[i]['body'];
            var mainTitle = data[i]['title'];

            var nameOfUser = document.createTextNode("@" + name);
            var realTitle = document.createTextNode(mainTitle);
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

            newdiv.appendChild(profileImageDiv);
            newdiv.appendChild(contentDiv);

            postSectionP.appendChild(newdiv);
            postSectionP.appendChild(document.createElement('br'));
        }
    });
}

function getUser(userId) {
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
        var postSectionP = document.getElementById('postSection');
        // show the first 10 posts only
        $.ajax({
            url: root + "/posts/",
            method: 'GET'
        }).then(function (data) {
            for (var i = counter; i < counter + counter; i++) {
                var mainContent = data[i]['body'];
                var mainTitle = data[i]['title'];

                var nameOfUser = document.createTextNode("@" + getUser(data[i]["userId"]));
                var realTitle = document.createTextNode(mainTitle);
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

                newdiv.appendChild(profileImageDiv);
                newdiv.appendChild(contentDiv);

                postSectionP.appendChild(newdiv);
                postSectionP.appendChild(document.createElement('br'));
            }
        });
        counter += 10;
    }
}
/*function goToProfile(userID) {
 console.log("I'm clicked.");
 }
 */



