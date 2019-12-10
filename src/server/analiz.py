from module import *

check = []
points = map_point()


def calc_sum(text):
    for searchPoint in fetch(text):
        for point in points:
            if point["coordinates"][1] - long < searchPoint["coordinates"][1] < point["coordinates"][1] + long:
                if point["coordinates"][0] - width < searchPoint["coordinates"][0] < point["coordinates"][0] + width:
                    if searchPoint["coordinates"] not in check:
                        check.append(searchPoint["coordinates"])
                        point["sum"] += 1


def for_life():
    calc_sum("Продуктовый магазин")
    calc_sum("Детский сад")
    calc_sum("Школа")
    calc_sum("Аптека")
    calc_sum("Салон Красоты")
    calc_sum("Фитнес Клуб")
    calc_sum("Банк")
    calc_sum("Метро")

    for point in points:
        if point["sum"] >= 30:
            point["color"] = "#eeff00"
            if point["sum"] > 60:
                point["color"] = "#ed8e09"
        if point["sum"] < 30:
            point["color"] = "#c4c4c4"

    return points


def for_fun():
    calc_sum("Ночной клуб")
    calc_sum("Кинотеатр")
    calc_sum("Бар")
    calc_sum("Кафе")

    for point in points:
        if point["sum"] >= 7:
            point["sum"] = 7
            point["color"] = "#4574B2"
        else:
            point["sum"] = 0

    calc_sum("Театр")
    calc_sum("Музей")

    for point in points:
        if point["sum"] >= 30:
            point["color"] = "#8B5876"
        if 7 <= point["sum"] < 30 and point["color"] != "#4574B2":
            point["color"] = "#FF3C1E"
        if point["sum"] < 7:
            point["color"] = "#c4c4c4"

    return points


def for_sport():
    calc_sum("Фитнес Клуб")
    calc_sum("Спортивная секция")
    calc_sum("Спортзал")
    calc_sum("Спортивная площадка")

    for point in points:
        if point["sum"] >= 20:
            point["color"] = "#7ABD9B"
            if point["sum"] > 30:
                point["color"] = "#BF9DC5"
        if point["sum"] < 20:
            point["color"] = "#C4C4C4"

    return points
