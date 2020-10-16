//Min logincontroller som har en jwt token
//(...)autoriserer at nogle routes kun kan bruge af en user der er logget ind! F.eks. kan kun bruge hjemmeesiden når du er logget
//Altså har ikke "brugt den" kun kodet herinde, undtagen én linje i serveren - så den har ingen forbindelse til serveren eller funktion
var jwt = require('jsonwebtoken');
var fs = require('fs') 

function loginController(req, res) {
    let token = jwt.sign({msg:"hej"}, 'my_secret', { expiresIn: '1h' })
    res.json({
        token: token
    })
}

//Retunerer token

