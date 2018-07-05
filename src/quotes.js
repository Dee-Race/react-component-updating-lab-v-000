const quotes = {
  "Carol Burnett": "Only I can change my life. No one can do it for me.",
  "Stefon Diggs": "Each day, I come in with a positive attitube, trying to get better.",
  "Eleanor Roosevelt": "With the new day comes new strength and new thoughts.",
  "Confucius": "It does not matter how slowly you go as long as you do not stop.",
  "Nelson Mandela": "It always seems impossible until it's done.",
  "Ralph Waldo Emerson": "We aim above the mark to hit the mark.",
  "Bo Jackson": "Set your goals high, and don't stop till you get there.",
  "A.P.J. Abdul Kalam": "We should not give up and we should not allow the problem to defeat us.",
  "Rabindranath Tagore": "You can't cross the sea merely by standing and staring at the water.",
  "H.G. Wells": "If you fell down yesterday, stand up today.",
  "Mark Twain": "The secret of getting ahead is getting started.",
  "Aldous Huxley": "There is only one corner of the universe you can be certain of improving, and that's your own self.",
  "Aristotle": "The roots of education are bitter, but the fruit is sweet.",
  "Dalai Lama": "Be kind whenever possible. It is always possible.",
  "Winston Churchill": "If you're going through hell, keep going.",
  "Harriet Beecher Stowe": "Never give up, for that is just the place and time that the tide will turn.",
  "Ralph Marston": "What you do today can improve all your tomorrows.",
  "Johann Wolfgang von Goethe": "Knowing is not enough; we must apply. Will is not enough: we must do.",
  "Allan Bloom": "Education is the movement from darkness to light.",
  "Benjamin Franklin": "An investment in knowledge pays the best interest.",
  "Anthony J. D'Angelo": "Develop a passion for learning. If you do, you will never cease to grow.",
  "John Dewey": "Education is not preparation for life; education is life itself.",
  "Albert Einstein": "Education is what remains after one has forgotten what one has learned in school.",
  "Kofi Annan": "Knowledge is power. Information is liberating. Education is the premise of progress, in every society, in every family.",
  "Martin Luther King, Jr.": "The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.",
  "Conrad Hall": "You are always a student, never a master. You have to keep moving forward.",
  "Abigail Adams": "Learning is not attained by chance, it must be sought for with ardor and diligence.",
  "William Butler Yeats": "Education is not the filling of a pail, but the lighting of a fire.",
  "W.E.B. Du Bois": "Education must not simply teach work - it must teach Life.",
  "Sydney J. Harris": "The whole purpose of education is to turn mirrors into windows.",
  "Marian Wright Edelman": "Education is for improving the lives of others and for leaving your community and world better than you found it.",
  "Neil deGrasse Tyson": "There is no greater education than one that is self-driven.",
  "Herbert Spencer": "The great aim of education is not knowledge but action.",
  "Steve Irwin": "Crikey means gee whiz, wow!",
  "William S. Burroughs": "Your mind will answer most questions if you learn to relax and wait for the answer.",
  "Bruce Lee": "A goal is not always meant to be reached, it often serves simply as something to aim at.",
  "John F. Kennedy": "The greater our knowledge increases the more our ignorance unfolds.",
  "Thomas Sowell": "It takes considerable knowledge just to realise the extent of your own ignorance.",
  "Bertrand Russell": "The good life is one inspired by love and guided by knowledge.",
  "Anton Chekhov": "Knowledge is of no value unless you put it into practice.",
  "Thomas Berger": "The art and science of asking questions is the source of all knowledge.",
  "David Bailey": "The best advice I ever got was that knowledge is power and to keep reading.",
  "Socrates": "True knowledge exists in knowing that you know nothing.",
  "Beck": "Don't believe everything that you breath.",
  "John Adams": "Liberty cannot be preserved without general knowledge among the people.",
  "Immanuel Kant": "It is beyond a doubt that all our knowledge begins with experience.",
  "Warren Buffett": "Risk comes from not knowing what you're doing.",
  "Wilbur Wright": "It is possible to fly without motors, but not without knowledge and skill.",
  "Brian O'Driscoll": "Knowledge is knowing that a tomato is a fruit. Wisdom is knowing not to put it in a fruit salad.",
  "Jimi Hendrix": "Knowledge speaks but wisdom listens.",
  "James Madison": "The advancement and diffusion of knowledge is the only guardian of true liberty.",
  "Friedrich Nietzche": "The doer alone learneth.",
  "Terry Pratchett": "Sometimes it is better to light a flamethrower than curse the darkness.",
  "Thomas Paine": "That which we obtain too easily, we esteem too lightly.",
  "Thurgood Marshall": "Each of you, as an individual, must pick your own goals. Listen to others, but do not become a blind follower.",
  "Elvis Presley": "Ambition is a dream with a V8 engine.",
  "Elon Musk": "I think you should always bear in mind that entropy is not on your side.",
  "F. Scott Fitzgerald": "Genius is the ability to put into effect what is on your mind.",
  "Franz Kafka": "Productivity is being able to do things that you were never able to do before.",
  "Frida Kahlo": "I paint flowers so they will not die.",
  "Fyodor Dostoevsky": "There is no subject so old that something new cannot be said about it.",
  "George Carlin": "Don't sweat the petty things and don't pet the sweaty things.",
  "George Washington": "It is far better to be alone, than to be in bad company.",
  "Groucho Marx": "If you've heard this story before, don't stop me, because I'd like to hear it again.",
  "Oscar Wilde": "Experience is simply the name we give our mistakes.",
  "Noam Chomsky": "Colorless green ideas sleep furiously.",
  "Neil Gaiman": "The world always seems brighter when you've just made something that wasn't there before.",
  "Muhammad Ali": "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
  "Mitch Hedberg": "My friend asked me if I wanted a frozen banana. I said 'No, but I want a regular banana later, so... yeah.'",
  "Michelle Obama": "Success is only meaningful and enjoyable if it feels like your own.",
  "Mel Brooks": "As long as the world is turning and spnning, we're gonna be dizzy and we're gonna make mistakes.",
  "Marilyn Monroe": "We are all of us stars, and we deserve to twinkle.",
  "Marcel Proust": "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.",
  "Mahatma Gandhi": "Satisfaction lies in the effort not in the attainment, full effort is full victory.",
  "Vincent Van Gogh": "Great things are done by a series of small things brought together.",
  "William Shakespeare": "It is not in the stars to hold our destiny but in ourselves.",
  "William Blake": "What is now proved was once only imagined.",
  "Walt Disney": "The way to get started is to quit talking and be doing.",
  "W.C. Fields": "Start every day off with a smile and get it over with.",
  "Kurt Vonnegut": "Science is magic that works.",
  "Stephen Hawking": "Intelligence is the ability to adapt to change.",
  "Stephen King": "When asked, 'How do you write?' I invariably answer, 'one word at a time.'",
  "John Lennon": "Yeah we all shine on, like the moon, and the stars, and the sun.",
  "Johnny Cash": "I wear black because I'm comfortable in it. But then in the summertime when it's hot I'm comfortable in light blue.",
  "Joseph Campbell": "The privelege of a lifetime is being who you are.",
  "Salvador Dali": "Have no fear of perfection - you'll never reach it.",
  "Jim Carrey": "Ya know what I do almost every day? I wash. Personal hygiene is part of the package with me.",
  "Jerry Seinfeld": "Sometimes the road less traveled is less traveled for a reason.",
  "Rudyard Kipling": "Gardens are not made by singing 'Oh, how beautiful,' and sitting in the shade.",
  "Robin Williams": "No matter what people tell you, words and ideas can change the world.",
  "Rihanna": "If you don't live your life, then who will?",
  "Jane Austen": "Let other pens dwell on guilt and misery.",
  "James Joyce": "Mistakes are the portals of discovery.",
  "Rene Descartes": "It is not enough to have a good mind; the main thing is to use it well.",
  "Ray Bradbury": "Jump, and you will find out how to unfold your wings as you fall.",
  "J.K. Rowling": "It is our choices... that show what we truly are, far more than our abilities.",
  "J.R.R Tolkien": "Not all those who wander are lost.",
  "Hunter S. Thompson": "As long as I'm learning something, I figure I'm OK - it's a decent day.",
  "Pablo Piscasso": "Every act of creation is first an act of destruction.",
  "Dolly Parton": "If you don't lke the road you're walking, start paving another one.",
  "Gilda Radner": "There is no real security except for whatever you build inside yourself.",
  "Brian Eno": "Set up a situation that presents you with something slightly beyond your reach.",
  "George Herbert": "Do not wait; the time will never be 'just right.'",
  "Sam Levenson": "Don't watch the clock; do what it does. Keep going.",
  "Simone de Beauvoir": "Change your life today. Don't gamble on the future, act now, without delay.",
  "Michael Korda": "One way to keep momentum going is to have constantly greater goals.",
  "Babe Ruth": "You just can't beat the person who never gives up.",
  "Steve Martin": "A day without sunshine is like, you know, night.",
  "Don Marquis": "Procrastination is the art of keeping up with yesterday.",
  "Rumi": "Let the beauty of what you love be what you do."
}

export default quotes
