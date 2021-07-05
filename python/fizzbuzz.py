def fizbuz(n, divisor1=3, divisor2=5):
    if n%divisor1 == 0 and n%divisor2 == 0:
        return "fizzbuzz"
    elif n%divisor1 == 0:
        return "fizz"
    elif n%divisor2 == 0:
        return "buzz"
    else:
        return n

numTerms = int(input("How many fizzbuzz terms do you want? "))

if numTerms <= 0:
    print("Please enter a positive number.")
else:
    for i in range(numTerms):
        print(fizbuz(i))

        