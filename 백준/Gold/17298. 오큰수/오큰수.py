import sys

input_data = [line.split(" ") for line in sys.stdin]
n, array = int(input_data[0][0]), [int(num) for num in input_data[1]]

answer = [-1] * n
stack = []
stack.append({"num": array[0], "idx": 0})

for i in range(1, n):
    cur = array[i]
    if stack and stack[-1]["num"] < cur:
        while stack:
            if stack[-1]["num"] < cur:
                answer[stack[-1]["idx"]] = cur
                stack.pop()
            else:
                break
    stack.append({"num": cur, "idx": i})

print(" ".join(map(str, answer)))

