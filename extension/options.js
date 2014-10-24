(function () {
  'use strict';
  var doc = window.document,
      store = chrome.storage.local,
      fields = ['subdomain', 'username', 'password'];

  // Restores select box state to saved value from localStorage.
  function restore() {
    fields.forEach(function(field) {
      store.get(field, function(val) {
        doc.getElementById(field).value = val[field];
      });
    });
  }

  // Saves options to localStorage.
  function save() {
    var options = {};
    fields.forEach(function(field) {
      options[field] = doc.getElementById(field).value;
    });
    store.set(options);
  }

  // Initialize
  function init() {
    restore();
    doc.getElementById('save-btn').addEventListener('click', save);
  }

  window.onload=init;
}());
