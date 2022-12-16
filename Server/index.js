const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const jwt = require('jsonwebtoken')
const cors  = require('cors');
var bcrypt = require('bcrypt');
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// const { mongoURL } = process.env
 const mongoURL = "mongodb+srv://guptakaran123:Karan321@cluster0.wgvh4p4.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('connected to db');
})
.catch((err) => {
    console.log(err);
})

app.listen(5000, ()=> {
    console.log('hello from port 5000');
})

require('./userDetails');

const User = mongoose.model('usersinfo');
const Student = mongoose.model('studentinfo');


// app.post('/register', (req, res) => {
//     const {name, email, password} = req.body;
//     User.findOne({email: email}, async (error, user) => {
//         if(user) {
//             res.send({status: 'user already exist'});
//         }
//         else {
//             try {
//                 await User.create({
//                     // ident: uuid(),
//                     type: "user",
//                     name,
//                     email,
//                     password,
//                 });
//                 res.send({status: 'registered successfully'});
//             } catch (error) {
//                 res.send({status: 'something wrong occured'});
//             }
//         }
//     })
// })
app.post("/register", async (req, res) => {

    try {
      const { name, email, password } = req.body;
      if (!(email && password && name)) {
        res.status(400).send("All input is required");
      }
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      });
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
  });
  
app.post('/login', (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({status: 'login successful', user: user});
            }
            else {
                res.send({status: 'incorrect password'});
            }
        }
        else {
            res.send({status: 'user not found'});
        }
    })
})

// app.post("/login", async (req, res) => {
//     try {
//       const { email, password } = req.body;
//       if (!(email && password)) {
//         res.send("All input is required");
//       }
//       const user = await User.findOne({ email });
  
//       if (user && (await bcrypt.compare(password, user.password))) {
//         const token = jwt.sign(
//           { user_id: user._id, email },
//           process.env.ACCESS_TOKEN_SECRET,
//           {
//             expiresIn: "2h",
//           }
//         );
//         user.token = token;
//         res.status(200).json(user);
//       }
//       res.send("Invalid Credentials");
//     } catch (err) {
//       console.log(err);
//     }
//   });
  

app.post('/add_student', async (req, res) => {
  console.log(req.body);
    // const {name, Email, address, city, classs, section} = req.body;

    try {
        await Student.create({
            type: "student",
            name: req.body.name,
            Email: req.body.Email,
            address: req.body.address,
            city: req.body.city,
            classs: req.body.classs,
            section: req.body.section,
        });
        res.send({status: 'student added'});
    } catch (error) {
        res.send({status: 'something wrong occured'});
    }
})



app.get('/student/edit/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const dt = await Student.findOne({_id: id});
        res.status(200).json(dt);
    } catch (error) {
        res.status(404).json({message: 'student not found'});
    }
})

app.put('/student/edit/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Student.updateOne({_id: id}, req.body);
        res.send({status: 'Student updated'});
    } catch (error) {
        console.log('Error while changing student', error);
    }
})

app.delete('/student/:id', async (req, res) => {
    try {
        await Student.deleteOne({_id: req.params.id});
        res.send({status: 'student deleted'});
    } catch (error) {
        console.log('error while deleting student', error);
    }
})


app.get('/students', async (req, res) => {
    try {
        const dt = await Student.find({});
        res.status(200).json(dt);
        console.log(dt);
    } catch (error) {
        console.log('koi error hai');
        res.status(404).json({message: 'student not found'});
    }
})