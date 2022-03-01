
def countBits(num)
  bitCount = 0
  while (num > 0)
    if (num & 1 == 1)
      bitCount = bitCount + 1
    end
    num = num >> 1
  end
  return bitCount
end

# counts max number of consecutive ones in a binary representation
def countConsecutiveBits(num)
  maxConsec = 0
  consec = 0
  while(num > 0)
    if (num & 1 == 1)
      consec = consec + 1
    else
      consec = 0
    end
    if (maxConsec < consec)
      maxConsec = consec
    end
    num = num >> 1
  end
  return maxConsec
end

(0..16).each do |i|
  puts "#{i} total ones: #{countBits(i)}"
  puts "   max consecutive ones: #{countConsecutiveBits(i)}"
end


