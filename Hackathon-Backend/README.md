local:
npm install
npm run start

Docker:
IP: docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <contaner name>

docker-compose build

docker-compose up