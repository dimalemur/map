import sys

sys.path.append('/home/lemur/map/src/server')
from module import *
from analiz import for_life_2, for_sport, for_fun
import json


def for_api(mode):
    result = {"type": "FeatureCollection", "features": []}

    index = 0

    if mode == "for_life":
        md = for_life_2()
    if mode == "for_sport":
        md = for_sport()
    if mode == "for_fun":
        md = for_fun()

    for i in md:
        if i["color"] != 0:
            result["features"].append({"type": "Feature", "id": index, "geometry": {"type": "Polygon", "coordinates": [[
                [i["coordinates"][0] - long / 2, i["coordinates"][1] - width / 2],
                [i["coordinates"][0] - long / 2, i["coordinates"][1] + width / 2],
                [i["coordinates"][0] + long / 2, i["coordinates"][1] + width / 2],
                [i["coordinates"][0] + long / 2, i["coordinates"][1] - width / 2]
            ]
            ]
                                                                                    },
                                       "properties": {"fill": i["color"],
                                                      "fill-opacity": 0.85,
                                                      "stroke": i["color"],
                                                      "stroke-width": "1",
                                                      "stroke-opacity": 0.9
                                                      }})
        index += 1
    return result


def for_geo_json():
    with open("Sample_GEOJSON.geojson", "w") as write_file:
        json.dump(for_api(), write_file)
