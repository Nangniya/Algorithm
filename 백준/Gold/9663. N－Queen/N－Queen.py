import sys
input = sys.stdin.readline

N = int(input())

WIDTH = [False] * N;
DIAGONAL_RIGHT = [False] * 2 * N;
DIAGONAL_LEFT = [False] * 2 * N;

def backtrack(y):
   answer = 0;
   
   if y == N:
      answer += 1;
   else:
      for i in range(N):
         if WIDTH[i] or DIAGONAL_RIGHT[i + y] or DIAGONAL_LEFT[N - i + y]:
            continue;
         
         WIDTH[i] = DIAGONAL_RIGHT[i + y] = DIAGONAL_LEFT[N - i + y] = True;
         answer += backtrack(y + 1);
         WIDTH[i] = DIAGONAL_RIGHT[i + y] = DIAGONAL_LEFT[N - i + y] = False;
   
   return answer;

print(backtrack(0));