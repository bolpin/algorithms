# 1 1 1 0 0 0
# 0 1 0 0 0 0
# 1 1 1 0 0 0
# 0 0 2 4 4 0
# 0 0 0 2 0 0
# 0 0 1 2 4 0
#
# expected output:
#   19

# -1 -1 0 -9 -2 -2
# -2 -1 -6 -8 -2 -5
# -1 -1 -1 -2 -3 -4
# -1 -9 -2 -4 -4 -5
# -7 -3 -3 -2 -9 -9
# -1 -3 -1 -2 -4 -5
#
# expected output:
#  -6

require 'json'
require 'stringio'


arr = Array.new()
arr.push([-1,-1,0,-9,-2,-2])
arr.push([-2,-1,-6,-8,-2,-5])
arr.push([-1,-1,-1,-2,-3,-4])
arr.push([-1,-9,-2,-4,-4,-5])
arr.push([-7,-3,-3,-2,-9,-9])
arr.push([-1,-3,-1,-2,-4,-5])

# arr = Array.new()
# arr.push([1,1,1,0,0,0])
# arr.push([0,1,0,0,0,0])
# arr.push([1,1,1,0,0,0])
# arr.push([0,0,2,4,4,0])
# arr.push([0,0,0,2,0,0])
# arr.push([0,0,1,2,4,0])

# Read arr data from stdin:
# 6.times do |i|
#     arr[i] = gets.rstrip.split.map(&:to_i)
# end

def sumStartingAt(ar, x, y)
    sum = 0
    (x..x+2).each do |i|
        (y..y+2).each do |j|
            sum += ar[i][j]
        end
    end
    sum -= ar[x+1][y]
    sum -= ar[x+1][y+2]
    sum
end

maxSum = -9999999
(0..3).each do |i|
    (0..3).each do |j|
        hSum = sumStartingAt(arr, i, j)
        if (hSum > maxSum)
            puts "#{i} #{j} #{maxSum} #{hSum}"
            maxSum = hSum
        end
    end
end

puts(maxSum)
