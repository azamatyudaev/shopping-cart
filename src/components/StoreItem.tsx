import { Button, Card } from 'react-bootstrap'
import formatCurrency from '../utilities/formatCurrency'
import { useState } from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'

interface StoreItemProps {
  id: number
  name: string
  price: number
  image: string
}

function StoreItem({ id, name, price, image }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart
  } = useShoppingCart()
  const quantity = getItemQuantity(id)

  return (
    <Card className="h-100">
      <Card.Img
        src={image}
        variant="top"
        height="150px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-2">
          <span>{name}</span>
        </Card.Title>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: '0.5rem' }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: '0.5rem' }}
              >
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <div>
                  <span className="fs-3">{quantity}</span>
                </div>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem
