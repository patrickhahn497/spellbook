
// we keep features in an array of features just in case there's more than one feature for a level

const variantRanger = {

	1: [
			{
				name: "Deft Explorer",
				chooseone: true,
				subfeatures: [
					{
						name: "Canny",
						text: "Choose one skill: Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival. You gain proficiency in the chosen skill if you don’t already have it, and you can add double your proficiency bonus to ability checks using that skill. In addition, thanks to your extensive wandering, you are able to speak, read, and write two languages of your choice. "
					},
					{
						name: "Roving",
						text: "Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed."
					},
					{
						name: "Tireless",
						text: "As an action, you can give yourself a number of temporary hit points equal to 1d10 + your Wisdom modifier. You can use this special action a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest. In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1."
					}

				]

				text: "You are an unsurpassed explorer and survivor. Choose one of the following benefits, "+ 
				"and then choose another one at 6th and 10th level. \nCanny Choose one skill: Animal Handling,"+
				" Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival."+
				" You gain proficiency in the chosen skill if you don’t already have it, and you can add double your"+
				"proficiency bonus to ability checks using that skill. In addition, thanks to your extensive wandering, you are able to speak, read, and write two languages of your choice. \nRoving Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed. \nTireless As an action, you can give yourself a number of temporary hit points equal to 1d10 + your Wisdom modifier. You can use this special action a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest. In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1."
			},
			{
				name: "Favored Foe",
				text: "You can call on your bond with nature to mark a creature as your favored enemy for a time: you know the hunter’s mark spell, and Wisdom is your spellcasting ability for it. You can use it a certain number of times without expending a spell slot and without requiring concentration— a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest. When you gain the Spellcasting feature at 2nd level, hunter’s mark doesn’t count against the number of ranger spells you know."
			}
		]

	3: [
			{
				name: "Primal Awareness",
				spells: [
					3: ["Detect Magic", "Speak with Animals"],
					5: ["Beast Sense", "Locate Animals or Plants"],
					9: ["Speak with Plants"],
					13: ["Locate Creature"],
					17: ["Commune with Nature"]
				],
				text: "You can focus your awareness through the interconnections of nature: you learn additional spells when you reach certain levels in this class if you don’t already know them, as shown in the Primal Awareness Spells table. These spells don’t count against the number of ranger spells you know. \n You can cast each of these spells once without expending a spell slot. Once you cast a spell in this way, you can’t do so again until you finish a long rest."
			}
		],
	5: [
			{
				name: "Extra Attack",
				text: "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
			}
		],
	6: [
			{
				name: "Deft Explorer",
				hassubfeature: true,
				subfeatures: [
					{
						name: "Canny",
						text: "Choose one skill: Animal Handling, Athletics, History, Insight, Investigation, Medicine, Nature, Perception, Stealth, or Survival. You gain proficiency in the chosen skill if you don’t already have it, and you can add double your proficiency bonus to ability checks using that skill. In addition, thanks to your extensive wandering, you are able to speak, read, and write two languages of your choice. "
					},
					{
						name: "Roving",
						text: "Your walking speed increases by 5, and you gain a climbing speed and a swimming speed equal to your walking speed."
					},
					{
						name: "Tireless",
						text: "As an action, you can give yourself a number of temporary hit points equal to 1d10 + your Wisdom modifier. You can use this special action a number of times equal to your Wisdom modifier (a minimum of once), and you regain all expended uses when you finish a long rest. In addition, whenever you finish a short rest, your exhaustion level, if any, is decreased by 1."
					}

				]
			}
	],
	8: [
			{
				name: "Fleet of Foot"
				text: "Beginning at 8th level, you can use the Dash action as a bonus action on your turn."
			}
		],
	10: [
			{
				name: "Fade Away",
				text: "You can use a bonus action to magically become invisible, along with any equipment you are wearing or carrying, until the start of your next turn. Once you use this feature, you can’t use it again until you finish a short or long rest."
			}
		],
	14: [
			{
				name: "Vanish",
				text: "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can’t be tracked by nonmagical means, unless you choose to leave a trail."
			}
		],
	18: [
			{
				name: "Feral Senses",
				text: "At 18th level, you gain preternatural senses that help you fight creatures you can’t see. When you attack a creature you can’t see, your inability to see it doesn’t impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn’t hidden from you and you aren’t blinded or deafened."
			}
		],
	20: [
			{
				name: "Foe Slayer",
				text: "At 20th level, you become an unparalleled hunter. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
			}

		]

};