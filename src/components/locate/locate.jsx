import React,{Component} from 'react'

 class FindLoc extends Component {
  constructor(props) {
    super(props);
    this.state = {loc:[]};

   
    
        // let  rus
        // let  xPercent
        // const element = <h1>sss</h1>;
        // let  yPercent
  
       
          //  yPercent = event.pageY / window.innerHeight * 100;
          //  console.log( yPercent  )
          //  console.log( 'this x'+  xPercent)
          //  rus = xPercent
    
         
        }
        componentDidMount() {
            window.addEventListener("mouseup", (event)=> {
                event.preventDefault()
                this.setState(prevState => ({
                    loc: [...prevState.loc, { X: (event.pageX / window.innerWidth) * 100 }]
                  }),console.log("fff"))
    
                  this.setState(prevState => ({
                    loc: [...prevState.loc, { Y: (event.pageY / window.innerHeight) * 100 }]
                }))
                
                
                // this.setState({ Y: (event.pageY / window.innerHeight) * 100 });
                console.log(this.state.loc.X +"Y"+ this.state.loc.Y)
            });
        }
       
        render(){
    return (
        
      <div>
        <h1>  </h1>
        {this.state.loc.map((X)=>
        
        <h6> {X.X}</h6> 
        
        )}
        {/* {this.state.loc.map(loc=><h6>Y:{loc.Y}</h6>)} */}
        
        <p>kf </p>
      </div>
    );}
}

 export default FindLoc