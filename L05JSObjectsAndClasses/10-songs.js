function createSong(input) {

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    const typeToDisplay = input.pop();
    const [_, ...songs] = input;

    const result = songs.map(songAsText => {
        const [type, name, time] = songAsText.split("_");
        const song = new Song(type, name, time);

        return song;
    })
        .filter((song) => {
            if (typeToDisplay === "all") {
                return song;
            }

            return song.type === typeToDisplay;
        })
        .map((song) => song.name)
        .join("\n");

    console.log(result);
}

createSong([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);