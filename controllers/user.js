// import libraries and modules
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModal from "../models/user.js";

const secret = 'test';

// user sign in controller
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    // check if user exists
    if (!oldUser) return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    // check if password is correct
    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials." });

    // user signin token
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Oh no! Something went wrong." });
  }
};

// user sign up controller
export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    
    const oldUser = await UserModal.findOne({ email });

    // check if user exists
    if (oldUser) return res.status(400).json({ message: "User already exists." });

    // hash new user password
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    // user signup token
    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Oh no! Something went wrong." });
    
    console.log(error);
  }
};