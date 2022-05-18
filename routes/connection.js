'use strict'

const { Client } = require('@elastic/elasticsearch');

const client = new Client({
  cloud: {
    id: 'mydeploy:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJDU5MmMzMmY2NWI2MDQxMjdhZDk3YTFmMDFhODgyMDJjJDE1YmE3NDYwNzlkZTRiMjhhYTZlNWI3ZDFkZTQ3NmIz'
  },
  auth: {
    username: 'elastic',
    password: 'n8n7L9PFENGFVokI7kcVk8GN'
  }
})

module.exports = client;