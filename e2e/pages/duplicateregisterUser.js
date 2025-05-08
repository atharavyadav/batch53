class registerUserData{

    constructor()
    {
       this.firstName = "input[name='firstName']"
        this.lastName = "input[name='lastName']"
         this.phone = "input[name='phone']"
          this.userName = "#userName"
          
    }

    contactinfromation(firstnanme,lastname,phone,emaqil)
    {
        page.loacator(this.firstName).fill(firstnanme)
        page.loacator(this.lastName).fill(lastname)
        page.loacator(this.phone).fill(phone)
        page.loacator(this.userName).fill(emaqil)
    }

    mailinformatyion()
    {
        page.loacator(this.firstName).fill("neelam")
        page.loacator(this.lastName).fill("test")
        page.loacator(this.phone).fill("12233")
        page.loacator(this.userName).fill("neelam@gamil.com")
    }

}

module.exports = new registerUserData()