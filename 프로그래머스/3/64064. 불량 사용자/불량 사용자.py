def solution(user_id, banned_id):
    answer_set = set()
    
    def is_matched(user, ban):
        if len(user) != len(ban):
            return False
        for i in range(len(user)):
            if ban[i] != '*' and user[i] != ban[i]:
                return False
        return True
    
    def find_combis(cur_idx, selected_users):
        if cur_idx == len(banned_id):
            answer_set.add(",".join(sorted(selected_users)))
            return
        
        for user in user_id:
            if user not in selected_users and is_matched(user, banned_id[cur_idx]):
                selected_users.append(user)
                find_combis(cur_idx + 1, selected_users)
                selected_users.pop()
    
    find_combis(0, [])
    return len(answer_set)
        
        