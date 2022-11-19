# Backend 2nd Project - Social Network

 <h3 align="center">MERN STACK BACKEND PROJECT</h3>

  <p align="center">
    Social Network made using Javascript, Node, Express and Mongoose.
    <br />
    <a href="https://github.com/miguelherreravillanueva/Proyecto-Backend.Social_Network"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://proyecto-backend-red-social-blond.vercel.app/">View Production Demo</a>
    ·
    <a href="https://github.com/miguelherreravillanueva/Proyecto-Backend.Social_Network/issues">Report Bug</a>
    ·
    <a href="https://github.com/miguelherreravillanueva/Proyecto-Backend.Social_Network/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
        <li><a href="#objectives">Objectives</a></li>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#endpoints">Endpoints</a></li>
         <li><a href="#built-with">Built With</a></li>
      </ul>   
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#future-roadmap">Future Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE OBJECTIVES -->
## Objectives
### Made a REST API for the following:
<objectives>
  <ol>
    <li>User registration using <a href="https://www.npmjs.com/package/bcrypt">Bcrypt.</a></li>
    <li>User login + token + middleware.</a></li>
    <li>CRUD of the endpoints.</a></li>
    <li>Give/remove a Like in a post.</a></li>
    <li>Give/remove a Followers in a post.</a></li>
    <li>Backend available in production.</a></li>
  </ol>
</objectives>


<!-- ABOUT THE PROJECT -->
## About The Project

This project is a backend of a social network API REST made whith the objective of working in a realistic project using mongoose to create and manage the databases of users, posts and comments.
Moreover, this project has been pushed to production using Vercel.

  <p align="center">
    <br />
    <a href="https://proyecto-backend-red-social-blond.vercel.app/"><strong>Click here to test the endpoints. »</strong></a>
  </p>
</div>

### Endpoints

<endpoints>
 
  <ol>
    <li>Users</a></li>
    <li>Posts</a></li>
    <li>Comments</a></li>
  </ol>
</endpoints>

This endpoints are usign GET, POST, PUT and DELETE requests. 
Moreover are used JWT Tokens to authenticate the user loged to create, modify or delete some post or comment.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

* [![Express][Express.js]][Express.js-url]
* [![Node][Node.JS]][Node.JS-url]
* [![Mongo][MongoDB]][MongoDB-url]
* [![JWT]][JWT-url]
* [![Postman]][Postman-url]
* [![Vercel]][Vercel-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install node express mongoose bcrypt
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app.

1. Clone the repo
   ```sh
   git clone https://github.com/miguelherreravillanueva/Proyecto-Backend.Social_Network.git
   ```
3. Install NPM packages
   ```sh
   npm install node express mongoose bcrypt
   ```
4. Create a .env file copying the example. Needed to have a database in <a href="https://www.mongodb.com/">MongoDB Atlas</a> to have a Mongo URI.

   ```js
   PORT = 'ENTER YOUR PORT';
   JWT_SECRET = 'ENTER YOUR JWT SECRET';
   MONGO_URI = 'ENTER YOUR MONGO URI ROUTE';
   ```
5. To work in local mode in POSTMAN you should to import a collection from this link to have all endpoints.

  ```js
https://api.postman.com/collections/24080900-ff4954ad-0aa4-4085-8b31-52a3c8b2b640?access_key=PMAT-01GJ7YQ8MEXEQJSRT3S3QQE2KA
  ```
6. Ready to start!
  ```sh
  npm start
  ```


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- FUTURE -->
## Future Roadmap

- [ ] Add Swagger Documentation
- [ ] Add Comment Authorship
- [ ] Add Multer to upload images
- [ ] Add User search
- [ ] Add Frontend using REACT

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/YourName`)
3. Commit your Changes (`git commit -m 'Add some YourName'`)
4. Push to the Branch (`git push origin feature/YourName`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

This project is under license of Sergio Cano

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list my favourites SOCIAL NETWORK projects I have explored and inspired by while doing my app.

* https://github.com/radikalex/backend-social-network
* https://github.com/Molerog/Red-Social
* https://github.com/sergiokano/Social-Network_Backend-Project


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PREVIEW -->
### Preview 

- Postman general overview
    Get_Info_User & Get_Post_By_Title endpoint.

![foto](assets/screen-recording.gif)


- MongoDB Cloud Posts overview

![foto](assets/mongoDBPost.png)



<!-- CONTACT -->
## Contact 
  <p align="center">
<a href = "mailto:mirkouda@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
    <a href="https://www.linkedin.com/in/mherrevi/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---
👨‍💻️ Developed by [Miguel Herrera](https://github.com/miguelherreravillanueva)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/sergiocano-dev
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/
[Vercel]: https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white
[Vercel-url]: https://vercel.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/es
[Express.js]: https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express.js-url]: https://expressjs.com/
[Node.JS]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[Node.JS-url]: https://nextjs.org/

[Postman]: https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white
[Postman-url]: https://www.postman.com/
