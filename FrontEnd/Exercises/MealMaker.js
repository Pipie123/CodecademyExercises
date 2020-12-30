//To learn using objects. Learning to use get and set methods

const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(food){
        this._courses.appetizers = food;
    },
    get mains(){
        return this._courses.mains
    },
    set mains(food){
        this._courses.mains = food;
    },
    get desserts(){
        return this._courses.desserts;
    },
    set desserts(food){
        this._courses.desserts = food;
    },
    get courses(){
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName) {
        let dish = this._courses[courseName];
        let random = Math.floor(Math.random() * (dish.length));
        return dish[random];
    },
    generateRandomCourse() {
        let course = {
            appetizers: this.getRandomDishFromCourse("appetizers"),
            mains: this.getRandomDishFromCourse("mains"),
            desserts: this.getRandomDishFromCourse("desserts"),
            cost: 0,
        };
        course.cost = course.appetizers.price + course.mains.price + course.desserts.price;
        return course;
    }
};

menu.addDishToCourse("appetizers", "pizza rolls", 10);
menu.addDishToCourse("appetizers", "pizza rollX", 12);
menu.addDishToCourse("appetizers", "pizza rollZ", 14);

menu.addDishToCourse("mains", "pizza", 15);
menu.addDishToCourse("mains", "pizzaX", 18);
menu.addDishToCourse("mains", "pizzaZ", 21);

menu.addDishToCourse("desserts", "bagelBite", 6);
menu.addDishToCourse("desserts", "bagelBiteX", 8);
menu.addDishToCourse("desserts", "bagelBiteZ", 10);

console.log(menu.generateRandomCourse());
