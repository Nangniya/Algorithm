function solution(phone_book) {
    phone_book.sort();
    console.log(phone_book)
    for(let i = 0; i < phone_book.length - 1; i++){
        if(phone_book[i + 1].startsWith(phone_book[i])) return false;
    }
    return true;
}