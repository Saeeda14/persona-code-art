# 🌐 `my-website` — App + Docker + CI/CD (ECR → Ansible)

👉 [Visit the site here](https://saeeda.me)

This repository contains the website application (codebase generated with **Lovable**) and a **GitHub Actions** pipeline that:

1) Builds a production image with a **multi-stage Dockerfile**  
2) Pushes the image to **Amazon ECR** (tagged with both the commit SHA and a stable `dev` tag)  
3) SSHes into the **Ansible Controller** and runs the deployment playbook to roll out the image across the EC2 Auto Scaling Group

The infrastructure this targets is provisioned by the **`aws-infra-tf`** repo (VPC, ALB, ASG, ECR, IAM, etc.).

---

## 🚀 What happens on a push to `main`

1. **AWS auth** – GitHub Actions configures AWS credentials from repo secrets.  
2. **ECR login** – Runner logs into your account’s ECR registry.  
3. **Build & push** – A multi-arch image (`linux/amd64, linux/arm64`) is built and pushed to ECR with two tags:
   - **`${{ github.sha }}`** → immutable, traceable build
   - **`dev`** → stable tag used by the ASG user-data so new/replaced EC2s auto-pull the latest website on boot
4. **Controller access** – The workflow starts an SSH agent, trusts the controller host key, and connects using `ANSIBLE_SSH_PRIVATE_KEY`.  
5. **Deploy** – On the Ansible controller:
   - It runs `ansible-playbook playbooks/deploy.yml`, loading variables from the encrypted `group_vars/all/vault.yml`
   - The playbook **logs in to ECR**, **pulls the image tag** that was just pushed, and **restarts the container** on all fleet nodes behind the ALB.


---

### Multi-stage Dockerfile (Node → Nginx)
- **Stage 1 (builder)**: Node 20 Alpine
  - Installs dependencies with `npm ci`
  - Builds the production bundle to `/app/dist`
- **Stage 2 (runtime)**: Nginx Alpine
  - Replaces the default site conf with an SPA-friendly `nginx.conf`
  - Serves static files from `/usr/share/nginx/html`
### Multi-stage Dockerfile (Node → Nginx)
- **Stage 1 (builder)**: Node 20 Alpine
  - Installs dependencies with `npm ci`
  - Builds the production bundle to `/app/dist`
- **Stage 2 (runtime)**: Nginx Alpine
  - Replaces the default site conf with an SPA-friendly `nginx.conf`
  - Serves static files from `/usr/share/nginx/html`
  - **Healthcheck** probes `http://127.0.0.1`. The container automatically tests itself by making a request to http://127.0.0.1. If Nginx doesn’t respond, Docker knows something is wrong and can restart the container.

#### Why multi-stage?
- **Smaller image** → Build happens in Node, but only the finished files go into the Nginx image, so it’s lightweight.  
- **Faster to run** → With fewer files inside, the container starts up quicker.  
- **More secure** → Final image has just Nginx + static files (no Node or build tools).  

### Nginx configuration (SPA friendly)
- **Port 80** → The site runs on the normal web port (80).  
- **Cache static files** → Things like JS, CSS, and images are saved in the browser for a long time, making the site load faster.  
- **SPA routing** → If someone goes to a page like `/about`, Nginx serves `index.html` so the app’s router can handle it.  
- **Static site only** → Nginx just serves the built files, no server-side code is running.  

---


## 🔐 GitHub Actions: required repository secrets

Set these under **Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | CI credentials with ECR push permissions |
| `ANSIBLE_SSH_PRIVATE_KEY` | Private key used by CI to SSH into the Ansible controller |
| `ANSIBLE_HOST` | Public DNS/IP of the Ansible controller |
| `EC2_USER` | SSH username for the controller (e.g., `ubuntu`) |
| `AWS_ACCOUNT_ID` | Your 12-digit account ID (used by deploy step/envs as needed) |

> The controller itself retrieves **vault variables** and **vault password** from **AWS Secrets Manager** (defined and documented in the `ansible-controller-config` repo). Vault secrets are **not** stored in this repo.

---

## 🔄 Deployment flow (end-to-end)

1. Developer pushes to `main` in **`my-website`**  
2. GitHub Actions builds and pushes image to **ECR** (tags: commit SHA + `dev`)  
3. Same workflow connects to **Ansible Controller** and runs the **deploy playbook**  
4. Playbook:
   - Logs into ECR
   - Pulls `${{ github.sha }}` for deterministic release
   - Restarts the container (Nginx serving your static site) on all ASG instances behind the ALB  
5. Users hit the **ALB** over HTTPS and get routed to healthy EC2 targets

---

## 🧪 Local development

- **Build locally**
  ```bash
  docker build -t my-website:local .
  docker run -p 8080:80 my-website:local
  # visit http://localhost:8080

---
