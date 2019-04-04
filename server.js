// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const env = process.env;
const axios = require("axios");
const _ = require("lodash");
app.use(require("cors")());
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/issues/:page/:per_page", function(request, response) {
    axios
        .get(
            "https://api.github.com/repos/mddanishyusuf/dailyhack/issues?page=" +
                request.params.page +
                "&per_page=" +
                request.params.per_page +
                "&labels=dailyhack&access_token=" +
                env.TOKEN
        )
        .then(res => {
            axios
                .get(
                    "https://api.github.com/repos/mddanishyusuf/dailyhack?access_token=" +
                        env.TOKEN
                )
                .then(repo_res => {
                    response.send({
                        issues: res.data,
                        total_issues: repo_res.data.open_issues_count
                    });
                });
        });
});

app.get("/issues/:number", function(request, response) {
    axios
        .get(
            "https://api.github.com/repos/mddanishyusuf/dailyhack/issues/" +
                request.params.number +
                "?access_token=" +
                env.TOKEN
        )
        .then(res => {
            response.send(res.data);
        });
});

app.get("/contributors", function(request, response) {
    axios
        .get(
            "https://api.github.com/repos/mddanishyusuf/dailyhack/issues?per_page=100&access_token=" +
                env.TOKEN
        )
        .then(res => {
            var issuesArray = res.data;
      console.log(issuesArray.length)

            var contributors = [];

            function delay() {
                return new Promise(resolve => setTimeout(resolve, 300));
            }

            async function delayedLog(item) {
                await delay();
            }
            async function processArray(array) {
                function isEmpty(obj) {
                    for (var key in obj) {
                        if (obj.hasOwnProperty(key)) return false;
                    }
                    return true;
                }

//                 var result = array.reduce(function(r, a) {
//                     r[a.user.login] = r[a.user.login] || {};
//                     var obj = {
//                         url: a.url,
//                         title: a.title,
//                         user: {
//                             login: a.user.login,
//                             id: a.user.id,
//                             avatar_url: a.user.avatar_url,
//                             site_admin: a.site_admin
//                         },
//                         issues: []
//                     };
//                     if (isEmpty(r[a.user.login])) {
//                         console.log(a.user.login);
//                         r[a.user.login] = obj;
//                     } else {
//                         var issueObj = {
//                           url: a.url,
//                           title: a.title
//                         }
//                         r[a.user.login]["issues"].push(issueObj);
//                     }

//                     // r[a.user.login].push(a);
//                     return r;
//                 }, Object.create(null));
                var grouped = _.groupBy(array, function(car) {
                    return car.user.login;
                });
              
                
              
                for (var key in grouped) {
                    var userData = {}
                    if (grouped.hasOwnProperty(key)) {
                        console.log(key); // key (ex. sandwich)
                        var e = _.map(grouped[key], function(object) {
                          return _.pick(object, ['url', 'title']);
                        });
                      userData['issues'] = e
                        console.log(e); // value (ex. turkey)
                    }
                  grouped[key] = userData
                }
                
                response.send(grouped);
            }

            processArray(issuesArray);
        });
});

app.get("/", function(request, response) {
    response.send("Hello");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
    console.log("Your app is listening on port " + listener.address().port);
});
