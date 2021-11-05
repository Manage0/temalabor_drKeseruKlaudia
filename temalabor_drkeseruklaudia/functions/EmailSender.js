const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'justforwebdev1@gmail.com', // generated ethereal user
    pass: 'rxldvcomsicfiuac', // generated ethereal password
  },
});

let nameFromU ='username'
let phoneFromU = '+36706050403'
let descFromU = 'Nem találom a kecském, szeretném, ha meglenne :)'
let emailFromU = 'node@js.com'


// create a GET route
app.post('/sendmail', (req, res) => {
  nameFromU =req.body.name
  phoneFromU=req.body.phone
  descFromU=req.body.Case
  emailFromU=req.body.email
  send()
  res.header("Access-Control-Allow-Origin", "*");
  res.json({answer: "Elküldve!"})
}); //Line 11 asd

async function send() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport


  // send mail with defined transport object
  let text = "Név: "+nameFromU+"\n\n"+"Telefonszám: "+phoneFromU+"\n\n"+"Email: "+emailFromU+"\n\n"+"Leírás:\n"+descFromU

  transporter.sendMail({
    from: '"JMailer" <jmail@jmail.com>', // sender address
    to: "jakabb@gain.uni-sopron.hu", // list of receivers
    subject: "Új üzenet a weboldaladról!", // Subject line
    text: text, // plain text body
  });
}

exports.handler = async (event, context) => {
    try {
      
      return { statusCode: 200, body: JSON.stringify({ data }) };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed fetching data' }),
      };
    }
  }