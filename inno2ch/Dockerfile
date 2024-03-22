FROM python:3

WORKDIR /inno2ch
COPY inno2ch .

RUN pip3 install --upgrade pip -r requirements.txt
EXPOSE 5000

ENTRYPOINT [ "sh", "run.sh" ]