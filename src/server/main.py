import sys
sys.path.append('/home/lemur/map/src/server')

from module import *
from analiz import for_life
import json

result = {"type": "FeatureCollection", "features": []}

index = 0

for i in for_life():
    result["features"].append({"type": "Feature", "id": index, "geometry": {"type": "Point", "coordinates":
        i["coordinates"]},
                               "properties": {"description": "",
                                              "iconCaption": "",
                                              "marker-color": i["color"]}})
    index += 1

with open("Sample_GEOJSON.geojson", "w") as write_file:
    json.dump(result, write_file)
