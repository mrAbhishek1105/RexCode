# RexCode Online Compiler

An online code compiler built with React, Monaco Editor, and Node.js that allows users to write and execute code in multiple programming languages. This project uses the Piston API to compile and run the code.

## Features
- **Code Editor:** Built using Monaco Editor, providing a rich editing experience similar to VSCode.
- **Language Support:** Execute code in multiple languages using the Piston API.
- **Responsive UI:** A modern and responsive interface developed with React.
- **Language Selector:** Dropdown menu to choose programming languages.

## Technologies Used
- **Frontend:** React, Monaco Editor, Select Component
- **Backend:** Node.js, Express.js
- **API:** Piston API ([https://emkc.org/api/v2/piston/execute](https://emkc.org/api/v2/piston/execute))
- **Other:** Docker (for local setup)

## Installation and Setup Instructions

#### Clone the repository:
```bash
git clone https://github.com/username/rexcode-online-compiler.git
cd rexcode-online-compiler

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

# Run the frontend
cd client
npm start

# Run the backend
cd ../server
node index.js
```
>[!IMPORTANT](this website get inspired from geeksforgeeks.org)

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


