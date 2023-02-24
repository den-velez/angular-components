# StoreComponents

It's a implementation follow a course to learn how create components in angular

what were implemented:

- Components: NavBar, Image, Product and ProductList
- Services: getProducts (API request to get fake list of products), store (global state)
- Pipes: for fix the currency data

Modules implemented:

- BehaviorSubject "rjsx"
- HttpClientModule "@angular/common/http"
- linter "@angular-eslint/schematics"

LifeCycle implemented:
onInit: API request
onDestoy: To cancel request when the components will be destroyed


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
