# Online Compiler RestAPI built using NodeJs

## Heroku Deployment
go to your root dir and create your docker file with required dependencies

1. Create an app in heroku
```
    heroku create -a <your-app-name>
```

2.Push your container 
```
    heroku container:push web -a <your-app-name>
```

3.Finally release your app with

```
    heroku container:release web -a <your-app-name>
```
# TADA! your app is published at <your-app-name>/herokuapp.com

## Installation in your local

> Go to root directory **online-compiler-api/** and run following commands

1. Build docker image (this may take some time)

 ```
 docker build -t online-compiler-api
 ```

2. Run the container
```
docker run -p 3000:3000 online-compiler
```
### Starting API service on 3000 port (Make sure the port is not in use. If not change the port number in index.js).

```
npm start
```

Now visit http://localhost:3000/ this is your API endpoint( I have created a demo page to test the API)

This API support 5 languages
C, C++, Java, Python , Javascript/nodejs

## Language Ids

```
const id_lang = {
    49: c,
    54: cpp,
    71:python,
    63:node,
    62:java
}
```
## Request

```
{
	"language_id": "71",
	"source_code":"a,b,c= input(),input(),input()\nprint(a)\nprint(b)\nprint(c)",
	"stdin": "123\n321\nyogendra",
	"expected_output":"123\n321\nyogendra",
	"cpu_time_limit":3000
	
}
```

## Response Types

```
{
    "stderr": null,
    "memory": 1212416,
    "compile_output": null,
    "status": {
        "description": "Accepted"
    },
    "expected_output": "123\n321\nyogendra",
    "stdout": "123\n321\nyogendra"
}
```





