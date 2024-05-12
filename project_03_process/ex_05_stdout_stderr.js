stdout.write("Success! Example stdout\n");
stderr.write("error! some error occurred\n");

// node ex_01_stdout_sterr.js > /tmp/result.txt
// node ex_01_stdout_sterr.js 1> /tmp/result.txt
// node ex_01_stdout_sterr.js 2> /tmp/result.txt
// node ex_01_stdout_sterr.js &> /tmp/result.txt