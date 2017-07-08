const docs = [
   {
      "Title":"Es6",
      "selector":"es6",
      "tab":"Es6",
      "Content":"<div className=\"Content\"><div><p>Es6 functionality, at ContactPartners Es6 is used at the centre of the development process. </p><p>Babel is used to enable the Javascript to work on browsers which are not able to work properly with Es6.</p><p> Advantages of Es6 are great with the introductions of, let, const and blocked scoping which helps in leading to less misunderstandings that was caused by Es5.</p><p>Component classes are written using the es6 syntax, much like use of arrow functions and the declaring of variables with const and let throughout development.</p><p>Please see and example of Es6 class decloration below.</p></div>",
      "Graphic":"blank.png",
      "snippet":"<div className=\"style\"><p>export default class Header extends Component {<br/>  &nbsp&nbsp&nbsp&nbsp constructor(props) {<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp super(props);<br/> &nbsp&nbsp&nbsp&nbsp  }<br/>&nbsp&nbsp&nbsp&nbsp&nbsp    render() {<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp        const {children} = this.props;<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp       return ( <br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp            &ltAppBar  className={styles.appBar} ><br/> &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp               {children}<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp            &lt/AppBar><br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp        );<br/>&nbsp&nbsp&nbsp }<br/>}</p></div>",
      "id":"1160844458347054781"
   },
   {
      "Title":"Arhcitecture",
      "selector":"architectureoverview",
      "tab":"Architecture Overview",
      "Content":"React best practices, using ‘should component update’ to minimise re-renders Utilisation of stores data where appropriate rather than components state. Through but not limited to utilisation of high order components.",
      "Graphic":"blank.png",
      "id":"1154606670337393752"
   },
   {
      "Title":"Code Review",
      "selector":"codeReview",
      "tab":"Code Review",
      "Content":"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Graphic":"blank.png",
      "id":"1157179863266871229"
   },
   {
      "Title":"File Structure",
      "selector":"filestructure",
      "tab":"File Structure",
      "Content":"",
      "Graphic":"blank.png",
      "id":"1126293663140399053"
   },
   {
      "Title":"Gitflow",
      "selector":"gitflow",
      "tab":"Git Flow",
      "Content":"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Graphic":"blank.png",
      "id":"1117418173361145365"
   },
   {
      "Title":"Immutables",
      "selector":"immutables",
      "tab":"Immutables",
      "Content":"Utilisation of immutable to both impede referential data impacts and to allow for efficient render cycle comparison in should update.",
      "Graphic":"blank.png",
      "id":"1162418651480049646"
   },
   {
      "Title":"Life Cycle",
      "selector":"lifecycle",
      "tab":"Life Cycle",
      "Content":"",
     "Graphic":"blank.png",
      "id":"1152964002473690553"
   },
   {
      "Title":"Patterns and AntiPatterns",
      "selector":"patternsantipatterns",
      "tab":"Patterns and AntiPatterns",
      "Content":"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Graphic":"blank.png",
      "id":"1150824171912152320"
   },
   {
      "Title":"Routing",
      "selector":"routing",
      "tab":"Routing",
      "Content":"",
      "Graphic":"blank.png",
      "id":"1149382879529256679"
   },
   {
      "Title":"Stateless Functional Components",
      "selector":"statelessfunctionalcomponents",
      "tab":"Stateless Functional Components",
      "Content":"These components behave just like a React class with only a render method defined. Effectively this type of component will simply render other components and act as a presentation component. What is important here is that components created this way are stateless so you can’t use the internal state of the component like you normally do in “classic” components.",
      "Graphic":"sfc.png",
      "id":"1147180903383025596"
   },
   {
      "Title":"Store Communication",
      "selector":"storecommunication",
      "tab":"Store Communication",
      "Content":"",
      "Graphic":"blank.png",
      "id":"1143535906423162226"
   },
   {
      "Title":"Tech Stack Detailed",
      "selector":"techstackdetailed",
      "tab":"Tech Stack Detailed",
      "Content":"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "Graphic":"blank.png",
      "id":"1141561999742846119"
   },
   {
      "Title":"Tech Stack Highlights",
      "selector":"techstackhighlights",
      "tab":"Tech Stack Highlight",
      "Content":"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "snippet":"<div>immutable: '^3.8.1',<br/>    'moment': '^2.18.1',<br/>     'react': '^15.4.2','<br/>     'react-dom': '^15.4.2','<br/>    'react-router': '^4.1.1','<br/>     'react-router-dom': '^4.0.0','<br/>    'react-toolbox': '^2.0.0-beta.7','<br/>      'reflux': '^6.4.1','<br/>     'json-server': '^0.9.6', <br/>      'postcss': '^5.2.16','<br/>      'webpack': '^2in process of upgrading to 3', '<br/>      'Eslint' : majestic -  based on airbnb lint guidelines, '<br/>     'Testing': Minimal current utilisation<div>",
      "Graphic":"blank.png",
      "id":"1137894817632733056"
   },
   {
      "Title":"Theming",
      "selector":"theming",
      "selector":"Theming",
      "Content":"",
      "Graphic":"blank.png",
      "id":"1136932306813044281"
   }
];


export default docs;
