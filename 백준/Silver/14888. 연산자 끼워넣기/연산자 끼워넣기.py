import sys
input = sys.stdin.readline

from itertools import permutations

N = int(input())
NUMS = list(map(int, input().split()))
calcs = list(map(int, input().split()))
CALCS = []

for i in range(4):
   if i == 0: 
      CALCS.extend(['+'] * calcs[i])
   if i == 1: 
      CALCS.extend(['-'] * calcs[i])
   if i == 2: 
      CALCS.extend(['*'] * calcs[i])
   if i == 3: 
      CALCS.extend(['/'] * calcs[i])

def calculate(a, operator, b):
   if(operator == '+'):
      return a + b
   if(operator == '-'):
      return a - b
   if(operator == '*'):
      return a * b
   if(operator == '/'):
      if a < 0 :
         return -(-a // b)
      else:
         return a // b
      
max_value = float('-inf')
min_value = float('inf')

used_operators = [False] * (N - 1)

def backtrack(depth, value):
   global max_value, min_value
   
   if depth == N - 1:
      max_value = max(max_value, value)
      min_value = min(min_value, value)
      return
   
   for i in range(len(CALCS)):
      if not used_operators[i]:
         used_operators[i] = True
         next_value = calculate(value, CALCS[i], NUMS[depth + 1])
         backtrack(depth + 1, next_value)
         used_operators[i] = False
         
backtrack(0, NUMS[0])

print("\n".join(map(str, [max_value, min_value])))