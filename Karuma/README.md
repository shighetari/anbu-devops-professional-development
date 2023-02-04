
#

<p align="center">
  <img src="https://i.imgur.com/rauiZFZ.png" width="40%" alt="Main Image" />
</p>

#

<div align="center" style="display: flex; justify-content: center;">
  <img src="https://i.imgur.com/3V0QcFK.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
  <img src="https://i.imgur.com/1InyEkM.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
  <img src="https://i.imgur.com/NaxmjNJ.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
  <img src="https://i.imgur.com/P3ZWxVC.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
  <img src="https://i.imgur.com/gOPa3kd.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
    <img src="https://i.imgur.com/gXT29dX.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
  <img src="https://i.imgur.com/55SVzHr.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
  <img src="https://i.imgur.com/cUxZvuf.png" style="margin: 0 10px; width: 200px; height: 200px; border: 5px double purple; border-radius: 25px; box-shadow: 5px 10px #888888;"/>
</div>

 #



  


This document outlines the plan for the ANBU DevOps project. The goal of this project is to provide a training environment for junior developers to practice best practice concepts and solid coding patterns, all within a project that has proper engineering concepts and architecture, with devops concepts taken into practice.

| :computer: |Link (not completed yet)|Description|
|:---:|----|-----------|
||[Getting Started](https://github.com/devops-project/docs/getting-started.md)|A guide to getting :rocket: up and running with the project|
|  |[Contributing](https://github.com/devops-project/docs/contributing.md)|Information on how to :raised_hands: contribute to the project|
|  |[Development Guide](https://github.com/devops-project/docs/development-guide.md)|A guide to :hammer: developing the project|
|  |[Deployment Guide](https://github.com/devops-project/docs/deployment-guide.md)|A guide to :ship: deploying the project|
|  |[Documentation](https://github.com/devops-project/docs/)|A comprehensive :books: reference for the project|
|  |[Troubleshooting](https://github.com/devops-project/docs/troubleshooting.md)|A guide to :wrench: solving common issues|
|  |[Monitoring](https://github.com/devops-project/docs/monitoring.md)|A guide to :eyes: monitoring the project's performance|


# Technologies

| Name | Description | Emoji | Link |
|------|-------------|-------|------|
| Spring Boot | A robust Java-based framework for building web applications using a model-view-controller (MVC) architecture. | :coffee: | [Spring Boot](https://spring.io/projects/spring-boot) |
| Hibernate | An Object-Relational Mapping (ORM) tool for data persistence and efficient data management in a relational database. | :sparkles: | [Hibernate](https://hibernate.org/) |
| Gradle | A build automation tool that facilitates dependency management and supports multiple programming languages. | :wrench: | [Gradle](https://gradle.org/) |
| Angular | A popular JavaScript framework for building dynamic, single-page web applications. | :rocket: | [Angular](https://angular.io/) |
| Kafka | A distributed streaming platform for building real-time data pipelines and streaming applications. | :bus: | [Kafka](https://kafka.apache.org/) |
| Docker | A containerization platform that enables the packaging and deployment of applications in a lightweight, portable format. | :whale: | [Docker](https://www.docker.com/) |
| Keycloak | An open-source identity and access management solution for securing web applications and APIs. | :lock: | [Keycloak](https://www.keycloak.org/) |
| Terraform | A tool for provisioning and managing cloud infrastructure as code. | :earth_americas: | [Terraform](https://www.terraform.io/) |
| AWS | A widely-used cloud computing platform that provides a range of services for hosting, storage, and data processing. | :cloud: | [AWS](https://aws.amazon.com/) 
| Docker Swarm | A native clustering solution for Docker, that allows multiple containers to work together as a single, virtual host. | :fish: | [Docker Swarm](https://docs.docker.com/engine/swarm/) |
| Jenkins | A popular open-source automation server that supports continuous integration and deployment. | :construction_worker: | [Jenkins](https://jenkins.io/) |
| .bat and .sh files | Scripts for automating tasks such as setting up the developer environment and deploying the application. | :hash: | N/A |
| Java | A class-based, object-oriented programming language used for building the backend of the application. | :coffee: | N/A |
| TypeScript | A strongly-typed, object-oriented programming language used for building the frontend of the application. | :computer: | N/A |
| JSON, Dockerfiles, env, git | Additional syntax and technologies used in the project. | :file_folder: | N/A |



# File Structure

The main root directory of the project is called "ANBU DevOps" and it contains a child directory which is the root directory for the full stack project and is called "Karuma".





## **ANBU Dev Ops - Karuma**
<img src="https://i.imgur.com/XSqCzoU.png" width="400" height="200">

```
🗂 ANBU DevOps
├── 🦊 Karuma
│   ├── 💻 frontend
│   │   ├── 📂 src
│   │   │   ├── 📄 index.html
│   │   │   ├── 📄 index.ts
│   │   │   ├── 📄 styles.scss
│   │   │   └── ...
│   │   ├── 📂 node_modules
│   │   ├── 📄 package.json
│   │   └── ...
│   ├── 🛢 backend
│   │   ├── 📂 src
│   │   │   ├── 📄 main.java
│   │   │   ├── 📄 Application.java
│   │   │   └── ...
│   │   ├── 📦 pom.xml
│   │   └── ...
│   ├── 📝 docs
│   │   ├── 📄 README.md
│   │   ├── 📄 roadmap.md
│   │   ├── 📄 API.md
│   │   └── ...
│   ├── 🛢️ infrastructure
│   │   ├── 📂 terraform
│   │   │   ├── 📄 main.tf
│   │   │   └── ...
│   │   ├── 🐳 docker-compose.yml
│   │   ├── 🐳 swarm-deploy.sh
│   │   ├── 🐳 swarm-stack.yml
│   │   └── ...
│   ├── 🔧 scripts
│   │   ├── 📄 deploy.sh
│   │   ├── 🚀 run-dev-servers.sh
│   │   └── ...
│   ├── 📜 logs
│   ├── 🔒 .git
│   └── 💻 .vscode

```
