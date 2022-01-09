import os
import csv

path = "assets/art"
dir_list = os.listdir(path)

print(dir_list)

with open('filenames.csv', 'w') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',')
    filewriter.writerow(dir_list)