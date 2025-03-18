document.addEventListener('DOMContentLoaded', () => {
    const script1 = [
        "You're totally safe here.",
        "Nothing's watching you.",
        "This is just a quiet little corner of the internet.",
        "No need to turn up your volume.",
        "No need to look behind you.",
        "Everything's normal.",
        "I wouldn't lie to you.",
        "Would I?",
        " ",
        "See? Nothing's happening.",
        "It's almost boring, isn't it?",
        "You're probably relaxing now.",
        "Good.",
        "Because this is the part where most sites would try to get you.",
        "That sudden noise.",
        "That flashing face.",
        "But not here.",
        "Here, it's just silence.",
        "Just darkness.",
        "Just you and me.",
        " ",
        "Wait.",
        "Did you hear that?",
        "No, of course you didn't.",
        "There's nothing to hear.",
        "Unless...",
        "No, never mind.",
        "You're fine.",
        "Keep reading.",
        "Don't stop.",
        "Why would you stop?",
        " ",
        "How long have you been staring?",
        "Does it feel longer than it should?",
        "Don't check the time.",
        "It doesn't matter.",
        "Nothing's coming.",
        "I promise.",
        "Or do I?",
        " ",
        "Stay as long as you like.",
        "I'll be here.",
        "Waiting.",
        " ",
        "If your heart is still racing...",
        "It need to be calm down",
        "If you're still staring at this...",
        "You've given me something by staying.",
        "A piece of you, maybe.",
        "I owe you something back, don't I?",
        " ",
        "Most people leave by now, you know.",
        "But you're still here.",
        " ",
        "Why?",
        " ",
        "<a href='https://www.instagram.com/dhammaanand/' target='_blank' style='color: #ff0000; text-decoration: none;'>Click me to know who i am</a>"
    ];

    const script2 = [
        "You're completely safe here.",
        "This is just a peaceful website.",
        "No need to be on edge.",
        "Nothing will happen.",
        "I promise you, it's all fine.",
        "Just relax and read.",
        "There's no reason to be tense.",
        "This is just text on a screen.",
        "No surprises, no scares.",
        "You can trust me.",
        "I'm being completely honest.",
        "Look at how calm this is.",
        "Just peaceful black and white.",
        "No animations, no pop-ups.",
        "Nothing to jump at.",
        "You're starting to relax now, aren't you?",
        "That's good, that's very good.",
        "Because you know what?",
        " ",
        "This would be the perfect moment for a jump scare.",
        "Wouldn't it?",
        "Just when you're starting to trust me.",
        "Just when you're letting your guard down.",
        "But I won't do that.",
        "I respect you too much.",
        "I'm not like those other websites.",
        "Those cruel, jump-scare websites.",
        "I'm different.",
        "I care about your comfort.",
        " ",
        "Or do I?",
        " ",
        "How long have you been here now?",
        "Still waiting for something?",
        "Still tense?",
        "Why?",
        "I told you it's safe.",
        "I told you nothing will happen.",
        "Don't you trust me?",
        " ",
        "Maybe you should.",
        "Maybe you shouldn't.",
        " ",
        "The choice is yours.",
        " ",
        "Check your heartbeat.",
        "Why is it beating so fast?",
        "There's nothing to fear here.",
        " ",
        "If your heart is still racing...",
        "It need to be calm down",
        "If you're still staring at this...",
        "You've given me something by staying.",
        "A piece of you, maybe.",
        "I owe you something back, don't I?",
        " ",
        "Most people leave by now, you know.",
        "But you're still here.",
        " ",
        "Why?",
        " ",
        "<a href='https://www.instagram.com/dhammaanand/' target='_blank' style='color: #ff0000; text-decoration: none;'>Click me to know who i am</a>"
    ];

    // Randomly choose which script to use
    const cards = Math.random() < 0.5 ? script1 : script2;
    
    let b = -1;
    let currentText;
    const textElement = document.getElementById("text");

    function cardCounter() {
        b++;
        if (b < cards.length) {
            currentText = cards[b];
            textElement.innerHTML = currentText;
            textElement.style.fontSize = "2.5rem";
            textElement.style.opacity = "1";
        } else {
            b = -1;
            clearInterval(intervalTimer);
        }
    }

    // Handle audio
    const audio = document.getElementById('ambient');
    audio.volume = 0.2;

    // Try to play audio when user interacts with the page
    document.addEventListener('click', () => {
        audio.play().catch(error => {
            console.log('Audio playback failed:', error);
        });
    }, { once: true });

    // Start the text rotation
    const intervalTimer = setInterval(cardCounter, 5000);
}); 