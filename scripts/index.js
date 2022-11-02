let welcome_page;
let login_page;
let signup_page;
let home_page;
let sorry_page;
let simple_header;
let simple_logo;
let edit_account;
let top_header;
let matches = [];
let sortedMatchesL2H = [];
let sortedMatchesH2L = [];
let users = {};
let currentUser;


let username;
let experience;
let activity;
let loc;
let birthday;

$(document).ready(function() {
    console.log("document is ready!");

    welcome_page = $('#welcome_page');
    login_page = $("#login_page");
    signup_page = $("#create_account");
    home_page = $("#home_page");
    sorry_page = $("#sorry_page");
    simple_header = $("#simple_header");
    edit_account = $("#edit_account");
    top_header = $("#top_header");

    currentUser = {
        uniqname: "",
        name: "",
        password: "",
        pfp: "",
        weekdays: [],
        location: [],
        experience: "",
        exercise: [],
        gender: "",
        buddy_genders: [],
        birthday: new Date(),
    };

    setup();
    add_events();
});

function setup() {
    console.log("setting up");

    welcome_page.show();
    simple_header.show();
    login_page.hide();
    signup_page.hide();
    home_page.hide();
    sorry_page.hide();
    top_header.hide();
    edit_account.hide();
    generateUsers();
}

function generateUsers() {
    let user1 = {
        uniqname: "wangrh",
        name: "Richard Wang",
        gender: "Male",
        password: "hello",
        pfp: "images/male.jpg",
        weekdays: ["Monday", "Tuesday"],
        location: ["North Campus Recreational Building"],
        experience: "Intermediate",
        exercise: ["Weightlifting", "Sports"],
    };
    let user2 = {
        uniqname: "shshim",
        name: "Daniel Shim",
        gender: "Male",
        password: "hello",
        pfp: "images/male.jpg",
        weekdays: ["Monday", "Tuesday"],
        location: ["North Campus Recreational Building"],
        experience: "Novice",
        exercise: ["Weightlifting", "Yoga"],
    };
    let user3 = {
        uniqname: "kmlew",
        name: "Kaitlyn Lew",
        gender: "Female",
        password: "hello",
        pfp: "images/female.png",
        weekdays: ["Monday", "Tuesday", "Wednesday", "Friday"],
        location: ["Central Campus Recreational Building"],
        experience: "Novice",
        exercise: ["Weightlifting", "Sports"],
    };
    let user4 = {
        uniqname: "kwoosuk",
        name: "Woosuk Kang",
        gender: "Male",
        password: "hello",
        pfp: "images/male.jpg",
        weekdays: ["Wednesday", "Friday"],
        location: ["Central Campus Recreational Building"],
        experience: "Advanced",
        exercise: ["Sports"],
    };
    let user5 = {
        uniqname: "evnlwang",
        name: "Evan Wang",
        gender: "Male",
        password: "hello",
        pfp: "images/male.jpg",
        weekdays: ["Monday", "Tuesday"],
        location: ["North Campus Recreational Building"],
        experience: "Novice",
        exercise: ["Yoga"],
    };
    let user6 = {
        uniqname: "spiderman",
        name: "Spiderman",
        gender: "Male",
        password: "hello",
        pfp: "images/spiderman.jpg",
        weekdays: ["Monday", "Friday"],
        location: ["Intramural Sports Building"],
        experience: "Novice",
        exercise: ["Yoga", "Sports"],
    };
    let user7 = {
        uniqname: "ironman",
        name: "Iron Man",
        gender: "Male",
        password: "hello",
        pfp: "images/ironman.jpg",
        weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        location: ["North Campus Recreational Building"],
        experience: "Advanced",
        exercise: ["Cardio", "Weightlifting"],
    };
    let user8 = {
        uniqname: "cptnamerica",
        name: "Captain America",
        gender: "Male",
        password: "hello",
        pfp: "images/captainamerica.jpg",
        weekdays: ["Thursday", "Friday", "Sunday"],
        location: ["Intramural Sports Building"],
        experience: "Advanced",
        exercise: ["Weightlifting", "Sports", "Yoga", "Cardio"],
    };
    let user9 = {
        uniqname: "blackwidow",
        name: "Black Widow",
        gender: "Female",
        password: "hello",
        pfp: "images/blackwidow.jpeg",
        weekdays: ["Friday", "Saturday", "Sunday"],
        location: ["Intramural Sports Building"],
        experience: "Advanced",
        exercise: ["Cardio"],
    };
    let user10 = {
        uniqname: "scarletwitch",
        name: "Scarlet Witch",
        gender: "Female",
        password: "hello",
        pfp: "images/scarletwitch.jpg",
        weekdays: ["Friday", "Saturday", "Sunday"],
        location: ["Intramural Sports Building"],
        experience: "Intermediate",
        exercise: ["Cardio", "Weightlifting"],
    };
    let user11 = {
        uniqname: "gamora",
        name: "Gamora",
        gender: "Fmale",
        password: "hello",
        pfp: "images/gamora.jpg",
        weekdays: ["Friday", "Saturday", "Sunday"],
        location: ["Central Campus Recreational Building"],
        experience: "Advanced",
        exercise: ["Yoga", "Weightlifting"],
    };
    let user12 = {
        uniqname: "nebula",
        name: "Nebula",
        gender: "Female",
        password: "hello",
        pfp: "images/nebula.jpg",
        weekdays: ["Friday", "Saturday", "Sunday"],
        location: ["Central Campus Recreational Building"],
        experience: "Intermediate",
        exercise: ["Yoga"],
    };
    let user13 = {
        uniqname: "groot",
        name: "Groot",
        gender: "Other",
        password: "hello",
        pfp: "images/groot.jpg",
        weekdays: ["Friday", "Saturday", "Sunday"],
        location: ["Intramural Sports Building"],
        experience: "Novice",
        exercise: ["Sports", "Cardio"],
    };
    let user14 = {
        uniqname: "shangchi",
        name: "Shang-Chi",
        gender: "Male",
        password: "hello",
        pfp: "images/shangchi.jpg",
        weekdays: ["Mondau", "Tuesday", "Friday", "Saturday", "Sunday"],
        location: ["North Campus Recreational Building", "Intramural Sports Building"],
        experience: "Intermediate",
        exercise: ["Sports", "Cardio", "Yoga"],
    };

    users["user1"] = user1;
    users["user2"] = user2;
    users["user3"] = user3;
    users["user4"] = user4;
    users["user5"] = user5;
    users["user6"] = user6;
    users["user7"] = user7;
    users["user8"] = user8;
    users["user9"] = user9;
    users["user10"] = user10;
    users["user11"] = user11;
    users["user12"] = user12;
    users["user13"] = user13;
    users["user14"] = user14;
}

function get_matches() {
    matches = [];
    for (const [key, value] of Object.entries(users)) {
        console.log(value);
        if (
            value["weekdays"].some(day => currentUser["weekdays"].includes(day)) &&
            value["exercise"].some(exc => currentUser["exercise"].includes(exc)) &&
            value["location"].some(gym => currentUser["location"].includes(gym)) &&
            currentUser["buddy_genders"].some(gender => value["gender"] == gender) &&
            currentUser["uniqname"] != key) {
            console.log("Adding match!");
            matches.push(value);
        }
    }
    sortedMatchesL2H = [...matches];
    sortedMatchesL2H.sort(function(a, b) {
        if (a["experience"] > b["experience"]) {
            return -1;
        } else {
            return 1;
        }
    })

    sortedMatchesH2L = [...sortedMatchesL2H];
    sortedMatchesH2L.reverse();
}

// gets called when user clicks find matches button
function set_user_profile() {
    users[currentUser.uniqname].location = $("#scheduledLocation").val()
    users[currentUser.uniqname].experience = $("#scheduledExperience").val()
    users[currentUser.uniqname].weekdays = $("#scheduledDay").val()
    users[currentUser.uniqname].exercise = $("#scheduledExercise").val()
    users[currentUser.uniqname].buddy_genders = $("#scheduledGender").val()
}

function add_header_pfp() {
    if (currentUser.pfp == "images/") {
        currentUser.pfp = "images/defaultUser.png"
    }
    header_pfp_html = "<img class='pfp header-el' id='user-pfp' src='" + currentUser.pfp + "' alt='pfp'>"

    $("#pfp-button").html(header_pfp_html)
}

function set_matches_feed() {
    var html = ""

    matches.forEach((match) => {

        html += "<div class='prev-bud'>" +
            "<img src=" + match['pfp'] + " class='pfp'>" +
            "<div class='desc'>" +
            "<p>" + "<b>" + "Name: " + "</b>" + match['name'] + "</p>" +
            "<p>" + "<b>" + "Experience: " + "</b>" + match['experience'] + "</p>" +
            "<p>" + "<b>" + "Activities: " + "</b>" + match['exercise'] + "</p>" +
            "<p>" + "<b>" + "Gyms: " + "</b>" + match['location'] + "</p>" +
            "<p>" + "<b>" + "Gender: " + "</b>" + match['gender'] + "</p>" +
            "</div>" +
            "<div><p style='padding: 10px; top: 0; right: 0; color: black;'>" +
            "<button class='button' style='padding: 2px 5px;'><a style='color: black; transition: 0.4s;' href='mailto:" + match["uniqname"] + "@umich.edu'>Contact</a></button></p></div>" +
            "</div>"
    })
    if (matches.length == 0) {
        $("#num_matches").html("<p id='matches_statement'>You have no buddies :(<p><p>Make sure you have filled out all of your preferences.</p>")
    } else if (matches.length == 1) {
        $("#num_matches").html("<p id='matches_statement'>You have " + matches.length + " buddy!<p>")
    } else {
        $("#num_matches").html("<p id='matches_statement'>You have " + matches.length + " buddies!<p>")
        $("#sort_button_div").show();
    }
    $("#matches_feed").html(html)
}

function reset() {
    welcome_page.hide();
    simple_header.hide();
    login_page.hide();
    signup_page.hide();
    home_page.hide();
    sorry_page.hide();
    edit_account.hide();
    top_header.hide();
}

function add_events() {
    // Add event listeners for all buttons
    $("#welcome_login_button").click(function() {
        reset();
        login_page.show();
        simple_header.show();
    });

    $("#welcome_signup_button").click(function() {
        reset();
        signup_page.show();
        simple_header.show();
    });

    $("#create_account_button").click(function() {
        signup_page.hide();
        simple_header.hide();
        top_header.show();
        currentUser.uniqname = $("#uniqname_field").val();
        currentUser.name = $("#name_field").val();
        currentUser.password = $("#password_field").val();
        var filename = $("#pfp_field").val().replace(/^.*[\\\/]/, '');
        currentUser.pfp = "images/" + filename;
        currentUser.birthday = $("#bday_field").val();

        const bday = new Date(currentUser.birthday);

        const d = new Date();
        let day = d.getDate();
        let month = d.getMonth();
        let year = d.getFullYear();
        year -= 10;

        // console.log(age);
        // conditionals should check if too young

        if (bday.getFullYear() > year) {
            sorry_page.show();
        } else if (bday.getFullYear() == year) {
            if (bday.getMonth() >= month) {
                if (bday.getDay() > day) {
                    sorry_page.show();
                }
            }
        } else { // age verified
            users[currentUser.uniqname] = currentUser;
            add_header_pfp();
            home_page.show();
        }

    });

    $("#login_button").click(function() {
        let login_username = $("#username_login").val()
        let login_password = $("#password_login").val()
        reset();
        home_page.show();
        top_header.show();
        // if (login_username == "" || login_password == "") {
        //     return $("#login_error").html("Invalid credentials")
        // } else if (currentUser.uniqname == login_username && currentUser.password == login_password) {
        //     reset();
        //     home_page.show();
        //     top_header.show();
        //     currentUser.weekdays.forEach((day) => {
        //         $('#scheduledDay option[value=' + day + ']').attr("selected", "selected");
        //     })
        //     currentUser.exercise.forEach((type) => {
        //         $('#scheduledExercise option[value=' + type + ']').attr("selected", "selected");
        //     })
        //     $('#scheduledLocation option[value=' + currentUser.location + ']').attr("selected", "selected");
        //     $("#buddy-button").hide();
        // } else {
        //     $("#login_error").html("Invalid credentials")
        // }
    });


    $("#home_logo").click(function() {
        reset();
        home_page.show();

        // show full header
        top_header.show()
        $("#buddy-button").hide();
    });

    $("#simple_logo").click(function() {
        reset();
        welcome_page.show();
        simple_header.show();
    });

    $("#simple_welcome").click(function() {
        sorry_page.hide();
        welcome_page.show();
        simple_header.show();
    });

    $("#log_out_button").click(function() {
        $("#username_login").val()
        $("#password_login").val()
        $("#name_field").val()
        $("#uniqname_field").val()
        $("#password_field").val()
        $("#password").val()
        reset();
        welcome_page.show();
        simple_header.show();
    });

    $("#edit_account_button").click(function() {
        home_page.hide();
        edit_account.show();

        edit_uniqname_html = "<input id='edit_uniqname_field' type='text' class='input-box' size='50' value='" + currentUser.uniqname + "'>"
        edit_password_html = "<input id='edit_password_field' type='password' class='input-box' size='50' value='" + currentUser.password + "'>"
        edit_pfp_html = "<input type='file' id='edit_pfp_field' name='pfp' accept='image/png, image/jpeg'" + currentUser.pfp_og + "'>"
        edit_name_html = "<input id='edit_name_field' type='text' class='input-box' size='50' value='" + currentUser.name + "'>"

        edit_experience_html = ""
        if (currentUser.experience == "Novice") {
            edit_experience_html = "<option value='Novice' selected>Novice</option>" +
                "<option value='Intermediate'>Intermediate</option>" +
                "<option value='Advanced'>Advanced</option>"
        } else if (currentUser.experience == "Intermediate") {
            edit_experience_html = "<option value='Novice'>Novice</option>" +
                "<option value='Intermediate' selected>Intermediate</option>" +
                "<option value='Advanced'>Advanced</option>"
        } else {
            edit_experience_html = "<option value='Novice'>Novice</option>" +
                "<option value='Intermediate'>Intermediate</option>" +
                "<option value='Advanced' selected>Advanced</option>"
        }

        edit_gender_html = ""
        if (currentUser.gender == "Male") {
            edit_gender_html = "<form id ='edit_gender_select' action='/action_page.php'>" +
                "<p>Gender: </p>" +
                "<input type='radio' id='gender_male' name='gender' value='Male' checked>" +
                "<label for='Male'>Male</label><br>" +
                "<input type='radio' id='gender_female' name='gender' value='Female'>" +
                "<label for='Female'>Female</label><br>" +
                "<input type='radio' id='gender_other' name='gender' value='Other'>" +
                "<label for='Other'>Other</label>" +
                "</form>"
        } else if (currentUser.gender == "Female") {
            edit_gender_html = "<p>Gender: </p>" +
                "<input type='radio' id='gender_male' name='gender' value='Male'>" +
                "<label for='Male'>Male</label><br>" +
                "<input type='radio' id='gender_female' name='gender' value='Female' checked>" +
                "<label for='Female'>Female</label><br>" +
                "<input type='radio' id='gender_other' name='gender' value='Other'>" +
                "<label for='Other'>Other</label>" +
                "</form>"
        } else {
            edit_gender_html = "<form id ='edit_gender_select' action='/action_page.php'>" +
                "<p>Gender: </p>" +
                "<input type='radio' id='gender_male' name='gender' value='Male'>" +
                "<label for='Male'>Male</label><br>" +
                "<input type='radio' id='gender_female' name='gender' value='Female'>" +
                "<label for='Female'>Female</label><br>" +
                "<input type='radio' id='gender_other' name='gender' value='Other' checked>" +
                "<label for='Other'>Other</label>" +
                "</form>"
        }

        $('#edit_uniqname').html(edit_uniqname_html)
        $('#edit_password').html(edit_password_html)
        $('#edit_pfp').html(edit_pfp_html)
        $('#edit_name').html(edit_name_html)
        $('#edit_gender').html(edit_gender_html)
    });

    $("#save_account_button").click(function() {
        currentUser.uniqname = $("#edit_uniqname_field").val();
        currentUser.name = $("#edit_name_field").val();
        currentUser.password = $("#edit_password_field").val();

        if ($("#edit_pfp_field").val()) {
            var filename = $("#edit_pfp_field").val().replace(/^.*[\\\/]/, '');
            currentUser.pfp = "images/" + filename;
        }

        currentUser.gender = $('input[name=gender]:checked', '#edit_gender_select').val()
        currentUser.experience = $("#editExperience").val();
        users[currentUser.uniqname] = currentUser;

        edit_account.hide();
        home_page.show();
    })

    $("#sort_button").click(function() {
        if ($("#sort_experience").val() == "Low to High") {
            set_sorted_matches_feed(true);
        } else {
            set_sorted_matches_feed(false);
        }
    })
}