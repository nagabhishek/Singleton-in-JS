// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const Singleton = (function () {
  let instance;

  function createObject() {
    return new Object('Hello!');
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createObject();
      }
      return instance;
    },
  };
})();

const i1 = Singleton.getInstance();
const i2 = Singleton.getInstance();

console.log('is both instance same:', i1 === i2);
