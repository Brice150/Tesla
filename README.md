<div align="center">
<img height="130px" width="130px" src="./src/assets/images/logo.png">
</div>
  
# Tesla

Frontend : Angular

<details>
  <summary>Pages Features</summary>

### Step 1: Choose your Model And color

- Select the Tesla Model of your choice
- First color is selected with the model but can be changed
- At least a model has to be selected to get access to the next step

### Step 2: Select your config and options

- Select your car configuration and options
- Each options will add a $1000 cost in the next step
- At least a configuration has to be selected to get access to the next step

### Step 3: Summary

- View all your options and price
- Total price is displayed

</details>

<details>
  <summary>Run Locally</summary>

### Clone the project

```bash
  git clone https://github.com/Brice150/Tesla.git
```

### Install dependencies

```bash
  npm install
```

### Start the server

```bash
  ng serve -o
```

</details>

<details>
  <summary>API Reference</summary>

### Models

```http
  GET /models
```

### Options

```http
  GET /options/${modelCode}
```

</details>
