FROM python:3.7

RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app/

COPY . /usr/src/app/
RUN pip install requests
RUN pip install flask

EXPOSE 5000

CMD ["python" , "src/server/app/app.py"]