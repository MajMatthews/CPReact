const docs = [
   {
      "Title":"Es6",
      "selector":"es6",
      "tab":"Es6",
      "Content":"<div className=\"Content\"><div><p>Es6 functionality, at ContactPartners Es6 is used at the centre of the development process. </p><p>Babel is used to enable the Javascript to work on browsers which are not able to work properly with Es6.</p><p>Advantages of Es6 are great with the introductions of, let, const and blocked scoping which helps in leading to less misunderstandings that was caused by Es6.</p><p>Component classes are written using the es6 syntax, much like use of arrow functions and the declaring of variables with const and let throughout development.</p><p>Please see and example of Es6 class decloration below.</p></div>",
      "Graphic":"blank.png",
      "id":"1160844458347054781"
   },
     {
      "Title": "Arhcitecture",
      "selector": "architectureoverview",
      "tab": "Architecture Overview",
      "Content": "<p>Our architecture focuses on an Api which is the service where data is collected, a Store where the data is stored and a view where the data and is combined with markup to be rendered to the screen.</p><p>The store is Reflux and the glue between Reflux and the view are are things such as Babel, react-router and Webpack. The architecture focuses around the React lifecycle methods, an example of this would be shouldComponentUpdate.</p><p>React best practices, using ‘should component update’ to minimise re-renders Utilisation of stores data where appropriate rather than components state. Through but not limited to utilisation of high order components.</p>",
      "Graphic": "blank.png",
      "id": "1154606670337393752"
    },
   {
      "Title":"Code Review",
      "selector":"codeReview",
      "tab":"Code Review",
      "Content":"<p>All code should be reviewed before being merged into the main branch. Code reviews should happen after any automated tests have run and passed. If necessary, the code under review should be running, so that a quick functionality check can be performed during the review.</p><p>Should include 1 senior / 1 junior dev - this gets a senior view on junior code, and encourages knowledge transfer from senior to junior.</p><p>The review itself should aim to ensure the finished code meets the specification and architecture previously defined. It isn't the place to discuss the architecture, as that should have been reviewed previously. Most code style checks should be automated, but a manual review of eslint / stylelint output may be necessary.</p><p>Common reasons that fail code reviews should be documented, and checked (ideally beforehand) in future code reviews.</p>",
      "Graphic":"blank.png",
      "id":"1157179863266871229"
   },
   {
      "Title":"File Structure",
      "selector":"filestructure",
      "tab":"File Structure",
      "Content":"<p>The file structure of the applications are developed based on components, it’s designed to simplify the nature of large complex applications. As is evident in the collapse panel component the css file which renders the style for the component is local to the component itself. </p><p>This technique where the css lives locally to the component makes the development process mush easier for the developer especially when working in large teams where the opportunity for amendments to global files is much more frequent where there is greater possibility for conflict errors. </p><p>The technique of having the structure of the application in a more modular fashion is an industry standard approach and scales well when developing larger applications.</p>",
      "Graphic":"moduleStack.png",
      "id":"1126293663140399053"
   },
   {
      "Title":"Gitflow",
      "selector":"gitflow",
      "tab":"Git Flow",
      "Content":"",
      "Graphic":"blank.png",
      "id":"1117418173361145365"
   },
   {
      "Title":"Immutables",
      "selector":"immutables",
      "tab":"Immutables",
      "Content":"<p>Utilisation of immutable to both impede referential data impacts and to allow for efficient render cycle comparison in should update. Using Immutable with React will optimise the performance of the app.</p><p>This is because of the amount of data the app contains could be complex and cause deep comparison checks, which could be costly performance wise so instead a copy of the object that has changed is made and a check is made against that, used with shouldComponentUpdate this helps performance of the application.</p>",
      "Graphic":"blank.png",
      "id":"1162418651480049646"
   },
   {
      "Title":"Life Cycle",
      "selector":"lifecycle",
      "tab":"Life Cycle",
      "Content":"<p>Taking the es6 approach when export default class is run and render method is expected, which in tern triggers what are called lifecycle methods, these are when the component is initialised, state and props are updated and when the component is unmounted.The initialisation phase includes: GetDefaultProps, GetIinitialState, ComponentWillMount, Render and ComponentDidMount.</p> <p>When the state has been updated the next set of life cycle methods come into play. These are updating state, shouldComponentUpdate, ComponentWillUpdate, Render and ComponentDidUpdate.</p>  <p>When the props updates the methods are applied in this order, UpDating Props, ComponentWillReciveProps, ShouldComponentUpdate, ComponentWillUpdate, Render and ComponentDidUpdate.</p> <p>The unmounting  has two phases Unmounting and componentWillUnmount. Not all of the methods above need to be used or called when developing but if they are then the order should be followed to stay inline with the design and thinking behind react. They all have their reasons for use and application on particular project but may not be needed on another project.</p>",
     "Graphic":"blank.png",
      "id":"1152964002473690553"
   },
   {
      "Title":"Patterns and AntiPatterns",
      "selector":"patternsantipatterns",
      "tab":"Patterns and AntiPatterns",
      "Content":"<p>This topic surrounds the design concepts and principles behind React and the approach in which a developer should take when writing code. Patterns and techniques which are classed as a design pattern in React could be as follows, conditional in JSX, stateless function, Async Nature of SetState(), event handlers, redux pattern or passing a function to a setState() and an anti-pattern could be using indexes as a key or props in initial state.</p><p>Effectively when developing the goal of React is to re-render the desired component and not the whole application taking full advantage of the speed of the virtual Dom. If the design concepts and principles are followed then the application will maintain good performance and do what it was designed to do.</p>",
      "Graphic":"blank.png",
      "id":"1150824171912152320"
   },
   {
      "Title":"Routing",
      "selector":"routing",
      "tab":"Routing",
      "Content":"<p>Routing has changed immensely from the static router which was used by React previously to  have the routes configured in the application and match the routes accordingly.</p><p>React router v4 has taken the stance of being dynamic and which on the surface will look slightly more tricky and maybe daunting but the capabilities of this technique will be much more favoured moving forward. There are several types of router available to use, BrowserRouter, NativeRouter, StaticRouter, HashRouter and MemoryRouter.</p><p>Hashrouter for example is a component, it is considered a higher order or behaviour orientated component as it does not show data via JSX like some other components but it does route from page to page, it effectively points to the root component and maps the application to reference of the index.</p>",
      "Graphic":"blank.png",
      "id":"1149382879529256679"
   },
   {
      "Title":"Stateless Functional Components",
      "selector":"statelessfunctionalcomponents",
      "tab":"Stateless Functional Components",
      "Content":"<p>These components behave just like a React class with only a render method defined. Effectively this type of component will simply render other components and act as a presentation component.</p><p>What is important here is that components created this way are stateless so you can’t use the internal state of the component like you normally do in “classic” components.</p><p>Some advantages of this new way of writing components are things such as the no need for the “this” keyword which at times caused many issues for developers.</p><p>This  way is also much simpler and easy to understand, it simply takes the props and spits out HTML which leads to another advantage of being easy to test.</p>",
      "Graphic":"blank.png",
      "id":"1147180903383025596"
   },
   {
      "Title":"Store Communication",
      "selector":"storecommunication",
      "tab":"Store Communication",
      "Content":"<p>Reflux provides good unidirectional data flow to manage the application state. There are three parts to the directional flow, Stores, Components and Actions.</p><p>The Stores mange the application state, the components listens for updates from the store and the components trigger actions which are listen for by the Store.</p>",
      "Graphic":"blank.png",
      "id":"1143535906423162226"
   },
   {
      "Title":"Tech Stack Detailed",
      "selector":"techstackdetailed",
      "tab":"Tech Stack Detailed",
      "Content":"",
      "Detailed":"true",
      "Graphic":"blank.png",
      "id":"1141561999742846119"
   },
   {
      "Title":"Tech Stack Highlights",
      "selector":"techstackhighlights",
      "tab":"Tech Stack Highlight",
      "Content":"<p> React based stack, using reflux for the the unidirectional data flow. React toolbox for material design components, and json server for persistent offline mocks for local deving.</p>",
      "Links":"<ul><li><a href=“https://www.npmjs.com/package/immutable”>immutable: ^3.8.1</a></li><li><a href=“https://momentjs.com/”>moment: ^2.18.1</a></li><li><a href=“https://libraries.io/npm/react/15.4.2”>react: ^15.4.2</a></li><li><a href=“https://libraries.io/npm/react-dom/15.4.2”></a>react-dom: ^15.4.2</li><li><a href=“https://libraries.io/npm/react-router”>react-router: ^4.1.1</a></li><li><a href=“https://www.npmjs.com/package/react-router-dom”>react-router-dom: ^4.0.0</a></li><li><a href=“https://www.npmjs.com/package/react-toolbox”>react-toolbox: ^2.0.0-beta.7</a></li><li><a href=“https://libraries.io/npm/reflux”>reflux: ^6.4.1</a></li><li><a href=“https://www.npmjs.com/package/npmdoc-json-server”>json-server: ^0.9.6</a></li><li><a href=“https://www.npmjs.com/package/postcss”>postcss: ^5.2.16</a></li><li><a href=“https://webpack.js.org/loaders/babel-loader/#install”>webpack: ^2</a></li><li><a href=“https://www.npmjs.com/package/eslint-config-majestic”> Eslint: majestic-  based on airbnb lint guidelines</a></li><li id=\"mySelect\"><a href=“https://bitbucket.org” >Git</a></li></ul>",
      "Highlights":"true",
      "Graphic":"blank.png",
      "id":"1137894817632733056"
   },
   {
      "Title":"Theming",
      "selector":"theming",
      "selector":"Theming",
      "Content":"<p>As outlined in the file structure section the css can be located local to the component to which it is styling and also in the global style sheets. The global styling refers to more widely used components. This is done to reduce the need for developing reoccurring styles in different style sheets. </p><p>When styling or creating a theme which could be used across the application in terms of a more global theme or some functionality from ReactToolbox, it is advisable to use the global stylesheet instead of a local stylesheet.</p><p>Moving forward there may be a shift in the development of the organisation of the stylesheet, but currently this method of using the local and global stylesheets work well.</p>",
      "Graphic":"globalTheme.png",
      "id":"1136932306813044281"
   }
];


export default docs;
