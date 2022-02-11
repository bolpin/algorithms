These are some exercises to work on from time to time to keep js coding skills fresh.

Thanks to Stephen Grider for much of the content and inspiration: https://github.com/StephenGrider/AlgoCasts.

This is a great course: https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/

To run tests:
```
  jest ./<some-subdirectory> --watch
```
Here's a little program to pick up some problems to work on today:
```
#!/usr/bin/env ruby
Dir.chdir('<your-challenges-folder>') do
  directories = Dir.glob('*').select { |f| File.directory? f }

  puts "There are #{directories.length} folders"
  puts "Your challenges for today are:"
  puts "  * " + directories.sample();
  puts "  * " + directories.sample();
  puts "  * " + directories.sample();
end

```
