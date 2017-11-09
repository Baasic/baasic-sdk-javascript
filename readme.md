# Baasic JavaScript SDK

Baasic JavaScript library provides integration access to [Baasic REST API](http://dev.baasic.com/api/reference/home) core end-points.

## Dependencies

Baasic JavaScript library has the following dependencies:

* [jQuery](https://jquery.com/)
* [HAL Parser](https://github.com/Baasic/angular-hal)
* [URI Template](https://github.com/Baasic/uritemplate-js)

## Usage

This section will describe how to add the Baasic JavaScript library to your project. It's important to know that Baasic JavaScript SDK uses JSON format by default and it be setup to use HAL+JSON format for the back-end communication. You can find out more about HAL format [here](http://stateless.co/hal_specification.html).

### Adding the library to your project

Please add the following lines of code after the jQuery include (if you are installing this as a dependency of Baasic Angular SDK, or any other framework, you can safely ignore jQuery dependency):

```html
<script src='https://code.jquery.com/jquery-3.1.1.slim.min.js'></script>
<script src='/js/hal-parser.js'></script>
<script src='/js/uritemplate-min.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/reflect-metadata/0.1.10/Reflect.min.js"></script>
<script src='/js/baasic-sdk-javascript-2.0.0.min.js'></script>
```

*Note:* Baasic JavaScript SDK depends on [reflect-metadata](https://github.com/rbuckton/reflect-metadata) package, in order to use the sdk directly and not as a part of another JavaScript framework reflect-metadata should be manually imported into the project. Other Baasic SDKs or frameworks may handle this dependency automatically. jQuery dependency should be used only if sdk is used separately from other JavaScript frameworks, if sdk is used as a part of some framework (e.g. Angular) then sdk for that specific framework should be used and jQuery is not needed as a dependency.

### Application Configuration

To create the _BaasicApp_ you will need to use the _baasicSdkJavaScript_ object on the global scope.

```javascript
//Note: this is configuration example only, these are the defaults
var options = {
    apiRootUrl: 'api.baasic.com',
    apiVersion: '<version>',
    enableHALJSON: false
};

var application = new baasicSdkJavaScript.BaasicApp('<api-key>', options);
```

### Module Usage

```javascript
application.membershipModule.login.login({
    username: '<username>',
    password: '<password>'
}).then(function (data) {
    //Do your work here
}, function (data) {
    console.log(data);
});
```


## Baasic Modules

Baasic back-end contains various built-in modules that can be easily consumed through the Baasic JavaScript library. Baasic Developer Center contains detailed information about all the core modules supported by the [JavaScript library](http://dev.baasic.com/sdk#JavaScript).

## Build Process

1. Install [NodeJs](http://nodejs.org/download/)
2. Open Shell/Command Prompt in the Baasic JavaScript folder
3. Run `npm install`
4. npm run build:dev _or_ npm run build:prod

Baasic JavaScript library has the following developer dependencies:

* [Inversify](http://inversify.io/)

## Contributing

##### Pull requests are always welcome

We appreciate pull requests you make, and we'll do our best to process them as quickly as we can. Even if it's just a typo you found or any small or large issue you fixed - please do it! It will help us a lot.

If your pull request is not accepted on your first try, don't be discouraged! If there's a problem with your implementation, hopefully you received feedback on what to improve.

##### Issue reporting

Before you create a new issue, please make sure it hasn't already been reported. In case it already exists simply add a quick _"+1"_ or _"I have the same problem"_ to the existing issue thread.

##### Other

* Help us write the documentation
* Create interesting apps using SDK
* Looking for something else to do? Get in <u>touch</u> ...
