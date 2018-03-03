function deleteAllTweets() {
    
    var f = function() {
        try {
            window.scrollTo(0, document.body.scrollHeight);
            document.querySelector('.js-actionDelete').click();
            document.querySelector('.delete-action').click();
        } catch (err) {}
    }

    setInterval(f, 2000);
}


function undoReTweet() { //TODO
    
    var f = function() {
        try {
            $('.tweet .ProfileTweet-actionButtonUndo').css('display','inline-block').click();
            window.scrollTo(0,document.body.scrollHeight);
        } catch (err) { console.log(err) }
    }
    
    setInterval(f, 5000);
}
