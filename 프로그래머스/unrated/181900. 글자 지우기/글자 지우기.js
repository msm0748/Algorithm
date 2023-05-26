function deleteIndex(my_string, indices) {
    var result = '';
    for (var i = 0; i < my_string.length; i++) {
        if (indices.indexOf(i) === -1) {
            result += my_string[i];
        }
    }
    return result;
}

function solution(my_string, indices) {
    var answer = deleteIndex(my_string, indices);
    return answer;
}