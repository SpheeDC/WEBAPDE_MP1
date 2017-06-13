/**
 * Created by paoloandreiseril on 6/10/17.
 */

var root = 'https://jsonplaceholder.typicode.com';
var users = [];

function loadData() {
    for (var i = 1; i <= 10; i++) {
        getUser(i);
        console.log(users[i - 1]);
        //var posts = [];
        //users[i - 1].posts = posts;
        for (var j = 1; j <= 100; j++) {

            var post = getPost(j);
            if (post.userId === users[i - 1].val('id')) {
                users[i].posts.push(post);
            }
        }
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
        /** @namespace data.userId */
        /** @namespace data.title */
        /** @namespace data.body */
        return {
            "userID": data.userId,
            "title": data.title,
            "post": data.body
        }
    });
}

function viewMorePosts() {
    //var postsSection = document.getElementById('posts');
    for (var i = 1; i <= 10; i++) {
        /*
         <br>
         <article>
         <br>
         <div class="profilePic">


         </div>

         </article>
         <br>
         */
    }
}

function hideBackground() {
    document.getElementById('grayHideBackground').style.display = "block";
    document.getElementById('listBtn').style.color = "white";
}

/*function showBackground() {
    document.getElementById('grayHideBackground').style.display = "none";
    document.getElementById('listBtn').style.color = "black";
}*/

function goToProfile() {
    console.log("I'm clicked.");
}



