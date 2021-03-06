define({ "api": [
  {
    "type": "delete",
    "url": "/api/product/:id",
    "title": "Delete a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>product description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "DeleteApiProductId"
  },
  {
    "type": "delete",
    "url": "/api/product/:id",
    "title": "Delete a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>product description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.ts",
    "groupTitle": "Product",
    "name": "DeleteApiProductId"
  },
  {
    "type": "get",
    "url": "/api/product/:id",
    "title": "Get Product Detail",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"demo\",\n  \"description\":\"xxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "GetApiProductId"
  },
  {
    "type": "get",
    "url": "/api/product/:id",
    "title": "Get Product Detail",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"demo\",\n  \"description\":\"xxxxxxx\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.ts",
    "groupTitle": "Product",
    "name": "GetApiProductId"
  },
  {
    "type": "post",
    "url": "/api/product",
    "title": "Create a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>product description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "PostApiProduct"
  },
  {
    "type": "post",
    "url": "/api/product",
    "title": "Create a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>product description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.ts",
    "groupTitle": "Product",
    "name": "PostApiProduct"
  },
  {
    "type": "put",
    "url": "/api/product/:id",
    "title": "Update a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>product description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.js",
    "groupTitle": "Product",
    "name": "PutApiProductId"
  },
  {
    "type": "put",
    "url": "/api/product/:id",
    "title": "Update a product",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>product description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/:id"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.ts",
    "groupTitle": "Product",
    "name": "PutApiProductId"
  },
  {
    "type": "get",
    "url": "/api/product/userProductList/:userID",
    "title": "Get User Product",
    "group": "User_Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Product User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\":\"\",\n    \"desc\":\"\",\n    \"userId\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"Successfully Get User Product\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/userProductList/:userID"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.js",
    "groupTitle": "User_Product",
    "name": "GetApiProductUserproductlistUserid"
  },
  {
    "type": "get",
    "url": "/api/product/userProductList/:userID",
    "title": "Get User Product",
    "group": "User_Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Product User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\":\"\",\n    \"desc\":\"\",\n    \"userId\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"Successfully Get User Product\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/userProductList/:userID"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.ts",
    "groupTitle": "User_Product",
    "name": "GetApiProductUserproductlistUserid"
  },
  {
    "type": "post",
    "url": "/api/product/addProduct",
    "title": "Add Product",
    "group": "User_Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Product Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Product User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\":\"\",\n    \"desc\":\"\",\n    \"userId\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"New Product Created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/addProduct"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.js",
    "groupTitle": "User_Product",
    "name": "PostApiProductAddproduct"
  },
  {
    "type": "post",
    "url": "/api/product/addProduct",
    "title": "Add Product",
    "group": "User_Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Product Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>Product Description</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Product User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"name\":\"\",\n    \"desc\":\"\",\n    \"userId\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"New Product Created Successfully\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/product/addProduct"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/product/routes/product.route.ts",
    "groupTitle": "User_Product",
    "name": "PostApiProductAddproduct"
  },
  {
    "type": "delete",
    "url": "/api/user/deleteUser/:userId",
    "title": "Remove User Data",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"userId\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully Removed\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/deleteUser/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.ts",
    "groupTitle": "Users",
    "name": "DeleteApiUserDeleteuserUserid"
  },
  {
    "type": "delete",
    "url": "/api/user/deleteUser/:userId",
    "title": "Remove User Data",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"userId\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully Removed\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/deleteUser/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.js",
    "groupTitle": "Users",
    "name": "DeleteApiUserDeleteuserUserid"
  },
  {
    "type": "get",
    "url": "/api/user/listofuser",
    "title": "User's List",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/listofuser"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.ts",
    "groupTitle": "Users",
    "name": "GetApiUserListofuser"
  },
  {
    "type": "get",
    "url": "/api/user/listofuser",
    "title": "User's List",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\": \"demo\",\n  \"description\":\"demo\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Study\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/listofuser"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Product error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.js",
    "groupTitle": "Users",
    "name": "GetApiUserListofuser"
  },
  {
    "type": "get",
    "url": "/api/user/receiveUser/:userId",
    "title": "Get One User Data",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"userId\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully Get User Data\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/receiveUser/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.js",
    "groupTitle": "Users",
    "name": "GetApiUserReceiveuserUserid"
  },
  {
    "type": "get",
    "url": "/api/user/receiveUser/:userId",
    "title": "Get One User Data",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique Id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"userId\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Successfully Get User Data\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/receiveUser/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.ts",
    "groupTitle": "Users",
    "name": "GetApiUserReceiveuserUserid"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "User Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>Login User MobileNo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"\",\n  \"password\":\"\",\n  \"mobileNo\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Login Successfully!\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.js",
    "groupTitle": "Users",
    "name": "PostApiUserLogin"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "User Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>Login User MobileNo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"\",\n  \"password\":\"\",\n  \"mobileNo\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"Login Successfully!\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/login"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.ts",
    "groupTitle": "Users",
    "name": "PostApiUserLogin"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "New User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>Login User Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"demo\",\n  \"password\":\"xxxxxxx\",\n  \"email\":\"demo@gmail.com\",\n  \"mobileNo\": \"demo\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"New User Created Successfully\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/register"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.js",
    "groupTitle": "Users",
    "name": "PostApiUserRegister"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "New User",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>Login User Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"name\":\"demo\",\n  \"password\":\"xxxxxxx\",\n  \"email\":\"demo@gmail.com\",\n  \"mobileNo\": \"demo\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n  \"message\": \"New User Created Successfully\",\n  \"status\": \"1\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/register"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.ts",
    "groupTitle": "Users",
    "name": "PostApiUserRegister"
  },
  {
    "type": "put",
    "url": "/api/user/profileUpdates/:userId",
    "title": "Profile",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userEmail",
            "description": "<p>User Email-Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>Login User Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"userId\":\"\",\n    \"email\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"Successfully Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/profileUpdates/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.js",
    "groupTitle": "Users",
    "name": "PutApiUserProfileupdatesUserid"
  },
  {
    "type": "put",
    "url": "/api/user/profileUpdates/:userId",
    "title": "Profile",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userId",
            "description": "<p>Unique Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userEmail",
            "description": "<p>User Email-Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>Login User Name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n    \"userId\":\"\",\n    \"email\":\"\"\n}",
          "type": "json"
        }
      ]
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n    \"message\":\"Successfully Updated\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/api/user/profileUpdates/:userId"
      }
    ],
    "error": {
      "examples": [
        {
          "title": "Register Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/user/routes/user.route.ts",
    "groupTitle": "Users",
    "name": "PutApiUserProfileupdatesUserid"
  }
] });
