from flask import Flask, render_template
from flask import request
import requests
import json
import sys

sys.path.append('/home/lemur/map/src/server')
sys.path.append('/home/lemur/map/src/server/app/db')
from analiz import *
from db import initState

app = Flask(__name__, static_folder="../../../public/")


@app.route('/')
def main():
    return render_template('index.html')


@app.route('/ololo', methods=['GET', 'POST'])
def get_point():
    if request.method == 'POST':
        req_data = json.loads(request.data.decode("utf-8"))
        print(req_data)
        res = json.dumps(for_life())
        print(res)
        return res
    else:
        return {"lol": "1"}



@app.route('/initPlaces',methods=['GET', 'POST'])
def init_places():
    if request.method == 'POST':
        res = []
        req_data = json.loads(request.data.decode("utf-8"))
        print(req_data)
        response = json.loads(requests.get("https://kudago.com/public-api/v1.2/places/?location=msk").text)["results"]
        for i in response:
            res.append({"title":i["title"],"telNumber":i["phone"],"address":i["address"],"link":i["site_url"]})
        return json.dumps(res)
    else:
        return {"1": "1"}


@app.route('/init',methods=['GET', 'POST'])
def init_options():
    if request.method == 'POST':
        req_data = json.loads(request.data.decode("utf-8"))
        print(req_data)
        res = json.dumps(initState())
        return res
    else:
        return {"1": "1"}



if __name__ == '__main__':
    app.run(debug=True)
