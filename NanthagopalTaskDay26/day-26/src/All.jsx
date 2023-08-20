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

function All() {
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
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6-J98Bb2ZlN2Jbd6BWVDtDw6h3LSaDNNkA&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>10 Best Data Science Frameworks in 2023</MDBCardTitle>
                <MDBCardText>
                Does data scientists fascinate you? If yes, you must definitely know about data science frameworks. These frameworks are used by data scientists to easier their work pressure by using them in projects. Data science has become an integral part of many industries, driving innovation and providing valuable insights. As the field continues to evolve, data scientists rely on various frameworks and tools to organize, analyze, and interpret data efficiently.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwiK_5SBjQtMJi7nkc-RUkcHh0PyT-tzxDQ&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Cybersecurity Vs Ethical Hacking: Top 10 Differences</MDBCardTitle>
                <MDBCardText>
                Cybersecurity & Ethical hacking and have been key in making sure that your data online is secure, users are authenticated & your data and privacy concerns are all kept safe. Is there a difference between cybersecurity and ethical hacking, if yes what is the difference? Let’s find out!
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTVdzLQf3iFBkQwU-2wF6J6m_F283HY0H7g&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>How to Become a UI/UX Designer: 10 Steps to Master the Craft</MDBCardTitle>
                <MDBCardText>
                Have you ever wondered what it takes to create captivating designs that leave users delighted and eager for more? Are you fascinated by the user experience of your favorite apps or websites? If you are interested in the domain of UI/UX, the question that you as well as everyone in this field have is, how to become a UI/UX designer? This article has the answer to it.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          </MDBCol>
        </MDBRow>
      );
    }
    export default All