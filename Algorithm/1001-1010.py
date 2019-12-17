########################################################################
# 1001: A + B

# a, b = input().split()
# print(int(a)+int(b))

########################################################################

# 1002: A - B

# a, b = input().split()
# print(int(a)-int(b))

########################################################################

# 1003: 터렛

# n = []
# for i in range(0, int(input())):
#     x1, y1, r1, x2, y2, r2 = input().split()
#     d = int((int(x1)-int(x2)) ** 2 + (int(y1)-int(y2)) ** 2)
#     if int(r1) == int(r2) :
#         if d > (2 * int(r1)) ** 2 :
#             n.append(0)
#         elif d == (2 * int(r1)) ** 2 :
#             n.append(1)
#         elif d == 0 :
#             n.append(-1)
#         else :
#             n.append(2)
#     else :
#         if d > (int(r1) + int(r2)) ** 2:
#             n.append(0)
#         elif d == (int(r1) + int(r2)) ** 2:
#             n.append(1)
#         elif d > (int(r1) - int(r2)) ** 2:
#             n.append(2)
#         elif d == (int(r1) - int(r2)) ** 2:
#             n.append(1)
#         else :
#             n.append(0)
# print(*n, sep = "\n")

########################################################################

# 1004: 피보나치 함수

global zero
zero = 0
global one
one = 0

def fibonacci(n):
    global zero
    global one
    if (n == 0):
        print("1")
        zero += 1
        return 0
    elif (n == 1):
        one += 1
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

result = []

for i in range(0, int(input())):
    zero = 0
    one = 0
    fibonacci(int(input()))
    result.append(zero)
    result.append(one)

for i in range(0, len(result), 2):
    print(result[i-1], result[i])

########################################################################