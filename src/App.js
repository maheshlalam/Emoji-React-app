import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😃": "smiling",
  "🤦": "disbelief",
  "😥": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "😪": "Sleepy Face",
  "🤤": "Drooling Face",
  "😴": "Sleeping Face",
  "😷": "Face with Medical Mask",
  "🤒": "Face with Thermometer",
  "🤕": "Face with Head-Bandage",
  "🤢": "Nauseated Face",
  "🤮": "Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Dizzy Face",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "🌍": "Globe Showing Europe-Africa",
  "🌎": "Globe Showing Americas",
  "🌏": "Globe Showing Asia-Australia",
  "🌐": "Globe with Meridians",
  "🌑": "New Moon",
  "🌒": "Waxing Crescent Moon",
  "🌓": "First Quarter Moon",
  "🌔": "Waxing Gibbous Moon",
  "🌕": "Full Moon",
  "🌖": "Waning Gibbous Moon",
  "🌗": "Last Quarter Moon",
  "🌘": "Waning Crescent Moon",
  "🌙": "Crescent Moon",
  "🌚": "New Moon Face",
  "🌛": "First Quarter Moon Face",
  "🌜": "Last Quarter Moon Face",
  "☀": "Sun",
  "🌝": "Full Moon Face",
  "🌞": "Sun with Face",
  "⭐": "Star",
  "🌟": "Glowing Star",
  "🌠": "Shooting Star",
  "☁": "Cloud",
  "⛅": "Sun Behind Cloud",
  "⛈": "Cloud with Lightning and Rain",
  "🌤": "Sun Behind Small Cloud",
  "🌥": "Sun Behind Large Cloud",
  "🌦": "Sun Behind Rain Cloud",
  "🌧": "Cloud with Rain",
  "🌨": "Cloud with Snow",
  "🌩": "Cloud with Lightning",
  "🌪": "Tornado",
  "🌫": "Fog",
  "🌬": "Wind Face",
  "🌈": "Rainbow",
  "☂": "Umbrella",
  "🌂": "Closed Umbrella",
  "☔": "Umbrella with Rain Drops",
  "⚡": "High Voltage",
  "❄": "Snowflake",
  "☃": "Snowman",
  "⛄": "Snowman Without Snow",
  "☄️": "Comet",
  "🔥": "Fire",
  "💧": "Droplet",
  "🌊": "Water Wave",
  "🎄": "Christmas Tree",
  "✨": "Sparkles",
  "🎋": "Tanabata Tree",
  "🎍": "Pine Decoration",
  "🦃": "Turkey",
  "🐔": "Chicken",
  "🐓": "Rooster",
  "🐣": "Hatching Chick",
  "🐤": "Baby Chick",
  "🐥": "Front-Facing Baby Chick",
  "🐦": "Bird",
  "🐧": "Penguin",
  "🕊": "Dove",
  "🦅": "Eagle",
  "🦆": "Duck",
  "🦢": "Swan",
  "🦉": "Owl",
  "🦩": "Flamingo",
  "🦚": "Peacock",
  "🦜": "Parrot"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    //processing

    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    //processing

    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }

  return (
    <div className="App">
      <h1>emoji and it's meaning </h1>
      <input onChange={emojiInputHandler} />

      <h2>{meaning} </h2>
      {/*actual output set by react using usestate */}

      <h3> emojis we know </h3>

      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {" "}
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

//
