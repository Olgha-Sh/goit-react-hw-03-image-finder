const CLIENT_KEY = '17400489-7d3116460602bc816f225b3ce';

export default url => {
  return `?${url}&key=${CLIENT_KEY}`;
};
