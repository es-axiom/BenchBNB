## BenchBNB

### Redux Practice

- Integrating Google Maps API into single-page application
- Displaying `Benches` to rent around San Francisco, with info pages
- Practice with state design

Setting up a Redux Router for organized navigation requires wrapping the app in a `Provider` component.

```javascript
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const Store = configureStore();
  ReactDOM.render(<Provider store={Store}>
                    <BenchIndexContainer />
                  </Provider>, root)
});
```

