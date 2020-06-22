exports.isAuthorized = (async function (req,res,next) {
    var response = {
        status: false,
        message: '',
        decoded: '',
    }
    if(req.params.token){
        var userToken = req.params.token
    }else{
        var userToken = req.headers['token'];
    }
    try {
        if (!userToken) {
            response.message = 'token is not provided';
            return res.status(401).send(response);
        }
        else if(userToken === '1234') {
           return next();
        }
    }
    catch (err) {
        response.message = 'Token is invalid'
        return res.status(422).send(response) //  return decoded value
    }
})