# API Docs
Memoriae API Endpoints


## Domain
### `https://mem.terse.live`
The complete endpoints can be accessed by appending the endpoints listed below to the domain, e.g.:
* `https://mem.terse.live` is the same as `https://mem.terse.live/`
* `https://mem.terse.live/echo`
* `https://mem.terse.live/api/register`


### Root
### `/`
* Method `GET`
* Response `"Hello"`


### Echo
### `/echo`
* Method `POST`
* Data `Any data`
* Response `"Received: <Any data>!"`


## Register / Login Routes


### Regitser
### `/api/register`
* Method `POST`
* Data
```ts
{
  username: string,
  password: string,
  role: "family_member" | "staff"
}
````
> role is either `"family_member"` or `"staff"`

* Response
```ts
{
  message: string,
  token: string,
  status: boolean
}
```


### Login
### `/api/login`
* Method `POST`
* Data
```ts
{
  username: string,
  password: string,
  role: "family_member" | "staff"
}
````
> role is either `"family_member"` or `"staff"`

* Response
```ts
{
  message: string,
  token: string,
  status: boolean
}
```


## Authenticated Routes
All routes under the senior scope (`/api/senior/*`) and the `/api/profile` route must include the Authorization header in the following format:
```ts
{
  Authorization: `Bearer ${token}`
}
```
> The `token` above is the token response from the `api/register` or `api/login` route


### Get the current user profile
### `/api/profile`
* Method `POST`
* Headers `Authorization`

* Response
```ts
{
  message: string,
  profile: object,
  status: boolean
}
```


### Connect to an existing senior
### `/api/senior/connect`
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  account_number: number
}
````
> `account_number` is a 5 digit number

* Response
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
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  account_number: number,
  first_name: string,
  last_name: string,
  birth_date: string,
  profile_picture: string,
  bio: string,
  likes: string,
  dislikes: string
}
````
> `birth_date` is a string in the format `YYYY-MM-DDThh:mm:ssTZD` eg. `2020-11-11T20:15:24+00:00`

> `likes` and `dislikes` are comma-separated strings eg. "Fruit,Hiking,Reading"

* Response
```ts
{
  message: string,
  senior_profile: object,
  status: boolean
}
```


### Update a senior profile
### `/api/senior/update-profile`
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  account_number: number,
  first_name: string,
  last_name: string,
  birth_date: string,
  profile_picture: string,
  bio: string,
  likes: string,
  dislikes: string
}
````
> `birth_date` is a string in the format `YYYY-MM-DDThh:mm:ssTZD` eg. `2020-11-11T20:15:24+00:00`

> `likes` and `dislikes` are comma-separated strings eg. "Fruit,Hiking,Reading"

* Response
```ts
{
  message: string,
  senior_profile: object,
  status: boolean
}
```


### Get a senior profile
### `/api/senior/profile`
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  account_number: number
}
```
> `account_number` is a 5 digit number

* Response
```ts
{
  id: number,
  first_name: string,
  last_name: string,
  birth_date: string,
  profile_picture: string,
  bio: string,
  likes: string,
  dislikes: string,
  last_update: string,
  created_at: string
}
```


### Get connected senior profiles
### `/api/senior/connected-profiles`
* Method `GET`
* Headers `Authorization`

* Response
```ts
[
  {
    id: number,
    first_name: string,
    last_name: string,
    birth_date: string,
    profile_picture: string,
    bio: string,
    likes: string,
    dislikes: string,
    last_update: string,
    created_at: string
  }
]
```


### Add an entry
### `/api/senior/add-entry`
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  senior_id: number,
  title: string,
  date: string,
  content: string
}
```
> `senior_id` is the Account Number

* Response
```ts
{
  message: string,
  entry_id: number,
  status: boolean
}
```


### Update an entry
### `/api/senior/update-entry`
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  id: number,
  title: string,
  date: string,
  content: string
}
```
> `id` is the `entry_id`

* Response
```ts
{
  message: string,
  entry_id: number,
  status: boolean
}
```


### Get all entries
### `/api/senior/entries`
* Method `POST`
* Headers `Authorization`
* Data
```ts
{
  account_number: number
}
```
> `account_number` is the senior's Account Number

* Response
```ts
[
  {
    id: number,
    title: string,
    date: string,
    content: string,
    last_update: string,
    created_at: string,
    family_member_id: number,
    senior_id: number
  }
]
```
> `senior_id` is the Account Number
