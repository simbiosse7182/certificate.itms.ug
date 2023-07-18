const verified_users = [
    {
        "name": "Kukundakwe Ben",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Khisa Joseph",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Ssali Moses",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Muhumuza Max",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Muragwa Constatine",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Atine Olugor",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Auma Judith",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Kayendeke Robinah",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "ZIkatamba Dismas",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Kintu Richard",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Alitubera Agnes",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Opoka Daniel",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Nattimba Rose",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Mujuni Christopher",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Debi Peter",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Basiime Monica",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Lirra Morris",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Mumbere Wisely",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Envondra Phillip",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    },
    {
        "name": "Icarit Davio Julius",
        "date_start": "17/07/2023",
        "date_end": "19/07/2023",
        "valid": 1
    }
]
const DOMAIN_URL = 'https://certificate-itms-ug.vercel.app/'


const commands = verified_users.map((el, index)=>{
    const command = `qrcode -o ${el.name.replaceAll(' ', '_')}.svg "${DOMAIN_URL}?name=${el.name}&start=${el.date_start}&end=${el.date_end}"`
    return command
})




console.log(commands.join(';'))
