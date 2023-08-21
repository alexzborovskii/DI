function getvalues(event) {
    event.preventDefault();

    const noun = document.getElementById("noun").value;
    const adjective = document.getElementById("adjective").value;
    const person = document.getElementById("person").value;
    const verb = document.getElementById("verb").value;
    const place = document.getElementById("place").value;

    const storySpan = document.getElementById("story");

    if (noun != "" && adjective != "" && person != "" && verb != "" && place != "") {
        storySpan.innerText = writeStory(noun, adjective, person, verb, place);
    } else {
        storySpan.innerText = "";
        alert("All fields should be filled!");
    }

}

function writeStory(noun, adjective, person, verb, place) {
    return `${noun} is very ${adjective}. ${noun} hates  when ${person} ${verb}s in ${place}`;
}





