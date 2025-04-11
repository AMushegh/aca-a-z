const ATMTerminalSession = {
  _amount: 1000,

  get amount() {
    console.log("dawjkl");
    return this._amount.toFixed(2);
  },

  set amount(v) {},
};

ATMTerminalSession.amount = 4000.23208;
console.log(ATMTerminalSession.amount);
