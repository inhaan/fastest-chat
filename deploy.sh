#!/bin/bash

# Load environment variables from .env file
if [ -f .env.production ]; then
  export $(cat .env.production | xargs)
else
  echo ".env.production file not found!"
  exit 1
fi

# Build Docker image
docker build -t $IMAGE_NAME .

# Save Docker image to tar file
docker save -o $TAR_FILE_NAME $IMAGE_NAME

# Copy tar file to remote server
scp $TAR_FILE_NAME $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/$TAR_FILE_NAME



# SSH into remote server and perform deployment
ssh $REMOTE_USER@$REMOTE_HOST << EOF
  docker stop $CONTAINER_NAME || true
  docker rm $CONTAINER_NAME || true
  docker rmi $IMAGE_NAME || true
  docker load -i $REMOTE_PATH/$TAR_FILE_NAME
  docker run -d -p 5000:5000 --name $CONTAINER_NAME $IMAGE_NAME  
  rm $REMOTE_PATH/$TAR_FILE_NAME
EOF

# Remove local tar file
rm $TAR_FILE_NAME