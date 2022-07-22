function solution(arr) {
    var answer;
    let _arr = [...arr];
    if(arr.length < 0){
        return false
    }
    if(arr.length > 100){
        return false
    }
    const result = _arr.reduce(function add(sum, currValue) {
     return sum + currValue;
    }, 0);
    return answer = result / _arr.length;
}