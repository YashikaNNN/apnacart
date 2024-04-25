import React from 'react'
 
 class  AddItem extends React.Component {
    constructor(props){
        super(props);
        this.state={
       Productname:"",
       ProductPrice:0,
        }
    }
    render() { 
        return <form className='row mb-5' onSubmit={(e)=>{ e.preventDefault();
        this.props.addItem( this.state.Productname,Number(this.state.ProductPrice));}}>
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">Name</label>
          <input type="text" className="form-control" id="inputname" aria-describedby="name" name="Productname"
          onChange={(e)=> {this.setState({Productname: e.currentTarget.value});
          }}
          value={this.state.Productname}/>
          
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">price</label>
          <input type="number" className="form-control" id="Price" name="ProductPrice"
          onChange={(e)=>{this.setState({ProductPrice:Number( e.currentTarget.value)});
        }} 
        value ={this.state.ProductPrice}/>
        </div>
        
        <button type="submit" className="btn btn-primary col-4"> Add</button>
      </form> 
    }
}
 
export default AddItem ;