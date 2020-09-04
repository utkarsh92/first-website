function getOutput(value){
    var myHobbyDetails = [
    'There is a park right outside my house here in Jaipur. So Ive been playing badminton for a very long time. Looking forward to coming back to the campus and play with my friends :)',
    'I love watching sci-fi/triller/mystery genre. My personal favourites are Doctor Who, Dexter, Breaking Bad, Death Note, Demon Slayer and One Punch Man. HMU if we have something in common :p',
    'Our species has always looked up to the stars and wondered whats out there? The universe is so complex yet beautiful, and Im really fascinated by its working. Thats why I follow a lot of science/space news, trying to witness all the achievements of humanity, which I can in this lifetime...'
    ];
    var myHobbyImg = ['images/badminton.jpg','images/tvshow.jpg','images/space.jpg'];
    // console.log(myHobbyDetails[value])
    document.getElementById("content").innerHTML = myHobbyDetails[value];
    document.getElementById("content-img").src = myHobbyImg[value];
}

