//Consider using Classes instead of IDs as per Style Guide.

// Object literals

var bio = {
	"name" : "Dimitris Mullings",
	"role" : "Front-end Web Developer",
	"contactInfo" : {
	"email" : "dimitrimullings@hotmail.com",
	"mobile" : "0081 (0)80 4119 9222",
	"github" : "dmullings81",
	"twitter" : "@dmullings81",
	"location" : "Kofu, Japan"
	},
	"welcomeMessage" : "Welcome to my resume!",
	"skills" : ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery", "Git", "Grunt", "Sass", "WordPress", "Node.js", "Photoshop", "Teaching"],
	"bioPic" : "images/profile.jpg"
};

var work = {
	jobs: [
		{
			"employer": "Future English School",
			"position": "Senior English Instructor",
			"location": "Kofu, Japan",
			"dates": "August 2010 - ongoing",
			"description": "Taught English to students of all ages."
		},
		{
			"employer": "P & O Ferries Ltd",
			"position": "Purchasing Assistant",
			"location": "Dover, UK",
			"dates": "April 2007 - August 2010",
			"description": "Sourced Engineering procurement for a large company."
		},
		{
			"employer": "Derby City Council Cultural Services",
			"position": "Customer Service Assistant",
			"location": "Derby, UK",
			"dates": "May 2006 - March 2007",
			"description": "Gave Customer Service."
		},
		{
			"employer": "Journal Publishing Company",
			"position": "Junior Graphic Designer",
			"location": "Derby, UK",
			"dates": "February 2005 - April 2006",
			"description": "Designed advertisements for newspaper publication."
		},
	]
};

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "September 2015",
			"description": ["Single-page, responsive application built with Knockout.js framework and hosted on GitHub Pages.", "Developed a full-page map that loads with 20 popular bars and restaurants in Boston, MA.", "User can view recent pictures taken at each location (retrieved by AJAX request to Instagram API)."],
			"images": []
		},
		{
			"title": "Neighborhood Map",
			"dates": "December 2014",
			"description": ["Single-page, responsive application built with Knockout.js framework and hosted on GitHub Pages.", "Developed a full-page map that loads with 20 popular bars and restaurants in Boston, MA.", "User can view recent pictures taken at each location (retrieved by AJAX request to Instagram API)."],
			"images": []
		},
		{
			"title": "Arcade Game",
			"dates": "November 2014",
			"description": ["Clone of the classic game, Frogger. Udacity provided the art assets and game engine.", "Coded player, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style.", "Created enemy subclasses with different movement patterns and sprites (edited art assets in GIMP)."],
			"images": []
		},
		{
			"title": "Health Tracker",
			"dates": "September 2014",
			"description": ["Created a responsive, single-page application to perform an HVAC engineering calculation.", "Reduced time for repetitive calculation, giving engineers more time to focus on problem-solving."],
			"images": []
		},
		{
			"title": "Website Optimization",
			"dates": "November 2014",
			"description": ["Optimized critical rendering path of existing website to achieve PageSpeed Insights score above 90.", "Eliminated inefficiencies in the website's scroll animation. Site now scrolls at 60 frames per second."],
			"images": []
		},
	]
};

var education = {
	"schools": [
		{
			"name": "University of Derby",
			"location": "Derby, UK",
			"qualification": "Bachelor of Arts",
			"subjects": ["American Studies", " Film & TV Studies"],
			"dates": "1999-2002",
			"url": "http://www.derby.ac.uk/"
		},
		{
			"name": "Haywards Heath Sixth Form College",
			"location": "Haywards Heath, UK",
			"qualification" : "A-levels",
			"subjects": ["IT", " Mathematics", " Economics"],
			"dates": "1997-1999",
			"url": "http://www.centralsussex.ac.uk/14%2019/Sixth%20Form%20Haywards%20Heath"
		},
		{
			"name": "Oathall Community College",
			"location": "Haywards Heath, UK",
			"qualification" : "GCSEs",
			"subjects": "Various",
			"dates": "1992-1997",
			"url": "http://www.oathall.org/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-end Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2015",
			"url": "http://www.udacity.com/"
		},
		{
			"title": "Learn JavaScript Fundamentals",
			"school": "Microsoft Virtual Academy",
			"dates": "2015",
			"url": "http://www.microsoftvirtualacademy.com/"
		}
	]
};

// Encapsulated functions

bio.display = function() {

	var formattedRole = HTMLheaderRole.replace("%data%", this.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", this.name);
	$("#header").prepend(formattedName);

	var formattedBiopic = HTMLbioPic.replace("%data%", this.bioPic);
	$("#header").prepend(formattedBiopic);

	var FormattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
	$("#header").append(FormattedWelcomeMsg);

	var formattedEmail = HTMLemail.replace("%data%", this.contactInfo.email);
	var formattedMobile = HTMLmobile.replace("%data%", this.contactInfo.mobile);
	var formattedGithub = HTMLgithub.replace("%data%", this.contactInfo.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", this.contactInfo.twitter);
	var formattedLocation = HTMLlocation.replace("%data%", this.contactInfo.location);

	$("#topContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedTwitter, formattedLocation);
	$("#footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedTwitter);
	$("#header").append(HTMLskillsStart);

	if(this.skills.length > 0) {
		for(var i=0; i < this.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
			$("#skills").append(formattedSkill);
		};
	};
};

work.display = function() {
	for (job in this.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[job].position);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", this.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", this.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
};

projects.display = function() {
	for (project in this.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", this.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", this.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", this.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (this.projects[project].images.length > 0) {
			for (project in this.projects) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", this.projects[project].images);
				$(".project-entry:last").append(formattedProjectImage);
			};
		};
	};
};

education.display = function() {

	for (school in this.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", this.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajors = HTMLschoolMajor.replace("%data%", this.schools[school].subjects);
		$(".education-entry:last").append(formattedMajors);

		var formattedQualification = HTMLschoolDegree.replace("%data%", this.schools[school].qualification);
		$(".education-entry:last").append(formattedQualification);
	};
};


education.onlineCourses.display = function() {
		$("#education").append(HTMLonlineClasses);

		for (var i = 0; this.length > i; i++) {
		$("#education").append(HTMLschoolStart);
		var formattedTitle = HTMLonlineTitle.replace("%data%", this[i].title).replace("#", education.onlineCourses[i].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", this[i].school);
		var formattedDates = HTMLonlineDates.replace("%data%", this[i].dates);
		var courseTitle = formattedTitle + formattedSchool;
		$(".education-entry:last").append(courseTitle);
		$(".education-entry:last").append(formattedDates);
	};
};

// Invoke functions

bio.display();
work.display();
projects.display();
education.display();
education.onlineCourses.display();

// Add Google Map

$("#mapDiv").append(googleMap);