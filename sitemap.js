const path = require("path");
const glob = require("glob");
const fs = require("fs");
const axios = require("axios");
const getSlug = require('speakingurl')

// If you use Dotenv you can include your .env variables uncommenting the following line
// require("dotenv").config();

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const SITE_ROOT = "https://dailyhack.xyz"

// API_SOURCE is the endpoint of you api
// Update example.com/api with your endpoint or set the env variable
const API_SOURCE = "https://dailyhack.glitch.me/issues/1/100";

// DESTINATION is where the real file is exported
// By default is .next/static/sitemap.xml
const DESTINATION =
  process.env.DESTINATION ||
  path.join(resolveApp(".next/static"), "sitemap.xml");


const createSitemap = () => {
  let xml = "";
  xml += '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  return axios
    .get(API_SOURCE)
    .then(resp => {
      let { issues } = resp.data;
      issues.forEach((issue, index) => {
        xml += "<url><loc>";
        xml += `${SITE_ROOT}/post/${[getSlug(issue.title),issue.number].join('-')}`;
        xml +=
          `</loc><lastmod>${issue.updated_at.split('T')[0]}</lastmod><changefreq>daily</changefreq><priority>0.8</priority></url>`;
        if (index === issues.length - 1) {
          xml += "</urlset>";
        }
      });
      return xml;
    })
    .catch(error => {
      console.log(error.message, error.name);
    });
};

module.exports = { DESTINATION, createSitemap };