API Docs are very important for your product to be able to scale, and it seems like people still have trouble creating them. Swagger is one of the easiest ways to compile your API endpoints and list them in way that any developer and indeed any other part of your team can access them. It is based on OpenAPI's specification and has become the default standard for most API Docs around the world.

In this article, I will show you how to create API endpoints and enlist them on Swagger so that your team can test and integrate them easily. It's always nice to have the company's API docs stacked somewhere like Swagger for easy access. So if you are a backend developer, QA engineer, or technical writer, you should be reading this.

Setting up Swagger in an API Server
-----------------------------------

Before you write API docs, you need a working API server. You can only document what already exists. I always start small so the documentation stays accurate and easy to maintain.

In this section, I will show you how I create a simple REST API in Node.js and connect it to Swagger with the OpenAPI specification. This setup will give you access to live documentation, then you will be able to test each endpoint right there on the Swagger UI.

### Step 1: Basic Node.js API Server

Create a new directory for your project and initialize the project with this command:

npm init -y

This command will create a `package.json` file in your project directory.

### Step 2: Install Dependencies

Install the required dependencies with the command below:

npm install express swagger-ui-express yamljs

Your `package.json` should come out like this

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*sMIo3Y7nWGUsOm-Vs0GiFw.png)

You will use Express to create the API server, `swagger-ui-express` will help you display the Swagger UI on your browser. `yamljs` is the one that will allow you parse the YAML strings to JavaScript objects and vice versa.

### Step 3: Create your API Server

Create a `server.js` file and paste the following code:

```js
const express = require("express");\
const swaggerUi = require("swagger-ui-express");\
const YAML = require("yamljs");\
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();\
const PORT = 1000;

// Middleware\
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {\
  res.send("Welcome to the API server!");\
})

app.listen(PORT, () => {\
  console.log(`API server running at http://localhost:${PORT}`);\
});
```

In the code above, we created a simple Node.js API server with Express. We are loading an API definition from a YAML file and using Swagger UI to render interactive API documentation in your browser. When you visit `/api-docs`, Swagger should display all your API endpoints with their request methods along with the important request parameters that you will specify in the YAML file later.

### Step 4: Set Up Swagger Documentation in a Yaml File

Create a Swagger documentation file in your root folder. You can name it `swagger.yaml`.

Here's what it might look like:

```yml
openapi: 3.0.0\
info:\
  title: Sample API\
  description: Simple API documentation example using Swagger and Express\
  version: 1.0.0

paths:\
  /:\
    get:\
      summary: Welcome endpoint\
      description: Returns a welcome message to confirm the API server is running\
      responses:\
        "200":\
          description: Successful response\
          content:\
            text/plain:\
              schema:\
                type: string\
                example: Welcome to the API server!
```

The code above describes how your API should work in a structured, machine-readable format. It tells Swagger the base URL of your API, which endpoints exist, what HTTP methods they support, and what responses to expect. So Swagger can use this file to generate the API documentation and testing tools for you.

### Step 5: Run the Server

Start your server and run the code with the following commands:

```bash
npm run start\
node server.js
```

This is what you will see this on your local browser at this point

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*54eBClYQItRaULoPY2HPTg.png)

Switch to `http://localhost:1000/api-docs` to access the API documentation on Swagger UI.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*iA9w0ofNzDAfRWLG7yZX4w.png)

This is the basis of using Swagger, Click on the arrow to the right to expand it so that you can see the API endpoint details.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*qmnTYLDyKoIWJ8MAI_ncnw.png)

For now. all we have is a dummy API endpoint but you can still see the it's details and even "Try it out" i.e. send a request and see the response you get. Click "Execute" to send the request

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*nNessGTaxrpKkKfWSToI2g.png)

When you send the request, if you configured everything correctly in the YAML file, you should see every necessary parameter that the API entails i.e. the request URL, the cURL representation, as well as the response structure.

Creating CRUD APIs and Documenting Them
---------------------------------------

In our previous example, we created an API server and a sample API endpoint with a GET request. A GET request is a type of request that typically retrieves data from the API server. You use it when you want to read information without changing anything.

People use APIs for more than just reading data. CRUD stands for Create, Read, Update, and Delete. These are the most common actions that typical API endpoints perform.

These are the types of requests you can make and the actions they perform:

-   If you want to create data, use a `POST` request.
-   We already established that you can read data with a `GET` request.
-   You can modify/update data with a `PUT` request (There is also `PATCH` request that you can use to partially update data)
-   You can delete/remove data with a `DELETE` request.

Follow the steps below to learn how to create CRUD API servers and list them on Swagger:

### Step 1: Set up the API Server

Update your `server.js` file to include CRUD operations. For the sake of this article, we will be using very simple set of data for demonstration.

```js
const express = require("express");\
const swaggerUi = require("swagger-ui-express");\
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();\
app.use(express.json());

let items = [];\
let idCounter = 1;
```

The code above is a simple API server with two variables defined. `items` will store the sample data in memory while `idCounter` will help assign a unique id to each item.

### Step 2: Create the POST Endpoint (Create)

Now you add your first CRUD operation. This endpoint lets you create a new item.

```
app.post("/items", (req, res) => {\
  const item = {\
    id: idCounter++,\
    name: req.body.name,\
  };

  items.push(item);\
  res.status(201).json(item);\
});
```

This endpoint reads data from the request body, assigns a unique ID and stores the item in memory. This is your Create operation in CRUD.

You can document this endpoint correspondingly in your `swagger.yaml` file. Here's how;
```yml
/items:\
  post:\
    summary: Create a new item\
    requestBody:\
      required: true\
      content:\
        application/json:\
          schema:\
            $ref: "#/components/schemas/ItemInput"\
    responses:\
      "201":\
        description: Item created\
        content:\
          application/json:\
            schema:\
              $ref: "#/components/schemas/Item"
```
This step gives Swagger the exact details it needs about the API endpoint you just created, so people can test it easily. `requestBody` shows Swagger what data the API expects while `responses` explain what the API returns. Swagger uses this information to generate form inputs in the Swagger UI. So now you can create items directly from the browser.

### Step 3: Create the GET Endpoint (Read All)

This is how to setup an endpoint to retrieve all items in memory.

```js
app.get("/items", (req, res) => {\
  res.json(items);\
});
```

This endpoint returns all stored items. You use it when you want to read existing data without modifying anything

Here's how to document it in your `swagger.yaml` file:

```yml
/items:\
  get:\
    summary: Get all items\
    responses:\
      "200":\
        description: List of items\
        content:\
          application/json:\
            schema:\
              type: array\
              items:\
                $ref: "#/components/schemas/Item"
```

### Step 4: Create the GET Endpoint by ID (Read One)

You can allow users to fetch a single item using its ID. Here's how;

```js
app.get("/items/:id", (req, res) => {\
  const item = items.find(\
    (i) => i.id === Number(req.params.id)\
  );

  if (!item) {\
    return res.status(404).json({ message: "Item not found" });\
  }

  res.json(item);\
});
```

This endpoint introduces path parameters, basic error handling, and a clear response when data does not exist. Swagger will later document this parameter automatically.

Here's how to document it in your `swagger.yaml` file:

```yml
/items/{id}:\
  get:\
    summary: Get item by ID\
    parameters:\
      - name: id\
        in: path\
        required: true\
        schema:\
          type: integer\
    responses:\
      "200":\
        description: Item found\
        content:\
          application/json:\
            schema:\
              $ref: "#/components/schemas/Item"\
      "404":\
        description: Item not found
```

### Step 5: Create the PUT Endpoint (Update)

Now you can add the Update operation.

```js
app.put("/items/:id", (req, res) => {\
  const item = items.find(\
    (i) => i.id === Number(req.params.id)\
  );

  if (!item) {\
    return res.status(404).json({ message: "Item not found" });\
  }

  item.name = req.body.name;\
  res.json(item);\
});
```

This endpoint finds an existing item, updates its values, and returns the updated resource. This completes the Update part of CRUD.

Here's how you can document it in your `swagger.yaml` file.

```yml
put:\
  summary: Update item by ID\
  parameters:\
    - name: id\
      in: path\
      required: true\
      schema:\
        type: integer\
  requestBody:\
    required: true\
    content:\
      application/json:\
        schema:\
          $ref: "#/components/schemas/ItemInput"\
  responses:\
    "200":\
      description: Item updated\
      content:\
        application/json:\
          schema:\
            $ref: "#/components/schemas/Item"\
    "404":\
      description: Item not found
```

If you document it like this, you will be able to enter the item's id, update the request body, and send the update request right there on the Swagger UI.

### Step 6: Create the DELETE Endpoint (Delete)

You can also allow users to remove or delete data.

```js
app.delete("/items/:id", (req, res) => {\
  const index = items.findIndex(\
    (i) => i.id === Number(req.params.id)\
  );

  if (index === -1) {\
    return res.status(404).json({ message: "Item not found" });\
  }

  items.splice(index, 1);\
  res.status(204).send();\
});
```

This endpoint deletes an item by ID and returns a `204 No Content Response` when successful. Now you have a complete CRUD API server.

Here's how to document a `DELETE` endpoint on Swagger:

```yml
delete:\
  summary: Delete item by ID\
  parameters:\
    - name: id\
      in: path\
      required: true\
      schema:\
        type: integer\
  responses:\
    "204":\
      description: Item deleted\
    "404":\
      description: Item not found
```

### Step 7: Run your Server

Run your server with the following command:

```bash
node server.js
```

When you navigate to the `/api-docs` route, you should see your API endpoints listed on Swagger like this:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*-iFbWBt12n3a1rnYRXCw4A.png)

Testing the CRUD Endpoints in Swagger UI
----------------------------------------

Now we have created the CRUD API endpoints, it's time to test whether they actually work. Swagger make this easy because you can actually test each endpoint created right there on the Swagger UI. You don't need to take it to a testing tool like postman, that's the beauty of using Swagger as your first step to API documentation.

### Testing the CREATE Endpoint (POST)

You can start with the POST endpoint and try to use it to create a new item in our little database. Follow the steps below to effectively test this endpoint:

Expand the `POST` endpoint with the arrow at the far right of the endpoint bar container.

Click "Try it Out" to start engaging with the API endpoint.

You will see the endpoint's parameters with some dummy data in the request body and the API's response. Edit the request body to add a new item to the DB like this:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*bxrJDcnAaZopUySah-wq6g.png)

Click "Execute" to add this new name to the DB, then check what the response structure looks like:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*Uan5xdqBGh7RkfFBC83VaA.png)

The response structure consists of what the cURL version of the API request will look like

```bash
curl -X 'POST' \\
  'http://localhost:2000/items' \\
  -H 'accept: application/json' \\
  -H 'Content-Type: application/json' \\
  -d '{\
  "name": "balon dorgu"\
}'
```

You can actually copy and paste this in your terminal and you will get the same response Swagger gives you, which is the new name we created.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*Xe5WplZbzM8rkzEZi711vA.png)

The API's response structure on Swagger always comes with the request URL, the server response code and an updated request body, along with some response headers.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*iKkqzJ1jdhbL92gZAWbY9g.png)

The `201` server code we got proves that our API request and Swagger documentation worked and we have created a new item in our database. Next step is to "GET" that new item we have created.

### Testing the READ Endpoints (GET)

To test the `GET` endpoints, it's almost the same process but this time you just Swagger to retrive the item(s) available in the DB. To get

Once again, expand the API endpoint bar then click "Try it Out"

Next, click "Execute"

1.  For `GET/items` , here's the response you will get:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*3AHFBH7Jpfqy5zkDFyh8uw.png)

Here you can see 2 objects that contain an id and a name, the `200` response means the request worked.

To get a particular item from the DB, you have to specify that item's ID in the API's path parameter before sending the `GET` request. Here's how:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*dAY1H9W0hnnqIJaBO3lSbA.png)

When you click "Execute", the API's response will provide the object with that ID.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*b_p_4wgbRxby3jNGMGXfpQ.png)

### Testing the UPDATE Endpoint (PUT)

This endpoint updates an existing item in the DB.

1.  When you click "Try it Out" you need to provide the item's ID i.e. the item that you want to update in the API's path parameter.

2\. You then make your required change in the API's request body before you click "Execute"

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*TPG7j4_Fwj0hm3COPirt8w.png)

This is the response structure you should get:

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*Um0mf5jTf_iJ_C8oWFVB9Q.png)

3\. Remember that the item with ID number 2 had a `balon dorgu` as the name, now it's `updated item` . You can now go back to the `GET/items/{id}` request and execute it again to confirm if the name has indeed been updated.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*ekVwrJ5P9cMIz4QltMkHmg.png)

### Testing the DELETE Endpoint (DELETE)

Finally you test the `DELETE` endpoint, this endpoint effectively deletes items from the DB. You just have to provide the ID for that item in the API's path parameter.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*9VN-PmIy46zge04wTzkA3Q.png)

When you click "Execute" that item with ID 2 should be delected from our DB.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*N6hHVhTnAn1MiqY1oFgtsQ.png)

The server responded with a `204` , that means the item has been deleted. Try to run the `GET/items` request again to confirm if the item with the ID number 2 has really been deleted.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*6XbYXsV0UkblWs_e4-p04g.png)

Now you can see that the item with the ID number 2 doesn't exist in the DB anymore.

Adding API Key Authentication with Swagger
------------------------------------------

Most APIs in production are usually protected and would require API key authentication before you can even get access to the endpoints in the first place. An API key acts like a shared secret, you and your team will have to send this key with every request then the server checks it before it will allow you interact with the API endpoint.

### Step 1: Set up the API Key in the Server

First, you need to add a small middleware to the API server. This middleware checks for an API key in the request headers before allowing access.

Here's the middleware:

```js
const API_KEY = "my-secret-api-key";

const apiKeyAuth = (req, res, next) => {\
  const apiKey = req.header("x-api-key");

  if (!apiKey || apiKey !== API_KEY) {\
    return res.status(401).json({ message: "Unauthorized" });\
  }

  next();\
};
```

The code above checks whether the request includes a valid API key. If you send the request with a wrong API key or without a key at all, the server will a respond with a `401` unauthorized error.

### Step 2: Apply Authentication to the API Endpoints

Apply the auth middleware to the CRUD endpoints.

Here's how:\
```js
app.get("/", (req, res) => {\
  res.send("Welcome to the API server!");\
});

app.post("/items", apiKeyAuth, (req, res) => {\
  const item = {\
    id: currentId++,\
    name: req.body.name,\
  };\
  items.push(item);\
  res.status(201).json(item);\
});

app.get("/items", apiKeyAuth, (req, res) => {\
  res.json(items);\
});

app.get("/items/:id", apiKeyAuth, (req, res) => {\
  const item = items.find(i => i.id === Number(req.params.id));\
  if (!item) {\
    return res.status(404).json({ message: "Item not found" });\
  }\
  res.json(item);\
});

app.put("/items/:id", apiKeyAuth, (req, res) => {\
  const item = items.find(i => i.id === Number(req.params.id));\
  if (!item) {\
    return res.status(404).json({ message: "Item not found" });\
  }\
  item.name = req.body.name;\
  res.json(item);\
});

app.delete("/items/:id", apiKeyAuth, (req, res) => {\
  const index = items.findIndex(i => i.id === Number(req.params.id));\
  if (index === -1) {\
    return res.status(404).json({ message: "Item not found" });\
  }\
  items.splice(index, 1);\
  res.status(204).send();\
});
```

In the code above, we add the `apiKeyAuth` middleware to the CRUD routes. Every request to these endpoints must now include a valid API key. The server will respond with a `401` unauthorized error if you send a request to these endpoints without an API key or an incorrect one.

### Step 3: Define the API Key in Swagger

Swagger needs to understand how you have set the authentication for the APIs. Add this under components in your `swagger.yaml` file.

```yml
components:\
  securitySchemes:\
    ApiKeyAuth:\
      type: apiKey\
      in: header\
      name: x-api-key
```

The code above tells Swagger that the authentication method uses an API key, that the key exists in the request header, and the header name is `x-api-key`

### Step 4: Apply Authentication to the Documentation

At this point, the server already enforces authentication. Now you need to tell Swagger which endpoints require an API key. You can secure all your endpoints globally on Swagger or you can secure particular endpoints, it all depends on how your API works.

If all your API endpoints require an API key, you can document them in your `swagger.yaml` file

```yml
security:\
  - ApiKeyAuth: []
```

This single block tells Swagger that all API endpoints require authentication.

Sometimes, you want public endpoints and protected endpoints in the same API. In that case, you can apply authentication only to specific endpoints like this:

```yml
/items:\
  get:\
    security:\
      - ApiKeyAuth: []\
    summary: Get all items\
    responses:\
      "200":\
        description: Successful response
```

Step 5: Test the Authentication on Swagger
------------------------------------------

Once everything is in place, Swagger UI will automatically update. You will notice a lock icon next to protected endpoints and an "Authorize" button at the top of the page.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*_UvUYRNI4zkNvU97Skc-jw.png)

When you click "Authorize" you will be prompted to input your API key to grant you access to the endpoints.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*zYlWBpVRp1PJw8gyt--dQQ.png)

You enter your API key once, and Swagger will send it with every request that requires an API key.

If you send a request and you don't input the right API key, or you don't input an API key at all, the endpoints that require it will always throw a `401` error response like this.

Press enter or click to view image in full size

![](https://miro.medium.com/v2/resize:fit:1400/1*PispwoufkMv4XTfOMQlA6g.png)

Conclusion
----------

People use Swagger for 2 main things, i.e. to document the API and to test it all at once in the same UI. If you document your API endpoints on a ReadMe file or with Confluence, you have to go and test them with another platform like Postman. That process can be very redundant especially when you can just set it up on Swagger and test your API endpoints right there.

In this article, we explored API documentation with Swagger from start to finish. You saw how an API server works, how to create and expose API endpoints, how to add CRUD operations, and how Swagger automatically turns those definitions into interactive API docs. You also saw how Swagger allows you to send requests in real time, inspect responses, and catch errors early without leaving your browser.

Goodluck with your API Documentation!