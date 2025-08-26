import axios from 'axios';

// Create an axios instance with default config
const api = axios.create({
  baseURL: '/api', // This will be prepended to all URLs
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define response types
export interface GreetingResponse {
  message: string;
  timestamp: string;
  success: boolean;
}

export interface ErrorResponse {
  error: string;
  message: string;
  timestamp: string;
}

// API service methods
const ApiService = {
  /**
   * Get a simple hello world message
   */
  getHello: async (): Promise<string> => {
    const response = await api.get('/hello');
    return response.data;
  },

  /**
   * Get a personalized greeting
   * @param name The name to greet
   */
  getGreeting: async (name: string): Promise<string> => {
    const response = await api.get(`/greeting/${name}`);
    return response.data;
  },

  /**
   * Get a JSON greeting response
   * @param name The name to greet
   */
  getGreetingJson: async (name: string): Promise<GreetingResponse> => {
    const response = await api.get(`/greeting-json/${name}`);
    return response.data;
  },

  /**
   * Handle API errors
   * @param error The error object from axios
   */
  handleError: (error: any): ErrorResponse => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response.data as ErrorResponse;
    } else if (error.request) {
      // The request was made but no response was received
      return {
        error: 'Network Error',
        message: 'No response received from server',
        timestamp: new Date().toISOString(),
      };
    } else {
      // Something happened in setting up the request that triggered an Error
      return {
        error: 'Request Error',
        message: error.message || 'An unknown error occurred',
        timestamp: new Date().toISOString(),
      };
    }
  },
};

export default ApiService;


