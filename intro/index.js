import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("June 24, 2023 11:13:00");
    const  day = today.getDay();
    
    let type = "a weekday";
    let adv = "its time to work hard";

    if (day === 0 || day === 6) {
        type = "The weekday";
        adv = "its time to have fun";
    }


    res.render("index.ejs", { 
      dayType: type,
      advise: adv,
     });
});

app.listen(port, () => {
    console.log(`server is running on the port ${port}.`);
});