FROM tomcat:9.0
COPY target/simple-jsp.war /usr/local/tomcat/webapps
EXPOSE 8080
CMD ["catalina.sh", "run"]

# docker build -t tomcat:9.0 . && docker run -p 8812:8080 -v .:/usr/local/tomcat/webapps/simple-jsp --name simple-jsp-container tomcat:9.0 cp target/simple-jsp.war /usr/local/tomcat/webapps/simple-jsp