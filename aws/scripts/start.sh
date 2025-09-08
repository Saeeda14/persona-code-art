#!/usr/bin/env bash
set -euxo pipefail

# ====== EDIT THESE 3 VALUES ======
REGION="us-east-1"
ACCOUNT_ID="886687538523"
REPOSITORY="my-dev-ecr-repo"
# =================================

CONTAINER_NAME="myapp"
HOST_PORT=80

# If CodePipeline/Build gives you a tag via environment, you can export IMAGE_TAG before deploy.
# Otherwise default to 'latest' or fall back to a file you write during build.
IMAGE_TAG="${IMAGE_TAG:-latest}"

# Login to ECR
aws ecr get-login-password --region "$REGION" \
  | docker login --username AWS --password-stdin "${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com"

# Pull and run
IMAGE_URI="${ACCOUNT_ID}.dkr.ecr.${REGION}.amazonaws.com/${REPOSITORY}:${IMAGE_TAG}"
docker pull "$IMAGE_URI"

# Ensure old container removed (in case ApplicationStop didn't run)
docker rm -f "$CONTAINER_NAME" || true

docker run -d -p ${HOST_PORT}:80 --name "$CONTAINER_NAME" "$IMAGE_URI"
