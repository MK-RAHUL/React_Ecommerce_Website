import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import instance from '../../../Axios'
import img4 from '../../images/Rectangle 5-1.png'

function Add_products() {
  const inputref=useRef()
  const navigate =useNavigate()
  const [image,setimage] =useState()
  const handleimageclick =()=>{
   inputref.current.click()
 }
  const handleimagechange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1]; 
        setimage(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };
  const [selects,setselects]= useState([])
  const [value, setvalue] = useState({
    name: '',
    category:'',
    stock: 0,
    price: 0,
    description: '',
  });
  useEffect(() => {
    instance.get("/api/category/allcategory").then(response =>{
      console.log(response.data)
      setselects(response.data)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, [])

  const handlesubmit = (e) => {
    e.preventDefault();

    const body={ 
    "name": value.name,
    "description": value.description,
    "stock":value.stock,
    "categoryId":value.category,
    "price":value.price,
    "image":image}

    console.log(body)
    instance.post('/api/Product/ProductInsert', body)
      .then((response) => {
        console.log(response);
        alert('Product Added Successfully')
        navigate('/products');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
    
  return (

    <div className='d-flex w-100 vh-200 justify-content-center align-items-center'style={{backgroundColor:'#F0D1D1'}}>
      <div className='w-50 shadow p-4 rounded' style={{backgroundColor:'#FB9722'}}>
        <h3 style={{textAlign:'center'}}>Add Products</h3>
        <form onSubmit={handlesubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Product Name</label>
            <input
              type='text'
              name='name'
              className='form-control w-50 mb-3'
              value={value.name}
              onChange={e=>setvalue({...value,name:e.target.value})}
              required
            />
          </div>

          <div className='w-50 mb-3'>
  <label htmlFor='email'>Product Category</label>

  <select
  name="category"
  id="category"
  value={value.category} 
  onChange={e=>setvalue({...value,category:e.target.value})}>
  <option value="">Select a category</option>
  {selects.map((obj) => (
    <option key={obj.id} value={obj.id}>
      {obj.name}
    </option>
  ))}
</select>


</div>

          <div className='mb-2'>
            <label htmlFor='email'>Price</label>
            <input
              type='text'
              name='name'
              className='form-control w-50 mb-3'
              value={value.price}
              onChange={e=>setvalue({...value,price:e.target.value})}

              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Available Stock</label>
            <input
              type='text'
              name='name'
              className='form-control w-50 mb-3'
              value={value.stock}
              onChange={e=>setvalue({...value,stock:e.target.value})}

              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Description</label>
            <textarea
              type='text'
              name='name'
              cols='33'
              className='form-control w-50 mb-3'
              value={value.description}
              onChange={e=>setvalue({...value,description:e.target.value})}
              style={{border:'none'}}

            ></textarea>
          </div>
          <div onClick={handleimageclick}>
               {image ? <img src={`data:image/png;base64,${image}`} className='category_image' width={200} height={200} style={{float:'right'}}/> : <img src={img4} className='category_image' width={200} height={200} style={{float:'right'}}/>}
               <input type="file" ref={inputref} onChange={handleimagechange} style={{display:'none'}} />
               </div>
          <Button type='submit' className='btn btn-success w-25'>
            Submit
          </Button>
          <Link to='/products' className='btn btn-primary ms-3 w-25'>
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Add_products