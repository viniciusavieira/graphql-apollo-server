console.log('Hello World! AGAIN');

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed.'));
}