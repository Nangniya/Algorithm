import math

def solution(n, k):
    def convert_to_base(n, k):
        if n == 0:
            return "0"
        digits = []
        while n > 0:
            digits.append(str(n % k))
            n //= k
        return ''.join(reversed(digits))
    
    def is_prime(n):
        if n <= 1:
            return False
        if n == 2:
            return True
        for i in range(3, int(math.sqrt(n)) + 1):
            if n % i == 0:
                return False
        return True
    
    converted_n = convert_to_base(n, k)
    candidates = [int(x) for x in converted_n.split('0') if x != '' and is_prime(int(x))]
    
    return len(candidates)
