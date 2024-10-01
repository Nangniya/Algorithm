function find(parent, i) {
    if(parent[i] == i) return i;
    
    parent[i] = find(parent, parent[i]);
    return parent[i];
}

function union(parent, rank, x, y) {
    const xroot = find(parent, x);
    const yroot = find(parent, y);
    if(rank[xroot] < rank[yroot]) {
        parent[xroot] = yroot;
    } else if(rank[xroot] > rank[yroot]) {
        parent[yroot] = xroot;
    } else {
        parent[yroot] = xroot;
        rank[xroot] += 1;
    }
}

function solution(n, costs) {
    costs.sort((a, b) => a[2] - b[2]);
    const parent = Array.from({ length: n }, (_, i) => i);
    const rank = Array(n).fill(0);
    
    let minCost = 0;
    let edges = 0;
    
    for(const edge of costs) {
        if(edges === n - 1) {
            break;
        }
        const x = find(parent, edge[0]);
        const y = find(parent, edge[1]);
        if(x !== y) {
            union(parent, rank, x, y);
            minCost += edge[2];
            edges++;
        }
    }
    return minCost;
}