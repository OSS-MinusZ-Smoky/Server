Smoky. Server V1.0.0 - Alpha
===============================


Description
-----------

>This repository is middleware that can installed in data management center. This is just one example and can be used in many different ways.

>이 저장소는 정보 처리 센터에 설치될수있는 미들웨어입니다. 이것은 단지 한 예시므로 다양한 방식으로 사용할수있습니다.

>아두이노에서 데이터를 받아와서 웹솔루션에 보여주는  실시간 모니터링 서비스를 제공하기 위해 아두이노 통신을 통해 넣어놓은 데이터 조회를 가능하게 해주는 Restful Server

Installation
------------
~~~

   ./{In Project Directory}     ./{프로젝트 root 경로에서}  

    $ npm install               $ npm install
    ...(It will take a while)   ...(조금 걸릴 것입니다.)

    $ node app.js               $ node app.js
    --> localhost:9999          --> localhost:9999

~~~

## 🔍 RestfulAPI server 소개

Request

`HTTP Method`

>GET

`URL Parameter`


| Name                              | Description                                    | Value-Type |
|-----------------------------------|------------------------------------------------|------------|
|/?city=cityname                    |get machine data from api server                |Object(json)|
|/data?doh=param&city=param&id=param|get card machine data from api server           |Object(json)|

Response

`HTTP Status Code`

200


>POST

`URL Parameter`


| Name          | Description                                                  | Value-Type |
|---------------|--------------------------------------------------------------|------------|
|status         |(required) smoke concentraion at one machine on real time     |Integer     |



Response

`HTTP Status Code`

200


## ⚙ 개발환경

* 개발환경 : MacOs, Window10, bracket,workbench,postman
* 배포환경 : AWS EC2
* 형상관리 : GitHub
* DB     : mysql
* 주요기술 :  Nodejs, mysql
