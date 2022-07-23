function solution(n) {
    var answer = 0;
    let number = n;
    let index = 1;
    if(n < 0){
        return false
    }
    if(n > 3000){
        return false
    }
    while(index <= number){
        if(number % index === 0){
            answer+=index
        }
                index += 1
    }
    return answer;
}