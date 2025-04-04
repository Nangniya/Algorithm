from datetime import date
from dateutil.relativedelta import relativedelta

def solution(today, terms, privacies):
    term_dict = {}
    for term in terms:
        name, n = term.split()
        term_dict[name] = int(n)
    
    today = date(int(today.split('.')[0]), 
                 int(today.split('.')[1]), 
                 int(today.split('.')[2]))
    
    answer = []
    for i, privacy in enumerate(privacies):
        cur_date, name = privacy.split()
        year, month, day = map(int, cur_date.split('.'))
        
        # 만료 날짜는 해당 월의 마지막 날까지
        expired_date = date(year, month, day) + relativedelta(months=term_dict[name]) - relativedelta(days=1)
        
        if expired_date < today:
            answer.append(i + 1)
    
    return answer