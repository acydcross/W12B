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
            document.getElementById('status').innerHTML = "Sent!";
        } else if(this.readyState != 4) {
            document.getElementById('status').innerHTML = "Sending...";
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

function patchTweet() {
    let tweetTitle = document.getElementById('title-input').value;
    let tweetBody = document.getElementById('body-input').value;
    
    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.responseText));
        } else if(this.readyState != 4) {
            console.log("Patching...");;
        } else {
            console.log("Something Went Wrong!");
            console.log(this.status);
        }
    }

    ajax.open('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    ajax.send(JSON.stringify(tweetData));
}

patchTweet();

function deleteTweet() {
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        } else if(this.readyState != 4) {
            console.log('deleting...');
        } else {
            console.log('delete fails');
        }
    }

    ajax.open('DELETE', 'https://jsonplaceholder.typicode.com/posts/1', true);
    ajax.send();
}

deleteTweet();