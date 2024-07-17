const currentyear=document.querySelector('#currentyear')
const lastmodified=document.querySelector('#lastModified')
const headingCategory=document.querySelector('#category')

const year=new Date();
const todaysdate=new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
).format(year)

currentyear.innerHTML='&copy; ' + year.getFullYear() + ' Nate McColm,IDAHO'
lastmodified.innerHTML=todaysdate


const mainnav=document.querySelector('.nav')
const hambutton=document.querySelector('#menu')

hambutton.addEventListener('click', () =>{
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const cards = [
	{
	  cardName: "Edgar Markov",
	  manaCost: "6",
      deck: "vampire",
      type: 'creature',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Edgar%20Markov&set=C17&foil=1"
	},
	{
	  cardName: "Akoum Refuge",
	  manaCost: "0",
	  deck: "vampire",
      type: 'land',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Akoum%20Refuge&set=SCD"
	},
	{
	  cardName: "Anowon, the Ruin Sage",
	  manaCost: "5",
	  deck: "vampire",
      type: 'land',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Anowon%2C%20the%20Ruin%20Sage&set=VOC"
	},
	{
	  cardName: "Battlefield Forge",
	  manaCost: "0",
	  deck: "vampire",
      type: 'land',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Battlefield%20Forge&set=M3C"
	},
	{
	  cardName: "Blackcleave Cliffs",
	  manaCost: "0",
	  deck: "vampire",
      type: 'land',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Blackcleave%20Cliffs&set=OTC"
	},

	{
	  cardName: "Blood Tribute",
	  manaCost: "6",
	  deck: "vampire",
	  type: 'sorcery',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Blood%20Tribute&set=C17"
	},

	{
		cardName: "Bloodfell Caves",
		location: "0",
		dedicated: "vampire",
		type: 'land',
		imageUrl:
		"https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bloodfell%20Caves&set=MOM"
	  },

      {
        cardName: "Bloodletter of Aclazotz",
        manaCost: "4",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bloodletter%20of%20Aclazotz&set=LCI&collector_number=336"
      },

	  {
		cardName: "Bloodline Keeper",
		manaCost: "4",
		deck: "vampire",
		type: 'creature',
		imageUrl:
		"https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bloodline%20Keeper%20%2F%2F%20Lord%20of%20Lineage&set=ISD"
	  },

	  {
		cardName: "Bloodline Necromancer",
		manaCost: "5",
		deck: "vampire",
		type: 'creature',
		imageUrl:
		"https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bloodline%20Necromancer&set=LCC"
	  },

      
    {
    cardName: "Bloodlord of Vaasgoth",
    manaCost: "5",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Edgar%20Markov&set=C17&https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bloodlord%20of%20Vaasgoth&set=VOC=1"
        },
        {
    cardName: "Brave the Sands",
    manaCost: "2",
    deck: "vampire",
    type: 'enchantment',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Brave%20the%20Sands&set=CM2"
        },
        {
    cardName: "Butcher of Malakir",
    manaCost: "7",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Butcher%20of%20Malakir&set=LCC"
        },
        {
    cardName: "Captivating Vampire",
    manaCost: "3",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Captivating%20Vampire&set=C17"
        },
        {
    cardName: "Caves of Koilos",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Caves%20of%20Koilos&set=M3C"
        },
    
        {
    cardName: "Cemetery Gatekeeper",
    manaCost: "2",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Cemetery%20Gatekeeper&set=VOW"
        },
    
    {
    cardName: "Cordial Vampire",
    location: "2",
    dedicated: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Cordial%20Vampire&set=LCC"
    },
    
    {
    cardName: "Crossway Troublemakers",
    manaCost: "6",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Crossway%20Troublemakers&set=LCC"
    },

    {
    cardName: "Dark Imposter",
    manaCost: "3",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Dark%20Impostor&set=VOC"
    },

    {
    cardName: "Diabolic Tutor",
    manaCost: "4",
    deck: "vampire",
    type: 'sorcery',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Diabolic%20Tutor&set=CMA"
    },

    //BREAKPOINT

    {
        cardName: "Dragonskull Summit",
        manaCost: "0",
        deck: "vampire",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Dragonskull%20Summit&set=OTC"
      },
      {
        cardName: "Drana and Linvala",
        manaCost: "4",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Drana%20and%20Linvala&set=MOM"
      },

      {
        cardName: "Drana's Emissary",
        manaCost: "2",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Drana%27s%20Emissary&set=BFZ"
      },

      {
        cardName: "Drana, Liberator of Malakir",
        manaCost: "3",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Drana%2C%20Liberator%20of%20Malakir&set=LCC"
      },

      {
        cardName: "Drana, the Last Bloodchief",
        manaCost: "5",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Drana%2C%20the%20Last%20Bloodchief&set=ZNR"
      },

      {
          cardName: "Drannith Ruins",
          manaCost: "0",
          deck: "vampire",
          type: 'land',
          imageUrl:
          "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Drannith%20Ruins&set=MAT"
        },
      {
        cardName: "Drossfire Bridge",
        manaCost: "0",
        deck: "vampire",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Drossforge%20Bridge&set=BRC"
      },
      {
        cardName: "Edgar, Charmed Groom",
        manaCost: "4",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Battlefield%20Forge&set=M3C"
      },
      {
        cardName: "Elenda, the Dusk Rose",
        manaCost: "4",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Elenda%2C%20the%20Dusk%20Rose&set=LCC&foil=1"
      },
  
      {
        cardName: "Exquisite Blood",
        manaCost: "5",
        deck: "vampire",
        type: 'enchantment',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Exquisite%20Blood&set=LCC"
      },
  
    {
        cardName: "Falkenrath Noble",
        location: "4",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Falkenrath%20Noble&set=LCC"
    },

    
        {
        cardName: "Fetid Heath",
        manaCost: "0",
        deck: "vampire",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Fetid%20Heath&set=OTC"
        },
        {
        cardName: "Foreboding Ruins",
        manaCost: "0",
        deck: "vampire",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Foreboding%20Ruins&set=LCC"
        },
        {
        cardName: "Geothermal Bog",
        manaCost: "0",
        deck: "vampire",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Geothermal%20Bog&set=DMU"
        },
        {
        cardName: "Immerstrum Predator",
        manaCost: "4",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Immersturm%20Predator&set=KHM"
        },
    
        {
        cardName: "Indulgent Aristocrat",
        manaCost: "1",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Indulgent%20Aristocrat&set=LCC"
        },
    
    {
        cardName: "Kalitas, Bloodchief of Ghet",
        location: "7",
        dedicated: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Kalitas%2C%20Bloodchief%20of%20Ghet&set=ZEN"
    },

    {
        cardName: "Kazarov, Sengir Pureblood",
        manaCost: "7",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Kazarov%2C%20Sengir%20Pureblood&set=DOM"
    },

    {
        cardName: "Licia, Sanguine Tribune",
        manaCost: "7",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Licia%2C%20Sanguine%20Tribune&set=C17&foil=1"
    },

    {
        cardName: "Malakir Bloodwitch",
        manaCost: "5",
        deck: "vampire",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Malakir%20Bloodwitch&set=VOC"
    },

            {
	  cardName: "Marshland Bloodcaster",
	  manaCost: "5",
      deck: "vampire",
      type: 'creature',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Marshland%20Bloodcaster&set=OTC"
	},
	{
	  cardName: "Mavren Fein, Dusk Apostle",
	  manaCost: "3",
	  deck: "vampire",
      type: 'creature',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Mavren%20Fein%2C%20Dusk%20Apostle&set=LCC"
	},
	{
	  cardName: "Mephidross Vampire",
	  manaCost: "6",
	  deck: "vampire",
      type: 'creature',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Mephidross%20Vampire&set=5DN"
	},
	{
	  cardName: "Midnight Arsonist",
	  manaCost: "4",
	  deck: "vampire",
      type: 'creature',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Midnight%20Arsonist&set=VOC"
	},
	{
	  cardName: "mountain",
	  manaCost: "0",
	  deck: "vampire",
      type: 'land',
      quantity: 4,
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Mountain&set=ACR"
	},

	{
	  cardName: "Necropolis Regent",
	  manaCost: "6",
	  deck: "vampire",
	  type: 'creature',
	  imageUrl:
	  "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Necropolis%20Regent&set=VOC"
	},

	{
    cardName: "Nighthawk Scavenger",
    location: "3",
    dedicated: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Nighthawk%20Scavenger&set=OTC"
    },

    {
    cardName: "Nomad Outpost",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Nomad%20Outpost&set=OTC"
    },

    {
    cardName: "Oathsworn Vampire",
    manaCost: "2",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Oathsworn%20Vampire&set=LCC"
    },

    {
    cardName: "Olivia Voldaren",
    manaCost: "4",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Olivia%20Voldaren&set=MM3&foil=1"
    },

    {
    cardName: "Olivia's Wrath",
    manaCost: "5",
    deck: "vampire",
    type: 'sorcery',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Olivia%27s%20Wrath&set=LCC"
    },
    {
    cardName: "Olivia, Crimson Bride",
    manaCost: "6",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Olivia%2C%20Crimson%20Bride&set=VOW&foil=1"
    },
    {
    cardName: "Orzhov Locket",
    manaCost: "3",
    deck: "vampire",
    type: 'artifact',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Orzhov%20Locket&set=MOC"
    },
    {
    cardName: "Patron of the Vein",
    manaCost: "6",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Patron%20of%20the%20Vein&set=LCC"
    },
    {
    cardName: "Plains",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    quantity: 3,
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Plains&set=ACR"
    },

    {
    cardName: "Rakdos Locket",
    manaCost: "3",
    deck: "vampire",
    type: 'artifact',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Rakdos%20Locket&set=C19"
    },

    {
    cardName: "Rakdos Signet",
    location: "2",
    dedicated: "vampire",
    type: 'artifact',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Rakdos%20Signet&set=OTC"
    },

    {
    cardName: "Restless Fortress",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Restless%20Fortress&set=WOE"
    },

    {
    cardName: "Rodolf Duskbringer",
    manaCost: "6",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Rodolf%20Duskbringer&set=J22"
    },

    {
    cardName: "Rogue's Passage",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Rogue%27s%20Passage&set=OTC"
    },

    {
    cardName: "Rustvale Bridge",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Rustvale%20Bridge&set=PIP"
    },
    {
    cardName: "Sacred Peaks",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sacred%20Peaks&set=MKC"
    },
    {
    cardName: "Sanctum Seeker",
    manaCost: "4",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sanctum%20Seeker&set=LCC"
    },
    {
    cardName: "Sanguine Bond",
    manaCost: "5",
    deck: "vampire",
    type: 'enchantment',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sanguine%20Bond&set=M10&collector_number=111"
    },
    {
    cardName: "Scoured Barrens",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Scoured%20Barrens&set=LTC"
    },

    {
    cardName: "Slaughter Specialist",
    manaCost: "2",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Slaughter%20Specialist&set=MID&foil=1"
    },

    {
    cardName: "Sorin Markov",
    location: "6",
    dedicated: "vampire",
    type: 'planeswalker',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sorin%20Markov&set=M12"
    },

    {
    cardName: "Sorin the Mirthless",
    manaCost: "4",
    deck: "vampire",
    type: 'plansewalker',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sorin%20the%20Mirthless&set=VOW&collector_number=278"
    },

    {
    cardName: "Sorin, Lord of Innistrad",
    manaCost: "4",
    deck: "vampire",
    type: 'planeswalker',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Stromkirk%20Captain&set=VOC"
    },

    {
    cardName: "Stromkirk Captain",
    manaCost: "3",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bloodline%20Necromancer&set=LCC"
    },
    {
    cardName: "Sulfurous Springs",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sulfurous%20Springs&set=M3C"
    },
    {
    cardName: "Sunlit Marsh",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Sunlit%20Marsh&set=DMU"
    },
    {
    cardName: "Swamp",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    quantity: 3,
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Swamp&set=ACR"
    },
    {
    cardName: "Battlefield Forge",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Battlefield%20Forge&set=M3C"
    },
    {
    cardName: "Temple of Silence",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Temple%20of%20Silence&set=M3C"
    },

    {
    cardName: "The Haunt of Hightower",
    manaCost: "6",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=The%20Haunt%20of%20Hightower&set=RNA&foil=1"
    },
    {
    cardName: "Thought Vessel",
    location: "2",
    dedicated: "vampire",
    type: 'artifact',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Thought%20Vessel&set=MKC"
    },
    {
    cardName: "True Conviction",
    manaCost: "6",
    deck: "vampire",
    type: 'enchantment',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=True%20Conviction&set=SCD&foil=1"
    },

    {
    cardName: "Twilight Prophet",
    manaCost: "4",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Twilight%20Prophet&set=LCC&collector_number=211"
    },

    {
    cardName: "Unclaimed Territory",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Unclaimed%20Territory&set=M3C"
    },

    //breakpoint

    {
    cardName: "Vampire Nocturnus",
    manaCost: "3",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vampire%20Nocturnus&set=PDP13&collector_number=3"
    },

    {
    cardName: "Vampire of the Dire Moon",
    manaCost: "1",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vampire%20of%20the%20Dire%20Moon&set=M20"
    },

    {
    cardName: "Vampiric Dragon",
    manaCost: "8",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vampiric%20Dragon&set=VOC"
    },
    

    {
    cardName: "Vampiric Rites",
    manaCost: "1",
    deck: "vampire",
    type: 'enchantment',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vampiric%20Rites&set=WOT&collector_number=37"
    },

    {
    cardName: "Veinwitch Coven",
    manaCost: "3",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Veinwitch%20Coven&set=OTC"
    },

    {
    cardName: "Vito, Thorn of the Duck Rose",
    manaCost: "3",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vito%2C%20Thorn%20of%20the%20Dusk%20Rose&set=M21"
    },
        
    //breakpoint


{
    cardName: "Voldaren Estate",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vampire%20Nocturnus&set=PDP13&collector_number=3"
    },

    {
    cardName: "Vona's Hunger",
    manaCost: "3",
    deck: "vampire",
    type: 'Instant',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vona%27s%20Hunger&set=RIX"
    },

    {
    cardName: "Vona, Butcher of Magan",
    manaCost: "5",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Vona%2C%20Butcher%20of%20Magan&set=LCC"
    },
    

    {
    cardName: "Westgate Regent",
    manaCost: "5",
    deck: "vampire",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Westgate%20Regent&set=AFR"
    },

    {
    cardName: "Wind-Scarred Crag",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Wind-Scarred%20Crag&set=LTC"
    },

    {
    cardName: "Witch's Cottage",
    manaCost: "0",
    deck: "vampire",
    type: 'land',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Witch%27s%20Cottage&set=ELD"
    },






    {
    cardName: "Pantlaza, Sun Favored",
    manaCost: "5",
    deck: "dinosaur",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Pantlaza%2C%20Sun-Favored&set=LCC"
    },
    {
    cardName: "Apex Altisaur",
    manaCost: "9",
    deck: "dinosaur",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Apex%20Altisaur&set=LCC"
    },
    {
    cardName: "Asceticism",
    manaCost: "5",
    deck: "dinosaur",
    type: 'enchantment',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Asceticism&set=LTC"
    },
    {
    cardName: "Atla Palani, Nest Tender",
    manaCost: "4",
    deck: "dinosaur",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Atla%20Palani%2C%20Nest%20Tender&set=DMC"
    },
    {
    cardName: "Atzocan Seer",
    manaCost: "3",
    deck: "dinosaur",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Atzocan%20Seer&set=LCC"
    },

    {
    cardName: "Bellowing Aegisaur",
    manaCost: "6",
    deck: "dinosaur",
    type: 'creature',
    imageUrl:
    "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bellowing%20Aegisaur&set=LCC"
    },

    {
        cardName: "Blossoming Sands",
        location: "0",
        dedicated: "dinosaur",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Blossoming%20Sands&set=MOM"
    },

    {
        cardName: "Bonder's Enclave",
        manaCost: "0",
        deck: "dinosaur",
        type: 'land',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bonders%27%20Enclave&set=M3C"
    },

    {
        cardName: "Bonehorde Dracosaur",
        manaCost: "5",
        deck: "dinosaur",
        type: 'creature',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Bonehoard%20Dracosaur&set=LCI"
    },

    {
        cardName: "Brave the Sands",
        manaCost: "2",
        deck: "dinosaur",
        type: 'enchantment',
        imageUrl:
        "https://cards.deckstats.net/picture.php?utf8=1&lng=en&card=Brave%20the%20Sands&set=CM2"
    }
  ];



createDeck(cards);

  function createDeck(cardsToDisplay) {
	document.querySelector('.res-grid').innerHTML='';
	cardsToDisplay.forEach(cards => {
	let card = document.createElement('Section');
	let cardName = document.createElement('h3');
	let manaCost = document.createElement('p');
    let deck=document.createElement('p');
    let type=document.createElement('p');
	let img = document.createElement('img');

	cardName.textContent=cards.cardName
	manaCost.innerHTML=`<span class='label'>Mana Cost: </span>${cards.manaCost}`;
	deck.innerHTML=`<span class='label'>Deck: </span> ${cards.deck}`;
	type.innerHTML=`<span class='label'>'Type': </span>${cards.type}`;
	img.setAttribute('src', cards.imageUrl);
	img.setAttribute('alt', `${cards.cardName}`);
	img.setAttribute('loading','lazy');
	img.setAttribute('class','cardImage');

	card.appendChild(cardName);
	card.appendChild(manaCost);
	card.appendChild(deck);
	card.appendChild(type);
	card.appendChild(img);

	document.querySelector('.res-grid').appendChild(card);
	})
  	}

const vampireDeck=document.querySelector('#vampire');

vampireDeck.addEventListener('click', () => {
	let vampireDeckBuild=cards.filter(cards => cards.deck=='vampire');
	createDeck(vampireDeckBuild);
    headingCategory.innerHTML='Vampire';
	})

const dinosaurDeck=document.querySelector('#dinosaur');


dinosaurDeck.addEventListener('click', () => {
	let dinosaurDeckBuild=cards.filter(cards => cards.deck=='dinosaur');
	createDeck(dinosaurDeckBuild);
    headingCategory.innerHTML='Dinosaur';
	})

const counterDeck=document.querySelector('#counter');


counterDeck.addEventListener('click', () => {
	let counterDeckBuild=cards.filter(cards=> cards.deck=='counter');
	createDeck(counterDeckBuild);
    headingCategory.innerHTML='Counters';
	})

const sliverDeck=document.querySelector('#sliver');

sliverDeck.addEventListener('click', () => {
	let sliverDeckBuild=cards.filter(cards=> cards.deck=='sliver');
	createDeck(sliverDeckBuild);
    headingCategory.innerHTML='Sliver';
	})

const angelDeck=document.querySelector('#angel');

angelDeck.addEventListener('click', () => {
    let angelDeckBuild=cards.filter(cards=> cards.deck=='angel');
	createDeck(angelDeckBuild);
    headingCategory.innerHTML='Angel'
	})


const artifacts=document.querySelector('#artifacts');

artifacts.addEventListener('click', ()=> {
    if (headingCategory.innerHTML=='vampire'){
        let vampireDeckBuild=cards.filter(cards => cards.deck=='vampire' && cards.type=='artifact');
	    createDeck(vampireDeckBuild);
	    }

    else if (headingCategory.innerHTML=='dinosaur'){
        let dinosaurDeckBuild=cards.filter(cards => cards.deck=='dinosaur' && cards.type=='artifact');
        createDeck(dinosaurDeckBuild);
        }


    else if (headingCategory.innerHTML=='counter'){
        let counterDeckBuild=cards.filter(cards => cards.deck=='counter' && cards.type=='artifact');
        createDeck(counterDeckBuild);
        }
        
    else if(headingCategory.innerHTML=='sliver'){
        let angelDeckBuild=cards.filter(cards => cards.deck=='angel' && cards.type=='artifact');
        createDeck(angelDeckBuild)}


    else if (headingCategory.innerHTML=='sliver'){
        let sliverDeckBuild=cards.filter(cards => cards.deck=='sliver' && cards.type=='artifact');
        createDeck(sliverDeckBuild)}

    else {null}
    })