import axios from 'axios'

const domain = 'https://mem.terse.live'

export const createApi = () => {
  const api = axios.create({
    baseURL: domain
  })

  return {
    // role is either 'family_member' or 'staff'
    register: (username, password, role) => api.post('/api/register', { username, password, role }).then(res => res).catch(err => err),
    login: (username, password, role) => api.post('/api/login', { username, password, role }).then(res => res).catch(err => err)
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

// let resp
// const api = createApi()
// resp = await api.login('username', 'password', 'role')
// console.log(resp.data)

// const { token } = resp.data
// const authApi = createAuthApi(token)
// resp = await authApi.getUserProfile()
// console.log(resp.data)