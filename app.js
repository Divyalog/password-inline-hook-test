const express = require('express');
const {v4:uuid} = require('uuid');

const app = express();

app.use(express.json());

app.post('/pass', (request, response) => {
    
    const successResponse= {
        "commands":[
          {
            "type":"com.okta.action.update",
            "value":{
              "credential":"VERIFIED"
            }
          }
        ]
      }
      const failureResponse = {
        "commands":[
           {
              "type":"com.okta.action.update",
              "value":{
                 "credential":"UNVERIFIED"
              }
           }
        ]
     }
      console.log('Entering method postV1Authentication of  authentication-api-handler.js');
      console.log(request);
      const payload=request.body
      console.log(payload);
      
      const username=payload.data.context.credential.username;
      const password=payload.data.context.credential.password;
      if(username != "" && password != "")
      {
        console.log("SUCCESS")
        response.send(successResponse);
      }
      console.log("FAILURE")

    response.send(failureResponse);
    
});
app.get('/', (req, res) => {
    response = {
        "name": "Divya",
        "role": "developer"
    }
    console.log(response);
    res.send(response);
});

const port = process.env.PORT || '5000';
app.listen(port, () => console.log(`Server started on Port ${port}`));