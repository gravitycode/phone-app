Phone App
==================================

REST Endpoints
---------------

**Phone**
GET /phones


**Orders**
POST /orders

Request
```json
{
	"name": "Antonio",
	"surname": "Hernandez de la rosa",
	"email": "a.hernandez@gravitycode.es",
	"phones": [1, 2]
}
```
Response

```json
{
    "name": "Antonio",
    "surname": "Hernandez de la rosa",
    "email": "a.hernandez@gravitycode.es",
    "phones": [
        1,
        2
    ],
    "totalPrice": 2110
}
```


Run
---------------

```sh
# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

Docker Support
------
```sh
cd phone-app

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```
