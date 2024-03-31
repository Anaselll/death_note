
let music
let musicpaper
function play(){
    music=new Audio("deathnote.mp3")
    musicpaper=new Audio("paper.mp3")
    music.play()
    musicpaper.play()
}
function pause() {
    music.pause()
    musicpaper.pause()

}