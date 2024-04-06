const nodemailer = require("nodemailer")


const trasporter = nodemailer.createTransport({
    service:"Gmail",
    host:"smtp.gmail.com",
    port:465,
    auth:{
        user:"#correo emisor",
        //en seguridad ,verificacion de 2 pasos , en el fondo, contraseñas de aplciaciones
        pass:"#contraseña de la app"
    }
})

async function main(){
    const info = await trasporter.sendMail({
        from:"Chiapas bonito, suchiapa caliente <#correo emisor>",
        to:"#correo receptor",
        subject:"Test de nodemailer",
        text:"Hola mundo, este es un test de nodemailer",
        attachments:[
            {
                path:"./CUMPLEAÑOS.png"
            }
        ]
    })
    console.log("messageID:", info.messageId);
}

main().catch(console.log)