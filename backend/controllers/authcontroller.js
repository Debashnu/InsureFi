exports.login = (req, res) => {
    const { email, password } = req.body;
    // Authentication logic here
    res.json({ success: true, message: 'Login successful' });
  };
  
  exports.signUp = (req, res) => {
    const { email, password } = req.body;
    // Sign-up logic here
    res.json({ success: true, message: 'Sign-up successful' });
  };
  