import { createStore } from "vuex";

import user from "@/store/modules/user/user.store";
// import user from "../store/modules/user/user.store";
// import user from "../store/modules/user/user.store";

export default createStore({
  modules: {
    user,
  },
});
