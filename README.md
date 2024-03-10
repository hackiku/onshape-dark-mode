# Onshape Dark Mode Workaround

Here's a quick workaround to create a native MacOS app for Onshape, with a enable dark mode in Onshape using [Nativefier](https://github.com/nativefier/nativefier) and a custom JavaScript injection script. 

**Features:**

- Build a native `Onshape.app` you can open like any other Mac app
- Add a small '🌗' button top-right to toggle dark mode on/off
- Dark mode simply inverts colors on the whole page, but it looks surprisingly well
- Removes the 'Try Professional' banner on top (sorry, Onshape team!)


## Getting Started

### Prerequisites
- Node.js and npm installed OR Homebrew installed
- [Nativefier](https://github.com/nativefier/nativefier) installed globally via npm (`npm install -g nativefier`) or with Homebrew (`brew install nativefier`)

### Installation

1. Clone this repository or download the files directly.
2. Navigate to the cloned directory and add your Onshape email and password to `login-script.js` under `const EMAIL = '';` and `const PASSWORD = '';`


> **⚠️ Security Notice:** Embedding credentials directly within scripts is a significant security risk. Good new is, once the application has been created, you can delete the script containing embedded credentials and the app will keep working. However, your credentials will still be unsecurely stored in the `Onshape.app` you built — use at your peril!


### Usage

To create your Onshape desktop application with auto-login and dark mode enabled, run the following command:


```bash
nativefier 'https://cad.onshape.com/{...full Onshape start screen URL}' --name "Onshape" --inject path/to/login-script.js
```

Replace `path/to/login-script.js` with the actual path to the files in your cloned or downloaded project directory.

Nativefier will create `Onshape.app` in a subdirectory. You can copy it anywhere, including your `/Applications` folder. 

Whenever you open the app, it will pre-fill your login credentials, click the login button for you, and add the little dark mode button. Yay! Engineer away.

### Customization

You need to adjust the `login-script.js` to match your login credentials. Remember to secure your credentials appropriately.

### License

Distributed under the MIT License. See LICENSE for more information.

