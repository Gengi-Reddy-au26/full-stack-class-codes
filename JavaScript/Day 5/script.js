var randomNumbers = [23, 4, 56, 1, 7];

var sum = 0;

randomNumbers.forEach(function (item, index, arr) {
  if (item % 2 == 0) {
    sum += item;
    console.log(index)
  }
});
// console.log(sum);

// Map function
[23, 4, 56, 1, 7];
[46, 8, 112, 2, 14] //double


var doubleArray = randomNumbers.map(function (item) {
  return item * 2
})


var users = [
  {
    name: "John",
    age: 30,
    cash: 300,
    hobbies: ['Dancing', 'Singing']
  },
  {
    name: "Ram",
    age: 30,
    cash: 100,
    hobbies: ['Dancing']
  },
  {
    name: "Sheela",
    age: 50,
    cash: 400,
    hobbies: ['Drawing', "Acting"]
  },
  {
    name: "Sita",
    age: 60,
    cash: 500,
    hobbies: ['Reading']
  }
]

//{30: 2, 50: 1, 60:1}
//["John", Ram, sheela, sita]

var namesList = users.map(function (elemet) {
  return elemet.name
})


var evenNumbers = randomNumbers.filter(function (item) {
  if (item % 2 == 0) {
    return true;
  }
  return false;
})

var oddNumbers = randomNumbers.filter(function (item) {
  if (item % 2 != 0) {
    return true;
  }
  return false;
})

var lessThan50 = users.filter(function (user) {
  if (user.age <= 50) {
    return true;
  }
  return false;
}).map(function (item) {
  return item.name
})

//Reduce Method
[23, 4, 56, 1, 7];

var max = 0;
for (var index = 0; index < randomNumbers.length; index++) {
  if (randomNumbers[index] > max) {
    max = randomNumbers[index]
  }
}
// console.log(sum)

// randomNumbers.reduce(callBackFunc, intialValue)

var totalSum = randomNumbers.reduce(function (acc, currElement) {
  acc = acc + currElement;
  return acc;
}, 0)

var maxElement = randomNumbers.reduce(function (acc, currElement) {
  if (currElement > acc) {
    acc = currElement;
  }
  return acc;
}, 0)

//{30: 2, 50: 1, 60:1}

// 30
// { }
var result = users.reduce(function (acc, user) {
  if (acc[user.age]) {
    acc[user.age]++;
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {})


//Objects
//propoerties and methods
var student = { //literal
  name: 'Aadhil',
  std: 4,
  rollNo: 45,
  hobbies: ['dfrf', 'efwe'],
  "last name": 'ferfe',
  printMarks: function () {
    console.log("inside printMarks")
  },
  study: function () {
    console.log("inside study")
  }
}

//access

//dot notation
console.log(student.name)
console.log(student.printMarks)

//bracket notation
student['last name']

//add property
student.address = "fdesrge"
student['age'] = 23;
student.write = function () {
  console.log("inside write")
}


//delete

delete student.name;
// delete student;

var student2 = { //literal
  name: 'Rahul',
  std: 4,
  rollNo: 45,
  hobbies: ['dfrf', 'efwe'],
  "last name": 'ferfe',
  printMarks: function () {
    console.log("inside printMarks")
  },
  study: function () {
    console.log("inside study")
  }
}


function StudentDetails1(studentName, studentAge, writeFunc) {
  return {
    name: studentName,
    age: studentAge,
    write: writeFunc
  }
}

var simpleFnctionStudent = StudentDetails1("sdfer", 4, function () { });
// var st2 = StudentDetails("edwef", 5, function () { });


//Constructor Function
function StudentDetails(studentName, studentAge, writeFunc) {

  // this = {};//1

  //2
  this.name = studentName
  this.age = studentAge
  this.write = function () {
    console.log("Student name is " + this.name + "My age is " + this.age)
  }

  //3 return this
}

// 1.A new empty object is created and assigned to this.
// 2.The function body executes. Usually it modifies this, adds new properties to it.
// 3.The value of this is returned.
var st1 = new StudentDetails("dcsdc", 4)
st1.age = 8;

var product = {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}


function Product(id, title, category, price, rating) {
  this.id = id;
  this.title = title;
  this.category = category;
  this.price = price;
  this.rating = rating;
  this.printDetails = function () {
    console.log("Title:" + this.title + "\nPrice:" + this.price)
  }
}

var p1 = new Product(1, "Product1", "clothing", 100, { rate: 4, count: 100 })
var p2 = new Product(2, "Product2", "jewelry", 200, { rate: 3, count: 200 })
var p3 = new Product(3, "Product3", "jewelry", 200, { rate: 3, count: 200 })

var products = [p1, p2];

// clothing: 1
// jewelry: 2
var productList = products.map(function (item) {
  return item.title
})

var result = 0
products.forEach(function (item) {
  if (result[item.category]) {
    result[item.category]++;
  } else {
    result[item.category] = 1
  }
})

var results = products.reduce(function (acc, item) {
  if (acc[item.category]) {
    acc[item.category]++;
  } else {
    acc[item.category] = 1
  }
  return acc;
}, {})

var ratingGreaterThan4 = products.filter(function (item) {
  if (item.rating && item.rating.rate) {
    return true;
  }
  return false;
})