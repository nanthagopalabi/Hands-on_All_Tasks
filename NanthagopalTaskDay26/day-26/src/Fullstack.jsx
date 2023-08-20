import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function Fullstack() {
      return (
        <MDBRow id="card" className='row-cols-1 row-cols-md-3 g-4'>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgfO5rPffos9EJ8btJFrKZBdkmhr-Hrinwcg&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>The Top 10 Tools Every Full Stack Developer Should Master in 2023. ‍</MDBCardTitle>
                <MDBCardText>
                As a full stack developer, having the right set of tools is crucial for your success. In the ever-evolving world of web development, staying updated with the latest tools can significantly enhance your productivity and make you a more competent developer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoL5JigcPqIxFh6wqv8WJX71xiYWLa-_pjCA&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>The Ultimate Guide to Real-World Full Stack Development Applications</MDBCardTitle>
                <MDBCardText>Full stack development refers to the process of building web applications that involve both front-end and back-end technologies. A full stack developer has the knowledge and skills to work on all layers of the application, from the user interface to the server-side logic and database management.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGcwroRafCvJIpz3OHrLjtBu63TkWtFmmkTw&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Best Ways to Learn Full Stack Development in 2023</MDBCardTitle>
                <MDBCardText>
                Full stack development is and will be a promising and an in-demand career in the upcoming years. According to Stack Overflow, there are more than 90,000 developers who responded to the tools being used, in a survey.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3XIp5MMRvWk1oN-CqbopipbPJWG7sP6_1Q&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>How Long Would It Take to Be a Full Stack Developer?</MDBCardTitle>
                <MDBCardText>
                Have you ever wondered how much time it would take to become a skilled Full Stack Developer, capable of creating awesome websites and web applications? Whether you’re already familiar with coding or just starting, you might be curious about the learning process and how long it’ll take to reach your goals.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      );
    }

export default Fullstack