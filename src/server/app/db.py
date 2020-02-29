import sqlite3
import sys
import os.path

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(BASE_DIR, "bd.db")
print(BASE_DIR)
print(db_path)


def tags(id):
    con = sqlite3.connect(db_path)
    cur = con.cursor()
    tags = []
    cur.execute('select * from tags')
    for j in cur.fetchall():
        if j[0] == id:
            tags.append({"color": j[1], "text": j[2]})
    return tags


def points(id):
    con = sqlite3.connect(db_path)
    cur = con.cursor()
    cur.execute('select * from points')
    for j in cur.fetchall():
        if j[0] == id:
            return j[1]


def initState():
    links = []
    con = sqlite3.connect(db_path)
    cur = con.cursor()

    state = []

    cur.execute('select * from options')
    for i in cur.fetchall():
        state.append({"buttonName": i[1], "buttonStatus": i[2], "tags": tags(i[0]), "points": points(i[0])})
    con.close()
    return state


def initState_api(mode):
    links = []
    con = sqlite3.connect(db_path)
    cur = con.cursor()

    state = []
    if mode == "for_life":
        md = 0
    if mode == "for_fun":
        md = 1
    if mode == "for_sport":
        md = 2

    cur.execute('select * from options')

    for i in cur.fetchall():
        state.append({"buttonName": i[1], "buttonStatus": i[2], "tags": tags(i[0]), "points": points(i[0])})
    con.close()
    return state[md]
