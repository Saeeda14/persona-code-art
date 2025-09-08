#!/usr/bin/env bash
set -euxo pipefail

# Name of your container (matches your SSH script)
CONTAINER_NAME="myapp"

# Stop and remove if exists
docker rm -f "$CONTAINER_NAME" || true
