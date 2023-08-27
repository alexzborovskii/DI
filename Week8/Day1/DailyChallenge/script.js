//1
class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
//2
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

//3
const newVideo1 = new Video('Dogs playing', 'Good Boy', 123);
newVideo1.watch()
//4
const newVideo2 = new Video('Dogs barking', "Loud boy", 323);
newVideo2.watch()

const videoArray = [
    {
        title: "Title 123",
        uploader: "Uloader 1",
        tile: 123
    },
    
    {
        title: "Title 234",
        uploader: "Uloader 2",
        tile: 234
    },
    {
        title: "Title 345",
        uploader: "Uloader 3",
        tile: 345
    },
    {
        title: "Title 456",
        uploader: "Uloader 4",
        tile: 456
    },
    {
        title: "Title 567",
        uploader: "Uloader 5",
        tile: 567
    },

] 

let videos = []

for (let obj of videoArray) {
    const newVideo = new Video(obj.tile, obj.uploader, obj.time);
    videos.push(newVideo)
}

for (let obj of videos) {
    obj.watch()
}