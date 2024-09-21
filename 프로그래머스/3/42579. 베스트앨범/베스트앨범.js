function solution(genres, plays) {
    const answer = [];
    const genresObj = {};
    const playsObj = {};
    
    for(let i = 0; i < genres.length; i++){
        if(genresObj[genres[i]] !== undefined) {
            genresObj[genres[i]] += plays[i]
            playsObj[genres[i]].push([plays[i], i])
        } else {
            genresObj[genres[i]] = plays[i]
            playsObj[genres[i]] = [[plays[i], i]]
        }
    }
    const sortedGenres = Object.keys(genresObj).sort((a, b) => genresObj[b] - genresObj[a]);
    for(const genre of sortedGenres){
        const sortedSongs = playsObj[genre].sort((a, b) => {
            return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
        })
        answer.push(...sortedSongs.slice(0, 2).map(song => song[1]))
    }
    return answer
}