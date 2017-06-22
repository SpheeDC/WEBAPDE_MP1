function loadUserProfile(User) {
    "use strict";

    // create a variable to accommodate the values of each attribute of the User

    /** @namespace User.username */
    var userName = User.username;

    var fullName = User.name;

    /** @namespace User.email */
    var fullEmail = User.email;

    /** @namespace User.address */
    var fullAddress = User.address;

    /** @namespace User.phone */
    var phoneNumber = User.phone;

    /** @namespace User.website */
    var websiteNumber = User.website;

    /** @namespace User.company */
    var refinedCompanyName = User.company.name;

    /** @namespace User.company.catchPhrase */
    var catchPhraseProwess = User.company.catchPhrase;

    /** @namespace User.company.bs */
    var bsb = User.company.bs;

    // load the User object into each of the divs / containers
}