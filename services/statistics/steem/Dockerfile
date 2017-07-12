FROM python:3.3.6-slim

RUN pip3 install --default-timeout=100 pymongo apscheduler

COPY . /src

CMD ["python", "/src/main.py"]
