"""
	This file generates HTML files for the project Visference, check: https://github.com/jaumet/visference
	Dependencies:
	* aptitude install python-configparser
"""

import sys
import pprint
import random

# Getting arguments first argument
usage = """
    Usage:
        python path_to_data/area-config.js [number] [type] [gender]
        * number can be: an integer > 0: 1, 2, 3, 4,...
        * type can be: president OR tribunal OR army
        * gender: can be "wm" (choose un man and one women) or "-" (not discriminate by gender)
        """
'''
#noinspection PyBroadException
try:
    dataFile = sys.argv[0]
    superlistFile = sys.argv[1]
    areaFile = sys.argv[2]
    
except:
    print usage
    sys.exit(1)
else:
    print "dataFile= "+dataFile+" | superlistFile = "+superlistFile+" | areaFile = "+areaFile
'''

dataFile = "./data/config.js"

'''
#### Getting the data
import configparser
config = configparser.ConfigParser()
config.read(dataFile)
print(config['DEFAULT']['AREAX'])
print(config['DEFAULT']['FIELDS'])
'''

'''
def getVarFromFile(filename):
    import imp
    f = open(filename)
    global data
    data = imp.load_source('data', '', f)
    f.close()

getVarFromFile(dataFile)
print data.AREAX
print data.FILES
'''

import re
data0 = open(dataFile)
#data = [i.strip() for i in data0.readlines()]
for i in data0.readlines():
	if not (re.match('^\/\/|^\\t', i)):
		pprint.pprint(i)
'''
####################################
def main():
    print "Hello"

def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        return False

###################
main()
'''
