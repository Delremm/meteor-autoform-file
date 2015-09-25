Package.describe({
  name: "delremm:meteor-autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "0.5.1",
  git: "http://github.com/Delremm/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');

  api.use([
    'coffeescript',
    'underscore',
    'reactive-var',
    'templating',
    'less',
    'aldeed:autoform',
    'fortawesome:fontawesome'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
