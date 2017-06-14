/**
 * Created by paoloandreiseril on 6/10/17.
 */
// id is the namedCounter
var root = 'https://jsonplaceholder.typicode.com';
// users JSON array should contain all info from /users JSON objects
var users = [];
// contains id of post, user who made the post, and the content
var posts = [];

function loadData() {
    for (var i = 1; i <= 10; i++) {
        getUser(i);
    }
    for (var j = 1; j <= 100; j++) {
        getPost(j);
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

function getPost(id) {
    $.ajax({
        url: root + '/posts/' + id,
        method: 'GET'
    }).then(function (data) {
        /*for (var i = 0; i < users.length; i++) {
                // return the JSON object of the user, title and content
            }
        }*/
        posts.push(data);
    })
}

function viewMorePosts() {
    /* Format:
     <br>
        <article>
            <br>
            <div class="profilePic">


            </div>

        </article>
     <br>
     */
}

function hideBackground() {
    document.getElementById('grayHideBackground').style.display = "block";
    document.getElementById('listBtn').style.color = "white";
}

/*function showBackground() {
    document.getElementById('grayHideBackground').style.display = "none";
    document.getElementById('listBtn').style.color = "black";
}*/

function goToProfile(userID) {
    console.log("I'm clicked.");
}



