import sqlite3
import sys

sys.path.append('/home/lemur/map/src/server')
from analiz import for_life, for_fun, for_sport


# cur.execute("CREATE TABLE `options` (`option_id`INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,`button_name`	TEXT UNIQUE,`button_status`	TEXT DEFAULT '');")
#
# cur.execute("CREATE TABLE `points` (`point_id`	INTEGER PRIMARY KEY AUTOINCREMENT,`latitude`	REAL NOT NULL,`longitude`	REAL NOT NULL,`color`	TEXT NOT NULL,FOREIGN KEY(`point_id`) REFERENCES `options`(`option_id`));")
# cur.execute("CREATE TABLE `tags` (`tag_id`	INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,`color`	TEXT DEFAULT '',`text`	TEXT DEFAULT '',FOREIGN KEY(`tag_id`) REFERENCES `options`(`option_id`));")
# con.commit()
#
def set_for_sport():
    con = sqlite3.connect('bd.db')
    cur = con.cursor()
    cur.execute('delete from points where point_id =3')
    con.commit()
    for i in for_sport():
        cur.execute(
            "INSERT INTO points(point_id, latitude, longitude,color) VALUES (:one, :latitude, :longitude, :color)",
            {"one": 3, "latitude": i['coordinates'][0], "longitude": i['coordinates'][1], "color": i['color']})
    con.commit()
    cur.close()


def set_for_life():
    con = sqlite3.connect('bd.db')
    cur = con.cursor()
    cur.execute('delete from points where point_id =3')
    con.commit()
    for i in for_life():
        cur.execute(
            "INSERT INTO points(point_id, latitude, longitude,color) VALUES (:one, :latitude, :longitude, :color)",
            {"one": 3, "latitude": i['coordinates'][0], "longitude": i['coordinates'][1], "color": i['color']})
    con.commit()
    cur.close()


def for_fun():
    con = sqlite3.connect('bd.db')
    cur = con.cursor()
    cur.execute('delete from points where point_id =3')
    con.commit()
    for i in for_sport():
        cur.execute(
            "INSERT INTO points(point_id, latitude, longitude,color) VALUES (:one, :latitude, :longitude, :color)",
            {"one": 3, "latitude": i['coordinates'][0], "longitude": i['coordinates'][1], "color": i['color']})
    con.commit()
    cur.close()


def initState():
    con = sqlite3.connect('bd.db')
    cur = con.cursor()

    state = []

    def tags(id):
        tags = []
        cur.execute('select * from tags')
        for j in cur.fetchall():
            if j[0] == id:
                tags.append({"color": j[1], "text": j[2]})
        return tags

    def points(id):
        point = []
        cur.execute('select * from points')
        for j in cur.fetchall():
            if j[0] == id:
                point.append({"latitude": j[2], "longitude": j[1], "color": j[3]})
        return point

    cur.execute('select * from options')
    for i in cur.fetchall():
        state.append({"buttonName": i[1], "buttonStatus": i[2], "tags": tags(i[0]), "points": points(i[0])})
    con.close()
    return state
