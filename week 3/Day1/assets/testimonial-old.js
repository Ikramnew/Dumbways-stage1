class Testimonial {
    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        return `<div class="testimonial">
          <img
            src="${this.image}"
            class="profile-testimonial"
          />
          <p class="quote">${this.content}</p>
          <p class="author">- ${this.author}</p>
        </div>`
    }
}

const testimonial1 = new Testimonial("https://th.bing.com/th/id/OIP.XoAF6zG7WDC10bRHmxu0rQHaEK?w=307&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "Mantap bang!", "Saha boa")

const testimonial2 = new Testimonial("https://th.bing.com/th/id/OIP.QwzuAmXJ3h2gySHApFD7LgHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "Good Joob!", "Naruto")
const testimonial3 = new Testimonial("https://th.bing.com/th/id/OIP.8Ku2rrwYsh_EIhoE91XkcAHaEo?w=275&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", "Kerja Bagus", "Gojo Satoru")

const testimonials = [testimonial1, testimonial2, testimonial3] // length => 2

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML