// npm install watson-developer-cloud


var watson = require('watson-developer-cloud');
var fs     = require('fs');

var natural_language_classifier = watson.natural_language_classifier({
  username: '1c774089-d215-4d51-b657-ddf726a667b7',
  password: 'h2o5z4Nh0gro',
  version: 'v1'
});

var params = {
  language: 'en',
  name: 'My Classifier',
  training_data: fs.createReadStream('/users/keshavmalhotra/Desktop/trainingdata.csv')
};

var textinput = "what is my internet balance?";

natural_language_classifier.classify({
  text: textinput,
  classifier_id: "90e7b4x199-nlc-88587" },
  function(err, response) {
    if (err)
      console.log('error:', err);
    else{
      // console.log(JSON.stringify(response, null, 2));
      var output = response.top_class;
      // console.log(output);
      if(output == "Phone talktime query")
      	console.log("Your talktime balance is Rs 53.");
      else if (output == "phone data query")
      	console.log("You have 4GB data left for the month.")
      else
      	console.log("Your request has been forwarded and will be processed in the next 24 hours. We will get back to you if we need more details. Thank you!")
    }
    console.log(response);
});