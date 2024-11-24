import express from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt';



const router =express.Router();


router.post('/adminlogin', async (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT id, email, password FROM admin WHERE email = ?";

   con. query(sql, [email], async (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "query error" });

        if (result.length > 0) {
            const { id, email, password: hashedPassword } = result[0];

            // Compare the provided password with the hashed password
            const isPasswordValid = await bcrypt.compare(password, hashedPassword);
            if (!isPasswordValid) {
                return res.status(401).json({ loginStatus: false, Error: "wrong email or password" });
            }

            const isAdmin = (id === 19);
            const token = jwt.sign({ role: isAdmin ? "admin" : "user", email: email }, "jwt_secret_key", { expiresIn: '1d' });
            res.cookie('token', token);
            return res.status(200).json({ loginStatus: true, isAdmin, userId: id });
        } else {
            return res.status(401).json({ loginStatus: false, Error: "wrong email or password" });
        }
    });
});



router.post('/add_user', async (req, res) => {
    const { username, email, password } = req.body;

    // Generate salt and hash the password
    try {
        const saltRounds = 10; //  the cost factor can be adjusted
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const sql = "INSERT INTO admin (Username, email, password) VALUES (?, ?, ?)";
        con.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) return res.json({ Status: false, Error: "Something went wrong, sorry" });
            return res.json({ Status: true });
        });
    } catch (error) {
        console.error(error);
        return res.json({ Status: false, Error: "Password hashing failed" });
    }
});
router.post('/add_event', (req,res) =>{
    const { event_id, eventname, eventdate, eventlocation, eventtype, price, venue_id   } = req.body;
const sql="INSERT INTO event (event_id, event_name, event_date, event_location, event_type, registration_price, venue_id) VALUES (?, ?, ?, ?, ?, ?, ?)"
    con.query(sql, [ event_id, eventname, eventdate, eventlocation, eventtype, price ,parseInt(venue_id)], (err, result) =>{
        if (err) console.log(err);
        return res.json({Status: true})
    })
})
router.post('/add_org', (req,res) =>{
    const { organizer_id, event_id, organizer_name, organizer_email, organizer_phone   } = req.body;
const sql="INSERT INTO  event_organizers (organier_id, event_id, organizer_name, organizer_email, organizer_phone) VALUES (?, ?, ?, ?, ?)"
    con.query(sql, [organizer_id, event_id, organizer_name, organizer_email, organizer_phone ], (err, result) =>{
        if (err)  return res.json({ Status: false, Error: "something went wrong" });
        return res.json({Status: true, msg: "from recieved"})
    })
})
router.post('/add_vend', (req,res) =>{
    const { vendor_id, vendor_name, vendor_contact, vendor_type, event_id  } = req.body;
const sql="INSERT INTO  vendor (vendor_id, vendor_name, vendor_contact, vendor_type, event_id) VALUES (?, ?, ?, ?, ?)"
    con.query(sql, [ vendor_id, vendor_name, vendor_contact, vendor_type, event_id], (err, result) =>{
        if (err)  return res.json({ Status: false, Error: "something went wrong" });
        return res.json({Status: true, msg: "from recieved"})
    })
})
router.post('/add_spsr', (req,res) =>{
    const {  sponsor_id, sponsor_name, sponsor_contact, sponsor_type, event_id } = req.body;
const sql="INSERT INTO  sponsor (sponsor_id, sponsor_name, sponsor_contact, sponsor_type, event_id) VALUES (?, ?, ?, ?, ?)"
    con.query(sql, [ sponsor_id, sponsor_name, sponsor_contact, sponsor_type, event_id], (err, result) =>{
        if (err) return res.json({ Status: false, Error: "something went wrong" });
        return res.json({Status: true, msg: "from recieved"})
    })
})
router.post('/add_bdg', (req,res) =>{
    const {  budget_id, event_id, budget_item, budget_amount } = req.body;
const sql="INSERT INTO  budget (budget_id, event_id, budget_item, budget_amount) VALUES (?, ?, ?, ?)"
    con.query(sql, [budget_id, event_id, budget_item, budget_amount ], (err, result) =>{
        if (err) return res.json({ Status: false, Error: "something went wrong" });
        return res.json({Status: true, msg: "from recieved, Event creation complete if you have Filled all the above Forms"})
    })
})
router.get('/event_list', (req, res)=>{
    const {}=req.body
    const sql="SELECT * FROM event";
    con.query(sql, (err, result) =>{
        if(err) return res.json({Status: false, Error: "query error"})
        return res.json({Status: true, Result: result})
    })
})
router.post('/add_atende', (req,res) =>{
    const {attendee_id, attendee_name, attendee_email, attendee_phone, event_id  } = req.body;
const sql="INSERT INTO  attendeeslist (id, attendee_name, attendee_email, attendee_phone, event_id) VALUES (?, ?, ?, ?, ?)"
    con.query(sql, [attendee_id, (attendee_name), attendee_email, parseInt(attendee_phone), event_id ], (err, result) =>{
        if (err) console.log(err)// return res.json({ Status: false, Error: " some thing went wrong" });
        //return res.json({Status: true, msg: "form recieved, Event registartion  complete if you have Filled all the above Forms"})
    })
})
router.get('/User_list', (req, res)=>{
    const {}=req.body
    const sql="SELECT * FROM admin";
    con.query(sql, (err, result) =>{
        if(err) return res.json({Status: false, Error: "query error"})
        return res.json({Status: true, Result: result})
    })
})
router.post('/delete_user', (req, res) => {
    const sql = "DELETE FROM admin WHERE id = ?";
    const userId = req.body.deleteId;

    if (!userId) {
        return res.json({ Status: false, Error: "User ID is required" });
    }

    con.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query error" });
        }
        return res.json({ Status: true, msg: "User deleted successfully" });
    });
});


router.post('/attendee_event_list', (req, res) => {
    const userId = req.body.userId;
    const sql = "SELECT * FROM event WHERE event_id IN (SELECT event_id FROM attendeeslist WHERE id = ?)";
    
    if (!userId) {
        return res.json({ Status: false, Error: "User ID is required" });
    }

    con.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query error" });
        }
        return res.json({ Status: true, Result: result });
    });
});
router.post('/add_feedback', (req, res) => {
    const { feedback_rating, feedback_text, event_id } = req.body;
    //intializing the checking if the attendee ia regesterd for the specific event that it requested to give feedback on
    const attendee_id = req.body.attendee_id; 

    const checkAttendeeQuery = "SELECT * FROM attendeeslist WHERE id = ? AND event_id = ?";
    con.query(checkAttendeeQuery, [attendee_id, event_id], (err, attendeeResult) => {
        if (err) {
            return res.json({ Status: false, Error: "Error checking attendee" });
        }

        if (attendeeResult.length === 0) {
            return res.json({ Status: false, Error: "Attendee is not registered for this event" });
        }

        // If attendee is registered for that evant , proceed to insert feedback
        const insertFeedbackQuery = "INSERT INTO feedback (feedback_rating, feedback_text, event_id, attendee_id) VALUES (?, ?, ?, ?)";
        con.query(insertFeedbackQuery, [feedback_rating, feedback_text, event_id, attendee_id], (err, result) => {
            if (err) {
                return res.json({ Status: false, Error: "Failed to add feedback" });
            }
            return res.json({ Status: true, msg: "Feedback received successfully" });
        });
    });
});
router.get('/feed_list', (req, res)=>{
    const {}=req.body
    const sql="SELECT * FROM feedback";
    con.query(sql, (err, result) =>{
        if(err) return res.json({Status: false, Error: "query error"})
        return res.json({Status: true, Result: result})
    })
})
router.post('/delete_event', (req, res) => {
    const sql = "DELETE FROM event WHERE event_id = ?";
    const event_id = req.body.deleteId;

    if (!event_id) {
        return res.json({ Status: false, Error: "Event ID is required" });
    }

    con.query(sql, [event_id], (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query error" });
        }
        return res.json({ Status: true, msg: "Event deleted successfully" });
    });
});


//testing homepage query for upcoming events,

router.get("/home_test", (req, res) => {
    const {}=req.body
    const sql = "SELECT event_name, registration_price, event_date, event_location, event_type FROM event ORDER BY event_date ASC LIMIT 4";
    con.query(sql, (err, data) => {
        if(err) return res.json({Status: false, Error: "query error"});
        return res.json(data);
    })
})


router.post('/profile', (req, res) => {
    const { userId } = req.body;

    // Log the userId to ensure it is correctly received
    console.log("Received User ID:", userId);

    if (!userId) {
        return res.json({ Status: false, Error: "User ID is required" });
    }

    const sql = "SELECT id, Username, email, user_type FROM admin WHERE id = ?"; // Corrected SQL query

    con.query(sql, [userId], (err, result) => {
        if (err) {
            console.error("Query Error:", err);
            return res.json({ Status: false, Error: "Query error" });
        }
        if (result.length === 0) {
            return res.json({ Status: false, Error: "User not found" });
        }
        return res.json({ Status: true, Result: result });
    });
});












export {router as adminRouter};
