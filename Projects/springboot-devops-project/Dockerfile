FROM eclipse-temurin:17-jre

WORKDIR /myapp

COPY target/*.jar app.jar

EXPOSE 3004

ENTRYPOINT [ "java", "-jar","app.jar" ]
