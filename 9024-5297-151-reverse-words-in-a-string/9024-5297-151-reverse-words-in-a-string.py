class Solution:
    def reverseWords(self, s: str) -> str:
        arr = [word.strip() for word in s.split()]
        arr.reverse()
        return ' '.join(arr)
        