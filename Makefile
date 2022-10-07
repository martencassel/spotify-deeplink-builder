default:
	docker build -t web:latest .

start: default
	docker rm -f web
	docker container run -d -p 9090:80 --name web web:latest
