const address = {
  state: {
    address: [{
        id: "445",
        name: "阿凡提",
        text: "新疆维吾尔自治区",
        phoneNum: "186 **** 5149",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "44we5",
        name: "买买提",
        text: "新疆维吾尔自治区伊犁新源县",
        phoneNum: "159 **** 1136",
        isDefault: false,
        checked: false,
        tooltip: false
      },
      {
        id: "4fsev45",
        name: "木拉提",
        text: "新疆维吾尔自治区伊犁哈萨克自治州",
        phoneNum: "186 **** 0734",
        isDefault: false,
        checked: false,
        tooltip: false
      }
    ]
  },
  mutations: {
    tooltipShow1(state, payload) {
      state.address.find(
        item => item.id === payload.id
      ).tooltip = !state.address.find(item => item.id === payload.id).tooltip;
    },
    del1(state, payload) {
      state.address = state.address.filter(item => item.id != payload.id);
    },
    changeChecked1(state, payload) {
      if (!state.address.find(item => item.id === payload.id).checked) {
        state.address = state.address.map(item => {
          return {
            ...item,
            checked: false
          };
        });
        state.address.find(item => item.id === payload.id).checked = true;
      } else {
        state.address.find(item => item.id === payload.id).checked = false;
      }
    },
    changeDefault(state, payload) {
      // if (!state.address.find(item => item.id === payload.id).isDefault) {
      state.address = state.address.map(item => {
        return {
          ...item,
          isDefault: false
        };
      });
      state.address.find(item => item.id === payload.id).isDefault = true;
      // } else {
      //   state.address.find(item => item.id === payload.id).isDefault = false;
      // }
    }
  },
  getters: {
    newAddress(state) {
      if (state.address.find(item => item.checked)) {
        return state.address.find(item => item.checked);
      } else if (state.address.find(item => item.isDefault)) {
        return state.address.find(item => item.isDefault);
      } else {
        return null;
      }
    }
  }
};
export default address;