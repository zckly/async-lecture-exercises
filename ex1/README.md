All Credits to: Kyle Simpson
In this exercise, we're going to implement some flow control using good old fashioned callbacks.

Here's what we need to do:
1. Pretend that there are 3 files that each contain some JSON data
2. Make requests to all 3 at the same time
3. Render them in proper order: file1, file2, file3
4. Log "complete!" to the console when done