const URL = window.location.href.slice(7);

function facebookButtonClick() {
    var fbShare = "https://www.facebook.com/sharer/sharer.php?u="
    window.open(fbShare + URL, "_blank");
}

function twitterButtonClick() {
    var fbShare = "https://twitter.com/intent/tweet?url"
    window.open(fbShare + URL, "_blank");
}

function linkedinButtonClick() {
    var fbShare = "https://www.linkedin.com/shareArticle?url"
    window.open(fbShare + URL, "_blank");
}

function pinterestButtonClick() {
    var fbShare = "https://www.pinterest.com/pin/create/button?url"
    window.open(fbShare + URL, "_blank");
}