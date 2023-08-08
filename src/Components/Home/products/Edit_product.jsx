import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import instance from '../../../Axios'

function Edit_product() {
  const inputref=useRef()
  const navigate =useNavigate()
  const [image,setimage] =useState()
  const handleimageclick =()=>{
   inputref.current.click()
 }


const [categories,setcategories]=useState([])
  const [value, setvalue] = useState({
    name: '',
    category:0,
    stock: 0,
    price: 0,
    description: '',
    image:''
  });
  const { id } = useParams();

  useEffect(() => {
    instance.get(`/api/Product/ProductById?id=${id}`)
      .then(response => {
        console.log(response.data.name, response.data.description, response.data.stock, response.data.categoryId, response.data.price,response.data.image)
        setvalue({
          ...value,
          name: response.data.name,
          description: response.data.description,
          stock: response.data.stock,
          category: response.data.categoryId,
          price: response.data.price,
          image:response.data.image
        });
      })
      .catch(err => {
        console.log(err);
      });

      instance.get("/api/category/allcategory").then(response =>{
        // console.log(response.data)
        setcategories(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);
   
  const handlesubmit = (e) => {
    e.preventDefault();
    const body ={
        "name":value.name,
        "categoryId":value.category,
        "description":value.description,
        "stock":value.stock,
        "price":value.price,
        "image":image,
    }
    instance.put(`/api/Product/ProductUpdate?id=${id}`,body)
      .then((response) => {
        // console.log(response.data);
        alert('Product Updated Successfully')
        navigate('/products');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleimagechange = (e) => {
    const filess = e.target.files[0];
    if (filess) {
      const readerr = new FileReader();
      readerr.onload = () => {
        const base64 = readerr.result.split(',')[1]; 
        setimage(base64);
      };
      readerr.readAsDataURL(filess);
    }
  };



  return (

    <div className='d-flex w-100 vh-200 justify-content-center align-items-center' style={{backgroundColor:'#F0D1D1'}}>
      <div className='w-50 shadow px-5 pt-3 rounded' style={{backgroundColor:'#FB9722'}}>
        <h3 style={{textAlign:'center'}}>Update Products</h3>
        <form onSubmit={handlesubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Product Name</label>
            <input
              type='text'
              name='name'
              className='form-control w-50 mb-3'
              value={value.name}
              onChange={(e) => setvalue({ ...value, name: e.target.value })}
              required
            />
          </div>

          <div className='mb-2'>
  <label htmlFor='email'>Product Category</label>
  <select
    name="category"
    id="category"
    value={value.category}
    onChange={e => setvalue({ ...value, category: e.target.value })}
    required
  >
    {categories.map((obj) => (
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
              onChange={(e) => setvalue({ ...value, price: e.target.value })}
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Available Stock</label>
            <input
              type='text'
              name='name'
              className='form-control w-50 mb-3'
              value={value.stock}
              onChange={(e) => setvalue({ ...value, stock: e.target.value })}

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
              onChange={(e) => setvalue({ ...value, description: e.target.value })}
              style={{border:'none'}}required
            ></textarea>
          </div>
          <div onClick={handleimageclick}>
            {image ?  <img src={`data:image/png;base64,${image}`} className='category_image' width={200} height={200} style={{float:'right'}}/> :  <img src={`data:image/png;base64,${value.image}`} className='category_image' width={200} height={200} style={{float:'right'}}/>}
               <input type="file" ref={inputref} onChange={handleimagechange} style={{display:'none'}} />
               </div>
          <Button type='submit' className='btn btn-success w-25'>
            Update
          </Button>
          <Link to='/products' className='btn btn-primary ms-3 w-25'>
            Back
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Edit_product