require 'minitest/autorun'
require './fizzbuzz.rb'

class TestFib < Minitest::Test

  def test_fib_negative
	assert_raises("cannot be negative") {
		fib(-1)
	}
  end

  def test_fib_0
	assert_equal(fib(0), 0)
  end

  def test_fib_1
	assert_equal(fib(1), 1)
  end

  def test_fib_2
	assert_equal(fib(2), 1)
  end

  def test_fib_6
	assert_equal(fib(6), 8)
  end

  def test_fib_7
	assert_equal(fib(7), 13)
  end

  def test_fib_performance
	start = Time.now
	fib(37)
	finish = Time.now
	cumulative_time = finish - start
	assert(cumulative_time < 0.1, "took too long to run")	
  end

end

