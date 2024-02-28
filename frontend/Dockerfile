FROM node:20

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps --silent
RUN npm run build --prod

RUN apt-get update && apt-get install -y nginx

COPY nginx/default.conf /etc/nginx/conf.d/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]