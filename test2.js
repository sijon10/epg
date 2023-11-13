const getTwitchLink = require('node-twitch-link')

// Both client_id and oauth_token work here
//
// For some channel, you may need to be authenticated (via user's oauth_token)
// to retrieve source feed link
let tokenObj =  {
  client_id:"kimne78kx3ncx6brgo4mv6wki5h1ko",
};

getTwitchLink("https://www.twitch.tv/antv_digimed/", tokenObj).then(function(linkArray){
  console.log(linkArray);
}).catch(function(err){
  console.log(err);
});