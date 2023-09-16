const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Define data structures to store room and booking information
const rooms = [];
const bookings = [];
const customers = [];

// Task 1: Create a Room
app.post('/create_room', (req, res) => {
  const { seats_available, amenities, price_per_hour } = req.body;
  const room = {
    room_id: rooms.length + 1,
    seats_available,
    amenities,
    price_per_hour
  };
  rooms.push(room);
  res.status(201).json({ message: 'Room created successfully' });
});

// Task 2: Book a Room
app.post('/book_room', (req, res) => {
  const { customer_name, date, start_time, end_time, room_id } = req.body;
  if (room_id <= 0 || room_id > rooms.length) {
    res.status(400).json({ error: 'Invalid room ID' });
    return;
  }

   // Check if the room is already booked for the given date and time
   const isConflict = bookings.some(booking => {
    return (
      booking.room_id === room_id &&
      booking.date === date &&
      ((start_time >= booking.start_time && start_time < booking.end_time) ||
      (end_time > booking.start_time && end_time <= booking.end_time) ||
      (start_time <= booking.start_time && end_time >= booking.end_time))
    );
  });

  if (isConflict) {
    res.status(400).json({ error: 'Room is already booked for the given date and time' });
    return;
  }
  
  const booking = {
    customer_name,
    date,
    start_time,
    end_time,
    room_id
  };
  bookings.push(booking);
  res.status(201).json({ message: 'Room booked successfully' });
});

// Task 3: List all Rooms with Booked Data
app.get('/list_rooms', (req, res) => {
    console.log('Request received for /list_rooms'); // Add this line for debugging
    const bookedRooms = bookings.map(booking => {
      const room = rooms[booking.room_id - 1];
      return {
        room_name: `Room ${booking.room_id}`,
        booked_status: 'Booked',
        customer_name: booking.customer_name,
        date: booking.date,
        start_time: booking.start_time,
        end_time: booking.end_time
      };
    });
    console.log('Sending response for /list_rooms:', bookedRooms); // Add this line for debugging
    res.json(bookedRooms);
  });
  

// Task 4: List all customers with booked Data
app.get('/list_customers', (req, res) => {
  const customerBookings = {};
  bookings.forEach(booking => {
    const customerName = booking.customer_name;
    if (!customerBookings[customerName]) {
      customerBookings[customerName] = [];
    }

    const room = rooms[booking.room_id - 1];
    customerBookings[customerName].push({
      customer_name: customerName,
      room_name: `Room ${booking.room_id}`,
      date: booking.date,
      start_time: booking.start_time,
      end_time: booking.end_time
    });
  });
  res.json(customerBookings);
});

// Task 5: List how many times a customer has booked a room
app.get('/customer_booking_count/:customer_name', (req, res) => {
    const customerName = req.params.customer_name;
    const customerBookings = bookings.filter(booking => booking.customer_name === customerName);
    const bookingCount = customerBookings.length;
    
  
    const bookingDetails = customerBookings.map(booking => ({
      room_name: `Room ${booking.room_id}`,
      booked_status: 'Booked',
      customer_name: booking.customer_name,
      date: booking.date,
      start_time: booking.start_time,
      end_time: booking.end_time,
    }));
  
    res.json({
      customer_name: customerName,
      booking_count: bookingCount,
      bookings: bookingDetails
    });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
