"use strict";

var obj = (function (_obj) {
  Object.defineProperties(_obj, {
    foo: {
      set: function (value) {
        this._foo = value;
      }
    }
  });

  return _obj;
})({});
