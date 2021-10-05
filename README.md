<!-- PROJECT LOGO -->
<br />
<p align="center">

<h3 align="center">React Hook Forms Demo</h3>

  <p align="center">
    A demo project to use react hook forms to validate custom forms  
    <br /> 
    <br />
    </p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#scripts">Available scripts</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
</ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is a demo about how to implement react hook forms with custom validations and handle submit events

### Built With

This project was build it with:

- [React-hook-form](https://react-hook-form.com)
- [Javascript](https://www.javascript.com)
- [React](https://reactjs.org)
- [React-redux](https://react-redux.js.org)
- [Axios](https://axios-http.com/docs/intro)
- [Jest](https://jestjs.io)
- [Material UI](https://mui.com/es/)

<!-- GETTING STARTED -->

## Getting Started

Before you start, you must read the article where I explain all project and how it works.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ridouku/react-hook-forms.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. You need add an environment file in src/environment 
to use your own endpoint, you can see the definitions in the mustache file,
in this case we just need an url value. 
   ```
   export const environment = {
       URL : "http://127.0.0.1:8000"
   }
   ```
<!-- USAGE EXAMPLES -->

## Usage

You can read about this project and how it works, following the next link [Documentation](https://ridouku.medium.com/create-and-publish-your-own-components-with-react-and-gulp-63a8f27e5571)

## Available Scripts

In the project directory, you can run:

```sh 
npm run start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

```sh 
npm run test
```

You can set the level of test: unit test or coverage, just need add the next: 
```sh 
npm run test:unit
```

or 

```sh 
npm run test:coverage
```

The last one generates a report with the entire coverage of your code.


## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- CONTACT -->

## Contact

Bryan Arellano - ridouku@gmail.com

Project Link: [Reusable components react](https://github.com/ridouku/reusable-components-react)
