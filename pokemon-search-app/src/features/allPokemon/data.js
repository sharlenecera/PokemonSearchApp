//total is 30 characters

const data = [
    {
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male"
  }, {
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
      "skin_color": "gold",
      "eye_color": "yellow",
      "birth_year": "112BBY",
      "gender": "n/a"
  }, {
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
      "skin_color": "white, blue",
      "eye_color": "red",
      "birth_year": "33BBY",
      "gender": "n/a"
  }, {
      "name": "Darth Vader",
      "height": "202",
      "mass": "136",
      "hair_color": "none",
      "skin_color": "white",
      "eye_color": "yellow",
      "birth_year": "41.9BBY",
      "gender": "male"
  }, {
      "name": "Leia Organa",
      "height": "150",
      "mass": "49",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "19BBY",
      "gender": "female"
  }, {
      "name": "Owen Lars",
      "height": "178",
      "mass": "120",
      "hair_color": "brown, grey",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "52BBY",
      "gender": "male"
  }, {
      "name": "Beru Whitesun lars",
      "height": "165",
      "mass": "75",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "blue",
      "birth_year": "47BBY",
      "gender": "female"
  }, {
      "name": "R5-D4",
      "height": "97",
      "mass": "32",
      "hair_color": "n/a",
      "skin_color": "white, red",
      "eye_color": "red",
      "birth_year": "unknown",
      "gender": "n/a"
  }, {
      "name": "Biggs Darklighter",
      "height": "183",
      "mass": "84",
      "hair_color": "black",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "24BBY",
      "gender": "male"
  }, {
      "name": "Obi-Wan Kenobi",
      "height": "182",
      "mass": "77",
      "hair_color": "auburn, white",
      "skin_color": "fair",
      "eye_color": "blue-gray",
      "birth_year": "57BBY",
      "gender": "male"
  }, {
      "name": "Anakin Skywalker",
      "height": "188",
      "mass": "84",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "41.9BBY",
      "gender": "male"
  }, {
      "name": "Wilhuff Tarkin",
      "height": "180",
      "mass": "unknown",
      "hair_color": "auburn, grey",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "64BBY",
      "gender": "male"
  }, {
      "name": "Chewbacca",
      "height": "228",
      "mass": "112",
      "hair_color": "brown",
      "skin_color": "unknown",
      "eye_color": "blue",
      "birth_year": "200BBY",
      "gender": "male"
  }, {
      "name": "Han Solo",
      "height": "180",
      "mass": "80",
      "hair_color": "brown",
      "skin_color": "fair",
      "eye_color": "brown",
      "birth_year": "29BBY",
      "gender": "male"
  }, {
      "name": "Greedo",
      "height": "173",
      "mass": "74",
      "hair_color": "n/a",
      "skin_color": "green",
      "eye_color": "black",
      "birth_year": "44BBY",
      "gender": "male"
  }, {
      "name": "Jabba Desilijic Tiure",
      "height": "175",
      "mass": "1,358",
      "hair_color": "n/a",
      "skin_color": "green-tan, brown",
      "eye_color": "orange",
      "birth_year": "600BBY",
      "gender": "hermaphrodite"
  }, {
      "name": "Wedge Antilles",
      "height": "170",
      "mass": "77",
      "hair_color": "brown",
      "skin_color": "fair",
      "eye_color": "hazel",
      "birth_year": "21BBY",
      "gender": "male"
  }, {
      "name": "Jek Tono Porkins",
      "height": "180",
      "mass": "110",
      "hair_color": "brown",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "unknown",
      "gender": "male"
  }, {
      "name": "Yoda",
      "height": "66",
      "mass": "17",
      "hair_color": "white",
      "skin_color": "green",
      "eye_color": "brown",
      "birth_year": "896BBY",
      "gender": "male"
  }, {
      "name": "Palpatine",
      "height": "170",
      "mass": "75",
      "hair_color": "grey",
      "skin_color": "pale",
      "eye_color": "yellow",
      "birth_year": "82BBY",
      "gender": "male"
  }, {
      "name": "Grievous",
      "height": "216",
      "mass": "159",
      "hair_color": "none",
      "skin_color": "brown, white",
      "eye_color": "green, yellow",
      "birth_year": "unknown",
      "gender": "male"
  }, {
      "name": "Padmé Amidala",
      "height": "165",
      "mass": "45",
      "hair_color": "brown",
      "skin_color": "light",
      "eye_color": "brown",
      "birth_year": "46BBY",
      "gender": "female"
  }, {
      "name": "Jar Jar Binks",
      "height": "196",
      "mass": "66",
      "hair_color": "none",
      "skin_color": "orange",
      "eye_color": "orange",
      "birth_year": "52BBY",
      "gender": "male"
  }, {
      "name": "Boba Fett",
      "height": "183",
      "mass": "78.2",
      "hair_color": "black",
      "skin_color": "fair",
      "eye_color": "brown",
      "birth_year": "31.5BBY",
      "gender": "male"
  }, {
      "name": "Lando Calrissian",
      "height": "177",
      "mass": "79",
      "hair_color": "black",
      "skin_color": "dark",
      "eye_color": "brown",
      "birth_year": "31BBY",
      "gender": "male"
  }, {
      "name": "Shmi Skywalker",
      "height": "163",
      "mass": "unknown",
      "hair_color": "black",
      "skin_color": "fair",
      "eye_color": "brown",
      "birth_year": "72BBY",
      "gender": "female"
  }, {
      "name": "Darth Maul",
      "height": "175",
      "mass": "80",
      "hair_color": "none",
      "skin_color": "red",
      "eye_color": "yellow",
      "birth_year": "54BBY",
      "gender": "male"
  }, {
      "name": "Mace Windu",
      "height": "188",
      "mass": "84",
      "hair_color": "none",
      "skin_color": "dark",
      "eye_color": "brown",
      "birth_year": "72BBY",
      "gender": "male"
  }, {
      "name": "Dooku",
      "height": "193",
      "mass": "80",
      "hair_color": "white",
      "skin_color": "fair",
      "eye_color": "brown",
      "birth_year": "102BBY",
      "gender": "male"
  }, {
      "name": "Jango Fett",
      "height": "183",
      "mass": "79",
      "hair_color": "black",
      "skin_color": "tan",
      "eye_color": "brown",
      "birth_year": "66BBY",
      "gender": "male"
  }
  ]
  
data.map(x => {
    return {
        ...x,
        
    }
})
export default data;