# Data Transformation Platform + DataCROP

QU4LITY Data Transformation Platform + Data Collection ROuting & Processing platform intergration

## Security recommendations

All usename and passwords are ```qu4lity``` by default. We strongly recommend changing them before putting it into production. They can be found on ```docker-compose.yml``` as environment variables. They can also be found on ```mongo/entrypoint/init.js``` for MongoDB.

## Starting up

In order to put the project working, you must execute the following command (```docker``` and ```docker-compose``` must be already installed) in the folder where ```docker-compose.yml``` is:

```bash
docker-compose up -d
```

This will create and start 4 containers:

1. Node-RED => at port 1880
1. RabbitMQ => at port 5672 (management at port 15672)
1. MongoDB => at port 27017
1. MongoDB Express => at port 8081

The first time we run the containers, the username and password for RabbitMQ should be added to node-red nodes connecting to RabbitMQ. In order to do that we have to access Node-RED (e.g. ```http://localhost:1880```) and edit the configuration nodes (```amqp-server node``` and ```mongodb node```):

* amqp-server node: adding the username and password in the security tag.
* mongodb node: adding the username and password directly in the configuration node.

Deploy the changes and the connections to RabbitMQ and Mongo should be working.

The containers are stopped using the following command:

```bash
docker-compose down
```

## Testing

We will send a AMQP message through RabbitMQ, receive it and add the content to a MongoDB collection. Then we will the endpoint to retrieve the entire collection.

1. Open Node-REd in a browser (e.g. ```http://localhost:1880).
1. Go to RabbitMQ tab and press the blue button (inject node).
1. Open the HTTP endpoint in a browser: (e.g. ```http://localhost:1880/get/UserCollection```) for UserCollection.
1. A user with ```admin``` username should be visible.

## License

This project is distributed under MIT license (see LICENSE).

## Authoring

Developed at Mondragon Unibertsitatea during the participation of the European project [Qu4lity](https://qu4lity-project.eu/).

Main contributors:

* [Alain Perez Riaño](https://www.mondragon.edu/en/bachelor-degree-computer-engineering/lecturers/-/profesor/alain-perez-riano).
* [Felix Larrinaga Barrenechea](https://www.mondragon.edu/en/bachelor-degree-computer-engineering/lecturers/-/profesor/felix-larrinaga-barrenechea).
* 
