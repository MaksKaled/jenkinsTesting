# Используем официальный образ Jenkins LTS
FROM jenkins/jenkins:lts

# Устанавливаем необходимые пакеты
USER root
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    ca-certificates \
    sudo \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common \
    docker.io

# Устанавливаем Node.js и npm
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Устанавливаем Docker (это необходимо для Jenkins в контейнере иметь доступ к Docker хоста)
RUN groupadd docker && usermod -aG docker jenkins

# Открываем порты Jenkins
EXPOSE 8080 50000

# Запускаем Jenkins
USER jenkins
CMD ["java", "-jar", "/usr/share/jenkins/jenkins.war"]
