import React from 'react'
import './Products.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import img2 from '../../images/🦆 icon _edit_.png'
import img3 from '../../images/trash-2.png'
import img4 from '../../images/Rectangle 5-1.png'
import {Form,Modal,Button} from 'react-bootstrap'
import { useState ,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../../Axios'
function Products() {

  const [data, setData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',

  });

  const navigate =useNavigate()
    const [show, setShow] = useState(false);
    const handleClose = () =>{
      setShow(false);
      navigate('/products')
    }
    const handleShow = () => setShow(true);

    const [products,setproducts] = useState([])

    useEffect(() => {
      instance.get('/api/Product/allProducts').then(response=>{
        // console.log(response.data)
        setproducts(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, [])

    const handledelete =(id)=>{
      const confirm = window.confirm("Would You Like To Delete ?")
      if(confirm){
        instance.delete(`/api/Product/ProductDelete?id=${id}`)
        .then(res =>{
          console.log(res)
          navigate('/products')
        })
        .catch(err => console.log(err))
      }
    }
    
  return (
    <div className='products'>
        <h2>All Products</h2>
        <div className='input_box'>
        <input className='input' type="text" placeholder='Search Something...'/>
        <button className='search'>Search</button>
        </div>
        <Link to='/products/add-products'><button className='addnew' onClick={handleShow}>Add New Product</button></Link>
        <>      
        <Modal show={show} onHide={handleClose}  size='lg'>
        <Modal.Body style={{backgroundColor:'#FB9722'}}>
        <Modal.Title style={{marginTop:'20px',textAlign:'center',fontSize:'35px',backgroundColor:'#FB9722'}}>Product</Modal.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{fontSize:'15px',marginTop:'20px',marginLeft:'50px',color:'white'}}>Product Name</Form.Label>
              <Form.Control
                type="text"
                style={{width:'300px',marginLeft:'50px'}}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                required


              />
               <Form.Label style={{fontSize:'15px',marginTop:'10px',marginLeft:'50px',color:'white'}}>Product Category</Form.Label>
              <Form.Control
                type="select"
                style={{width:'300px',marginLeft:'50px'}}
                value={data.category}
                onChange={(e) => setData({ ...data, category: e.target.value })}
                required


              />
               <Form.Label style={{fontSize:'15px',marginTop:'10px',marginLeft:'50px',color:'white'}}>Price</Form.Label>
              <Form.Control
                type="text"
                style={{width:'300px',marginLeft:'50px'}}
                value={data.price}
                onChange={(e) => setData({ ...data, price: e.target.value })}
                required


              />
               <Form.Label style={{fontSize:'15px',marginTop:'10px',marginLeft:'50px',color:'white'}}>Available Stock</Form.Label>
              <Form.Control
                type="text"
                style={{width:'300px',marginLeft:'50px'}}
                value={data.stock}
                onChange={(e) => setData({ ...data, stock: e.target.value })}
                required
              />
            </Form.Group>
            <img src={img4} className='category_image2' width={250} height={250} style={{float:'right',marginRight:'10px'}}/>
            <Form.Group
              className="textarea    mb-3"
              style={{float:'right'}}
            >
              <Form.Label style={{fontSize:'15px',marginTop:'10px',color:'white'}}>Description</Form.Label>
              <Form.Control as="textarea" rows={3}  style={{width:'300px'}} 
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              required
              />
            </Form.Group>
          </Form>
          <Button variant="primary" className='productbtn' onClick={handleClose} style={{width:'300px',marginLeft:'50px'}}>
            Save
          </Button>
        </Modal.Body>
      </Modal>
      </>
        <div className='table'>
            <table style={{textAlign:'center'}} className='table table-striped'>
                <thead>
                  <tr>
                    <th >Product <AiOutlineArrowDown/></th>
                    <th >Category <AiOutlineArrowDown/></th>
                    <th >Stock Quantity <AiOutlineArrowDown/></th>
                    <th >Unit Price <AiOutlineArrowDown/></th>
                    <th >Description <AiOutlineArrowDown/></th>
                    <th ></th>
                    <th ></th>
                    </tr>
                </thead>


                {
                  products.map((obj)=>
                  <tbody>
                  <tr key={obj.id}>
                      <td style={{display:'flex',paddingTop:'20px',paddingLeft:'10px'}}><img className='product_image' src={`data:image/png;base64,${obj.image}`} />{obj.name}</td>
                      <td style={{paddingTop:'20px'}}>{obj.categoryName}</td>
                      <td style={{paddingTop:'20px'}}>{obj.stock}</td>
                      <td style={{paddingTop:'20px'}}>{obj.price}</td>
                      <td style={{paddingTop:'20px'}}>{obj.description}</td>
                      <td style={{paddingTop:'20px'}}><img src={img2} alt="" /></td>
                      <td style={{paddingTop:'20px'}}> <img src={img3} onClick={e=>handledelete(obj.id)} /></td>
                  </tr>
                  </tbody>
              
                  )
                }

                
               
                <tfoot>
                <tr>
                    <th><button className='product_btn'>PREVIOUS</button></th>
                    <th ></th>
                    <th>Page 1 Of 10</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th><button className='product_btn'>NEXT</button></th>
                </tr>
                </tfoot>
            </table>
        </div>
    </div>
  )
}

export default Products