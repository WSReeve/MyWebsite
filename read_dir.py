import os
import csv

path = "assets/art"
year_list = os.listdir(path)

with open('filenames.csv', 'w') as csvfile:
    filewriter = csv.writer(csvfile, delimiter=',')

    for year in year_list:
        month_list = os.listdir(path + "/" + year)
        for month in month_list:
            file_list = os.listdir(path + "/" + year + "/" + month)
            filewriter.writerow([year, month] + file_list)
            print([year, month] + file_list)
        