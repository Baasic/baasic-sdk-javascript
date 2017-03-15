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

Please add the following lines of code after the jQuery include:

```html
<script src='https://code.jquery.com/jquery-3.1.1.slim.min.js'></script>
<script src='/js/hal-parser.js'></script>
<script src='/js/uritemplate-min.js'></script>
<script src='/js/baasic-sdk-javascript-2.0.0.min.js'></script>
```

### Application Configuration

To be able to use the library you will need to use the _baasicSdkJavaScript_ object on the global scope.

```javascript
//Note: this is only the option example, these are the defaults
var options = {    
    apiRootUrl: 'api.baasic.com',
    apiVersion: 'v1',
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
