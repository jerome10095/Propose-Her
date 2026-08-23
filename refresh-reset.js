const navigation = performance.getEntriesByType("navigation")[0];
const isReload = navigation
  ? navigation.type === "reload"
  : performance.navigation.type === 1;

if (isReload) {
  window.location.replace("index.html");
}
