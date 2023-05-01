Application created in Angular 15 for Deale's Beer Day.
-->The requirements were to be able to list all the beers, search by name and see the details of each one.
I also included the functionality to be able to get a random beer.
The details of the beers list items such as the name, IBU, ABV, the types of malts and barleys used and the foods that pair well with the beer.
-->The data is consumed from https://punkapi.com/documentation/v2
The pagination should be 12 elements with infinite scroll, for this I used ngx pagination.(npm i ngx-pagination)
Next steps/improvements to be done:
* Refactoring and CSS styling improvements.
* Creation of card component to reuse in other components.
* Background image when the beer does not have one
* Filter beers that come from keg to show them in another section
-->To run the application from your computer, once cloned this repository, run the command npm i in the terminal, then the command ng s -o will open a tab in your default browser to view the content to date.