const Wrapper = ({children}) => (
  <div>
  <div>header</div>
  <div>{children}</div>
  <div>footer</div>
  </div>
  )
  
  function Teacher() {
    debugger;
    $.get("/components/page/ListHtml.cshtml", function (data) {
      const testApp = ({name}) =>  data;
      ReactDOM.render(
        <testApp />,
        document.getElementById('myApp2')
        )
      });
    }
    const testApp = ({name}) =>  <div>Hello {name}</div>;
       const WrappedApp = ({name}) => (
      <Wrapper>
      <App name={name}/>
      </Wrapper>
      );
      
      render(<WrappedApp name="toto"/>,node);  
      function getServerSideProps() {        
        var Component = eval(Babel.transform('<div>this is test</div>',{presets: ['es2015']}).code);
      }        
      
      function creareApp(){
        debugger;
        var d = getServerSideProps();        
        $.get("/components/page/ListHtml.cshtml", function (data) {
          debugger
          let page= {__html:  data};                
          const TestApp = ({name}) => { return data } 
          Babel.transformtransform('<h1><Component/></h1>', {presets: ['@babel/preset-react']});
          
          var element= <TestApp  name="Ali"/>;
          var ddd=  ReactDOMServer.renderToStaticMarkup(element)
        });
      };
      
      creareApp();