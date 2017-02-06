/*
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

module.exports = () => {
  return {
    "config" : {
      "metabarText" : "#SPAN16",
      "scenesKey" : "scenes"
    },
    "scenes" : {
      "LA_livestream_001" : {
        "newGroup" : true,
        "order" : 1,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Good morning! "
          },
          "002" : {
            "text" : "#SPAN16 | Live from LA | October 27 | 11:00a – 6:00p PDT"
          },
          "003" : {
            "text" : "Follow the conversation | #SPAN16 @GoogleDesign"
          },
          "004" : {
            "text" : "Grab a coffee.| (*￣▽￣)旦~ | Livestream starts| @11:00a PDT"
          },
          "005" : {
            "text" : "Meet our speakers | g.co/design/guide-|span-la"
          },
          "006" : {
            "text" : "Lights! Camera! Livestream!"
          },
          "007" : {
            "text" : "#SPAN16 will begin shortly. Stay tuned."
          }
        },
        "title" : "LA: Livestream 001 - Preshow"
      },
      "LA_livestream_002" : {
        "order" : 2,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "We’ll be right back"
          },
          "002" : {
            "text" : "Have you seen our| guide to SPAN LA? g.co/design/guide-|span-la"
          },
          "003" : {
            "text" : "Take five <(￣︶￣)>"
          },
          "004" : {
            "text" : "After the break: | Levi Brooks, Eames Demetrios, Alissa Walker, Shannon Ebner, Frances Anderton"
          },
          "005" : {
            "text" : "Follow the conversation | #SPAN16 @GoogleDesign"
          }
        },
        "title" : "LA: Livestream 002 - Break 1"
      },
      "LA_livestream_003" : {
        "order" : 3,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "duration" : 300000,
            "layout" : "smalltext",
            "shapeChangeInterval" : 60000,
            "text" : "SPAN LA will be | back @ 1:30p PDT"
          }
        },
        "title" : "LA: Livestream 003 - Lunch PiP"
      },
      "LA_livestream_004" : {
        "order" : 4,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "We’ll be right back"
          },
          "002" : {
            "text" : "Coming up:| Peter Shire, Lauren Goode, Jess Brown, Dennis Hwang"
          },
          "003" : {
            "text" : "Plus!| Casey Reas, |Dmitri Siegel, |Hrishikesh Hirway"
          },
          "004" : {
            "text" : "Follow the conversation | #SPAN16 @GoogleDesign"
          },
          "005" : {
            "text" : "Have you seen our |guide to SPAN LA? g.co/design/guide-|span-la"
          }
        },
        "title" : "LA: Livestream 004 - Lunch Wrap Up"
      },
      "LA_livestream_005" : {
        "order" : 5,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Take five ┐(￣•￣)┌ "
          },
          "002" : {
            "text" : "Have you seen our| guide to SPAN LA? g.co/design/guide-|span-la"
          },
          "003" : {
            "text" : "After the break:| Lauren Mackler, April Greiman, Matthew Sullivan, Guvenc Ozel, Anne Burdick"
          },
          "004" : {
            "text" : "We’ll be right back"
          },
          "005" : {
            "text" : "Follow the conversation | #SPAN16 @GoogleDesign"
          },
          "006" : {
            "text" : "Later today:|BJ Novak, Jessie Kawata, Geoff McFetridge, and more"
          }
        },
        "title" : "LA: Livestream 005 - Break 2"
      },
      "LA_livestream_006" : {
        "order" : 6,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Take ten. Or hang ten."
          },
          "002" : {
            "text" : "We’ll be right back"
          },
          "003" : {
            "text" : "Meet our speakers | g.co/design/guide-|span-la"
          },
          "004" : {
            "text" : "Follow the conversation | #SPAN16 @GoogleDesign"
          },
          "005" : {
            "text" : "Whistle while you wait"
          },
          "006" : {
            "text" : "After the break:| BJ Novak, Dave Addey, Jessie Kawata, Geoff McFetridge, Ash Thorp, Rachel Been"
          },
          "007" : {
            "text" : "Plus!| Typeset in the Future, NASA JPL, Champion Studio, ALT Creative"
          },
          "008" : {
            "text" : "design.google.com"
          }
        },
        "title" : "LA: Livestream 006 - Break 3"
      },
      "LA_livestream_007" : {
        "order" : 7,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "And...scene! ヽ(・∀・)ﾉ"
          },
          "002" : {
            "text" : "Thanks for watching! "
          },
          "003" : {
            "text" : "What did you think? Let us know @GoogleDesign"
          },
          "004" : {
            "text" : "Please fill out a short survey __〆(￣◡￣ )"
          },
          "006" : {
            "text" : "Bye! ＼(＾∀＾)メ(＾∀＾)ノ"
          }
        },
        "title" : "LA: Livestream 007 - End"
      },
      "LA_space_001" : {
        "newGroup" : true,
        "order" : 11,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Welcome to SPAN LA"
          },
          "002" : {
            "text" : "Coffee, Tea, Espresso  | (*^◇^)_旦 "
          },
          "003" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "004" : {
            "text" : "Good morning, LA!"
          },
          "005" : {
            "text" : "Have you seen today’s lineup? We’re stoked."
          },
          "006" : {
            "text" : "We’ll kick things off |@ 11:00a in the plenary"
          },
          "007" : {
            "text" : "Coffee, Tea, Espresso  | (*^◇^)_旦 "
          },
          "008" : {
            "text" : "Iced Lattes | 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "009" : {
            "text" : "Welcome to SPAN LA"
          },
          "010" : {
            "text" : "Get to know today’s speakers: g.co/design/guide-|span-la"
          },
          "011" : {
            "text" : "Coming up:| Barbara Bestor, Levi Brooks, Eames Demetrios "
          },
          "012" : {
            "text" : "Plus!| Alissa Walker, Shannon Ebner, Frances Anderton"
          },
          "013" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "014" : {
            "text" : "We <3 DTLA"
          },
          "015" : {
            "text" : "Later today: |Peter Shire, Hrishikesh Hirway, BJ Novak, Jessie Kawata, and more"
          },
          "016" : {
            "text" : "Get to know today’s speakers: g.co/design/guide-|span-la"
          },
          "017" : {
            "text" : "Visit our #SPAN16 shops: Arcana, Vitsoe, Folder Studio"
          }
        },
        "title" : "LA: Space 001 - Morning Arrival"
      },
      "LA_space_002" : {
        "order" : 12,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: |Designing By Hand |and Eye",
            "scheduleWhereWhen" : "South Room 11:35a",
            "scheduleWho" : "Jim Tolpin and George Walker"
          },
          "002" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: |Designing Type",
            "scheduleWhereWhen" : "North Room 11:35a",
            "scheduleWho" : "Jeremy Mickel"
          },
          "003" : {
            "layout" : "schedule",
            "scheduleText" : "Talks",
            "scheduleWhereWhen" : "Plenary 11:35a",
            "scheduleWho" : "Levi Brooks, Eames Demetrios, |Alissa Walker, Shannon Ebner, |Frances Anderton"
          }
        },
        "title" : "LA: Space 002 - Transition"
      },
      "LA_space_003" : {
        "order" : 13,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Lunch"
          },
          "002" : {
            "text" : "Have you seen our guide to SPAN LA? g.co/design/guide-|span-la"
          },
          "003" : {
            "text" : "West Coast? East Coast? Best Coast? Discuss."
          },
          "004" : {
            "layout" : "schedule",
            "scheduleText" : "Talk",
            "scheduleWhereWhen" : "Plenary 1:30p",
            "scheduleWho" : "Peter Shire"
          },
          "005" : {
            "text" : "Veg? Vegan? |Gluten-free? |We’ve got you covered."
          },
          "006" : {
            "text" : "Tri-Tip with Balsamic Roasted Cippolini Onions, Grilled Wild Salmon with Coriander Rub (oh my)"
          },
          "007" : {
            "text" : "Cumin Roasted Cauliflower with Pomegranate and Mint"
          },
          "008" : {
            "text" : "Green and Yellow Wax Beans with Radish and Parsley Dijon"
          },
          "009" : {
            "text" : "Little Gem and Fig with Goat Cheese and Sherry Vinaigrette"
          },
          "010" : {
            "text" : "Pumpkin Cheesecake"
          },
          "011" : {
            "layout" : "schedule",
            "scheduleText" : "Panel",
            "scheduleWhereWhen" : "Plenary 1:55p",
            "scheduleWho" : "Jess Brown, Dennis Hwang, and Lauren Goode"
          },
          "012" : {
            "layout" : "schedule",
            "scheduleText" : "Talks",
            "scheduleWhereWhen" : "Plenary 2:35p",
            "scheduleWho" : "Casey Reas, Dmitri Siegel,| Hrishikesh Hirway"
          },
          "013" : {
            "text" : "Q: What’s on the roof?"
          },
          "014" : {
            "text" : "A: Killer views"
          },
          "015" : {
            "layout" : "schedule",
            "scheduleText" : "Talks",
            "scheduleWhereWhen" : "Plenary 3:50p",
            "scheduleWho" : "Lauren Mackler, April Greiman, Matthew Sullivan, Guvenc Ozel,| Anne Burdick"
          },
          "016" : {
            "text" : "Visit our #SPAN16 shops: Arcana, Vitsoe, Folder Studio"
          },
          "017" : {
            "text" : "We <3 DTLA"
          },
          "018" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "019" : {
            "text" : "Have you seen our guide to SPAN LA? g.co/design/guide-|span-la"
          },
          "020" : {
            "text" : "Want to learn more about Material Design?"
          },
          "021" : {
            "layout" : "schedule",
            "scheduleText" : "Material Design Reviews",
            "scheduleWhereWhen" : "North Room 1:30 - 5:00p"
          },
          "023" : {
            "text" : "Learn more |@ Material.io"
          },
          "024" : {
            "layout" : "schedule",
            "scheduleText" : "Demos",
            "scheduleWhereWhen" : "North Room 1:30 - 5:00p",
            "scheduleWho" : "Gallery, Stage, Remixer"
          }
        },
        "title" : "LA: Space 003 - Lunch"
      },
      "LA_space_004" : {
        "order" : 14,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Let’s take five"
          },
          "002" : {
            "text" : "Coffee!!!"
          },
          "003" : {
            "text" : "Housemade Granola Bars, Mini Cookies"
          },
          "004" : {
            "text" : "Tea + Biscuits"
          },
          "005" : {
            "text" : "Coming up:|Design Writing Workshop, and talks |in the plenary"
          },
          "006" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "007" : {
            "text" : "Good afternoon, LA!"
          },
          "008" : {
            "text" : "Up Next"
          },
          "009" : {
            "layout" : "schedule",
            "scheduleText" : "Talks",
            "scheduleWhereWhen" : "Plenary 3:50p",
            "scheduleWho" : "Lauren Mackler, April Greiman, Matthew Sullivan, Guvenc Ozel, |Anne Burdick"
          },
          "010" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: |Design Writing",
            "scheduleWhereWhen" : "South Room 3:50p",
            "scheduleWho" : "Amber Bravo, Bryn Smith, |and Alissa Walker"
          },
          "011" : {
            "text" : "Visit our #SPAN16 shops: Arcana, Vitsoe, Folder Studio"
          }
        },
        "title" : "LA: Space 004 - Break 1"
      },
      "LA_space_005" : {
        "order" : 15,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Want to learn more about Material Design?"
          },
          "002" : {
            "text" : "Stop by the North Room|1:30 - 5:00p"
          },
          "003" : {
            "text" : "Material is the metaphor"
          },
          "004" : {
            "text" : "Bold, graphic, intentional"
          },
          "005" : {
            "text" : "Motion provides meaning"
          },
          "006" : {
            "layout" : "schedule",
            "scheduleText" : "Material Design Reviews",
            "scheduleWhereWhen" : "North Room 1:30 - 5:00p"
          },
          "008" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "009" : {
            "text" : "Go shopping in the #SPAN16 marketplace"
          },
          "010" : {
            "text" : "Get to know today’s speakers: g.co/design/guide-|span-la"
          },
          "011" : {
            "text" : "#MaterialDesign"
          },
          "012" : {
            "text" : "Learn more @ Material.io"
          },
          "013" : {
            "text" : "Stop by the North Room for Gallery, Stage, and Remixer demos"
          },
          "014" : {
            "layout" : "schedule",
            "scheduleText" : "Shops",
            "scheduleWhereWhen" : "All day @ Marketplace",
            "scheduleWho" : "Arcana, Vitsoe, Folder Studio"
          },
          "015" : {
            "layout" : "schedule",
            "scheduleText" : "Demos",
            "scheduleWhereWhen" : "North Room 1:30 - 5:00p",
            "scheduleWho" : "Gallery, Stage, Remixer"
          }
        },
        "title" : "LA: Space 005 - Generic Afternoon"
      },
      "LA_space_006" : {
        "order" : 16,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "Take ten. Or hang ten. We’ll be right back."
          },
          "002" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "003" : {
            "text" : "Have you seen our guide to SPAN LA? g.co/design/guide-|span-la"
          },
          "004" : {
            "text" : "Coming up:| Typeset in the Future, NASA JPL, Champion Studio, ALT Creative"
          },
          "005" : {
            "text" : "West Coast? East Coast? Best Coast? Discuss."
          },
          "006" : {
            "text" : "It’s beer o’clock. |Grab a cold one."
          },
          "007" : {
            "text" : "Ellie’s Brown Ale, Golden Road Hefeweizen, Nooner Pilsner, |Stone IPA"
          },
          "008" : {
            "text" : "It’s also wine time |(in a 375 mL can)."
          },
          "009" : {
            "text" : "Underwood Pinot Noir | Tasting notes: cherries, raspberries, chocolate"
          },
          "010" : {
            "text" : "Underwood Pinot Gris | Tasting notes: peach, grapefruit, pear"
          },
          "011" : {
            "text" : "Housemade Chips & Guac"
          },
          "012" : {
            "layout" : "schedule",
            "scheduleText" : "Talk",
            "scheduleWhereWhen" : "Plenary 5:20p",
            "scheduleWho" : "BJ Novak in conversation |with Frances Anderton"
          },
          "013" : {
            "text" : "Q: What’s on the roof?"
          },
          "014" : {
            "text" : "A: Killer views"
          },
          "015" : {
            "layout" : "schedule",
            "scheduleText" : "Panel",
            "scheduleWhereWhen" : "Plenary 5:40p",
            "scheduleWho" : "Dave Addey, Jessie Kawata, |Geoff McFetridge, Ash Thorp, |and Rachel Been"
          },
          "016" : {
            "text" : "Visit our #SPAN16 shops: Arcana, Vitsoe, Folder Studio"
          }
        },
        "title" : "LA: Space 006 - Break 2"
      },
      "LA_space_007" : {
        "order" : 17,
        "paletteGroup" : "la",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_LA.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "That’s a wrap! |ヽ(・∀・)ﾉ"
          },
          "002" : {
            "text" : "What did you think?"
          },
          "003" : {
            "text" : "Fave speaker? |Fave workshop?"
          },
          "004" : {
            "text" : "Please fill out a |short survey: g.co/design/span-|la-survey"
          },
          "005" : {
            "text" : "Party time! | (●＾□＾●)_且⊹且_(*̑ᴗ ̑*)"
          },
          "006" : {
            "text" : "Survey = Swag"
          },
          "007" : {
            "text" : "How was the day? |Help us make SPAN17 even better."
          },
          "008" : {
            "text" : "After Party |@ The Springs | with Hrishikesh Hirway of Song Exploder"
          },
          "009" : {
            "text" : "♪♪♪ ヽ(ˇ∀ˇ )ゞ"
          },
          "010" : {
            "text" : "Follow the conversation #SPAN16 @GoogleDesign"
          },
          "011" : {
            "text" : "Thank you, LA"
          },
          "012" : {
            "text" : "Don’t forget to pick up your tote..."
          },
          "013" : {
            "text" : "...after you fill out a survey (￢‿￢ )"
          },
          "014" : {
            "text" : "g.co/design/span-|la-survey"
          },
          "015" : {
            "text" : "California, knows how to party ♪♪♪"
          },
          "016" : {
            "text" : "Join us @ The Springs for drinks and more"
          },
          "017" : {
            "text" : "Shout out to our speakers. Thank you!"
          },
          "019" : {
            "text" : "design.google.com"
          },
          "020" : {
            "text" : "Let me riiiiiide. Sprinter vans will take you to The Springs."
          },
          "021" : {
            "text" : "Los Angeles, |we’re yours..."
          }
        },
        "title" : "LA: Space 007 - End"
      },
      "TYO_livestream_001" : {
        "hideInMenu" : true,
        "newGroup" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "おはようございます"
          },
          "002" : {
            "text" : "Good morning"
          },
          "003" : {
            "text" : "SPAN: 東京より生中継 |10月6日 11:00 - 18:00"
          },
          "004" : {
            "text" : "SPAN: Live from Tokyo |October 6 |11:00a - 6:00p JST"
          },
          "005" : {
            "text" : "@googledevjp #SPAN16 |をフォローしてください"
          },
          "006" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "007" : {
            "text" : "ライブストリームは |11:00 より開始します"
          },
          "008" : {
            "text" : "Livestream starts at 11:00a JST"
          },
          "009" : {
            "text" : "スピーカーのご紹介"
          },
          "010" : {
            "text" : "Get to know our speakers"
          },
          "011" : {
            "text" : "g.co/design/guide-span-tokyo"
          },
          "012" : {
            "text" : "ライブストリーム |は間も無く始まります"
          },
          "013" : {
            "text" : "Stay tuned: livestream will begin shortly"
          },
          "014" : {
            "text" : "@GoogleDesign"
          }
        },
        "title" : "TYO: Livestream 001 - Preshow"
      },
      "TYO_livestream_002" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "ただいま休憩中です"
          },
          "002" : {
            "text" : "We’re taking a |short break"
          },
          "003" : {
            "text" : "#SPAN16 コンテンツも|是非ご覧ください"
          },
          "004" : {
            "text" : "In the meantime, have you checked out our #SPAN16 guide?"
          },
          "005" : {
            "text" : "g.co/design/guide-span-tokyo"
          },
          "006" : {
            "text" : "次は: Eiko Nagase, Atsunobu Katagiri, Toru Kase, James Riney"
          },
          "007" : {
            "text" : "次は: Ryoichi Tsunekawa, Bin Sugawara, Sato Shintaro, Motohiro Inaba"
          },
          "008" : {
            "text" : "Up next: Eiko Nagase, Atsunobu Katagiri, Toru Kase, James Riney"
          },
          "009" : {
            "text" : "Up next: Ryoichi Tsunekawa, Bin Sugawara, Sato Shintaro, Motohiro Inaba"
          },
          "010" : {
            "text" : "デザインとテクノロジーの対話"
          },
          "011" : {
            "text" : "Conversations about design and technology"
          },
          "012" : {
            "text" : "@googledevjp #SPAN16 |をフォローしてください"
          },
          "013" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "014" : {
            "text" : "間もなく再開します"
          },
          "015" : {
            "text" : "SPAN will be right back"
          }
        },
        "title" : "TYO: Livestream 002 - Break"
      },
      "TYO_livestream_003" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "003" : {
            "duration" : 300000,
            "layout" : "smalltext",
            "shapeChangeInterval" : 60000,
            "text" : "SPAN 東京|は13時10分より|再開します ||SPAN Tokyo will |be back @ 13:10 JST"
          }
        },
        "title" : "TYO: Livestream 003 - Lunch PiP"
      },
      "TYO_livestream_004" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "次は: | Kotaro Watanabe, |マテリアル デザイン パネル ディスカッション"
          },
          "002" : {
            "text" : "Up Next: | Kotaro Watanabe, |Material Design Panel"
          },
          "003" : {
            "text" : "@googledevjp #SPAN16 |をフォローしてください"
          },
          "004" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "005" : {
            "text" : "@GoogleDesign"
          }
        },
        "title" : "TYO: Livestream 004 - Lunch Wrap Up"
      },
      "TYO_livestream_005" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "ただいま休憩中です"
          },
          "002" : {
            "text" : "We’re taking a short break"
          },
          "003" : {
            "text" : "#SPAN 16 コンテンツも是非ご覧ください"
          },
          "004" : {
            "text" : "In the meantime | Have you checked out our #SPAN16 guide?"
          },
          "005" : {
            "text" : "g.co/design/guide-span-tokyo"
          },
          "006" : {
            "text" : "次は: Mike Tyka, Naohisa Inoue, Keiichi Tanaami"
          },
          "007" : {
            "text" : "Coming Up Next: Mike Tyka, Naohisa Inoue, Keiichi Tanaami"
          },
          "009" : {
            "text" : "BRB!"
          },
          "010" : {
            "text" : "デザインとテクノロジーの対話"
          },
          "011" : {
            "text" : "Conversations about design and technology"
          },
          "012" : {
            "text" : "@googledevjp #SPAN16 |をフォローしてください"
          },
          "013" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "014" : {
            "text" : "@GoogleDesign"
          }
        },
        "title" : "TYO: Livestream 005 - Break 2"
      },
      "TYO_livestream_006" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "001" : {
            "layout" : "smalltext",
            "text" : " SPAN ライブストリームは間もなく再開します"
          },
          "002" : {
            "layout" : "smalltext",
            "text" : "SPAN livestream will resume momentarily"
          },
          "003" : {
            "layout" : "smalltext",
            "text" : "デザインとテクノロジーの対話"
          },
          "004" : {
            "layout" : "smalltext",
            "text" : "Conversations about design and technology"
          },
          "005" : {
            "layout" : "smalltext",
            "text" : "スピーカーのご紹介 | g.co/design/guide-span-tokyo"
          },
          "006" : {
            "layout" : "smalltext",
            "text" : "Get to know our speakers | g.co/design/guide-span-tokyo"
          }
        },
        "title" : "TYO: Livestream 006 - Break 3 PiP"
      },
      "TYO_livestream_007" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "次は:  Lucas Badtke-Berkow, Joanna Kawecki, Kiyonori Muroga, によるパブリケーションデザイン パネル ディスカッション"
          },
          "002" : {
            "text" : "Up Next: Publication Design Panel with Lucas Badtke-Berkow, Joanna Kawecki, Kiyonori Muroga"
          },
          "003" : {
            "text" : "@googledevjp #SPAN16 |をフォローしてください"
          },
          "004" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "005" : {
            "text" : "@GoogleDesign"
          }
        },
        "title" : "TYO: Livestream 007 - Break 3 Ending"
      },
      "TYO_livestream_008" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "ただいま休憩中です"
          },
          "002" : {
            "text" : "We’re taking a short coffee break"
          },
          "003" : {
            "text" : "スピーカーのご紹介"
          },
          "004" : {
            "text" : "Get to know our speakers"
          },
          "005" : {
            "text" : "g.co/design/guide-span-tokyo"
          },
          "006" : {
            "text" : "次は: Masamichi Udagawa, Deyan Sudjic"
          },
          "007" : {
            "text" : "Coming Up: Masamichi Udagawa, Deyan Sudjic"
          },
          "008" : {
            "text" : "デザインとテクノロジーの対話"
          },
          "009" : {
            "text" : "Conversations about design and technology"
          },
          "010" : {
            "text" : "@googledevjp #SPAN16 |をフォローしてください"
          },
          "011" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "012" : {
            "text" : "@GoogleDesign"
          },
          "013" : {
            "text" : "design.google.com"
          }
        },
        "title" : "TYO: Livestream 008 - Break 4"
      },
      "TYO_livestream_009" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "ご覧頂きありがとうございました"
          },
          "002" : {
            "text" : "Thanks for watching"
          },
          "003" : {
            "text" : "いかがでしたか？"
          },
          "004" : {
            "text" : "What did you think?"
          },
          "005" : {
            "text" : "是非みなさんの率直な意見を聞きたいと思っています"
          },
          "006" : {
            "text" : "We want to know. Really."
          },
          "007" : {
            "text" : "こちらのアンケートへのご|協力をお願いします | g.co/design/span-tokyo-livestream-survey"
          },
          "008" : {
            "text" : "Please fill out a survey | g.co/design/span-tokyo-livestream-survey"
          },
          "009" : {
            "text" : "ご協力...お願いできますね？| g.co/design/span-tokyo-livestream-survey"
          },
          "010" : {
            "text" : "Pretty please? | g.co/design/span-tokyo-livestream-survey"
          },
          "011" : {
            "text" : "ありがとうございました！"
          },
          "012" : {
            "text" : "Arigatou Gozaimasu"
          },
          "013" : {
            "text" : "SPAN 東京は終わってしまいましたが、SPAN LA のライブラストリームは、10月27日に行います"
          },
          "014" : {
            "text" : "Sad SPAN Tokyo is over? Watch SPAN LA live on 10/27"
          },
          "015" : {
            "text" : "g.co/design/span-la-livestream"
          },
          "016" : {
            "text" : "@googledevjp #SPAN16|をフォローしてください"
          },
          "017" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "018" : {
            "text" : "@GoogleDesign |design.google.com"
          },
          "019" : {
            "text" : "10月27日にSPAN LAを開催します"
          },
          "020" : {
            "text" : "Tune in for SPAN LA | October 27"
          },
          "021" : {
            "text" : "ご覧頂きありがとうございました"
          },
          "022" : {
            "text" : "Thanks for watching"
          },
          "023" : {
            "text" : "[heart emoji]"
          },
          "024" : {
            "text" : "こちらのアンケートへのご協力をお願いします| g.co/design/span-tokyo-livestream-survey"
          },
          "025" : {
            "text" : "Please fill out a survey | g.co/design/span-tokyo-livestream-survey"
          },
          "026" : {
            "text" : "#SPAN16"
          }
        },
        "title" : "TYO: Livestream 009 - End"
      },
      "TYO_space_001" : {
        "hideInMenu" : true,
        "newGroup" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "おはようございます"
          },
          "002" : {
            "text" : "Good morning"
          },
          "003" : {
            "text" : "SPAN 東京へようこそ"
          },
          "004" : {
            "text" : "Welcome to SPAN Tokyo"
          },
          "005" : {
            "text" : "#SPAN16 @googledevjp| をフォローしてください"
          },
          "006" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "007" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-ASTRID_KLEIN.png",
            "speakerName" : "Astrid Klein",
            "speakerSocial" : "@PechaKucha",
            "speakerTitle" : "共同創設者, Klein Dytham Architecture"
          },
          "008" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-ASTRID_KLEIN.png",
            "speakerName" : "Astrid Klein",
            "speakerSocial" : "@PechaKucha",
            "speakerTitle" : "Co-Founder, Klein Dytham Architecture"
          },
          "009" : {
            "text" : "東雲 東京"
          },
          "010" : {
            "text" : "Shinonome, Tokyo"
          },
          "011" : {
            "text" : "コーヒー |(*^◇^)_旦"
          },
          "012" : {
            "text" : "Coffee |旦_(^◇^*)"
          },
          "013" : {
            "text" : "お茶"
          },
          "014" : {
            "text" : "Tea"
          },
          "015" : {
            "text" : "シナモンシュガー・ドーナツ"
          },
          "016" : {
            "text" : "Doughnuts"
          },
          "017" : {
            "text" : "オレンジジュース"
          },
          "018" : {
            "text" : "Orange Juice"
          },
          "019" : {
            "text" : "ベリー＆カスタードのデニッシュパン"
          },
          "020" : {
            "text" : "Berry and Custard |Cream Danish"
          },
          "021" : {
            "text" : "あんぱん 桜/うぐいす/栗"
          },
          "022" : {
            "text" : "Anpan"
          },
          "023" : {
            "text" : "アイス・ラテ | 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "024" : {
            "text" : "Iced Latte | 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "025" : {
            "text" : "スピーカーのご紹介: | g.co/design/guide-span-tokyo"
          },
          "026" : {
            "text" : "Get to know today’s speakers: | g.co/design/guide-span-tokyo"
          },
          "027" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MARK_DYTHAM.png",
            "speakerName" : "Mark Dytham",
            "speakerSocial" : "@markdytham",
            "speakerTitle" : "共同創設者, Klein Dytham Architecture"
          },
          "028" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MARK_DYTHAM.png",
            "speakerName" : "Mark Dytham",
            "speakerSocial" : "@markdytham",
            "speakerTitle" : "Co-Founder, Klein Dytham Architecture"
          },
          "029" : {
            "text" : "#SPAN16 @GoogleDesign"
          },
          "030" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MARIYA_SUZUKI.png",
            "speakerName" : "Mariya Suzuki",
            "speakerSocial" : "@mariyasuzuki",
            "speakerTitle" : "イラストレーター"
          },
          "031" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MARIYA_SUZUKI.png",
            "speakerName" : "Mariya Suzuki",
            "speakerSocial" : "@mariyasuzuki",
            "speakerTitle" : "Illustrator"
          },
          "032" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-RYOSUKE_COHEN.png",
            "speakerName" : "Ryosuke Cohen",
            "speakerTitle" : "アーティスト"
          },
          "033" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-RYOSUKE_COHEN.png",
            "speakerName" : "Ryosuke Cohen",
            "speakerTitle" : "Artist"
          }
        },
        "title" : "TYO: Space 001 - Morning Arrival"
      },
      "TYO_space_002" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "次は | Up Next"
          },
          "002" : {
            "layout" : "schedule",
            "scheduleText" : "ワークショップ: | メールアート",
            "scheduleWhereWhen" : "東会議室 @11:25",
            "scheduleWho" : "幸円良介"
          },
          "003" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: The Art of Correspondence",
            "scheduleWhereWhen" : "East Room @11:25",
            "scheduleWho" : "Ryosuke Cohen"
          },
          "004" : {
            "layout" : "schedule",
            "scheduleText" : "ワークショップ: | ポップアップ似顔絵",
            "scheduleWhereWhen" : "西会議室 @11:25",
            "scheduleWho" : "Mariya Suzuki"
          },
          "005" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: |Pop-Up Portraiture",
            "scheduleWhereWhen" : "West Room @11:25",
            "scheduleWho" : "Mariya Suzuki"
          },
          "006" : {
            "text" : "PechaKucha プレナリースペース"
          },
          "007" : {
            "text" : "PechaKucha in the Plenary"
          },
          "008" : {
            "text" : "コーヒーで一服 | (*^◇^)_旦 "
          },
          "009" : {
            "text" : "Grab a coffee | (*^◇^)_旦 "
          },
          "010" : {
            "text" : "マテリアルデザインのガイドラインについて興味はありますか? material.google.com/jp"
          },
          "011" : {
            "text" : "Curious about Material Design? material.google.com/jp"
          },
          "012" : {
            "text" : "お茶| 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "013" : {
            "text" : "Tea | 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "014" : {
            "text" : "#SPAN16 @googledevjp |をフォローしてください"
          },
          "015" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          }
        },
        "title" : "TYO: Space 002 - Move to Breakout"
      },
      "TYO_space_003" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "ランチ | ( ˘▽˘)っ♨"
          },
          "002" : {
            "text" : "Lunch | (ˆ ڡ ˆ)"
          },
          "003" : {
            "text" : "お魚、お肉、お野菜？|全て揃ってます."
          },
          "004" : {
            "text" : "Fish? Meat? Veg? We’ve got you covered."
          },
          "005" : {
            "text" : "オリエンタルエピスのバベットステーキ"
          },
          "006" : {
            "text" : "Flank Steak"
          },
          "007" : {
            "text" : "大山鶏の塩焼き 柚子胡椒風味"
          },
          "008" : {
            "text" : "Yuzu Kosho Grilled Daisen Chicken"
          },
          "009" : {
            "text" : "鰤と里芋の照焼き"
          },
          "010" : {
            "text" : "Yellowtail with Eddoe"
          },
          "011" : {
            "text" : "カジキマグロとトマトの煮込み"
          },
          "012" : {
            "text" : "Swordfish and Tomato Stew"
          },
          "013" : {
            "text" : "キャロットラペとビーツのマリネ "
          },
          "014" : {
            "text" : "Marinated Beet and Carrot Salad"
          },
          "015" : {
            "text" : "舞茸オムレツ"
          },
          "016" : {
            "text" : "Maitake Mushroom Omelette"
          },
          "017" : {
            "text" : "ベイクドポテトサラダ "
          },
          "018" : {
            "text" : "Baked Potato Salad"
          },
          "019" : {
            "text" : "ファラフェル "
          },
          "020" : {
            "text" : "Falafel"
          },
          "021" : {
            "text" : "季節野菜とビーンズのラタトゥイ "
          },
          "022" : {
            "text" : "Ratatouille"
          },
          "023" : {
            "text" : "マッシュルームのグリル "
          },
          "024" : {
            "text" : "Grilled Mushroom"
          },
          "025" : {
            "text" : "豆腐とおからのハンバーグ  "
          },
          "026" : {
            "text" : "Tofu and Bean Curd Fritter"
          },
          "027" : {
            "text" : "こんにちは"
          },
          "028" : {
            "text" : "Good Afternoon"
          },
          "029" : {
            "text" : "#SPAN16 @googledevjp |をフォローしてください"
          },
          "030" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "031" : {
            "text" : "右隣にいる人に挨拶をしてみましょう"
          },
          "032" : {
            "text" : "Say hello to the person on your right"
          },
          "033" : {
            "text" : "東雲 東京"
          },
          "034" : {
            "text" : "Shinonome, Tokyo"
          },
          "035" : {
            "text" : "@GoogleDesign"
          },
          "036" : {
            "text" : "次は: Kotaro Watanabe、マテリアル デザイン パネル"
          },
          "037" : {
            "text" : "Coming Up: Kotaro Watanabe, Material Design Panel"
          },
          "038" : {
            "text" : "デザインとテクノロジーの対話 "
          },
          "039" : {
            "text" : "Conversations about design and technology"
          },
          "040" : {
            "text" : "スピーカーのご紹介 | g.co/design/guide-span-tokyo"
          },
          "041" : {
            "text" : "Get to know today’s speakers: | g.co/design/guide-span-tokyo"
          },
          "042" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-KOTARO_WATANABE.png",
            "speakerName" : "Kotaro Watanabe",
            "speakerSocial" : "@waternavy",
            "speakerTitle" : "ディレクター、コンテクストデザイナー"
          },
          "043" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-KOTARO_WATANABE.png",
            "speakerName" : "Kotaro Watanabe",
            "speakerSocial" : "@waternavy",
            "speakerTitle" : "Director, Context Designer| Takram"
          },
          "044" : {
            "layout" : "schedule",
            "scheduleText" : "ワークショップ: | ものづくりデザイン",
            "scheduleWhereWhen" : "東会議室 @14:20",
            "scheduleWho" : "Akiko Moriguchi, Kotaro Iwaoka"
          },
          "045" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: | Fabrication Design",
            "scheduleWhereWhen" : "East Room @14:20",
            "scheduleWho" : "Akiko Moriguchi, Kotaro Iwaoka"
          },
          "048" : {
            "layout" : "schedule",
            "scheduleText" : "ワークショップ: | ゲームデザイン",
            "scheduleWhereWhen" : "西会議室 @14:20",
            "scheduleWho" : "Masahiro Kakinokihara"
          },
          "049" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: | Game Design",
            "scheduleWhereWhen" : "West Room @14:20",
            "scheduleWho" : "Masahiro Kakinokihara"
          },
          "050" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MASAHIRO_KAKINOHARA.png",
            "speakerName" : "Masahiro Kakinokihara",
            "speakerSocial" : "@masahirokakinokihara",
            "speakerTitle" : "アートディレクター 10inc."
          },
          "051" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MASAHIRO_KAKINOHARA.png",
            "speakerName" : "Masahiro Kakinokihara",
            "speakerSocial" : "@masahirokakinokihara",
            "speakerTitle" : "Art Director 10inc. "
          },
          "052" : {
            "text" : "ショッピング タイム!"
          },
          "053" : {
            "text" : "Go shopping!"
          },
          "055" : {
            "text" : "#SPAN16 Shops: | Claska, Utrecht"
          },
          "056" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MIKE_TYKA.png",
            "speakerName" : "Mike Tyka",
            "speakerSocial" : "@mtyka",
            "speakerTitle" : "エンジニア, Google"
          },
          "057" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MIKE_TYKA.png",
            "speakerName" : "Mike Tyka",
            "speakerSocial" : "@mtyka",
            "speakerTitle" : "Engineer, Google"
          },
          "058" : {
            "text" : "知らない人と話してみましょう"
          },
          "059" : {
            "text" : "Introduce yourself to someone new"
          },
          "060" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-NAOHISA_INOUE.png",
            "speakerName" : "Naohisa Inoue",
            "speakerSocial" : "@iblard_inoue",
            "speakerTitle" : "アーティスト"
          },
          "061" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-NAOHISA_INOUE.png",
            "speakerName" : "Naohisa Inoue",
            "speakerSocial" : "@iblard_inoue",
            "speakerTitle" : "Artist"
          },
          "062" : {
            "text" : "design.google.com"
          },
          "063" : {
            "text" : "マテリアル デザイン Q＆Aは 15:40 から始まります"
          },
          "064" : {
            "text" : "Material Design Reviews start at 15:40"
          },
          "065" : {
            "text" : "マテリアルデザインのガイドラインについてもっと知りたい場合は? material.google.com/jp"
          },
          "066" : {
            "text" : "Curious about Material Design? material.google.com/jp"
          },
          "067" : {
            "layout" : "schedule",
            "scheduleText" : "マテリアル デザイン Q＆A",
            "scheduleWhereWhen" : "西会議室 15:40 - 17:45",
            "scheduleWho" : "是非お立ち寄りください！"
          },
          "068" : {
            "layout" : "schedule",
            "scheduleText" : "Material Design reviews",
            "scheduleWhereWhen" : "West Room 15:40 - 17:45 ",
            "scheduleWho" : "Please stop by!"
          },
          "069" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-KEIICHI_TANAAMI.png",
            "speakerName" : "Keiichi Tanaami",
            "speakerSocial" : "",
            "speakerTitle" : "アーティスト"
          },
          "070" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-KEIICHI_TANAAMI.png",
            "speakerName" : "Keiichi Tanaami",
            "speakerSocial" : "",
            "speakerTitle" : "Artist"
          },
          "071" : {
            "text" : "#SPAN16 @googledevjp |をフォローしてください"
          },
          "072" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          }
        },
        "title" : "TYO: Space 003 - Lunch"
      },
      "TYO_space_004" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "こんにちは"
          },
          "002" : {
            "text" : "Konnichiwa"
          },
          "003" : {
            "text" : "マテリアルデザインのガイドラインについてもっと知りたい場合は material.google.com/jp"
          },
          "004" : {
            "text" : "Curious about Material Design? material.google.com/jp"
          },
          "005" : {
            "text" : "design.google.com"
          },
          "006" : {
            "layout" : "schedule",
            "scheduleText" : "マテリアル デザイン",
            "scheduleWhereWhen" : "West Room 15:40 - 17:45",
            "scheduleWho" : "Please stop by!"
          },
          "007" : {
            "layout" : "schedule",
            "scheduleText" : "Material Design Reviews",
            "scheduleWhereWhen" : "West Room 15:40 - 17:45",
            "scheduleWho" : "Please stop by!"
          },
          "008" : {
            "text" : "スピーカーのご紹介| g.co/design/guide-span-tokyo"
          },
          "009" : {
            "text" : "Get to know today’s speakers | g.co/design/guide-span-tokyo"
          },
          "010" : {
            "text" : "ショッピング タイム!"
          },
          "011" : {
            "text" : "Go shopping!"
          },
          "012" : {
            "text" : "#SPAN16 ショップ: | Claska, Utrecht"
          },
          "013" : {
            "text" : "#SPAN16 Shops: | Claska, Utrecht"
          },
          "014" : {
            "text" : "インターネットサーフィン"
          },
          "015" : {
            "text" : "Surf the Internet"
          },
          "016" : {
            "text" : "#SPAN16 @googledevjp |をフォローしてください"
          },
          "017" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          }
        },
        "title" : "TYO: Space 004 - Generic Afternoon"
      },
      "TYO_space_005" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "次は | Up Next"
          },
          "002" : {
            "layout" : "schedule",
            "scheduleText" : "ワークショップ: | ものづくりデザイン",
            "scheduleWhereWhen" : "東会議室 @14:20",
            "scheduleWho" : "森口明子, Kotaro Iwaoka"
          },
          "003" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: | Fabrication Design",
            "scheduleWhereWhen" : "East Room @14:20",
            "scheduleWho" : "Akiko Moriguchi, Kotaro Iwaoka"
          },
          "004" : {
            "layout" : "schedule",
            "scheduleText" : "ワークショップ: | ゲームデザイン",
            "scheduleWhereWhen" : "西会議室 @14:20",
            "scheduleWho" : "柿木原政広"
          },
          "005" : {
            "layout" : "schedule",
            "scheduleText" : "Workshop: | Game Design",
            "scheduleWhereWhen" : "West Room @14:20",
            "scheduleWho" : "Masahiro Kakinokihara"
          },
          "006" : {
            "text" : "#SPAN16 |@GoogleDesign"
          },
          "008" : {
            "text" : "プレナリースペースでのトーク: Mike Tyka, Naohisa Inoue, Keiichi Tanaami"
          },
          "009" : {
            "text" : "Talks in the Plenary: Mike Tyka, Naohisa Inoue, Keiichi Tanaami"
          },
          "010" : {
            "text" : "#SPAN16 @googledevjp |をフォローしてください"
          },
          "011" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          },
          "012" : {
            "text" : "コーヒーをお楽しみください | (*^◇^)_旦 "
          },
          "013" : {
            "text" : "Grab a coffee | (*^◇^)_旦 "
          },
          "014" : {
            "text" : "お茶もあります| 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "015" : {
            "text" : "Or tea | 旦_(ˆ ⺫ ˆ)◟皿"
          },
          "016" : {
            "text" : "すぐに会いましょう"
          },
          "017" : {
            "text" : "See you in a few!"
          }
        },
        "title" : "TYO: Space 005 - Break 1"
      },
      "TYO_space_006" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "休憩に入ります"
          },
          "002" : {
            "text" : "Take a break"
          },
          "003" : {
            "text" : "コーヒーをお楽しみください"
          },
          "004" : {
            "text" : "Grab a coffee"
          },
          "005" : {
            "text" : "お菓子もあります！"
          },
          "006" : {
            "text" : "And a snack!"
          },
          "007" : {
            "text" : "かりんとう"
          },
          "008" : {
            "text" : "Karinto"
          },
          "009" : {
            "text" : "芋けんぴ "
          },
          "010" : {
            "text" : "Fried Sweet Potato with Sugar Syrup"
          },
          "011" : {
            "text" : "豆菓子 "
          },
          "012" : {
            "text" : "MAME-KASHI"
          },
          "013" : {
            "text" : "起立"
          },
          "014" : {
            "text" : "Stand up"
          },
          "015" : {
            "text" : "ストレッチしましょう"
          },
          "016" : {
            "text" : "Stretch"
          },
          "017" : {
            "text" : "次は | Up Next"
          },
          "018" : {
            "text" : "East Room でのトーク: Craig Mod, Yuri Suzuki, Yo Shimada"
          },
          "019" : {
            "text" : "Talks in the East Room: Craig Mod, Yuri Suzuki, Yo Shimada"
          },
          "020" : {
            "layout" : "schedule",
            "scheduleText" : "パブリケーションデザイン パネル ディスカッション",
            "scheduleWhereWhen" : "Plenary",
            "scheduleWho" : "Lucas Badtke-Berkow, Joanna Kawecki, Kiyonori Muroga"
          },
          "021" : {
            "layout" : "schedule",
            "scheduleText" : "Publication Panel",
            "scheduleWhereWhen" : "Plenary",
            "scheduleWho" : "Lucas Badtke-Berkow, Joanna Kawecki, Kiyonori Muroga"
          },
          "022" : {
            "layout" : "schedule",
            "scheduleText" : "マテリアル デザイン Q＆A",
            "scheduleWhereWhen" : "西会議室  15:40 - 17:45",
            "scheduleWho" : "是非お立ち寄りください！"
          },
          "023" : {
            "layout" : "schedule",
            "scheduleText" : "Material Design Reviews",
            "scheduleWhereWhen" : "West Room 15:40 - 17:45",
            "scheduleWho" : "Please stop by!"
          },
          "024" : {
            "text" : "@GoogleDesign"
          },
          "025" : {
            "text" : "#SPAN16 @googledevjp |をフォローしてください"
          },
          "026" : {
            "text" : "Follow the conversation |#SPAN16 @googledevjp"
          }
        },
        "title" : "TYO: Space 006 - Break 2"
      },
      "TYO_space_007" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "いかがでしたでしょうか？ "
          },
          "002" : {
            "text" : "What did you think?"
          },
          "003" : {
            "text" : "是非みなさんの率直な意見を聞きたいと思っています"
          },
          "004" : {
            "text" : "We want to know. Really."
          },
          "005" : {
            "text" : "こちらのアンケートへのご協力をお願いします  | g.co/design/span-tokyo-survey-jp"
          },
          "006" : {
            "text" : "Please fill out a survey | g.co/design/span-tokyo-survey-en"
          },
          "007" : {
            "text" : "アンケート = ノベルティ"
          },
          "008" : {
            "text" : "Survey = Swag"
          },
          "009" : {
            "text" : "まだまだお菓子もあります"
          },
          "010" : {
            "text" : "More Snacks"
          },
          "011" : {
            "text" : "クッキー"
          },
          "012" : {
            "text" : "Cookie"
          },
          "013" : {
            "text" : "チョコレート！"
          },
          "014" : {
            "text" : "Chocolate!"
          },
          "015" : {
            "text" : "グラノーラバー"
          },
          "016" : {
            "text" : "Granola Bar"
          },
          "017" : {
            "text" : "次は | Up Next"
          },
          "018" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-MASAMICHI_UDAGAWA.png",
            "speakerName" : "Masamichi Udagawa",
            "speakerTitle" : "Antenna"
          },
          "019" : {
            "text" : "#SPAN16 | @googledevjp をフォローしてください"
          },
          "020" : {
            "text" : "Follow the conversation #SPAN16 | @googledevjp"
          },
          "021" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-DEYAN_SUDJIC.png",
            "speakerName" : "Deyan Sudjic",
            "speakerSocial" : "@designmuseum",
            "speakerTitle" : "Co-Founder, ディレクター, Design Museum"
          },
          "022" : {
            "layout" : "speaker",
            "speakerImage" : "https://g-design.storage.googleapis.com/production/v6/assets/page/span-2016-tokyo/span-2016-speaker-DEYAN_SUDJIC.png",
            "speakerName" : "Deyan Sudjic",
            "speakerSocial" : "@designmuseum",
            "speakerTitle" : "Co-Founder, Director, Design Museum"
          },
          "023" : {
            "text" : "お飲み物はいかがですか?"
          },
          "024" : {
            "text" : "How About a Drink?"
          },
          "025" : {
            "text" : "シトラス入りのペールエール と ハッピーノート"
          },
          "026" : {
            "text" : "Pale Ale with Citrus and Hoppy Notes"
          },
          "027" : {
            "text" : "オレンジピール入りの白ビールt"
          },
          "028" : {
            "text" : "Witbier with Orange Zest"
          },
          "029" : {
            "text" : "カラメル入りエール"
          },
          "030" : {
            "text" : "Ale with Malt and Caramel Notes"
          },
          "031" : {
            "text" : "乾杯"
          },
          "032" : {
            "text" : "Kanpai"
          },
          "033" : {
            "text" : "IDOL Aoyama で開催されるアフターパーティにご参加ください"
          },
          "034" : {
            "text" : "Join us for the after party @ IDOL Aoyama"
          },
          "035" : {
            "text" : "IDOLへの移動は | Sprinter Vans をご利用ください"
          },
          "036" : {
            "text" : "Transportation to IDOL | Sprinter Vans "
          },
          "037" : {
            "text" : "アフターパーティーの コンポーザー Hip Tanaka"
          },
          "038" : {
            "text" : "After Party: Composer Hip Tanaka"
          }
        },
        "title" : "TYO: Space 007 - Break 3"
      },
      "TYO_space_008" : {
        "hideInMenu" : true,
        "paletteGroup" : "tokyo",
        "slides" : {
          "000" : {
            "forcePalette" : "logo",
            "introClip" : "media/Logo_Rotator_Tokyo.webm",
            "layout" : "intro"
          },
          "001" : {
            "text" : "終わり"
          },
          "002" : {
            "text" : "The End"
          },
          "003" : {
            "text" : "いかがでしたでしょうか？ "
          },
          "004" : {
            "text" : "What did you think?"
          },
          "005" : {
            "text" : "こちらのアンケートへのご協力をお願いします  | g.co/design/span-tokyo-survey-jp"
          },
          "006" : {
            "text" : "Please fill out a survey |g.co/design/span-tokyo-survey-en"
          },
          "007" : {
            "text" : "アンケート = ノベルティ"
          },
          "008" : {
            "text" : "Survey = Swag"
          },
          "009" : {
            "text" : "#SPAN16"
          },
          "010" : {
            "text" : "みなさまのご意見を聞かせてください"
          },
          "011" : {
            "text" : "Tell us what you think "
          },
          "012" : {
            "text" : "アンケート回答後にトートバックをお忘れなく"
          },
          "013" : {
            "text" : "Don’t forget to pick up your tote (after you fill out your survey)"
          },
          "014" : {
            "text" : "アフタヌーンティー @ IDOL | ヾ(⌐■_■)ノ♪  "
          },
          "015" : {
            "text" : "After Party @ IDOL | ♪♪♪ ヽ(ˇ∀ˇ )ゞ "
          },
          "016" : {
            "text" : "SPAN 東京は終わってしまいましたが、SPAN LA のライブラストリームは、10月27日に行います"
          },
          "017" : {
            "text" : "Sad SPAN Tokyo is over? Watch SPAN LA live on 10/27"
          },
          "018" : {
            "text" : "g.co/design/span-la-livestream"
          },
          "019" : {
            "text" : "#SPAN16 @GoogleDesign |をフォローしてください"
          },
          "020" : {
            "text" : "Follow the conversation |#SPAN16 @GoogleDesign"
          },
          "021" : {
            "text" : "ありがとうございました"
          },
          "022" : {
            "text" : "Thank you"
          },
          "023" : {
            "text" : "[heart emoji]"
          },
          "024" : {
            "text" : "パーティーの時間です！ | ヽ(・∀・)ﾉ ヽ(>∀<☆)ノ"
          },
          "025" : {
            "text" : "Party time! | (●＾□＾●)_且⊹且_(*̑ᴗ ̑*)"
          },
          "026" : {
            "text" : "@GoogleDesign"
          },
          "027" : {
            "text" : "design.google.com"
          },
          "028" : {
            "text" : "スピーカーの皆様ありがとうございました"
          },
          "029" : {
            "text" : "Shout out to our esteemed speakers"
          },
          "030" : {
            "text" : "ありがとうございました"
          },
          "031" : {
            "text" : "Thank you"
          },
          "032" : {
            "text" : "IDOL Aoyama で開催されるアフターパーティにご参加ください"
          },
          "033" : {
            "text" : "Join us for the after party @ IDOL Aoyama"
          },
          "034" : {
            "text" : "IDOLへの移動は | Sprinter Vans をご利用ください"
          },
          "035" : {
            "text" : "Sprinter vans will take you to IDOL"
          },
          "036" : {
            "text" : "アフターパーティーの コンポーザー Hip Tanaka"
          },
          "037" : {
            "text" : "After Party: Composer Hip Tanaka"
          }
        },
        "title" : "TYO: Space 008 - THE END!!!!"
      }
    }
  }
};