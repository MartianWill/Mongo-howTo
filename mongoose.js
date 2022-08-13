const mongoose = require('mongoose');



const uri = "mongodb+srv://jiuyouzhixia:hP8E4U5BW6mSXGBY@cluster0.nvecimf.mongodb.net/fruitsDB?retryWrites=true&w=majority";

mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("Mongoose is connected"));
const fruitSchema = new mongoose.Schema({
    name: {
        type :String,
        required: [true,"we need a name"]
    },
    rating: {
        type: Number,
        min:1,
        max:10
    },
    review: String
});

const Fruit = mongoose.model('Fruit', fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    score: 8,
    review: "great"
});

// fruit.save();

const orange = new Fruit({
    name: "orange",
    score: 6,
    review: "ok",
  });
const banada = new Fruit({
    name: "banada",
    score: 9,
    review: "bravo",
  });


// Fruit.insertMany([orange, banada], err => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Successfully added all fruits");
//     }
// });


Fruit.find((err,fruits) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(fruits)
        mongoose.connection.close();
        fruits.forEach(fruit => console.log(fruit.name));
    }
})

// Fruit.updateOne({_id :"62f727696b7739b6108658dd"},{name:"peach"},err => console.log("Successfully updated"))











const personSchema = new  mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit : fruitSchema
});

const Person = mongoose.model('Person', personSchema);

const pineapple = new Fruit({
    name: "pineapple",
    score: 7,
    review : "great"
})

pineapple.save();

const person = new Person({
    name :"loli",
    age : 23,
    favouriteFruit : pineapple
});
// person.save();

Person.updateOne({name:"joy"},{favouriteFruit : orange}, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("successfully updated joy");
    }
})
