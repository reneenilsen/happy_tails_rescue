const animalSchema = [
    {
    user_id: "",
    animal_photo: "http://lorempixel.com/200/200",
    animal_type: "Dog",
    microchip: "abc123456789",
    name: "Budweiser",
    age: 1.5,
    gender: "Male",
    primary_breed: "Corgi",
    secondary_breed: "",
    cross_breed: true,
    color: "Brown",
    coat_type: "Short",
    size: "Medium",
    location: "Tarampa, West Brisbane",
    friendly_with: "Dogs (MUST be a calm well balanced dog) and cats (can sometimes get over excited and chase). Kids not recommended.",
    would_suit: "Couple, singles, retirees, families",
    weight: 8,
    behavior_notes: "Needs a confident dog owner as he can be snappy",
    medical_notes: "",
    house_trained: true,
    adoption_fee: 450,
    bin: "BIN0000561500753",
    desexed: true,
    vaccinated: true,
    wormed: true,
    heartworm_treated: true,
    dob: 21/01/2019,
    extra_notes: "",
    description: "Budweiser, or Buddy as he is known always greets you with great excitement when you get home"
    },

    {
    user_id: "",
    animal_photo: "http://lorempixel.com/200/200",
    animal_type: "Cat",
    microchip: "abc987654321",
    name: "Abbey",
    age: 9,
    gender: "Female",
    primary_breed: "Bengal",
    secondary_breed: "",
    cross_breed: false,
    color: "Brown spotted",
    coat_type: "Short",
    size: "Small",
    location: "Wakerley, Brisbane",
    friendly_with: "None, must be only cat",
    would_suit: "Couple, singles, retirees, families",
    weight: 4,
    behavior_notes: "Needs an experienced owner",
    medical_notes: "Sensitive skin",
    house_trained: true,
    adoption_fee: 250,
    bin: "BIN0000561500753",
    desexed: true,
    vaccinated: true,
    wormed: true,
    heartworm_treated: true,
    dob: 21/01/2010,
    extra_notes: "",
    description: "Brown spotted Bangel cat"
    }
]

AnimalModel.createOne({...AnimalSchema})

const dynamicText = {
    welcomePage: `Welcome to Happy Tails Animal Rescue Inc.
 
    We are a not-for-profit, no-kill animal rescue charity based in South-East QLD; however, dedicated to helping animals in need Australia-wide! Happy Tails is committed to taking in dogs, cats, kittens and puppies that find themselves in need; and doing all we can to re-write their tale into one with a happily ever after.
     
    We place all our animals in loving, approved foster homes where they will get the best care while they wait for their forever homes. We provide all vet and behavioural work required to ensure our animals are happy, healthy and ready to be a part of a family!
     
    Happy Tails has a thorough adoption process including applications, meet and greets and home checks in some cases; to ensure our animals are going to the right home. We are committed to our animals; and if for any reason an adopted animal can no longer be cared for, we will take them back into foster care and provide for them until they find their true forever home.
     
    Every member of Happy Tails staff is an animal lover who has dedicated their time to help the animals of this organisation have an improved life. Happy Tails relies completely on donations and the hard work of volunteers, without both of these things we could simply not change the lives of the animals in our care.
     
    Thank you and welcome
    The Happy Tails Family`,

    adoptMain: `Thank you for allowing Happy Tails the chance to find you a new family member! We are thrilled to go on this journey with you and thank you for giving a rescue animal a second chance at both love and life.

    Each Happy Tails animal is placed into a dedicated foster home where their true personality gets to shine. For some of our animals, this is the first time they have been in a loving home. They spend time learning how to be a part of a family, learning to trust and learning to love again.
    
    To ensure our animals are adoption ready, they have a thorough veterinary examination which includes a full health check, vaccination/s, spay or castration procedure, microchip implanted and are treated monthly for fleas, worms and ticks. If an animal has further medical or behavioural needs, these are completed prior to being placed up for adoption.
    
    All of this helps us learn what each animal needs to have a Happy Tail.`,

    adoptForm: `Happy Tails Animal Rescue Inc. require an application form to be completed if you are interested in adopting a rescue pet from our organisation. The application is then passed onto the foster family for consideration. It may seem like a lot of information, but it helps us match the most suited family to each dog and vice versa!

    If you are short listed for the particular dog or puppy you applied for, you will be contacted by a team member/foster carer of Happy Tails Animal Rescue Inc. to arrange a meet a greet within one week of receiving the application.
    
    Happy Tails Animal Rescue Inc. wants the experience of adopting a new family member to be a good one and we will occasionally suggest a different dog as your situation may not meet the needs of the individual dog you have applied for.
    
    Happy Tails Animal Rescue Inc. have a two week trial period for every rescue animal. At the end of the two weeks if our dog is happy with you and you are happy with them, we will sign over all of the paperwork. If the trial is not working out then the dog is able to be returned for a full refund of the adoption fee minus a $50 administration fee.
    
    *PLEASE NOTE*
    Completion of this application and associated consultations etc does not guarantee your adoption approval of a Happy Tails Animal Rescue Inc. animal. We will however take every step to match you with the right pet for your needs.`,

    programs: `Here at Happy Tails, we are forever working on programs to help the community; from preventing unwanted litters to providing education in schools.  Many of these programs are still in planning mode or in the pilot phase due to funding.`,

    adoptSnippet:`The heart of every rescue: getting unwanted or dumped animals and finding their forever family.`,

    goldenTailsSnippet: `Golden Tails is our commitment to care for animals who are unable to be rehomed due to medical or behavioural issues.  These animals remain in care until their time has come to cross the rainbow bridge.`,

    lastLitterSnippet:`Currently in pilot phase.  Happy Tails offer members of the public who have expecting cats or dogs the opportunity to surrender the kittens or pups (plus the Mum temporarily) to us so that we can do all their vetwork incl desexing, we will then rehome the litter.`,

    pets2SafetySnippet: `An initiative with DV Connect to provide temporary and emergency housing for animals of individuals at risk or experiencing domestic violence in Queensland.`,

    educationTailsSnippet: `We will bring some friendly animals to schools, daycares, universities or workplace to educate the importance of desexing your pets and to adopt, not shop. `,

    rehomingAssistSnippet: `Do you need help rehoming your cat or dog? We can provide assistance.`,

    lastLitterMain: `Happy Tails Animal Rescue Inc. is committed to reducing the number of unwanted and homeless dogs and cats in South East Queensland and Northern New South Wales. Surrender your unwanted litter to us to be fully vetted and rehomed and we will desex the Mum at one of our vets free of charge.

    Have a pregnant pet and want help to desex Mum and rehome the babies? Send us a message via our Facebook page or email us admissions@happytailsrescue.com.au.
    
    Interested in sponsoring this program?  Email fostering@happytailsrescue.com.au`,

    pets2SafetyMain: `Happy Tails Animal Rescue Inc. has proudly partnered with DV Connect to provide temporary and emergency housing for animals of individuals at risk or experiencing domestic violence in Queensland.

    This is a new program currently in its early stages and is not yet available to the public.
    
    Are you currently in a DV relationship and need support? You deserve a life without domestic violence. Contact DV Connect on 1800 811 811 24 hours a day or visit their website http://www.dvconnect.org/. 
    
    Interested in becoming a foster carer or sponsoring this program?  Email pets2safety@happytailsrescue.com.au`,

    rehomingAssistMain: `If you require assistance with rehoming your pet, please complete the relevant application form below. Once the application form and photo/s are received we will email you with confirmation and will commence seeking a foster home for your pet.  Please ensure you tell us as much information as you can and upload a fair amount of good quality, clear photos as this will assist us in finding a foster home.  Please let us know if your pet is rehomed while we are in the process of looking for a foster home. We will contact you as soon as a foster home is found.

    *PLEASE NOTE* If you surrender your pet to Happy Tails Animal Rescue you will have a 72 hour cooling off period after the physical handover where you may reclaim your pet. If during the cooling off period any urgent vet work has been completed by Happy Tails we will require reimbursement for lost costs before handing your pet back.`,

    goldenTailsMain: `Sponsor an animal; help save a life

    Golden Tails is our commitment to care for animals who are unable to be rehomed due to medical or behavioural issues. The animals that enter our Golden Tails Program will be cared for for the remainder of their lives. Our dedicated foster carers provide them with a warm home and as much love as they can handle; we provide the rest.
    
    Caring for our Golden Tails involves a great many things; from prescription food, medication, rehabilitation services, surgeries and routine vet procedures.  When you choose to sponsor one of our animals, you aren’t just doing a good thing, you are indeed helping to save a life, to make their life better.
    
    When you sponsor an animal, you will receive a sponsorship packet which includes: details about your sponsored animal and their daily needs, a sponsorship certificate with a photo, and a report on the animal’s well-being.
    
    And of course, you’ll also get that good feeling that we all get when we know we’re helping an animal, which is always the best feeling of all. If you’d like to meet the animal you want to sponsor, send us an email and prepare to be charmed.`,

    fosterMain: `Becoming a foster carer is one of the most selfless and rewarding decisions you can make.  Animals we save are placed into care with a wonderful person we call a foster carer.  Some of these animals just need a place to stay while they look for their forever home; others need a special human to teach them manners, to trust again and that they are worthy of love.

    There is a lot of reasons why people choose to foster;  be it that they’re searching for the perfect companion, or just want to help an animal in need. Whatever your reasons may be, Happy Tails is thrilled to have you on board!
    
    Happy Tails cover the cost of all vetwork; including flea, worm and tick treatment!  We also provide donated food; however, any costs incurred by you is tax deductible.
    
    Here at Happy Tails, our life blood are our foster carers. Each one is a treasured and valued member of the team and without them we would cease to exist. Our foster carers are everything to us, and soon you will be too! Thank you from the bottom of our hearts for deciding to foster and we cannot wait to see what the future holds for you, your new furry companion and your journey through Happy Tails.
    
    We look forward to welcoming you to our family`,

    availableFoster: `Here are our animals that are currently awaiting their chance at a Happy Tale.  You can save their life by becoming a foster carer.`,

    fosterSnippet: `Become a foster carer to provide temporary care for an animal in need`,

    helpUs: `There are many ways that you can support our work here at Happy Tails Animal Rescue Inc.  Each of the below helps us to save hundreds of dogs and cats each year!`,

    donateSnippet: `One off or recurring donations make a huge difference in  the lives of our animals`,

    donateMain: `Happy Tails Animal Rescue Inc. is a not-for-profit registered charity who rely heavily on the generous hearts of the public.

    Please consider making a tax deductible one-off or regular monthly donation or sponsor one of our Golden Tails animals.
    
    We make sure every dollar counts.  We use the donations to complete necessary vetwork, training and rehabilitation services for all animals in care; to ensure they are ready to find their forever homes.
    
    All donations over $2 are tax deductible – please send an email to treasurer@happytailsrescue.com.au with your name, address and donation details; and a receipt will be sent to you with thanks.
    
    Account Name: Happy Tails Animal Rescue Inc.
    BSB: 114879
    Account: 488310327
    Reference: your name and name of animal you wish to donate to/adopt
    (if specific; otherwise donations will go towards general vetwork)`,

    volunteerMain: `Home checks – All foster carers require a home inspection by an approved volunteer.  This involves a visit to check where our animals will be staying while in foster care; and completing an online checklist with your recommendations.

    Transport – This can be a short trip from the pound to the foster carer, a trip to the vet for their appointment or collecting animals from private surrender homes.
    
    Event crew – Our fundraising events can only happen with volunteers.  Roles on the day include set up, transport help, BBQing, selling raffle tickets/merchandise/chocolates, dog/cat babysitter, conversationalist and pack up.
    
    Fundraising team – This role involves behind the scenes organising of fundraising events and opportunities.  If you have the ideas and connections, we would love to hear from you.
    
    Photographers – Photos play a key role in our animals getting adopted; join our team of volunteer photographers who take amazing photos for adoption profiles and promotions.
    
    Have another skill? We’d love to hear how you can help!`,

    volunteerSnippet: `Want to help but unable to foster an animal?  We are always looking for volunteers to help.`,

    petDinners: `The wonderful team over at Pet Dinners have joined us to help all of our animals! They will match donations and deliver quality raw food directly to our animals each month!

    How can you help?  Buy your own animals a delicious and healthy meal from Pet Dinners, add us to the donation page and voila!  Your animals get nutricious meals delivered to your door AND you help out our foster animals.  Win-win!`,

    contactDog: `Puppy and Dog enquiries
    If you would like to meet one of our dogs available for adoption, please complete the dog application form and we will be in touch within 72 hours.
    
    If you have a question about one of our dogs, please send a message to our Facebook page for a same day reply. Enquires sent to the below emails will be responded to within 72 hours
    
    Pups 0-4 years: pups@happytailsrescue.com.au
    Dogs 5+ years: dogs@happytailsrescue.com.au`,

    contactCat: `Kitten and Cat enquiries
    If you would like to meet one of our cats available for adoption, please complete the cat application form and we will be in touch within 72 hours​
    
    If you have a question about one of our cats, please send a message to our Facebook page for a same day reply. Enquires sent to the below emails will be responded to within 72 hours.
    
    Kittens: kittens@happytailsrescue.com.au
    1+ years: cats@happytailsrescue.com.au`,

    fundraisingMain: `Fundraising enquiries
    Help us make a difference in the lives of many dogs and cats by becoming an organisational sponsor or donate an item for raffle!
    
    If you have an idea on our next fundraising event, or would like to get involved, please send an email to our fundraising coordinator.`,

    mediaEnquiries: `Media enquiries
    Contact our media team to access information, statements or to request an interview at media@happytailsrescue.com.au.
    
    Our media coordinator will look to respond to all media requests within 48 hours.`,
}

DynamicTextModel.createOne({...dynamicText})