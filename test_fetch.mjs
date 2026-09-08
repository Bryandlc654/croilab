fetch('https://core.croilab.com/wp-json/croilab/v1/settings')
  .then(res => res.json())
  .then(data => console.log(JSON.stringify(data.differentiators, null, 2)))
  .catch(console.error);
