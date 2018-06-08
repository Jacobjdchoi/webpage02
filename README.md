;and == && for fish

dev
rm -rf node_modules ;and npm install ;and npm run dev


deploy
rm -rf node_modules ;and npm install ;and npm run build ;and git add -A ;and git commit -m "some bugs fixed" ;and git push origin master ;and docker-compose -f docker-compose.nginx.yml build ;and docker-compose -f docker-compose.nginx.yml push