
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

| :computer: |Link|Description|
|:---:|----|-----------|
||[Getting Started](https://github.com/devops-project/docs/getting-started.md)|A guide to getting :rocket: up and running with the project|
|  |[Contributing](https://github.com/devops-project/docs/contributing.md)|Information on how to :raised_hands: contribute to the project|
|  |[Development Guide](https://github.com/devops-project/docs/development-guide.md)|A guide to :hammer: developing the project|
|  |[Deployment Guide](https://github.com/devops-project/docs/deployment-guide.md)|A guide to :ship: deploying the project|
|  |[Documentation](https://github.com/devops-project/docs/)|A comprehensive :books: reference for the project|
|  |[Troubleshooting](https://github.com/devops-project/docs/troubleshooting.md)|A guide to :wrench: solving common issues|
|  |[Monitoring](https://github.com/devops-project/docs/monitoring.md)|A guide to :eyes: monitoring the project's performance|

# Technologies

:sparkles: **Technologies Used** :sparkles:

- :coffee: **Spring Boot**: A robust Java-based framework for building web applications using a model-view-controller (MVC) architecture.
- :sparkles: **Hibernate**: An Object-Relational Mapping (ORM) tool for data persistence and efficient data management in a relational database.
- :wrench: **Gradle**: A build automation tool that facilitates dependency management and supports multiple programming languages.
- :rocket: **Angular**: A popular JavaScript framework for building dynamic, single-page web applications.
- :bus: **Kafka**: A distributed streaming platform for building real-time data pipelines and streaming applications.
- :whale: **Docker**: A containerization platform that enables the packaging and deployment of applications in a lightweight, portable format.
- :lock: **Keycloak**: An open-source identity and access management solution for securing web applications and APIs.
- :earth_americas: **Terraform**: A tool for provisioning and managing cloud infrastructure as code.
- :cloud: **AWS**: A widely-used cloud computing platform that provides a range of services for hosting, storage, and data processing.
- :fish: **Docker Swarm**: A native clustering solution for Docker, that turns a pool of Docker hosts into a single, virtual host.
- :construction_worker: **Jenkins**: A popular open-source automation server that supports continuous integration and deployment.
- :hash: **.bat and .sh files**: Scripts for automating tasks such as setting up the developer environment and deploying the application.
- :computer: **Java and TypeScript**: Programming languages used for building the backend and frontend respectively.
- :file_folder: **JSON, Dockerfiles, env, git**: Additional syntax and technologies used in the project.

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
