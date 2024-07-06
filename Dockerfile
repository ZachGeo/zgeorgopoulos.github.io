FROM nginx:1.27.0-alpine-slim

COPY . /portfolio/

COPY nginx/default.conf /etc/nginx/conf.d/
