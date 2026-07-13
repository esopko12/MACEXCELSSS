const Erik = {
  name: "Erik Sopko",
  CalLink: "https://calendar.app.google/3TkgKJ89wkfr4mXo7",
  CalEmbed: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3dgPP2LBkJ3TS-298XmxmfQUjoIcfuqmW6LJK0S9XAOZ1LRgANtL_ChMXUEAh5l0wI0xYCOAfw?gv=true",
  availability: " (Mon, Wed, Thurs 8am-4pm)",
  about: ""
};

const Dane = {
  name: "Dane Korenak",
  CalLink: "https://calendar.app.google/Js9AVQ4yvSZQ3YLP9",
  CalEmbed: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3I_Ua-uj_VDogNfyWqIKbUv7IsfQ_zHHF5pC4fD6t_PFfu1LLaykgeCRP0XGJpwDm45yl3aAiz?gv=true",
  availability: " (Mon-Fri 8am-4pm)",
  about: ""
};


const Rachel = {
  name: "Rachel Neumeier",
  CalLink: "https://calendar.app.google/EVqJR5cTezaSNCUG9",
  CalEmbed: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ1EhC3Yv5iCYMQMh487JAgMnxB_o-p53xtSEN33q96o4GTWfUZyJEvDwzGli5odnV2d3XIm23Da?gv=true",
  availability: " (Mon-Fri 9am-3pm)",
  about: "",
  aboutmath: ""
};

const Margaret = {
  name: "Margaret Williams",
  CalLink: "https://calendar.app.google/wMyjGR2PmwFW7tEYA",
  CalEmbed: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ32AtxNCzpBCxT_tl560qy9Vle5qTfTtZ1AciS5ALsb22LQfUxlz0kYBqTMyhPKCvaPoPZE0rM5?gv=true",
  availability: " (Tues, Fri 8am-4pm)",
  about: ""
};

const Michelle = {
  name: "Michelle Matheny",
  CalLink: "https://calendar.app.google/DbBps2UxbmcfftgU8",
  CalEmbed: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3Nr8L64gQb6OSzOQwbHWR9a-yRIZkvZu1yXNtd29GYv5yqykKse2YZNSLEO18OtSHh_boZUT1s?gv=true",
  availability: " (Mon-Fri 8am-4pm)",
  about: ""
};

const SubjectDesc = {
  math: "Tutoring is available for Fundamentals of Mathematics, Quantitative Reasoning, Algebra Courses, Statistics, Pre-Calculus: Trigonometry, Calculus I, II, & III, Differential Equations, and Technical Mathematics I & II",
  english: "Tutoring is available for Introduction to College Writing, English Composition I, English Composition II, College Reading & Study Skills, Public Speaking, Interpersonal Communications, and all Literature courses.",
  physics: "Tutoring is available for General Physics I & II and College Physics I & II.",
  chemistry: "Tutoring is available for General Chemistry I & II and Introductory Chemistry.",
  biology: "Tutoring is available for Introduction to Biological Science, General Biology, Microbiology, General Zoology, General Botany, Environmental Science, Human Anatomy and Physiology (BIO 2540), Human Anatomy (BIO 2600), and Human Physiology (BIO 2620).",
  history: "Tutoring is available for Comparative Religion, American Political Systems, American History I & II, World Civilization I & II, and Geography. ",
  tech: "Tutoring is available for Office Applications, Microcomputer Applications, Fundamentals of Networking, Programming Logic, Principles of Engineering, Intro to Computer Numerical Control, Blueprint Reading, and Technical Mathematics I & II.",
  socialscience: "Tutoring is available for General Psychology, Human Growth and Development, General Sociology, Introduction to Philosophy, and Intro to Cultural Anthropology.",
  art: "Tutoring is available for Drawing, Painting, Introduction to Humanities, and History of Art.",
  music: "Tutoring is available for Appreciation of Music, History of Rock Music, and Music Theory.",
  nursing: "Tutoring is available for Fundamentals of Nursing, Pharmacology, Human Anatomy and Physiology (BIO 2540), Human Anatomy (BIO 2600), and Human Physiology (BIO 2620).",
  business: "Tutoring is available for Principles of Microeconomics, Principles of Macroeconomics, Business Ethics, and Principles of Accounting I & II.",
  other: "If you would like assistance with a class that isn't listed, please send us an email at excelsss@mineralarea.edu, and we will let you know if we can help."
};

// 1. Store dependent sub-category data in a mapped dictionary object
const subCategoryData = {
  english: [Michelle.name, Rachel.name],
  math: [Dane.name, Erik.name, Rachel.name],
  tech: [Erik.name, Dane.name],
  socialscience: [Michelle.name, Rachel.name],
  art: [Dane.name],
  music: [Michelle.name],
  nursing: [Rachel.name],
  business: [Erik.name, Dane.name],
  history: [Rachel.name, Margaret.name, Michelle.name],
  physics: [Erik.name, Dane.name],
  chemistry: [Margaret.name, Erik.name, Dane.name],
  biology: [Rachel.name],
  other: []
};

  // 2. Select the HTML dropdown elements
  const SubjectSelect = document.getElementById("subject");
  const TutorSelect = document.getElementById("tutor");

  // 3. Listen for changes on the primary dropdown selection
  SubjectSelect.addEventListener("change", function () {
  const selectedValue = this.value;
  document.getElementById("aboutTutor").innerText = "";
  document.getElementById("dynamicEmbed").src = "";
  document.getElementById("dynamicLink").href = "";
  document.getElementById("dynamicEmbed").style.display = "none";
  document.getElementById("dynamicLink").style.display = "none";
  document.getElementById("prompt").style.visibility = "hidden";

  //This displays the subject descriptions based on selection from struct above
  if (SubjectSelect.value == 'math'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.math;
  }
  else if (SubjectSelect.value == 'english'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.english;
  }
  else if (SubjectSelect.value == 'physics'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.physics;
  }
  else if (SubjectSelect.value == 'chemistry'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.chemistry;
  }
  else if (SubjectSelect.value == 'biology'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.biology;
  }
  else if (SubjectSelect.value == 'history'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.history;
  }
  else if (SubjectSelect.value == 'socialscience'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.socialscience;
  }
  else if (SubjectSelect.value == 'tech'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.tech;
  }
  else if (SubjectSelect.value == 'art'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.art;
  }
  else if (SubjectSelect.value == 'music'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.music;
  }
  else if (SubjectSelect.value == 'nursing'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.nursing;
  }
  else if (SubjectSelect.value == 'business'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.business;
  }
  else if (SubjectSelect.value == 'other'){
    document.getElementById("aboutSubject").innerText = SubjectDesc.other;
  }
  else{
    document.getElementById("aboutSubject").innerText = "";
  }
  //

  // Clear existing options except for the default placeholder
  TutorSelect.innerHTML = '<option value=""></option>';

  // 4. Populate new options based on the chosen value
  if (selectedValue && subCategoryData[selectedValue]) {
    // Enable the secondary dropdown
    TutorSelect.disabled = false;
    // Loop through the data array and append new option elements
    subCategoryData[selectedValue].forEach(function (item) {
      const optionElement = document.createElement("option");
      optionElement.value = item;
      optionElement.textContent = item;
      TutorSelect.appendChild(optionElement);
    });
  }
  else {
    // Lock the dropdown back up if no valid selection exists
    TutorSelect.disabled = true;
  }

});

function updateLink(){
  if (TutorSelect.value == Erik.name){
    dynamicLink.href = Erik.CalLink;
    dynamicEmbed.src = Erik.CalEmbed;
	document.getElementById("dynamicEmbed").style.display = "initial";
    document.getElementById("aboutTutor").innerText = Erik.about;
    document.getElementById("dynamicLink").style.display = "initial";
	document.getElementById("prompt").style.visibility = "visible";

  }
  else if (TutorSelect.value == Margaret.name){
    dynamicLink.href = Margaret.CalLink;
    dynamicEmbed.src = Margaret.CalEmbed;
	document.getElementById("dynamicEmbed").style.display = "initial";
    document.getElementById("aboutTutor").innerText = Margaret.about;
    document.getElementById("dynamicLink").style.display = "initial";
	document.getElementById("prompt").style.visibility = "visible";
  }
  else if (TutorSelect.value == Rachel.name){
    if (SubjectSelect.value == "math"){
      dynamicLink.href = Rachel.CalLink;
      dynamicEmbed.src = Rachel.CalEmbed;
      document.getElementById("dynamicEmbed").style.display = "initial";
      document.getElementById("aboutTutor").innerText = Rachel.aboutmath;
      document.getElementById("dynamicLink").style.display = "initial";
	document.getElementById("prompt").style.visibility = "visible";
    }
    else{
      dynamicLink.href = Rachel.CalLink;
      dynamicEmbed.src = Rachel.CalEmbed;
      document.getElementById("aboutTutor").innerText = Rachel.about;
      document.getElementById("dynamicEmbed").style.display = "initial";
      document.getElementById("dynamicLink").style.display = "initial";
	  document.getElementById("prompt").style.visibility = "visible";

    }
  }
  else if (TutorSelect.value == Dane.name){
    dynamicLink.href = Dane.CalLink;
    dynamicEmbed.src = Dane.CalEmbed;
    document.getElementById("aboutTutor").innerText = Dane.about;
	document.getElementById("dynamicEmbed").style.display = "initial";
    document.getElementById("dynamicLink").style.display = "initial";
	document.getElementById("prompt").style.visibility = "visible";
  }
  else if (TutorSelect.value == Michelle.name){
    dynamicLink.href = Michelle.CalLink;
    dynamicEmbed.src = Michelle.CalEmbed;
    document.getElementById("aboutTutor").innerText = Michelle.about;
	document.getElementById("dynamicEmbed").style.display = "initial";
    document.getElementById("dynamicLink").style.display = "initial";
	document.getElementById("prompt").style.visibility = "visible";
  }
  else{
    dynamicLink.href = "";
    dynamicEmbed.src = "";
    document.getElementById("aboutTutor").innerText = "";
    document.getElementById("dynamicEmbed").src = "";
	document.getElementById("dynamicEmbed").style.display = "none";
	document.getElementById("prompt").style.visibility = "hidden";
    document.getElementById("dynamicLink").style.display = "none";
  }
}


const detailsElements = document.querySelectorAll("details");

detailsElements.forEach((detail) => {
  detail.addEventListener("toggle", function () {
    // If this <details> was just opened
    if (this.open) {
      detailsElements.forEach((otherDetail) => {
        // Close all others
        if (otherDetail !== this) {
          otherDetail.open = false;
        }

      });
    }
  });
});



function rcalappear(){
  if(document.getElementById("testprepcalendar").style.display == "initial"){
    document.getElementById("testprepcalendar").style.display = "none";
    testprepcalendar.src = "";
  }
  else if((document.getElementById("testprepcalendar").style.display == "none")){
    document.getElementById("testprepcalendar").style.display = "initial";
  }
  testprepcalendar.src = Rachel.CalEmbed;
}

function dcalappear(){
  if(document.getElementById("calendar").style.display == "initial" && calendar.src == Dane.CalEmbed){
    document.getElementById("calendar").style.display = "none";
    calendar.src = "";
  }
  else if((document.getElementById("calendar").style.display == "none" && calendar.src !== Dane.CalEmbed)){
    document.getElementById("calendar").style.display = "initial";
  }
  else if((document.getElementById("calendar").style.display == "none" && calendar.src == Dane.CalEmbed)){
    document.getElementById("calendar").style.display = "initial";
  }
  calendar.src = Dane.CalEmbed;
}

function mcalappear(){
  if(document.getElementById("calendar").style.display == "initial" && calendar.src == Michelle.CalEmbed){
    document.getElementById("calendar").style.display = "none";
    calendar.src = "";
  }
  else if((document.getElementById("calendar").style.display == "none" && calendar.src !== Michelle.CalEmbed)){
    document.getElementById("calendar").style.display = "initial";
  }
  else if((document.getElementById("calendar").style.display == "none" && calendar.src == Michelle.CalEmbed)){
    document.getElementById("calendar").style.display = "initial";
  }
  calendar.src = Michelle.CalEmbed;
}

function appdcalappear(){
  if(document.getElementById("appcalendar").style.display == "initial" && appcalendar.src == Dane.CalEmbed){
    document.getElementById("appcalendar").style.display = "none";
    appcalendar.src = "";
  }
  else if((document.getElementById("appcalendar").style.display == "none" && appcalendar.src !== Dane.CalEmbed)){
    document.getElementById("appcalendar").style.display = "initial";
  }
  else if((document.getElementById("appcalendar").style.display == "none" && appcalendar.src == Dane.CalEmbed)){
    document.getElementById("appcalendar").style.display = "initial";
  }
  appcalendar.src = Dane.CalEmbed;
}

function appmcalappear(){
  if(document.getElementById("appcalendar").style.display == "initial" && appcalendar.src == Michelle.CalEmbed){
    document.getElementById("appcalendar").style.display = "none";
    appcalendar.src = "";
  }
  else if((document.getElementById("appcalendar").style.display == "none" && appcalendar.src !== Michelle.CalEmbed)){
    document.getElementById("appcalendar").style.display = "initial";
  }
  else if((document.getElementById("appcalendar").style.display == "none" && appcalendar.src == Michelle.CalEmbed)){
    document.getElementById("appcalendar").style.display = "initial";
  }
  appcalendar.src = Michelle.CalEmbed;
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}

