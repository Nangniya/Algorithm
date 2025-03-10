class Node:
    def __init__(self, info, num, left=None, right=None):
        self.info = info # 좌표
        self.left = left
        self.right = right
        self.num = num # 노드 번호

    def has_left(self):
        return self.left is not None
    
    def has_right(self):
        return self.right is not None
    
def make_BT(nodeinfo):
    nodes = [i for i in range(1, len(nodeinfo) + 1)]
    nodes.sort(key=lambda x: (-nodeinfo[x - 1][1], nodeinfo[x - 1][0]))
    root = None
    for i in range(len(nodes)):
        if root is None:
            root = Node(nodeinfo[nodes[0] - 1], nodes[0])
        else:
            parent = root
            node = Node(nodeinfo[nodes[i] - 1], nodes[i])
            while True:
                if node.info[0] < parent.info[0]:
                    if parent.has_left():
                        parent = parent.left
                        continue
                    parent.left = node
                    break
                else:
                    if parent.has_right():
                        parent = parent.right
                        continue
                    parent.right = node
                    break
    return root

def preorder(root, answer):
    stack = [root]
    while stack:
        node = stack.pop()
        if node is None:
            continue
        answer[0].append(node.num)
        stack.append(node.right)
        stack.append(node.left)
        
def postorder(root, answer):
    stack = [(root, False)] # (node, 방문 여부)
    while stack:
        node, visited = stack.pop()
        if node is None:
            continue
        if visited:
            answer[1].append(node.num)
        else:
            stack.append((node, True))
            stack.append((node.right, False))
            stack.append((node.left, False))
        
def solution(nodeinfo):
    answer = [[], []] # 전위 순회, 후위 순회
    root = make_BT(nodeinfo)
    preorder(root, answer)
    postorder(root, answer)
    return answer
        