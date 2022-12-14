import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'

function StorePage() {
  return (
    <Row className="g-3" md={2} xs={2} lg={3}>
      {storeItems.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  )
}

export default StorePage
