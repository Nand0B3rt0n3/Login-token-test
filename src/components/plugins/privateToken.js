import getPrivateToken from './api';

export default {
  install(Vue, options) {
    Vue.prototype.$getPrivateToken = async function () {
      try {
        const privateToken = await API.getPrivateToken();
        return privateToken;
      } catch (error) {
        throw error;
      }
    };
  },
};
