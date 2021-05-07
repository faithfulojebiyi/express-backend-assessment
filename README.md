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

### Park car

```http
  POST /api/parkcar
```

| Parameter   | Type     | Description                                 |
| :---------- | :------- | :------------------------------------------ |
| `carnumber` | `string` | **Required**. The number of the car to park |

#### Response

If car does not exist in parking lot

```
{
  "message": {
    "slot": "9",
    "carNumber": "2012a2"
  }
}
```

if car exists

```
{
  "message": "Car is already parked"
}
```

### Upark Car

```http
  POST /api/unparkcar
```

| Parameter | Type     | Description                                  |
| :-------- | :------- | :------------------------------------------- |
| `slot`    | `string` | **Required**. slot of the car to unpark from |

#### Response

If slot was filled (where 9 is the slot that was just freed)

```
{
  "message": "Car in slot 9 is unparked. Slot 9 is now free"
}
```

if slot was empty

```
{
  "message": "This slot is already free"
}
```

### Get Car

```http
  GET /api/getcar?query=Parameter
```

| Parameter           | Type     | Description                               |
| :------------------ | :------- | :---------------------------------------- |
| `slot or carnumber` | `string` | **Required**. slot or Car number to fetch |

#### Response

if car exists or slot is filled

```
{
  "message": "success",
  "cardata": {
    "slot": "7",
    "carNumber": "2062a2"
  }
}
```

if car does not exist or slot is empty

```
{
  "message": "success",
  "cardata": "Slot is free or car does not exist"
}
```

## Features

- Rate Limiter

#### Throws an error with status code `429` Too many requests

## Appendix

The code explanation has been done in the code using jsDocs format

## Authors

- [@faithfulojebiyi](https://github.com/faithfulojebiyi)
