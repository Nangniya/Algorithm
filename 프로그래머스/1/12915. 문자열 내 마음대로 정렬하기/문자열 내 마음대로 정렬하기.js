function solution(strings, n) {
    strings.sort((a, b) => {
        const charA = a.charCodeAt(n);
        const charB = b.charCodeAt(n);
        if (charA !== charB) {
            return charA - charB;
        }
        return a.localeCompare(b);
    });
    return strings;
}