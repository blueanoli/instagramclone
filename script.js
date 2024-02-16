let posts = [
    {
        'author': 'Liz',
        'userimg': './userimg/ilona.jpeg',
        'date': '2 days ago',
        'description': 'Boston is safe again! Managed to get rid of the ghost.',
        'image': './img/ghost.jpg',
        'likes': '68',
        'like-img': './icons/like-empty.png',
        'comments': [
            {'username': 'impala67', 'comment': 'Great job, sweetie!'},
            {'username': 'Sam W.', 'comment': 'Why do you take pictures on the job?'},
            {'username': 'bobby_1955', 'comment': 'Proud of you!'}
        ],
        'location': 'Boston, MA',
    },
    {
        'author': 'impala67',
        'userimg': './userimg/dean.jpg',
        'date': '5 days ago',
        'description': 'Love me some pie! 🥧',
        'image': './img/pie.jpg',
        'likes': '1967',
        'like-img': './icons/like-empty.png',
        'comments':  [
            {'username': 'Roadhouse', 'comment': 'Looking delicious, Deano'},
            {'username': 'Sam W.', 'comment': 'You`re gonna get diabetes'},
            {'username': 'king.of.hell', 'comment': 'Hey Bestie! Call me!'}
        ],
        'location': 'Lebanon, KS',
    },
    {
        'author': 'Sam W.',
        'userimg': './userimg/sam.jpg',
        'date': '12 days ago',
        'description': 'Be careful in California. Witches are on the loose! 🧙‍♀️',
        'image': './img/hexbag.jpg',
        'likes': '123',
        'like-img': './icons/like-empty.png',
        'comments':  [
            {'username': 'impala67', 'comment': 'I fuckin hate witches'},
            {'username': 'Liz', 'comment': 'Eeewwwww'},
            {'username': 'king.of.hell', 'comment': 'Better than angels, moose'},
            {'username': 'djqualls', 'comment': 'OMG!'}
        ],
        'location': 'Stanford, CA',
    },
    {
        'author': 'king.of.hell',
        'userimg': './userimg/crowley.jpg',
        'date': '66 days ago',
        'description': 'Lookin for a new tailor 👀',
        'image': './img/tailor.jpg',
        'likes': '666',
        'like-img': './icons/like-empty.png',
        'comments':  [
            {'username': 'wicked-witch', 'comment': 'Oh, darling'},
            {'username': 'angel-of-the-lord', 'comment': 'Did he get eaten again?'},
            {'username': 'impala67', 'comment': 'LOL'}
        ],
        'location': 'Hell',
    },
];

function loadContent() {
    document.getElementById('post-container');
    loadPosts();
}

function likePost(index) {
    if (posts[index]['like-img'] === './icons/like-empty.png') {
        posts[index]['like-img'] = './icons/like-full.png';
        posts[index]['likes']++;
    } else {
        posts[index]['like-img'] = './icons/like-empty.png';
        posts[index]['likes']--;
    }
    saveLike();
    loadPosts();
}

function saveLike(){
    let likeAsText = JSON.stringify(posts);
    localStorage.setItem('likes', likeAsText);
}

function loadLike(){
    let likeAsText = localStorage.getItem('likes');
    if (likeAsText) {
        posts = JSON.parse(likeAsText);
        loadPosts();
    }
}

window.onload = function() {
    loadLike();
    loadContent();
};

function postComment(postIndex) {
    let comment = document.getElementById(`input${postIndex}`).value;
    posts[postIndex]['comments'].push({'username': 'Liz', 'comment': comment});
    saveComment(postIndex);
    

    document.getElementsByClassName('top-comment')[postIndex].appendChild(document.createElement('p')).innerHTML += `
        <b>Liz:</b> ${comment}`;
    document.getElementById(`input${postIndex}`).value = '';   
    loadPosts();
}

function saveComment(postIndex) {
    let commentAsText = JSON.stringify(posts[postIndex]['comments']);
    localStorage.setItem(`comment${postIndex}`, commentAsText);
}

function loadComment(postIndex){
    let commentAsText = localStorage.getItem(`comment${postIndex}`);
    if (commentAsText) {
        posts[postIndex]['comments'] = JSON.parse(commentAsText);
    }
}