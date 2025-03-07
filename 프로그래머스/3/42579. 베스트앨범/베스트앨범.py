def solution(genres, plays):
    genre_play = {}
    genre_song = {}
    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        genre_play[genre] = genre_play.get(genre, 0) + play
        genre_song.setdefault(genre, []).append((i, play))
    
    answer = []
    sorted_genres = sorted(genre_play.items(), key=lambda x: x[1], reverse=True)
    
    for genre, _ in sorted_genres:
        sorted_songs = sorted(genre_song[genre], key=lambda x: (-x[1], x[0]))
        answer.extend([idx for idx, _ in sorted_songs[:2]])
    
    return answer