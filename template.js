function loadPosts() {
    document.getElementById('post-container').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
        let likeImgSrc = post['like-img'];

        loadComment(i);
        
        document.getElementById('post-container').innerHTML += /*html*/`
        <div class='main-container'>    
            <div class='post'> 
                <div class='post-header'> <!-- user, user-img, author, date, location -->
                    <div class='user'>
                        <img class='user-img' src=${post['userimg']} alt="user">
                        <h3>${post['author']}</h3>
                        <p>&bullet; ${post['date']}</p> 
                    </div>
                    <div class='post-options'>
                        <img class='icons' src='./icons/dots.png' alt="dots">
                    </div>    
                </div>
                <div class='post-img'>
                    <p> ${post['location']}</p>
                    <img src=${post['image']} alt="post">
                </div>
                <div class='interactions'> <!-- like, comment, share, save -->
                    <div class='interaction-buttons'>
                      <img class='icons' onclick='likePost(${i})' src='${likeImgSrc}' alt="like">
                      <img class='icons' src='./icons/comment.png' alt="comment">
                      <img class='icons' src='./icons/message.png' alt="share">  
                    </div>
                    <img class='icons' src='./icons/bookmark-empty.png' alt="save">
                </div>
                <p class='likes'> Liked by ${post['likes']}</p>
                <p class='description'> ${post['description']}</p>
            <div class='comments'> <!-- top-comment, comment-username, comments -->
                <div class='top-comment'>
                    ${post['comments'].map(commentObj => `
                    <p><b>${commentObj.username}:</b> ${commentObj.comment}</p>
                    `).join('')}
                </div>
                <div class='send-comment-section'>
                    <input id="input${i}" type="text" placeholder="Add a comment...">
                    <img onclick="postComment(${i})" class='icons' src='./icons/message.png' alt="send">
                </div>
            </div>
        </div>
            <div class='separator'></div>
    </div>`;
    }
}