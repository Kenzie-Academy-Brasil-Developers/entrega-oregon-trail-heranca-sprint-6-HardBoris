class Hunter extends Traveler {
    constructor (name, food = 2, isHealthy) {
        super(name, food, isHealthy)
        this._name = name;
    }
    hunt(){
        this.food += 5;
    }
    eat(){
        if (this.food >= 2) {
            this.food -= 2;
            this.isHealthy = true;
        }else{
            this.food = 0
            this.isHealthy = false;
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (this.food >= numOfFoodUnits) {
            traveler.food += numOfFoodUnits;
            this.food -= numOfFoodUnits;
        }
    }
}

class Doctor extends Traveler {
    constructor (name, food, isHealthy) {
        super(name, food, isHealthy);
        
    }
    heal(traveler) {
        traveler.isHealthy = true;
    }
}
