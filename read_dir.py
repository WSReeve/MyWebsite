import os
import csv

def read_files(path, csv_name,rev):

    year_list = os.listdir(path)

    with open(csv_name, 'w') as csvfile:
        filewriter = csv.writer(csvfile, delimiter=',')

        for year in year_list:
            month_list = os.listdir(path + "/" + year)
            month_list.sort()
            for month in month_list:
                file_list = os.listdir(path + "/" + year + "/" + month)
                file_list.sort(reverse=rev)
                filewriter.writerow([year, month] + file_list)
                #print([year, month] + file_list)



read_files("assets/art", 'art_filenames.csv',True)
read_files("assets/notes", "notes_filenames.csv",True)
read_files("assets/photos", "photos_filenames.csv",False)
read_files("assets/music", "music_filenames.csv",True)
