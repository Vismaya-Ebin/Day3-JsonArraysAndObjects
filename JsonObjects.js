//Javascript - Day -3 : JS array & objects
// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

let obj = {
    problems: [
      {
        Diabetes: [
          {
            medications: [
              {
                medicationsClasses: [
                  {
                    className: [
                      {
                        associatedDrug: [
                          {
                            name: "asprin",
                            dose: "",
                            strength: "500 mg",
                          },
                        ],
                        "associatedDrug#2": [
                          {
                            name: "somethingElse",
                            dose: "",
                            strength: "500 mg",
                          },
                        ],
                      },
                    ],
                    className2: [
                      {
                        associatedDrug: [
                          {
                            name: "asprin",
                            dose: "",
                            strength: "500 mg",
                          },
                        ],
                        "associatedDrug#2": [
                          {
                            name: "somethingElse",
                            dose: "",
                            strength: "500 mg",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
            labs: [
              {
                missing_field: "missing_value",
              },
            ],
          },
        ],
        Asthma: [{}],
      },
    ],
  };
  
  let finalVal;
  let endIteration;
  //for - of
  for (let item of obj.problems) {
    //for - in
    for (let i in item) {
      // for-- of
      for (let data of item[i]) {
          // for - in
        for (let j in data) {
            //for - dateOfBirth
          for (let d of data[j]) {
              // for - in
            for (let val in d) {
               finalVal = d[val];
              //for loop
               for(let i = 0 ; i< finalVal.length;i++){
                   // for in loop
                   for(let k in finalVal[i]){
                       console.log(finalVal[i][k]);
                     
                   }
  
               }
              //console.log(val, finalVal);
            }
          }
        }
      }
    }
  }
  var json = {
      one: [11, 12, 13, 14, 15],
      two: [21, 22, 23],
      three: [31, 32],
    };
    
     for(var key in json) {
         //for each loop
          json[key].forEach((data, index) => {
             console.log("Array Values",json[key][index]);
         })
       
     }
  
  //2.Create your own resume data in JSON format
  
  let jsonObj = {
    bioData: {
      firstName: "Vismaya",
      lastName: "Wilson",
      dateOfBirth: "07-11-1993",
      experience: 6,
      contactNumber: [8848342980],
      aleternateNumber: [9961669888],
      location: "Cochin",
      emailAddress: ["vismayawilson3@gmail.com"],
      skillSet: [
        "Angular JS",
        "React JS",
        "Node JS",
        "HTML5",
        "JavaScript",
        "CSS3",
        "ES6",
      ],
      perviousCompanies: ["UST Global"],
      currentCompany: "TCS",
      educationDetails: {
        collegeAddress: "Sri Eshwar College of Engineering",
        passoutYear: 2015,
        percentage: "78%",
      },
    },
  };
  
  //3 Read about the difference between window, screen and document in javascript
  /*
          WINDOW
  
  1) Window Object represent browser window, it is the global object of the browser , its the root of the DOM
  2) It is supported by all the browsers
  3) All JS variables, objects, functions, become the members of window object
  4) Global variables are properties of window Object
  5) Global methods functions are functions of window Object
  6) HTML DOM are property of window Object
  7) document.getElementById("header") is sames as window.document.getElementById("header")
  8) window.innerHeight - gives the inner height of the window , window.innerWidth -  gives the inner width of the window
  9) Inner widith may change base on resizing of the broser
  
       SCREEN
  1) Window.screen contains the information about the users screen position
  2) window.screen.width is same it wont change according to the change of browser
  3) It is the information about the physical dimensions of the screen
  
      DOCUMENT
  1) window.document is the  main  object of the DOM. 
  2) It is our html page which is loaded to the browser. 
  3) Documents contain the DOM
  */
  
  
  