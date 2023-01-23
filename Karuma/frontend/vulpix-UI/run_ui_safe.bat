copy .env.example .env
docker-compose down && docker-compose rm -v -f
yarn build
docker-compose up -d --build --force-recreate
