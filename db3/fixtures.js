const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/mongoose_populate', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to MongoDB")
});
const studentsModel = require("./models/students");
const addressModel = require("./models/address");

studentsModel.deleteMany({}).then(() => {
    studentsModel.create([
        {
            firstName: "Allan",
            surname: "Nerfic",
        },
        {
            firstName: "Sebastien",
            surname: "Seb",
        },
        {
            firstName: "Xavier",
            surname: "Xaviouche",
        }

    ])
})

addressModel.deleteMany({}).then(() => {
    addressModel.create([
        {
            streetName: "Rue du Limas",
            streetNumber: "42",
            postCode: "97100",
            city: "Basse-terre"
        },
        {
            streetName: " rue des Nations Unies",
            streetNumber: "98",
            postCode: "22000",
            city: "Saint-brieuc"
        },
        {
            streetName: "rue des Nations Unies",
            streetNumber: "2",
            postCode: "93200",
            city: "Saint-denis"
        }

    ])
})