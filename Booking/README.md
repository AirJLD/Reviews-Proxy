# Booking
Booking and availability module

## Related Projects

  - https://github.com/airJLD/Booking
  - https://github.com/airJLD/Reviews
  - https://github.com/airJLD/Gallery
  - https://github.com/airJLD/Description

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)

## Usage
To see this module in action you will need to began a localhost node server. It is currently setup to point at <localhost:3000>. 
If you wish to make changes the file is located at '/server/server.js'

Run to start node.js server
```
npm start
```

Point your browser here to interact with the live module
```
http://localhost:3000
```

## Requirements

This project requires MySQL 5.7 and Node v8.12
It's recommended to install Node via NVM and install the 8.12 build. 
At the time of writing this, Node LTS is 10.13.0, but it is untested with the current build of this project

## Development

### Installing Dependencies

From within the root directory:

Download dependencies by running
```
npm install
```

Seed the database with mock data via
```
npm run db:setup
```

This project has CircleCI so manually running tests shouldn't be necessary, but if you would like to run:
```
npm test
```

Linting is based on AirBNB Style Guide. You can run the tests by:
```
npm run lint
```

As this project is written in ES6 and JSX you will need to use babel to transpile this syntax down to ES5. 
Webpack/Babel is setup as a dependency so make sure to run this command before you began coding
Note: This has a watch flag enabled
```
npm run react-dev
```
