class HttpRequest {
  apiURL: string
  token: string
  endpoint: string
  query: any
  body: any

  constructor() {
    this.apiURL = process.env.API_URL || ''
    this.token = process.env.API_TOKEN || ''
    this.endpoint = ''
    this.query = {}
    this.body = {}
  }

  setApiUrl(apiURL: string): void {
    this.apiURL = apiURL
  }

  setEndpoint(endpoint: string): void {
    this.endpoint = endpoint
  }

  setQueryString(query?: any){
    if (query) {
      return Object.keys(query).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(query[k])).join('&')
    }
  }

  buildURL(query?: any): string {
    let endpoint: string = this.endpoint;

    if (!!query?.id) {
      endpoint = `${endpoint}/${query?.id}`
      delete query?.id
    }

    if (!!query) {
      endpoint= `${endpoint}?${this.setQueryString(query)}`
    }

    return `${this.apiURL}/${endpoint}`
  }

  async get(query?: any) {
    const response = await fetch(`${this.buildURL(query)}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`,
      },
    });

    return await response.json();
  }

  async post(data: any) {
    const response = await fetch(`${this.buildURL()}`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`,
      },
    });

    return await response.json();
  }

  async put(id: any | null, data: any) {
    const response = await fetch(`${this.buildURL(id)}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.token}`,
      },
    });

    return await response.json();
  }
}

export default HttpRequest
