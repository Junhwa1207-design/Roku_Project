export default {
    name: "TheMovieThumbnail",

    props: ["movie"],

    // template: `
    // <div class="movie-thumb">
    //     <img :src='"images/" + movie.movies_cover' alt="movie thumb">
    // </div>
    // `
        template: `
    <div class="movie-thumb">
        <img @click="loadPlayer(movie)" :src='"images/" + movie.movies_cover' alt="movie thumb">
    </div>
    `,
    methods: {
        loadPlayer(movie) {
            debugger;
        }
    }
}