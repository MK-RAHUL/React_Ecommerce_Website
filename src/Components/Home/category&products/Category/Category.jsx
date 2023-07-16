import React from 'react'
import './Category.css'
import { Card} from 'react-bootstrap'
import img1 from '../../../images/image 12.png'

function Category() {
  return (
    <div className='category_name'>
        <button>Product Category</button>
        <div className="product_cards">
        <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
      <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
      <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
      <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
      <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
      <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
      <Card className='cards' style={{ width: '150px',height:'145px' }}>
      <Card.Img variant="top" src={img1} style={{width:'145px',height:'120px'}} />
        <Card.Title className='card_title'>Phone</Card.Title>
      </Card>
        </div>
    </div>
  )
}

export default Category