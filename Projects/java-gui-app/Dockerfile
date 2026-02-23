FROM eclipse-temurin:17-jdk-jammy

RUN apt-get update && apt-get install -y xvfb

WORKDIR /app

COPY target/java-gui-app-1.0.jar app.jar

#CMD ["java", "-jar", "app.jar"]
#CMD ["sh", "-c", "java -jar app.jar || tail -f /dev/null"]
CMD ["xvfb-run", "java", "-jar", "app.jar"]
