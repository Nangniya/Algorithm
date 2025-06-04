def solution(begin, target, words):
    if target not in words:
        return 0
    answer = [float('inf')]
    
    def is_movable(w1, w2):
        count = 0
        for i in range(len(w1)):
            if count > 1:
                return False
            if w1[i] != w2[i]:
                count += 1
        if count == 1:
            return True
    
    def dfs(cur_word, stepped_words):
        if cur_word == target:
            answer[0] = min(answer[0], len(stepped_words))
            return
        for word in words:
            if word not in stepped_words and is_movable(cur_word, word):
                stepped_words.append(word)
                dfs(word, stepped_words)
                stepped_words.pop()
    
    dfs(begin, [])
    return answer[0]