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

function Career() {
      return (
        <MDBRow id="card" className='row-cols-1 row-cols-md-3 g-4'>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokuKY7NVlUh1DqV0EL7nD9s73Q-02JqItKQ&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>How Long Would it Take to Learn Motion Graphics?</MDBCardTitle>
                <MDBCardText>
                Motion graphics is like creating moving pictures with design and animation. It’s a cool way to make things look lively and interesting. You’ve probably seen them in ads, movies, and stuff online. They’re super popular and people really like them.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYOdmdTxgZaz-pI0ekvZg9hxoSPYmlwoEfw&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>How to Become a Motion Graphics Designer – Complete Career Roadmap</MDBCardTitle>
                <MDBCardText>Imagine if pictures could come to life, telling stories and conveying messages with movement. That’s the magic of motion graphics! They’re like moving pictures that tell exciting tales and share information in a way that grabs your attention. Motion graphics take still images and make them dance and move. They mix art, animation, and stories to create cool designs that don’t just look good but also tell a story.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className='h-100'>
              <MDBCardImage id='img1'
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqv_KOn-8N_dzxDXmSg-kgvOXkomjIk4zH9w&usqp=CAU'
                alt='...'
                position='top'
              />
              <MDBCardBody>
                <MDBCardTitle>Top Skills Required to Become a Digital Marketer</MDBCardTitle>
                <MDBCardText>
                Digital marketing is one of the most dynamic industries that has transformed how businesses connect with their target audience. From fledgling startups to large multinational corporations, everyone is adopting digital strategies to stay relevant in today’s fast-paced world. 
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
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
        </MDBRow>
      );
    }

export default Career