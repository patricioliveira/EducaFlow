FROM python:3.7

WORKDIR /code

# Install dependencies
RUN apt-get update \
    && apt-get install -y wget \
    && wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
    && rm dockerize-linux-amd64-v0.6.1.tar.gz

COPY requirements.txt /code/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /code/
