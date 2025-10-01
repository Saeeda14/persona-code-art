# My Website (website code + GitHub Actions CI/CD)

## Project info
This is my website project. This repository contains the **application code** (lovable website) and a **GitHub Actions pipeline**  
to containerize it with Docker, push to AWS ECR, and deploy via Ansible.

**URL**: https://saeeda.me

## 🚀 Features
- Static website (Lovable Website codebase)
- Containerized using **Nginx** (Dockerfile)
- GitHub Actions pipeline:
  1. Build Docker image
  2. Push to **Amazon ECR**
  3. SSH into **Ansible Controller**
  4. Run playbook to deploy on all EC2s in the ASG

## 📂 Structure
my-website/
├── Dockerfile
├── nginx.conf
├── src/
│ ├── index.html
│ ├── styles.css
│ └── script.js
└── .github/
└── workflows/
└── deploy.yml

## Deployment Pipeline
Trigger

Runs automatically on main branch pushes.

## Secrets Required

AWS_ACCESS_KEY_ID / AWS_SECRET_ACCESS_KEY

ANSIBLE_SSH_PRIVATE_KEY

ANSIBLE_HOST

EC2_USER

## Workflow

Logs in to ECR

Builds image and tags with commit SHA (or stable)

Pushes image to ECR

SSHs to Ansible controller

Runs playbooks from ansible-controller-config

