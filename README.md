# Online Compiler RestAPI built using NodeJs

## Installation

### Installing all requires packages
 
 ```
 npm i 
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





