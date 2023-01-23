class Cat {
    constructor(petName, gender) {
        this.petName = petName;
        this.gender = gender;
    }

    speak() {
        return `${this.petName} says meow!`;
    }
}

class Dog {
    constructor(petName, gender) {
        this.petName = petName;
        this.gender = gender;
    }

    speak() {
        return `${this.petName} says woof!`;
    }
}

class Bird {
    constructor(petName, gender) {
        this.petName = petName;
        this.gender = gender;
    }

    speak() {
        if (this.gender === "male") {
            return `It's me! ${this.petName}, the parrot!`;
        } else {
            return `${this.petName} says squawk!`;
        }
    }
}
