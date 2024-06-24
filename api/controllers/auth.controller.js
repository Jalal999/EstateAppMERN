import bcrypt from "bcrypt"

export const register = async (req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body
    // hash password
    const hashedPasswrod = await bcrypt.hash(password, 10)
    console.log(hashedPasswrod)
    // create a new user and save to db
}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}