import requests
import json


KEY = "a84c0a4b-affd-4b46-b010-e1cca5038a86"

LATITUDE_1 = "55.80251594"
LONGITUDE_1 = "37.70219423"
LATITUDE_2 = "55.69933699"
LONGITUDE_2 = "37.52778627"

width = abs((float(LATITUDE_2) - float(LATITUDE_1)) / 10)
long = abs((float(LONGITUDE_2) - float(LONGITUDE_1)) / 10)

res = width * long


def point_to_excel(point_mas):
    num = 0
    wb = Workbook()
    sheet1 = wb.add_sheet('Sheet 1')
    for i in point_mas:
        num += 1
        sheet1.write(num, 1, str(i["coordinates"][0]))
        sheet1.write(num, 2, str(i["coordinates"][1]))
        sheet1.write(num, 3, str(i["color"]))

    wb.save('points example.xls')


def map_point():
    num = 1
    a = float(LATITUDE_2)
    b = float(LONGITUDE_2)
    mass = []
    for w in range(10):
        a += width
        b = float(LONGITUDE_2)
        for h in range(10):
            num += 1
            b += long
            mass.append({"coordinates": [b, a], "sum": 0, "color": ""})
    return mass


def fetch(SEARCHING_TEXT):
    map = []
    response = requests.get(
        "https://search-maps.yandex.ru/v1/?text=" + SEARCHING_TEXT + "&type=biz"
                                                                     "&lang=ru_RU"
                                                                     "&bbox=" + LONGITUDE_1 + "," + LATITUDE_1 + "~" + LONGITUDE_2 + "," + LATITUDE_2 +
        "&results=100000&apikey=" + KEY)

    for i in json.loads(response.content.decode('utf-8'))["features"]:
        map.append({"coordinates": i["geometry"]["coordinates"], "name": i["properties"]["CompanyMetaData"]["Categories"][0]["name"]})

    return map
