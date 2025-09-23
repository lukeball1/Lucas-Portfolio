import slotify_img from '../assets/slotify.png'
import ACMWebsite_img from '../assets/acmWebsite.png'
import imagecrypt_img from '../assets/imageCrypt.jpg'

const mywork_data = [
    {
        w_no:1,
        w_name:"Slotify",
        w_img:slotify_img,
        w_description:"This was my team's first hackathon project, as well as our first time working with react. This project focused on building a website where the user could enter in a Spotify playlist, and then guess the song name wordle style based on the sound snippet that plays at the beginning of each round. ",
        w_github: "https://github.com/lukeball1/Pickhacks-Project",
        w_devpost: "https://devpost.com/software/slotify"
    },
    {
        w_no:2,
        w_name:"ACM Web Website",
        w_img:ACMWebsite_img,
        w_description:"This is the ACM Web website, created by members of ACM Web. As the Chair, part of my duty is to ensure the website is up-to-date and running for the club. This website was developed using Astro, a React-based framework. ",
        w_github:"https://github.com/sigdotcom/acmweb-site",
        w_devpost: null
    },
    {
        w_no: 3,
        w_name: "ImageCrypt",
        w_img: imagecrypt_img,
        w_description: "ImageCrypt is a steganography tool that securely hides encrypted messages within image files. This program using an algorithm that modifies pixel color values across any image format to embed messages while preserving visual fidelity and security. This program is optimized to run on a Raspberry Pi, and will have a user interface version coming soon.",
        w_github: "https://github.com/lukeball1/SteganographyV1",
        w_devpost: null
    }
]

export default mywork_data;