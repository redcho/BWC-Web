const authentication ={

 	aut :(req, res, next) => {

  // -----------------------------------------------------------------------
  // authentication middleware

		  const auth = [
		  {
			  login: 'manis.eren@gmail.com', 
			  password: '10691069'
			},
		  {	
		  login: 'emremn07@gmail.com', 
		  password: '10691069'
			}
			];

		  // parse login and password from headers
		  const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
		  const [login, password] = new Buffer(b64auth, 'base64').toString().split(':');

		  // Verify login and password are set and correct
		  if (login && password && login === auth[0].login && password === auth[0].password) {
		     // Access granted...
		    return next()
		  } else {
		  	if (login && password && login === auth[1].login && password === auth[1].password) {
		     // Access granted...
		    return next()
		  }
		  	// Access denied...
		  }


  
		  res.set('WWW-Authenticate', 'Basic realm="401"'); // change this
		  res.status(401).send('Authentication required.'); // custom message

		  // -----------------------------------------------------------------------

	}
}

module.exports = authentication;