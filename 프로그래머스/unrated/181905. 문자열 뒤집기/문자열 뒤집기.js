function solution(my_string, s, e) {
    var replace = [...my_string].slice(s, e + 1).join('');
    var reverse = [...replace].reverse().join('');
    return my_string.replace(replace, reverse);
}