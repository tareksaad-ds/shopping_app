# Shopping App Documentation
This is a simple application that displays the products list for users and add any product to the cart list and the user can update quantity of selected products on cart list and deleting any product.
## Get Started
- Make sure Node is installed in your machine first if you don't already have Node installed you can install it from [node official website](https://nodejs.org/en/download).

- Make sure you have an android emulator or ios simulator installed before you run this application.


- Run `npm install` to install the needed dependencies to your application

- Run `npm run android` if you are using an android emulator or `npm run ios` if you are using an ios simulator or `npm start` to let the app start automatically then select the platform from the list of available platforms

- I created this application with expo so this application automatically will install 'Expo' on the virtual device.

## Used Technologies

- This application has been created with Expo to make it easier to create and run the application

- Used React Native Navigation for navigation between the application screens so I installed the required dependencies `npx expo install @react-navigation/native @react-navigation/native-stack react-native-safe-area-context react-native-screens` and I also used React Native Navigation to handle changing between dark and light themes.

- Used Redux by installing `npm install @reduxjs/toolkit react-redux` to optimize the application by fetching the products from fakeAPI one time and manage the state of the application by Redux 

- Used `fetch` for fetching the products from fakeAPI instead of installing `Axios` to avoid installing unnecessary dependencies 

- Used `Async Storage`, which a light package that can store cart items in the local storage to be saved locally till the user remove the items or checkout the cart list.

## Screenshots

| Light      | Dark |
| ----------- | ----------- |
| ![ShoppingApp Homepage Screen light theme](https://gomakaan-files.s3.us-east-2.amazonaws.com/home-light.jpeg) | ![ShoppingApp Homepage Screen dark theme](https://gomakaan-files.s3.us-east-2.amazonaws.com/home-dark.jpeg) |
| ![ShoppingApp Product Details Screen light theme](https://gomakaan-files.s3.us-east-2.amazonaws.com/details-light.jpeg) | ![ShoppingApp Product Details Screen dark theme](https://gomakaan-files.s3.us-east-2.amazonaws.com/details-dark.jpeg) |
|![ShoppingApp Cart Screen light theme](https://gomakaan-files.s3.us-east-2.amazonaws.com/cart-light.jpeg)|![ShoppingApp Cart Screen light theme](https://gomakaan-files.s3.us-east-2.amazonaws.com/cart-dark.jpeg)|