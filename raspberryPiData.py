import sys
import time
import datetime

i = 0

while True:
    subor = open("/sys/bus/w1/devices/28-00000dd98995/w1_slave","r")
    data = open("data.txt","a")
    line = subor.readline()
    line = subor.readline()

    temp = line[-6:]

    try:
        temp = float(temp)
        temp = temp/1000
 
        cas = datetime.datetime.now()
        if(i == 0):
            data.write(str(temp) +" "+cas.strftime("%H:%M:%S"))
        else:
            data.write("\n"+str(temp) +" "+cas.strftime("%H:%M:%S"))
        
        
    except:
        print("ERROR")

    i = i + 1
    subor.close()
    data.close()
    time.sleep(3)
