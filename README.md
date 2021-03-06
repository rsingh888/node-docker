# node-docker

A simple node application to run inside docker. This application can be run from command prompt directly or can be executed inside docker.
This application takes calls CoinMarketCap API to get market cap of that crypto currency in USD.

## Getting Started

This application can be run from command prompt directly or can be executed inside docker.

## To run inside docker

### Prerequisites

Docker should installed on local machine

```
Please refer to docker docs on how to install docker on different OS
https://docs.docker.com/install/
```

### Installing



1. Clone the repository

```
git clone https://github.com/rsingh888/node-docker
```

2. Build docker image

```
cd node-docker
docker build -t node-docker .  
or 
sudo docker build -t node-docker (if current user does not have permission to run docker commands)
```


### Running

To run this application inside docker image to get market cap (in USD) of a crypto currency

```
docker run -e CRYPTO_CURRENCY=<<crypto Currency Name>> node-docker  
or 
sudo docker run -e CRYPTO_CURRENCY=<<crypto Currency Name>> node-docker(if current user does not have permission to run docker commands)
```

Example
```
docker run -e CRYPTO_CURRENCY=bitcoin node-docker
or
docker run -e CRYPTO_CURRENCY=ripple node-docker
```

### Output

It should produce output like

```
Crypto Currency Name : Bitcoin
Crypto Currency Symbol : BTC
Crypto Currency Market Cap(USD) : 112162244950
```

## To run directly from command prompt

### Prerequisites

nodeJS should installed on local machine

```
Please refer to below link on how to install node on different OS
https://nodejs.org/en/download/

```

### Installing


1. Clone the repository

```
git clone https://github.com/rsingh888/node-docker
```

2. Build application

```
cd node-docker
npm install
```


### Running

To run this application from command line

edit .env file for the crypto currency name of which you need to know market cap
CRYPTO_CURRNECY=bitcoin

```
npm start
```

or run as a single command
```
set CRYPTO_CURRENCY=<<crypto currency name>>&&npm start
example
set CRYPTO_CURRENCY=ethereum&&npm start
```

### Output

It should produce output like

```
Crypto Currency Name : Ethereum
Crypto Currency Symbol : ETH
Crypto Currency Market Cap(USD) : 36580784028.0
```

## Authors

* **Rajeev Singh** - *Initial work* - (https://github.com/rsingh888)