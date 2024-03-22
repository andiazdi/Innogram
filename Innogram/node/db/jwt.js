const jwt = require('jsonwebtoken');

export const makeJWT = (params) => {
    const secret = 'secretblablaahahah';
    const options = { expiresIn: '1h' };

    const token = jwt.sign(params, secret, options);
    return token
}


export const decodeJWT = (token) => {
    try {
        return jwt.verify(token, 'secretblablaahahah');
      } catch(err) {
        return {error: "can't decode token"}
      }

}