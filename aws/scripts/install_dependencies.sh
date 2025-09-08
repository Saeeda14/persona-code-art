#!/usr/bin/env bash
set -euxo pipefail

# Ubuntu/Debian
if command -v apt-get >/dev/null 2>&1; then
  export DEBIAN_FRONTEND=noninteractive
  apt-get update -y
  apt-get install -y docker.io unzip curl
  systemctl enable --now docker
fi

# RHEL/Amazon Linux
if command -v yum >/dev/null 2>&1; then
  yum install -y docker unzip curl || true
  systemctl enable --now docker || true
fi
if command -v dnf >/dev/null 2>&1; then
  dnf install -y docker unzip curl || true
  systemctl enable --now docker || true
fi

# AWS CLI v2 (install if missing)
if ! command -v aws >/dev/null 2>&1; then
  tmp="$(mktemp -d)"
  curl -fsSL "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "$tmp/awscliv2.zip"
  unzip -q "$tmp/awscliv2.zip" -d "$tmp"
  "$tmp/aws/install" --update
  rm -rf "$tmp"
fi
