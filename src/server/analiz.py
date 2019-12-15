from module import *

check = []
points = map_point()


def calc_sum_2(points, text, good):
    search_points = fetch(text)
    for sP in search_points:
        for point in points:
            if point["coordinates"][1] - long < sP["coordinates"][1] < point["coordinates"][1] + long:
                if point["coordinates"][0] - width < sP["coordinates"][0] < point["coordinates"][0] + width:
                    if sP["coordinates"] not in check:
                        check.append(sP["coordinates"])
                        if point["sum"] != "good" and point["sum"] < good:
                            point["sum"] += 1
                        if point["sum"] == "good" or point["sum"] >= good:
                            point["sum"] = "good"
    return points


def for_life_2():
    points = map_point()
    points = calc_sum_2(points, "Продуктовый магазин", 4)
    points = calc_sum_2(points, "Школа", 1)
    points = calc_sum_2(points, "Детский сад", 1)
    points = calc_sum_2(points, "Аптека", 3)
    points = calc_sum_2(points, "Парикмахерская", 2)
    points = calc_sum_2(points, "ТЦ", 1)
    points = calc_sum_2(points, "Поликлиника", 2)
    points = calc_sum_2(points, "ветеринарная клиника", 1)
    points = calc_sum_2(points, "Фитнес клуб", 1)
    points = calc_sum_2(points, "Почта", 1)

    points_2 = map_point()
    points_2 = calc_sum_2(points_2, "Бар", 1)
    points_2 = calc_sum_2(points_2, "кафе", 1)
    points_2 = calc_sum_2(points_2, "кинотеатр", 1)
    points_2 = calc_sum_2(points_2, "метро", 2)

    for point in points:
        if point["sum"] == "good":
            point["color"] = "#eeff00"
        elif point["sum"] != "good" and point["sum"] != 0:
            point["color"] = "#c4c4c4"
        else:
            point["color"] = 0
        for point_2 in points_2:
            if point["coordinates"] == point_2["coordinates"]:
                if point_2["sum"] == "good" and point["sum"] == "good":
                    point["color"] = "#ed8e09"
    return points


def for_sport():
    points = map_point()
    points = calc_sum_2(points, "Спортивная площадка", 2)
    points = calc_sum_2(points, "Фитнес Центр", 1)
    points = calc_sum_2(points, "Спортивный зал", 1)

    points_2 = map_point()
    points_2 = calc_sum_2(points_2, "Велодорожка", 1)
    points_2 = calc_sum_2(points_2, "Парк", 1)

    for point in points:
        if point["sum"] == "good":
            point["color"] = "#BF9DC5"
        elif point["sum"] != "good" and point["sum"] != 0:
            point["color"] = "#c4c4c4"
        else:
            point["color"] = 0
        for point_2 in points_2:
            if point["coordinates"] == point_2["coordinates"]:
                if point_2["sum"] == "good" and point["sum"] == "good":
                    point["color"] = "#7ABD9B"
    return points


def for_fun():
    points = map_point()
    points = calc_sum_2(points, "ночной клуб", 1)
    points = calc_sum_2(points, "Бар", 2)
    points = calc_sum_2(points, "кинотеатр", 1)
    points = calc_sum_2(points, "Кафе", 3)
    points = calc_sum_2(points, "бильярд", 1)
    points = calc_sum_2(points, "боулинг", 1)
    points = calc_sum_2(points, "квеструм", 1)


    points_2 = map_point()
    points_2 = calc_sum_2(points_2, "Театр", 1)
    points_2 = calc_sum_2(points_2, "Музей", 1)

    for point_2 in points_2:
        if point_2["sum"] == "good":
            point_2["color"] = "#FF3C1E"
        elif point_2["sum"] != "good" and point_2["sum"] != 0:
            point_2["color"] = "#c4c4c4"
        else:
            point_2["color"] = 0

    for point in points:
        if point["sum"] == "good":
            point["color"] = "#4574B2"
        elif point["sum"] != "good" and point["sum"] != 0:
            point["color"] = "#c4c4c4"
        else:
            point["color"] = 0
        for point_2 in points_2:
            if point["coordinates"] == point_2["coordinates"]:
                if point_2["sum"] == "good" and point["sum"] == "good":
                    point["color"] = "#BF9DC5"
                if point_2["color"] == "#FF3C1E" and point["color"] == "#c4c4c4":
                    point["color"] = "#FF3C1E"
                if point_2["color"] == "#c4c4c4" and point["color"] == "#4574B2":
                    point["color"] = "#4574B2"

    return points
