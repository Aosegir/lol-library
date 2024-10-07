const championList = [];

function Champion (name, origin, gender, year, isCool) {
    this.name = name;
    this.origin = origin;
    this.gender = gender;
    this.year = year;
    this.isCool = isCool;

    this.info = function() {
        return (
            `${this.name} is a ${this.gender} champion from ${this.origin}.
            They were released in ${this.year}. Are they cool? ${this.isCool}`
        );
    };
};

function createChampion(name, origin, gender, year, isCool) {
    let newChampion = new Champion(name, origin, gender, year, isCool);
    championList.push(newChampion);
};