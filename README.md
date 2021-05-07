# Nas Daily Back End Assessment

A simple server thet manages a parking lot that is rate-limited by ip

## Project set up

- Unzip the project into your desired work space

## Run Locally

Unzip the project into your desired work space

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`LOTSIZE`

`PORT`

`NODE_ENV`

## API Reference

#### Park a car

```http
  POST /api/parkcar
```

| Parameter   | Type     | Description                                 |
| :---------- | :------- | :------------------------------------------ |
| `carnumber` | `string` | **Required**. The number of the car to park |

#### Park Car

```http
  POST /api/unparkcar
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `slot`    | `string` | **Required**. slot of the car to unpark from |

#### Get Car

```http
  GET /api/getcar?query=Parameter
```

| Parameter           | Type     | Description                               |
| :------------------ | :------- | :---------------------------------------- |
| `slot or carnumber` | `string` | **Required**. slot or Car number to fetch |

## Features

- Rate Limiter

## Appendix

The code explanation has been done using th the code using jsDocs format

## Authors

- [@faithfulojebiyi](https://github.com/faithfulojebiyi)
