function acmail() {
    document.getElementById('nook').removeAttribute("onclick");
    var audio = new Audio('../assets/mailmusic.mp3');
    var audio2 = new Audio('../assets/animal_crossing_mail.mp3');
    audio.play();
    function refreshData()
{
    x = 2;  // 2 Seconds

    document.getElementById('mail').src='../assets/mailon.png'
    audio2.play();

    setTimeout(refreshData, x*1000);
}

function refreshData2()
{
    x = 1.5;  // 1 Seconds

    document.getElementById('mail').src='../assets/mailoff.png'

    setTimeout(refreshData2, x*1000);
}


refreshData(); // execute function
refreshData2(); // execute function
}
