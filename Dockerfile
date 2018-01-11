FROM node:9

RUN apt-get update && \
    apt-get install curl apt-transport-https -y

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update && \
    apt-get install yarn -y

WORKDIR /opt/web-app

EXPOSE 8002

COPY . .

RUN ["yarn", "install"]

ENTRYPOINT ["yarn", "run"]

CMD ["dev"]