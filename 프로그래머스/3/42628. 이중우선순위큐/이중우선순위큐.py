import heapq

def solution(operations):
    min_heap = [] # 최솟값을 위한 힙
    max_heap = [] # 최댓값을 위한 힙 (마이너스 값을 넣어 최소 힙을 최대 힙처럼 사용)
    visited = {}  # ID를 키로 하여 유효성 체크 (True: 유효, False: 삭제됨)

    for i, op in enumerate(operations):
        command, value = op.split()
        num = int(value)

        if command == 'I':
            # 각 노드에 고유 ID(i)를 부여하여 두 힙 사이의 동기화 문제 해결
            heapq.heappush(min_heap, (num, i))
            heapq.heappush(max_heap, (-num, i))
            visited[i] = True
            
        elif command == 'D':
            # num이 1이면 최대 힙에서 삭제, -1이면 최소 힙에서 삭제
            target_heap = max_heap if num == 1 else min_heap
            
            # [지연 삭제 처리] 
            # 힙의 top에 있는 놈이 이미 다른 쪽에서 삭제된 놈이라면 계속 뽑아버림
            while target_heap and not visited[target_heap[0][1]]:
                heapq.heappop(target_heap)
            
            # 유효한 값이 남아있다면 하나 삭제
            if target_heap:
                popped = heapq.heappop(target_heap)
                visited[popped[1]] = False # 삭제된 ID 표시

    # 모든 명령 수행 후, 힙 상단에 남아있는 '이미 삭제된 데이터'들을 최종 정리
    while min_heap and not visited[min_heap[0][1]]:
        heapq.heappop(min_heap)
    while max_heap and not visited[max_heap[0][1]]:
        heapq.heappop(max_heap)

    # 힙이 비어있으면 [0, 0], 값이 있으면 [최댓값, 최솟값] 반환
    if not min_heap:
        return [0, 0]
    else:
        # max_heap은 마이너스를 붙여 넣었으므로 꺼낼 때 다시 -를 붙여 복구
        return [-max_heap[0][0], min_heap[0][0]]