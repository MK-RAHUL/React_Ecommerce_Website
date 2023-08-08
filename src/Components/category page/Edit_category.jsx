import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import instance from '../../Axios';


function Edit_category() {
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

    const [data, setData] = useState({
        name: '',
        description: '',
        image:''
      });
    
      const { id } = useParams();
      useEffect(() => {
        const body={ "name": data.name,
        "description": data.description,
        "image":data.image}

        instance.get(`/api/category/categorybyid?id=${id}`,body)
          .then(response => {
            console.log(response.data.name,response.data.description,response.data.image)
            setData(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);


      const handlesubmit = (e) => {
        e.preventDefault();
        const body={ 
        "name": data.name,
        "description": data.description,
        "image":image}
        console.log(body)
        instance.put(`/api/category/CategoryUpdate?id=${id}`, body)
          .then((response) => {
            console.log(response);
            alert('Category Updated Successfully')
            navigate('/category');
          })
          .catch((err) => {
            console.log(err.message);
          });
      };



      
  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'style={{backgroundColor:'#F0D1D1'}}>
      <div className='w-50 shadow px-5 pt-3 rounded' style={{backgroundColor:'#FB9722'}}>
        <h3 style={{textAlign:'center'}}> Update Category</h3>
        <form onSubmit={handlesubmit}>
          <div className='mb-2'>
            <label htmlFor='name'>Category Name :</label>
            <input
              type='text'
              name='name'
              className='form-control w-50 mb-3'
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Category Description :</label>
            <textarea
            name='description'
            id='description'
            cols='33'
              className='form-control w-50 mb-3'
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              required
              style={{border:'none'}}
            ></textarea>
          </div>
          <div onClick={handleimageclick}>
              {image ?  <img src={`data:image/png;base64,${image}`} className='category_image' width={200} height={200} style={{float:'right'}}/>  : <img src={`data:image/png;base64,${data.image}`} className='category_image' width={200} height={200} style={{float:'right'}}/>}
               <input type="file" ref={inputref} onChange={handleimagechange} style={{display:'none'}} />
               </div>
          <Button type='submit' className='btn btn-success w-25' >
            Update
          </Button>
          <Link to='/category' className='btn btn-primary w-25 ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Edit_category