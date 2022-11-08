<p align="center">
  <a href="https://www.hs-esslingen.de/" target="blank"><img src="https://www.hs-esslingen.de/typo3conf/ext/he_templates/Resources/Public/img/logo_claim_de.svg" width="300" alt="HSE Logo" /></a>
</p>

<p align="center">A ToDo-API build with <a href="http://nestjs.com/" target="_blank">NestJS</a> in the Distributed and Parallel Systems Course at HS-Esslingen.</p>

## 📌 - Description

This NestJS Application provides an REST-API to manage ToDos.<br/>
All CRUD Function are provided and Documented using Swagger (Available under `/doc`).

## 🐳 - Docker Installation

1. Pull the Docker Image

```bash
docker pull ghcr.io/freakeyplays/vs-lab-backend:<version>
```

2. Run the Docker Image

```bash
# Use Deafault Environment Variables
docker run -p 8080:3000 ghcr.io/freakeyplays/vs-lab-backend:<version>

# Provide Environment Variables via the CL
docker run -e SERVER_PORT=5000 ... -p 8080:$SERVER_PORT ghcr.io/freakeyplays/vs-lab-backend:<version>

# Provide Envrionment Variables via .env File
docker run --env-file -p 8080:$SERVER_PORT ghcr.io/freakeyplays/vs-lab-backend:<version>
```

## ⚙️ - Development Installation

1. Clone the Repository

```bash
git clone https://github.com/FreakeyPlays/vs-lab-backend.git
```

2. Install Dependencies

```bash
npm install
```

3. Install a Local Postgres Database or Provide a connection via the Environment Variables

4. Run the Application in Development Mode

```bash
npm run start:dev
```

5. Access the Application at `localhost:3000`

## 🧰 - Environment Variables

| Name                | Type     | Description                                                                       | Default     |
| :------------------ | :------- | :-------------------------------------------------------------------------------- | ----------- |
| `SERVER_PORT`       | `number` | The Port to access the Application.<br/>When using Docker this is the Inside Port | `3000`      |
| `POSTGRES_HOST`     | `string` | The Host where the Database is served.<br/>**Example:** `www.example.com`         | `localhost` |
| `POSTGRES_PORT`     | `number` | The Port of where the Database is served.                                         | `5432`      |
| `POSTGRES_USER`     | `string` | The Username to access Database.                                                  | `postgres`  |
| `POSTGRES_PASSWORD` | `string` | The Password to access the Database.                                              | `password`  |
| `POSTGRES_DB_NAME`  | `string` | The Name of the Database.                                                         | `postgres`  |

## ⛓️ - API

<details open>
<summary><h3>🔗 - POST /api/v1/todo</h3></summary>

### 📥 - Request

```bash
curl -X 'POST' \
  '${BASE_URL}/api/v1/todo' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "todo": "string",
  "priority": 2
}'
```

### 📤 - Response

```js
{
  "todo": String,
  "priority": Number
}
```

</details>

<details>
<summary><h3>🔗 - GET /api/v1/todo</h3></summary>

### 📥 - Request

```bash
curl -X 'GET' \
  '${BASE_URL}/api/v1/todo' \
  -H 'accept: */*'
```

### 📤 - Response

```js
[
  {
    "todo": String,
    "priority": Number
  },
  ...
]
```

</details>

<details>
<summary><h3>🔗 - PUT /api/v1/todo</h3></summary>

### 📥 - Request

```bash
curl -X 'PUT' \
  '${BASE_URL}/api/v1/todo' \
  -H 'accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{
  "todo": "string",
  "priority": 0
}'
```

### 📤 - Response

```js
{
  "generatedMaps": Array,
  "raw": Array,
  "affected": Number
}
```

</details>

<details>
<summary><h3>🔗 - DELETE /api/v1/todo/{identifier}</h3></summary>

### 📥 - Request

```bash
curl -X 'DELETE' \
  '${BASE_URL}/api/v1/todo/${ID}' \
  -H 'accept: */*'
```

### 📤 - Response

```js
{
  "raw": Array,
  "affected": Number
}
```

</details>
