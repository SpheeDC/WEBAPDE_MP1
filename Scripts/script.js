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
        var postSectionP = document.getElementById('postSection');
        for (var i = 0; i < 10; i++) {

            var usernameP = getUser(data[i]['userId'], getUsername);
            var mainContent = data[i]['body'];
            var mainTitle = data[i]['title'];

            var nameOfUser = document.createTextNode("@" + usernameP);
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

            $(usernamep).hover(function () {
                $(this).css("cursor", "pointer");
                $(this).css("color", "green");
                $(this).click(function () {
                    window.location.href = "userprofile.html";
                    //loadUserProfile(data[i]);
                });
            }, function () {
                $(this).css("color", "white");
            });

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

function getUsername(username) {
    return username;
}
function getUser(userId, callback) {
    console.log(userId);
    $.ajax({
        url: root + "/users/" + userId,
        method: 'GET'
    }).then(function (data) {
        callback(data['username']);
    })
}
function viewMorePosts() {
    if (counter === 100) {
        alert("No more posts to show.");
    }
    else {
        var postSectionP = document.getElementById('postSection');
        // show the next 10 posts
        $.ajax({
            url: root + "/posts/",
            method: 'GET'
        }).then(function (data) {
            for (var i = counter; i < counter + 10; i++) {

                var usernameP = getUser(data[i]['userId'], getUsername);
                var mainContent = data[i]['body'];
                var mainTitle = data[i]['title'];

                var nameOfUser = document.createTextNode("@" + usernameP);
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

                $(usernamep).hover(function () {
                    $(this).css("cursor", "pointer");
                    $(this).css("color", "green");
                    $(this).click(function () {
                        window.location.href = "userprofile.html";
                        //loadUserProfile(data[i]);
                    });
                }, function () {
                    $(this).css("color", "white");
                });

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



