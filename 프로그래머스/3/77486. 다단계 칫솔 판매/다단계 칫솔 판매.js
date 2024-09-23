function solution(enroll, referral, seller, amount) {
    const moneyMap = {};
    const refMap = {};
    for(let i = 0; i < enroll.length; i++){
        refMap[enroll[i]] = referral[i];
        moneyMap[enroll[i]] = 0;
    }
    for(let i = 0; i < seller.length; i++){
        let person = seller[i];
        let money = amount[i] * 100;
        while(person !== '-' && money > 0) {
            let distribute = Math.floor(money * 0.1);
            moneyMap[person] += money - distribute;
            money = distribute;
            person = refMap[person];
        }
    }
    return enroll.map(name => moneyMap[name]);
}