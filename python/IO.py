import sys

# command line arguments

a = len(sys.argv)       # number of arguments
b = sys.argv            # argument list

print('number of arguments: ' + str(a))
print('argument list: ' + str(b))


# stdin, stdout, stderr

x = read('please enter text: ')     # read from stdin
print('you said ' + str(x))         # write to stdout
print('oh noes', file = sys.stderr) # write to stderr


# files

infile_name = 'input.txt'
outfile_name = 'output.txt'

try:
    f1 = open(infile_name, 'r')          # open file for reading
    ftext = f1.read()
    f2 = open(outfile_name, 'w')         # open file for writing
    f2.write(ftest)
except:
    print('file problem' file = sys.stderr)
finally:
    f1.close()
    f2.close()

#   file modes
#   r | read
#   w | write
#   a | append, create if doesn't exist
#   x | create, return error if file exists

ftext = ''
with open(infile_name) as f1:
    ftext = f1.read()

with open(outfile_name) as f2:
    f2.write(ftext)

# using 'with' is good practice for files as it closes them automatically
