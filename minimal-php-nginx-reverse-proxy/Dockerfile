FROM php:7.4.1-cli
RUN mkdir -p /src/app
COPY project-1 /src/app/project-1
COPY project-2 /src/app/project-2
RUN apt-get update && apt-get -y install supervisor && mkdir -p /var/log/supervisor && mkdir -p /etc/supervisor/conf.d
ADD supervisor.conf /etc/supervisor.conf
CMD ["supervisord", "-c", "/etc/supervisor.conf"]
