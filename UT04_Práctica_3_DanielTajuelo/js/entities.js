"use strict";

class Person {
    #name;
    #lastname1;
    #lastname2;
    #born;
    #picture;

    constructor(name, lastname1, lastname2 = "", born, picture = "") {
        this.#name = name;
        this.#lastname1 = lastname1;
        this.#lastname2 = lastname2;
        this.#born = born;
        this.#picture = picture;

    }


    get name() {
        return this.#name;
    }

    get lastname1() {
        return this.#lastname1;
    }

    get lastname2() {
        return this.#lastname2;
    }

    get born() {
        return this.#born;
    }

    get picture() {
        return this.#picture;
    }

}


class Category {
    #name;
    #description;

    constructor(name, description = "") {
        this.#name = name;
        this.#description = description;
    }

    get name() {
        return this.#name;
    }

    get description() {
        return this.#description;
    }
}


class Resource {
    #duration;
    #link;

    constructor(duration, link) {
        this.#duration = duration;
        this.#link = link;
    }

    get duration() {
        return this.#duration;
    }

    get link() {
        return this.#link;
    }
}



class Production {
    #title;
    #nationality;
    #publication;
    #synopsis;
    #image;


    constructor(title, nationality = "", publication, synopsis = "", image = "") {
        this.#title = title;
        this.#nationality = nationality;
        this.#publication = publication;
        this.#synopsis = synopsis;
        this.#image = image;

        //Si se intenta instanciar un objeto Person nos saltará una excepción
        if (new.target === Production) throw new AbstractClassException;
    }

    get title() {
        return this.#title;
    }

    get nationality() {
        return this.#nationality;
    }
    get publication() {
        return this.#publication;
    }

    get synopsis() {
        return this.#synopsis;
    }
    get image() {
        return this.#image;
    }

}




class Movie extends Production {
    #resource;
    #locations;

    constructor(title, link = "", publication, synopsis = "", image = "", resource = "", locations = []) {
        super(title, link, publication, synopsis, image);
        this.#locations = locations;
        this.#resource = resource;
    }

    get resource() {
        return this.#resource;
    }
    get locations() {
        return this.#locations;
    }

}



class Serie extends Production {
    #resources;
    #locations;
    #seasons;

    constructor(title, link = "", publication, synopsis = "", image = "", resources = [], locations = [], seasons = 1) {
        super(title, link, publication, synopsis, image);
        this.#resources = resources;
        this.#locations = locations;
        this.#seasons = seasons;

    }

    get resources() {
        return this.#resources;
    }
    get locations() {
        return this.#locations;
    }

    get seasons() {
        return this.#seasons;
    }

}


class User {
    #username;
    #email;
    #password;

    constructor(username, email, password) {
        this.#username = username;
        this.#email = email;
        this.#password = password;

    }


    get username() {
        return this.#username;
    }
    get email() {
        return this.#email;
    }

    get password() {
        return this.#password;
    }
}


class Coordinate {
    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        this.#latitude = latitude;
        this.#longitude = longitude;

    }

    get latitude() {
        return this.#latitude;
    }

    get longitude() {
        return this.#longitude;
    }
}
