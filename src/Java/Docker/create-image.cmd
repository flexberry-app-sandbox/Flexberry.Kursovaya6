docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya6-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya6-java/app ../../..
