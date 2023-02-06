export default {
  async getPrivateToken() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const token = Math.random().toString(36).substring(7);
        resolve(token);
      }, 1000);
    });
  }
}