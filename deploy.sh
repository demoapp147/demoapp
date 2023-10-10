docker build -t abdelmounaimazz/backend:latest -t abdelmounaimazz/backend:$SHA -f ./backend/Dockerfile ./backend
docker build -t abdelmounaimazz/client:latest -t abdelmounaimazz/client:$SHA -f ./client/Dockerfile ./client

docker push abdelmounaimazz/backend:latest
docker push abdelmounaimazz/client:latest

docker push abdelmounaimazz/backend:$SHA
docker push abdelmounaimazz/client:$SHA

