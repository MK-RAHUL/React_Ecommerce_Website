import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import instance from '../../Axios';

function Edit_category() {
    const [data, setData] = useState({
        name: '',
        description: '',
        image:'',
      });
    
      const { id } = useParams();
      useEffect(() => {
        const body={ "name": data.name,
        "description": data.description,
        "image":data.image}
        instance.get(`/api/category/categorybyid/${id}`,body)
          .then(response => {
            console.log(response.name,response.description,response.image)
            setData(response.data);
          })
          .catch(err => {
            console.log(err);
          });
      }, [id]);

      
  return (
    <div>
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 rounded'>
        <h3>Category</h3>
        <form>
          <div className='mb-2'>
            <label htmlFor='name'>Category Name :</label>
            <input
              type='text'
              name='name'
              className='form-control'
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
              cols='30'
              rows='10'
              value={data.description}
              onChange={(e) => setData({ ...data, description: e.target.value })}
              required
            ></textarea>
          </div>
          <div>
            <img src={data.image} alt="" />
          </div>
          <Button type='submit' className='btn btn-success'>
            Update
          </Button>
          <Link to='/category' className='btn btn-primary ms-3'>
            Back
          </Link>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Edit_category