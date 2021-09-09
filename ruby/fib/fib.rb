def fib(n)
	raise "cannot be negative" if (n < 0)
	return n if (n < 2)

	@fib_table ||= Hash.new
	return @fib_table[n] if @fib_table[n]
	result = fib(n-1) + fib(n-2)
	@fib_table[n] = result
	return result
end
