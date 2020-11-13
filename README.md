# API Docs
Memoriae API Endpoints

## Domain
### `https://mem.terse.live`
The complete endpoints can be accessed by appending the endpoints below to the domain, examples below:
* `https://mem.terse.live` is the same as `https://mem.terse.live/`
* `https://mem.terse.live/echo`
* `https://mem.terse.live/api/register`

### Root
### `/`
* Method: `GET`
* Response: `"Hello"`

### Echo
### `/echo`
* Method: `POST`
* Data: Any data
* Response: `"Received: <Any data>!"`

### Regitser
### `/api/register`
* Method: `POST`
* Data:
```ts
{
  username: string,
  password: string
}
````
* Response:
```ts
{
  message: string,
  token: string,
  status: boolean
}
```

### Login
### `/api/login`
* Method: `POST`
* Data:
```ts
{
  username: string,
  password: string
}
````
* Response:
```ts
{
  message: string,
  token: string,
  status: boolean
}
```

### Connect to an existing senior
### `/api/senior/connect`
* Method: `POST`
* Headers:
```ts
  Authorization: `Bearer ${token}`
```
> Note: The `token` above is the token response from the `api/register` or `api/login` routes
* Data:
```ts
{
  account_number: number
}
````
* Response:
```ts
{
  message: string,
  account_number: number,
  senior_profile: object,
  status: boolean
}
```

### Add a new senior
### `/api/senior/add-profile`
* Method: `POST`
* Headers:
```ts
  Authorization: `Bearer ${token}`
```
> Note: The `token` above is the token response from the `api/register` or `api/login` routes
* Data:
```ts
{
  id: number,
  first_name: string,
  last_name: string,
  birth_date: string,
  profile_picture: string,
  bio: string,
  likes: string,
  dislikes: string
}
````
> Notes:
* `id` is the Account Number
* `likes` and `dislikes` are comma-separated strings eg. "Fruit,Hiking,Reading"
* `birth_date` is a string in the format `YYYY-MM-DDThh:mm:ssTZD` eg. `2020-11-11T20:15:24+00:00`
* Response:
```ts
{
  message: string,
  senior_profile: object,
  status: boolean
}
```
