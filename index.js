var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: "1507345635",
  channelSecret: "67b7c7e33c2c086674f341b9a93046e0",
  channelAccessToken: "CCqEw6xgxU72sYFMEPZ1ysPMPK6eh4SDKMUYKAhxnPYq6vPFf9mC91GbhSNtn3k0JmNS/EapN0g2UdhYxIoi3iaMVwBX0Ot48BcUxLpbTfPMyKUqE5MSRqZMb/BTDG6MaoUVZMeY7RtHjngzve299wdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

