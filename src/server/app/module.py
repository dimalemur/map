import requests
import json

KEY = "a84c0a4b-affd-4b46-b010-e1cca5038a86"

LATITUDE_1 = "55.92095016773269"
LONGITUDE_1 = "37.94117188864121"
LATITUDE_2 = "55.56626737889634"
LONGITUDE_2 = "37.29587767003522"

width = abs((float(LATITUDE_2) - float(LATITUDE_1)) / 40)
long = abs((float(LONGITUDE_2) - float(LONGITUDE_1)) / 40)

res = width * long


def map_point():
    num = 1
    a = float(LATITUDE_2)
    b = float(LONGITUDE_2)
    mass = []
    for w in range(40):
        a += width
        b = float(LONGITUDE_2)
        for h in range(40):
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
        map.append({"coordinates": i["geometry"]["coordinates"],
                    "name": i["properties"]["CompanyMetaData"]["Categories"][0]["name"]})

    return map