# budget-buddy-front

## Name

Budget Buddy Front End

## Description

This is the front end for the Budget Buddy App. This is a school project at Sup de Vinci.

## Installation

1. To install the project install git :

```
# Debian :
sudo apt-get git
```

2. Install nodejs via apt-get or nvm to get the latest version 

```
# Using apt-get :
sudo apt-get install nodejs

# Using nvm :
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
nvm install node

# Verify node version :
node -v
```
3. Clone the project repository

Make sure that you are correctly logged in with github or that you have an SSH key setup.

```
# Go to a specific folder :
cd parent-directory

# Clone repository :

# HTTPS
git clone https://github.com/jimmy-martin/budget-buddy-back.git

# SSH
git clone git@github.com:jimmy-martin/budget-buddy-back.git
```

4. Install all yarn dependencies :

```
yarn
```

5. (optionnal) Verify husky and commitizen installation :

```
yarn husky install
```

## Run project

- Run following command in the terminal :
```
yarn dev
```

- Then go to ```http://localhost:[port]``` with the port shown on your web browser of choice
- Or do Ctrl+Click on the link shown in the terminal if you run it in an IDE

# Package list

This list might be out of date, check package.json for any discrepancies.

- Vite : Project initialisator
- Vue : Javascript Framework
- Vue Router : View router for Vue
- Axios : API Requests
- Husky : Git hooks
- Commitizen : Linter for commit messages
- Sass : SCSS for node

## Authors

Jimmy MARTIN | Mathieu MORGAT | Ashley RAKOTOARISOA

## License

This project has no licencing : It is a simple school project.
