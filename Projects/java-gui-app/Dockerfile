FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

COPY target/java-gui-app-1.0.jar app.jar

EXPOSE 3005

#CMD ["java", "-jar", "app.jar"]
CMD ["sh", "-c", "java -jar app.jar || tail -f /dev/null"]
