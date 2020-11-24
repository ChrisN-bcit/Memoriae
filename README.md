# API Docs
Memoriae API Endpoints


## Domain
### `https://mem.terse.live`
The complete endpoints can be accessed by appending the endpoints listed below to the domain, e.g.:
* `https://mem.terse.live` is the same as `https://mem.terse.live/`
* `https://mem.terse.live/echo`
* `https://mem.terse.live/api/register`


### Root
<details>
  <summary>Reveal</summary>

  ### `GET /`
  * Response `"Hello"`
</details>


### Echo
<details>
  <summary>Reveal</summary>

  ### `POST /echo`
  * Data `Any data`
  * Response `"Received: <Any data>!"`
</details>


## Register / Login Routes


### Register
<details>
  <summary>Reveal</summary>

  ### `POST /api/register`
  * Data
  ```ts
  {
    username: string,
    password: string,
    role: "family_member" | "staff",
    first_name: string,
    last_name: string,
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
</details>


### Login
<details>
  <summary>Reveal</summary>

  ### `POST /api/login`
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
</details>


## Authenticated Routes
All routes under the senior scope (`/api/senior/*`) and the `/api/profile` route must include the Authorization header in the following format:
```ts
{
  Authorization: `Bearer ${token}`
}
```
> The `token` above is the token response from the `api/register` or `api/login` route


### Get the current user profile
<details>
  <summary>Reveal</summary>

  ### `POST /api/profile`
  * Headers `Authorization`

  * Response
  ```ts
  {
    message: string,
    profile: object,
    status: boolean
  }
  ```
</details>


### Connect to an existing senior
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/connect`
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
</details>


### Add a new senior
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/add-profile`
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
  > `account_number` is a 5 digit number

  > `birth_date` is a string in the format `YYYY-MM-DDThh:mm:ssTZD` e.g. `2020-11-11T20:15:24+00:00`

  > `likes` and `dislikes` are comma-separated strings e.g. "Fruit,Hiking,Reading"

  * Response
  ```ts
  {
    message: string,
    senior_profile: object,
    status: boolean
  }
  ```
</details>


### Update a senior profile
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/update-profile`
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
  > `account_number` is a 5 digit number

  > `birth_date` is a string in the format `YYYY-MM-DDThh:mm:ssTZD` e.g. `2020-11-11T20:15:24+00:00`

  > `likes` and `dislikes` are comma-separated strings e.g. "Fruit,Hiking,Reading"

  * Response
  ```ts
  {
    message: string,
    senior_profile: object,
    status: boolean
  }
  ```
</details>


### Get a senior profile
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/profile`
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
</details>


### Get connected senior profiles
<details>
  <summary>Reveal</summary>

  ### `GET /api/senior/connected-profiles`
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
</details>


### Add an entry
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/add-entry`
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
</details>


### Update an entry
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/update-entry`
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
</details>


### Get all entries
<details>
  <summary>Reveal</summary>

  ### `POST /api/senior/entries`
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
</details>


## JavaScript API Client
Copy the code below or [`client.js`](client.js), excluding the example code, into a JavaScript file
```js
import axios from 'axios'

const domain = 'https://mem.terse.live'

export const createApi = () => {
  const api = axios.create({
    baseURL: domain
  })

  return {
    // role is either 'family_member' or 'staff'
    // userProfile is the object: { username, password, role, first_name, last_name }
    register: (userProfile) => api.post('/api/register', userProfile).then(res => res).catch(err => err),
    login: (userProfile) => api.post('/api/login', userProfile).then(res => res).catch(err => err)
  }
}

export const createAuthApi = (token) => {
  const authApi = axios.create({
    baseURL: domain,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  return {
    getUserProfile: () => authApi.post('/api/profile').then(res => res).catch(err => err),
    connectSenior: (account_number) => authApi.post('/api/senior/connect', { account_number }).then(res => res).catch(err => err),
    // seniorProfile is the object: { account_number, first_name, last_name, birth_date, profile_picture, bio, likes, dislikes }
    addSenior: (seniorProfile) => authApi.post('/api/senior/add-profile', seniorProfile).then(res => res).catch(err => err),
    updateSenior: (seniorProfile) => authApi.post('/api/senior/update-profile', seniorProfile).then(res => res).catch(err => err),
    getSenior: (account_number) => authApi.post('/api/senior/profile', { account_number }).then(res => res).catch(err => err),
    getConnectedSeniors: () => authApi.get('/api/senior/connected-profiles').then(res => res).catch(err => err),
    // entryData is the object: { senior_id, title, date, content }
    addEntry: (entryData) => authApi.post('/api/senior/add-entry', entryData).then(res => res).catch(err => err),
    // updatedEntryData is the object: { id, title, date, content }
    updateEntry: (updatedEntryData) => authApi.post('/api/senior/update-entry', updatedEntryData).then(res => res).catch(err => err),
    getEntries: (account_number) => authApi.post('/api/senior/entries', { account_number }).then(res => res).catch(err => err)
  }
}


// Example code for using createApi() and createAuthApi(token)
// remove code below from actual file
// import { createApi, createAuthApi } from <filename>
let resp
const api = createApi()
resp = await api.login({ username, password, role, first_name, last_name })
console.log(resp.data)

const { token } = resp.data
const authApi = createAuthApi(token)
resp = await authApi.getUserProfile()
console.log(resp.data)
```
