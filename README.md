# Bowen Analytics:
### Description:
Front-end for the Bowen analytics project.
## Contribution Policies:
### Adding a new feature:
To add a new feature. Please create a branch from the master branch with the name of the feature. Create the feature, add test cases, and make a pull request. And the prs should be approved by the overlords before any merge happens. All test cases must pass.
- naming:
- feature.type.ts eg: ``validation.directive.ts ==> ValidationDirective, hero-detail.component.ts ==> HeroDetailComponent``
### Adding new Components:
A component should always have its own folder with the same name as the component. every file in the component folder should be named as component-name.component.ts|html|scss|spec.
Apply single responsibility principle:
[https://en.wikipedia.org/wiki/Single_responsibility_principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
### Typescript:
Small compact functions are preferred for re-usability purposes.
### Html:
- section/spans are preferred over divs
- Never use ids (They are not reusable) everything is classes.
### SCSS:
- Always follow BEM nomenclature (google is a good reference to read about this)
- Any hard-coded values should be followed by reasons why they are hard-coded.
- Use common variables for colors/fonts/....