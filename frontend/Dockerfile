# Use the official Node.js image as the base image
FROM node:20

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps --silent

EXPOSE 3000

CMD ["ng", "serve", "--port", "3000", "tail", "-f", "/dev/null"]



# FROM nginx:1.23.2-alpine 
# VOLUME /var/cache/nginx
# COPY --from=DeployEducaFlow app/dist/frontend /usr/share/nginx/html
# COPY  default.conf /etc/nginx/conf.d/default.conf

