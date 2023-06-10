// import nodemailer from 'nodemailer'
// import config from 'config'

// class MailController {

//     constructor() {
//         this.transporter = nodemailer.createTransport({
//             host: config.get('smtpHost'),
//             port: config.get('smtpHost'),
//             secure: false,
//             auth: {
//                 user: config.get('smtpUser'),
//                 password: config.get('smtpPassword')
//             }
//         })
//     }
//     sendActivationMail = async (to, link) => {
//         await this.transporter.sendMail({
//             from: config.get('smtpUser'),
//             to,
//             subject: 'Account activation on ' + config.get('apiUrl'),
//             text: '',
//             html:
//             `
//                 <div>
//                     <h1>Follow the link to activate your account</h1>
//                     <a href="${link}">${link}</a>
//                 </div>
//             `
//         })
//     }
// }

// export const mailController = new MailController()
