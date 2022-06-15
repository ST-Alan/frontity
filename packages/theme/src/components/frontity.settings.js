const settings = {
  "name": "root",
  "state": {
    "frontity": {
      // "url": "https://buyxpress.com/pe/",
      "url": "https://test.frontity.org",
      "title": "Buyxpress",
      "description": "Buyxpress"
    }
  },
  "packages": [
    {
      "name": "theme",
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://test.frontity.org"
          // "url":"https://buyxpress.com/pe/",
          // "api":"https://buyxpress.com/pe/wp-json/wp/v2/posts/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
