# tapaScript Cars

### Some characteristics of this project

- This is a React project.
- The component hierarchy has matched with React Dev Tool.
- The project has designed with TailwindCSS.
- No Eslint error OR Eslint suppression.
- No Spell Checker error too.
- The optimized file is deployed in [tapaScript Cars](https://superb-yeot-414500.netlify.app/)

### Project Explanation

- This is a `React` project developed by **Learner of string**(alias). According to the characteristics of this project, I matched the components hierarchy with the React Dev Tool. I also used tailwindcss with proper installation(no CDN). I also tried to have no eslint warning.

- Actually this is a single page website with some information of some cars. These information are stored in an array where all the elements are a particular object. I mean objects in an array. The array is stored in `./src/Components/CarList.jsx`. The array name is CARS and it is a const in type.

- From `CarList.jsx`, I sent the information about that particular car, to `CarBox.jsx` and from there, using `props` I sent them to `CarDetails.jsx`.

- I validated the `PropTypes` in `CarBox.jsx` and `CarDetails.jsx`

### How to run this project locally from this source code?

##### You must need to be installed nodejs, npm, Visual Studio Code to run this code locally.

- First of all, clone this repository with this command:

  ```bash
      git clone bla bla bla
  ```

- Then run these command one after another:

  ```bash
   cd tapascriptCar
  ```

  ```bash
     code .
  ```

  ```bash
     npm install
  ```

  ```bash
     npm run dev
  ```

- After these command, the project with run on your machine locally. Now press in your VSCODE terminal `o + enter key` alongside.

Now the project should open in your browser. If your browser doesn't run automatically, run it manually and press `ctrl + left mouse key` on the url `http://localhost:5173/`. Then it will be opened.

### Component hierarchy Diagram:

[![Component hierarchy image](image)](./src/assets/uxDiagram.jpg)

### React Dev Tool hierarchy check:

[![react dev tool ss](image)](./src/assets/reactDevTool.png)

### This what you will see in your browser

[![ss](image)](./src/assets/UX.png)
