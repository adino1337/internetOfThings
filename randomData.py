import sys
import time
import datetime
import random
i = 0
while True:    
    data = open("data.txt","a")
    try:
        temp = random.randint(10,40) 
        cas = datetime.datetime.now()
        if(i == 0):
            data.write(str(temp) +" "+cas.strftime("%H:%M:%S"))
        else:
            data.write("\n"+str(temp) +" "+cas.strftime("%H:%M:%S"))       
    except:
        print("ERROR")
    i = i + 1    
    data.close()
    time.sleep(3)
