FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY ./dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

