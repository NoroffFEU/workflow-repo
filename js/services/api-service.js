export const mockData = {
  newsArticles: [
    {
      id: 1,
      title: "New Technology Breakthrough",
      description: "Scientists discover revolutionary quantum computing method",
      image: "https://picsum.photos/id/60/800/600", // tech/computer related
    },
    {
      id: 2,
      title: "Global Climate Summit",
      description: "World leaders gather to discuss climate change initiatives",
      image: "https://picsum.photos/id/142/800/600", // nature/landscape
    },
    {
      id: 3,
      title: "Space Exploration Update",
      description: "Mars mission reveals new findings about the red planet",
      image: "https://picsum.photos/id/41/800/600", // space/sky related
    },
    {
      id: 4,
      title: "Economic Report",
      description: "Global markets show strong recovery in Q2",
      image: "https://picsum.photos/id/180/800/600", // business district
    },
    {
      id: 5,
      title: "Healthcare Innovation",
      description: "New medical breakthrough in cancer treatment",
      image: "https://picsum.photos/id/287/800/600", // medical/science related
    },
    {
      id: 6,
      title: "Education Reform",
      description: "Major changes announced in education policy",
      image: "https://picsum.photos/id/20/800/600", // library/education
    },
    {
      id: 7,
      title: "Sports Update",
      description: "Historic victory in world championship finals",
      image: "https://picsum.photos/id/167/800/600", // sports/action
    },
    {
      id: 8,
      title: "Environmental Conservation",
      description: "New initiative launches to protect endangered species",
      image: "https://picsum.photos/id/137/800/600", // nature/wildlife
    },
  ],
  users: [
    {
      id: 1,
      name: "Test User",
      email: "test@noroff.no",
      password: "123456",
      token: "mock-token-12345",
    },
  ],
  contacts: [],
};

export const apiService = {
  login: ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(
          (u) =>
            u.email === email.trim().toLowerCase() && u.password === password,
        );

        if (user) {
          resolve({
            data: {
              id: user.id,
              name: user.name,
              email: user.email,
              accessToken: user.token,
            },
            status: 200,
            statusText: "OK",
          });
        } else {
          reject({
            error: "Invalid email or password",
            status: 401,
            statusText: "Unauthorized",
          });
        }
      }, 500); // Simulate network delay
    });
  },

  forgotPassword: ({ email }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(
          (u) => u.email === email.trim().toLowerCase(),
        );

        if (user) {
          resolve({
            data: {
              message: "Password reset email sent",
            },
            status: 200,
            statusText: "OK",
          });
        } else {
          reject({
            error: "No account found with that email address",
            status: 404,
            statusText: "Not Found",
          });
        }
      }, 1000);
    });
  },

  // Register function
  register: ({ name, email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find((u) => u.email === email);

        if (user) {
          reject({
            error: "Email already registered",
            status: 409,
            statusText: "Conflict",
          });
          return;
        }

        // Create new user
        const newUser = {
          id: mockData.users.length + 1,
          name,
          email,
          token: "mock-token-" + Math.floor(Math.random() * 100000),
        };

        resolve({
          data: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
          },
          status: 201,
          statusText: "Created",
        });
      }, 800); // Simulate network delay
    });
  },

  // Get news articles
  getNewsArticles: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: mockData.newsArticles,
          status: 200,
          statusText: "OK",
        });
      }, 500);
    });
  },

  // Get news article by ID
  getNewsArticleById: (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const article = mockData.newsArticles.find(
          (a) => a.id === parseInt(id),
        );
        if (article) {
          resolve({
            data: article,
            status: 200,
            statusText: "OK",
          });
        } else {
          reject({
            error: "Article not found",
            status: 404,
            statusText: "Not Found",
          });
        }
      }, 500);
    });
  },

  // Submit contact form
  submitContactForm: ({ name, email, subject, message }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!name || !email || !message) {
          reject({
            error: "Please fill in all required fields",
            status: 400,
            statusText: "Bad Request",
          });
          return;
        }

        const newContact = {
          id: mockData.contacts.length + 1,
          name,
          email,
          subject,
          message,
          submittedAt: new Date().toISOString(),
        };

        mockData.contacts.push(newContact);

        resolve({
          data: {
            message:
              "Thank you for your message. We will get back to you soon.",
            id: newContact.id,
          },
          status: 201,
          statusText: "Created",
        });
      }, 500);
    });
  },

  // Newsletter signup
  subscribeToNewsletter: ({ email }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email) {
          reject({
            error: "Email is required",
            status: 400,
            statusText: "Bad Request",
          });
          return;
        }

        const existingSubscriber = mockData.newsletterSubscribers.find(
          (sub) => sub.email.toLowerCase() === email.toLowerCase(),
        );

        if (existingSubscriber) {
          reject({
            error: "This email is already subscribed to our newsletter",
            status: 409,
            statusText: "Conflict",
          });
          return;
        }

        const newSubscriber = {
          id: mockData.newsletterSubscribers.length + 1,
          email,
          subscribedAt: new Date().toISOString(),
          status: "active",
        };

        mockData.newsletterSubscribers.push(newSubscriber);

        resolve({
          data: {
            message: "Successfully subscribed to the newsletter",
            id: newSubscriber.id,
          },
          status: 201,
          statusText: "Created",
        });
      }, 500);
    });
  },
};
