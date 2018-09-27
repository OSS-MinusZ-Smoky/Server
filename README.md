Smoky. Server V1.0.0 - Alpha
===============================


Description
-----------

>This repository is middleware that can installed in data management center. This is just one example and can be used in many different ways.

>이 저장소는 정보 처리 센터에 설치될수있는 미들웨어입니다. 이것은 단지 한 예시므로 다양한 방식으로 사용할수있습니다.

Installation
------------
~~~

   ./{In Project Directory}     ./{프로젝트 root 경로에서}  

    $ npm install               $ npm install
    ...(It will take a while)   ...(조금 걸릴 것입니다.)

    $ node app.js               $ node app.js
    --> localhost:9999          --> localhost:9999

~~~

Usage
-----

Request

*HTTP Method

>POST

*URL Parameter

~~~
| Name          | Description                                                  | Value-Type |
|---------------|--------------------------------------------------------------|------------|
|apikey         |(required) private key that is proof real value at one machine|<String>    |
|city           |(required) classify the machine's location                    |<Stiing>    |
~~~

>Response

*HTTP Status Code

>200
