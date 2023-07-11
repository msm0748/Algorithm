def solution(a, b):
    a = str(a)
    b = str(b)
    if (a + b > b + a):
        return int(a + b)
    return int(b + a)