function sendTweet() {
    let tweetTitle = document.getElementById('title-input').value;
    let tweetBody = document.getElementById('body-input').value;
    
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById('status').innerHTML = "Success!";
        } else if(this.readyState != 4) {
            document.getElementById('status').innerHTML = "Loading...";
        } else {
            document.getElementById('status').innerHTML = "Something Went Wrong!";
        }
    }

    ajax.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(JSON.stringify(tweetData));
}

let tweetButton = document.getElementById('tweet-submit');
tweetButton.addEventListener('click', sendTweet);