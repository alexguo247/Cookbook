FROM python:3.7-alpine
LABEL Alex Guo

ENV PYTHONUNBUFFERED 1

#install dependencies
COPY ./requirements.txt /requirements.txt
RUN apk add --update --no-cache postgresql-client
RUN apk add --update --no-cache --virtual .tmp-build-deps \
  gcc libc-dev linux-headers postgresql-dev
RUN pip install -r /requirements.txt
RUN apk del .tmp-build-deps

#setup directory structure
RUN mkdir /app
WORKDIR /app
COPY ./app /app

RUN adduser -D user
USER user
