fetch('https://core.croilab.com/wp-json/croilab/v1/settings')
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data.stack, null, 2)))
  .catch(console.error);
