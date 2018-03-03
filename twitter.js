function deleteAllTweets() {

    var f = function() {
        try {
            window.scrollTo(0, document.body.scrollHeight);
            document.querySelector('.js-actionDelete').click();
            document.querySelector('.delete-action').click();
        } catch (err) {}
    };

    setInterval(f, 2000);

}
