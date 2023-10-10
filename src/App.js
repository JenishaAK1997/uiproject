import React from 'react';
import { Container, Row, Col, Navbar, Nav, Table ,Form } from 'react-bootstrap';
import './App.css'

function App() {
  // Dummy data for the table
  const dummyData = [
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
    { id:  'AHGA68', date: '23/09/22', customer: 'Jacab Marcus', payable: 100, paid: 50, due: 50 },
   
    
    
    // Add more dummy data as needed
  ];

  return (
    <Container fluid>
      <Row>
        {/* Left Side - Navigation */}
        <Col md={2} className="left-sidebar"><h5 className='logo'>      Guvi Sales</h5>
          <Navbar bg="white" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <Nav.Link href="#" className="first-link"><i className="fa fa-th-large"></i>Dashboard</Nav.Link>
                <Nav.Link href="#"><i className="fa fa-calendar-check-o"></i>Lab Test</Nav.Link>
                <Nav.Link href="#"><i className="fa fa-calendar"></i>Appointment</Nav.Link>
                <Nav.Link href="#"><i className="fa fa-shopping-bag"></i>Medicine Order</Nav.Link>
                <Nav.Link href="#"><i className="fa fa-envelope"></i>Message</Nav.Link>
                <Nav.Link href="#"><i className="fa fa-credit-card"></i>Payment</Nav.Link>
                <Nav.Link href="#"><i className="fa fa-cog"></i>Settings</Nav.Link>
                <Nav.Link href="#" className='last'><i className="fa fa-question-circle-o"></i>Help</Nav.Link>
             
              
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        
        {/* Right Side - Table */}
        <Col md={10} className="right-content">

        <Row className='rtop'>
        <Col md={6} className="search">
     
          <i class="fa fa-search tops"></i><input type='text' className='s' placeholder='Search'></input>
 
          </Col>
          <Col md={4} >
          </Col>
          <Col md={2} >
          <div className="bell-icon-container">
          <i className="fa fa-bell-o"></i>
    <div className="yellow-circle"></div>
  </div>
          </Col>
          </Row>


          <Row>
          <h5>Sales information</h5></Row>
          <Row className='rtop'>
        <Col md={3} className="search1">
     <h6>Customer</h6><br></br>
        <input type='text' className='s' placeholder='Enter Customer Name'></input>
 
          </Col>
          <Col md={3} className="search1">
          <h6>Invoice ID</h6><br></br>
    <input type='text' className='s' placeholder='Enter Invoice ID'></input>

     </Col>
     <Col md={3} className="search1">
     
     <h6>Start Date</h6><br></br><input type='text' className='s' placeholder='Start Date'></input>

     </Col>
     <Col md={3} className="search1">
     
     <h6>End Date</h6><br></br><input type='text' className='s' placeholder='End Date'></input>

     </Col>
          </Row>
          <Table bordered hover responsive className='custom-table'>
            <thead>
              <tr>
                <th>Select</th>
                <th>Invoice ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Payable Amount</th>
                <th>Paid Amount</th>
                <th>Due</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((row) => (
                <tr key={row.id}>
                  <td>
                  <label className="square-radio">
    <input type="radio" name="radio-group"/>
    <label></label>
  </label>
                      </td>
                  <td><a href="" >{row.id}</a></td>
                  <td>{row.date}</td>
                  <td>{row.customer}</td>
                  <td>{row.payable}</td>
                  <td>{row.paid}</td>
                  <td>{row.due}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
