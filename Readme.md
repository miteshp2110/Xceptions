# xceptions

`xceptions` is an NPM package designed to simplify error management for your Node.js applications. It notifies you of exceptions via email, provides solutions with the help of LLMs (Large Language Models), and features a dashboard to view all previously occurred exceptions.

## Features
- **Email Notifications**: Get immediate alerts for errors in your application.
- **LLM Solutions**: Automatically receive AI-generated solutions for exceptions.
- **Exception Dashboard**: Track and analyze historical exceptions with a comprehensive dashboard.


## Getting Started

### 1. Create a Project on [xceptions.tech](https://xceptions.tech)
1. Visit [xceptions.tech](https://xceptions.tech).
2. Sign up or log in.
3. Create a new project to manage your exceptions.
4. Obtain your unique API key from the dashboard.

---

### 2. Setting Up in Your Express Application
Follow these steps to integrate `xceptions` into your Express application:

#### Step 1: Install the package
```bash
npm install xceptions
```

#### Step 2: Initialize the Client
Import and initialize the `xceptions` client with your API key:

```javascript
const { Client } = require('xceptions');
const client = new Client("Your Api Key");
```

#### Step 3: Connect and Use the Middleware
Add the middleware provided by the `fielder` object as the last middleware in your application to report and notify exceptions:

```javascript
const express = require('express');
const app = express();
const { Client } = require('xceptions');

const client = new Client("Your Api Key");

// Add all other middleware and methods here

client.connect()
  .then((fielder) => {
    app.use((err, req, res, next) => {
      fielder.field(err, req, res, next); // Reporting and notifying
    });
  })
  .catch((err) => {
    console.error("Error connecting to xceptions:", err);
  });

app.listen(8888, () => {
  console.log("Server running on port 8888");
});
```

#### Step 4: Pass Exceptions to the Middleware
In your route handlers or controllers, pass any caught exceptions to the next middleware:

```javascript
app.get("/", (req, res, next) => {
  try {
    throw new Error("Some error occurred");
  } catch (err) {
    next(err); // Pass the exception to the middleware
  }
});
```

---

### Email Notifications
Receive detailed email notifications about every exception, including the stack trace and possible solutions powered by LLMs.  
Example of an email notification:  
![Email Notification Example](https://link.to/example-email-image)

---

### Dashboard
Use the dashboard at [xceptions.tech](https://xceptions.tech) to:
- View historical exceptions.
- Analyze recurring issues.
- Access AI-generated solutions.

---

## API Reference

### `Client(apiKey: string)`
- Creates a new `xceptions` client instance.
- `apiKey`: Your API key from the [xceptions.tech](https://xceptions.tech) dashboard.

### `connect(): Promise<Fielder>`
- Connects the client and returns a `fielder` object.

### `fielder.field(err, req, res, next)`
- Middleware function for reporting and notifying exceptions.
- **Parameters**:
  - `err`: The error object.
  - `req`: Express `Request` object.
  - `res`: Express `Response` object.
  - `next`: Express `Next` function.

---

## Example Application
Below is an example of a complete Express application setup:

```javascript
const express = require('express');
const { Client } = require('xceptions');

const app = express();
const client = new Client("Your Api Key");

// Your other middleware and route handlers

client.connect()
  .then((fielder) => {
    app.use((err, req, res, next) => {
      fielder.field(err, req, res, next);
    });
  })
  .catch((err) => {
    console.error("Error connecting to xceptions:", err);
  });

app.get("/", (req, res, next) => {
  try {
    throw new Error("Some error occurred");
  } catch (err) {
    next(err);
  }
});

app.listen(8888, () => {
  console.log("Server running on port 8888");
});
```

---

## Support
For any issues, questions, or feature requests visit the [xceptions.tech](https://xceptions.tech) website.

---

## License
This project is licensed under the [Apache -2.0](LICENSE).