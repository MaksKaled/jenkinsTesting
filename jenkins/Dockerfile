# Используем официальный образ Jenkins LTS
FROM jenkins/jenkins:lts

# Устанавливаем Node.js
USER root
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    ca-certificates

RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Открываем порты Jenkins
EXPOSE 8080 50000

# Запускаем Jenkins
USER jenkins
CMD ["java", "-jar", "/usr/share/jenkins/jenkins.war"]
