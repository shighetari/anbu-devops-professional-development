# Introduction

This document outlines the plan for the ANBU DevOps project. The goal of this project is to provide a training environment for junior developers to practice best practice concepts and solid coding patterns, all within a project that has proper engineering concepts and architecture, with devops concepts taken into practice.

# Technologies

The following technologies will be utilized in this project:

- Spring Boot: A robust Java-based framework for building web applications using a model-view-controller (MVC) architecture.
- Hibernate: An Object-Relational Mapping (ORM) tool for data persistence and efficient data management in a relational database.
- Gradle: A build automation tool that facilitates dependency management and supports multiple programming languages.
- Angular: A popular JavaScript framework for building dynamic, single-page web applications.
- Kafka: A distributed streaming platform for building real-time data pipelines and streaming applications.
- Docker: A containerization platform that enables the packaging and deployment of applications in a lightweight, portable format.
- Keycloak: An open-source identity and access management solution for securing web applications and APIs.
- Terraform: A tool for provisioning and managing cloud infrastructure as code.
- AWS: A widely-used cloud computing platform that provides a range of services for hosting, storage, and data processing.
- Docker Swarm: A native clustering solution for Docker, that turns a pool of Docker hosts into a single, virtual host.
- Jenkins: A popular open-source automation server that supports continuous integration and deployment.
- .bat and .sh files: Scripts for automating tasks such as setting up the developer environment and deploying the application.
- Java and TypeScript: Programming languages used for building the backend and frontend respectively.
- JSON, Dockerfiles, env, git: Additional syntax and technologies used in the project.

# File Structure

The main root directory of the project is called "ANBU DevOps" and it contains a child directory which is the root directory for the full stack project and is called "Karuma".





# ANBU DevOps


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