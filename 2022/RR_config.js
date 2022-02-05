var config_data = `
{
  "title":"Scouting App 2022",
  "page_title":"Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"false"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022flwp",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "p":"Practice<br>",
          "qm":"Quals<br>",
          "qf":"Quarterfinal<br>",
          "sf":"Semifinal<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"false"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"false"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"false"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code":"at",
        "title": "Taxied?",
        "type":"bool"
      },
      "Upper Cargo Scored": {
        "code":"au",
        "title": "-- Upper Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"aum",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"al",
        "title": "-- Lower Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"alm",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Cargo Intake Success": {
        "code":"cis",
        "title": "-- Cargo Intake Success",
        "type":"counter"
      },
      "Cargo Intake Missed": {
        "code":"cim",
        "title": "Cargo Intake Missed",
        "type":"counter"
      },
      "Auto Path": {
        "code":"ap",
        "title": "Auto Path",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code":"tu",
        "title": "Uppoer Cargo Scored",
        "type":"counter"
      },
      "Lower Cargo Scored": {
        "code":"tl",
        "title": "Lower Cargo Scored",
        "type":"counter"
      },
      "Upper Cargo Missed": {
        "code":"tm",
        "title": "Upper Cargo Missed",
        "type":"counter"
      },
      "Lower Cargo Missed": {
        "code":"tn",
        "title": "Lower Cargo Missed",
        "type":"counter"
      },
      "Was Defended": {
        "code":"wd",
        "title": "Was Defended",
        "type":"bool"
      },
      "Cargo Loading": {
        "code":"cl",
        "title": "Pick up Cargo where",
        "type":"radio",
        "choices":{
          "t":"Terminal<br>",
          "g":"Ground<br>",
          "b":"Both<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Shooting Spot": {
        "code":"ss",
        "title": "Shooting Spot",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code":"c",
        "title": "Climb",
        "type":"radio",
        "choices":{
          "1":"Low<br>",
          "2":"Mid<br>",
          "3":"High<br>",
          "4":"Traversal<br>",
          "f":"Attempted but Failed<br>",
          "x":"Not Attempted"
        },
        "defaultValue":"x"
      },
      "Started Climb before Endgame": {
        "code":"be",
        "title": "Started climb before EndGame",
        "type":"bool"
      },
      "Tandem Climb": {
        "code":"be",
        "title": "Tandem Climb",
        "type":"bool"
      },
       "Num of Robots Climbed": {
        "code":"cn",
        "title": "# of alliance bots climbed",
        "type":"counter"
      },
      "Highest Attempted Climb": {
        "code":"hac",
        "title": "Highest Attempted Climb",
        "type":"radio",
        "choices":{
          "5":"Low<br>",
          "6":"Mid<br>",
          "7":"High<br>",
          "8":"Traversal<br>",
          "y":"Not Attempted"
        },
        "defaultValue":"y"
      }
    },
    "postmatch": {
      "Defended Against": {
        "code":"da",
        "title": "Defended Against",
        "type":"radio",
        "choices":{
          "n":"Affected in shooting<br>",
          "a":"Affected in movement<br>",
          "v":"Not Affected<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Defense Rating": {
        "code":"dr",
        "title": "Defense Rating",
        "type":"radio",
        "choices":{
          "9":"Not Effective<br>",
          "10":"Got in the way<br>",
          "11":"Pushed robot around a lot<br>",
          "12":"Pushed robot around slightly<br>",
          "13":"Blocked most of shooting<br>",
          "14":"Blocked some of shooting<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Intake Location": {
        "code":"il",
        "title": "Intake Location",
        "type":"radio",
        "choices":{
          "15":"Human Player<br>",
          "16":"Ground<br>",
          "17":"Both<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
      "Intake Accuracy": {
        "code":"ia",
        "title": "Intake Accuracy",
        "type":"radio",
        "choices":{
          "18":"Half of the time<br>",
          "19":"Most of the time<br>",
          "20":"All of the time<br>",
          "x":"Not Observed"
        },
        "defaultValue":"x"
      },
     "Connection Issues": {
        "code":"ci",
        "title": "Connection Issues",
        "type":"radio",
        "choices":{
          "w":"Yes<br>",
          "s":"Slight<br>",
          "z":"None"
        },
        "defaultValue":"z"
      },
      "Tipped": {
        "code":"to",
        "title": "Tipped Over",
        "type":"bool"
      },
      "Card Foul": {
        "code":"cf",
        "title": "Yellow/Red Card",
        "type":"bool"
      },
      "Comments": {
        "code":"co",
        "title": "Comments",
        "type":"text",
        "size":15,
        "maxSize":80
      }
    }
  }
}`;
