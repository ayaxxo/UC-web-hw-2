

mybutton = document.getElementById("myBtn");
function topFunction() {
    document.documentElement.scrollTop = 0; }

    let subscribe = prompt("هل تريد الاشتراك في منصتي (رد بنعم او لا)")
    if (subscribe=="نعم"){
        alert("مرحباً بك في منصتي 👋");
    }
    else if (subscribe =="لا"){
        alert("حسناً، عد لنا اذا غيرت رايك ☹️")
    }