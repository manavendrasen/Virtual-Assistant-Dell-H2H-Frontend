# Admin Dashboard and Chat UI 

## Project Architecture 
![image](https://user-images.githubusercontent.com/26283488/139179544-e0c0cdca-4bd6-4ae2-826c-bb3179288df6.png)

## Available Scripts

In the project directory, you can run:

## Development

### `yarn start`

Runs the app in the development mode.

### Run using Docker

Runs the app in the development mode using Docker.

```sh
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
```

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.


## Production

### Run using Docker

```sh
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build
```


- Add -d to run in detached mode (no logs)



