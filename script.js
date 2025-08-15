let laws = [
    {
        title: "Law 1: Never Outshine the Master",
        description: "Always make those above you feel comfortably superior. In your desire to please or impress them, do not go too far in displaying your talents or you might accomplish the opposite—inspire fear and insecurity. Make your masters appear more brilliant than they are and you will attain the heights of power."
    },
    {
        title: "Law 2: Never put too much Trust in Friends, Learn how to use Enemies",
        description: "Be wary of friends—they will betray you more quickly, for they are easily aroused to envy. They also become spoiled and tyrannical. But hire a former enemy and he will be more loyal than a friend, because he has more to prove."
    },
    {
        title: "Law 3: Conceal Your Intentions",
        description: "Keep people off-balance and in the dark by never revealing the purpose behind your actions. If they have no clue what you are up to, they cannot prepare a defense. Guide them far enough down the wrong path, envelop them in enough smoke, and by the time they realize your intentions, it will be too late."
    },
    {
        title: "Law 4: Always Say Less Than Necessary",
        description: "When you are trying to impress people with words, the more you say, the more common you appear, and the less in control. Even if you are saying something banal, it will seem original if you make it vague, open-ended, and sphinxlike. Powerful people impress and intimidate by saying less. The more you say, the more likely you are to say something foolish."
    },
    {
        title: "Law 5: So Much Depends on Reputation — Guard It with Your Life",
        description: "Reputation is the cornerstone of power. Through reputation alone you can intimidate and win; once it slips, however, you are vulnerable, and will be attacked on all sides. Make your reputation unassailable. Always be alert to potential attacks and thwart them before they happen. Meanwhile, learn to destroy your enemies by opening holes in their own reputations. Then stand aside and let public opinion hang them."
    },
    {
        title: "Law 6: Court Attention at All Costs",
        description: "Everything is judged by its appearance; what is unseen counts for nothing. Never let yourself get lost in the crowd, then, or buried in oblivion. Stand out. Be conspicuous, at all cost. Make yourself a magnet of attention by appearing larger, more colorful, more mysterious than the bland and timid masses."
    },
    {
        title: "Law 7: Get Others to Do the Work for You, but Always Take the Credit",
        description: "Use the wisdom, knowledge, and legwork of other people to further your own cause. Not only will such assistance save you valuable time and energy, it will give you a godlike aura of efficiency and speed. In the end your helpers will be forgotten and you will be remembered. Never do yourself what others can do for you."
    },
    {
        title: "Law 8: Make Other People Come to You — Use Bait if Necessary",
        description: "When you force the other person to act, you are the one in control. It is always better to make your opponent come to you, abandoning his own plans in the process. Lure him with fabulous gains—then attack. You hold the cards."
    },
    {
        title: "Law 9: Win Through Your Actions, Never Through Argument",
        description: "Any momentary triumph you think you have gained through argument is really a Pyrrhic victory: The resentment and ill will you stir up is stronger and lasts longer than any momentary change of opinion. It is much more powerful to get others to agree with you through your actions, without saying a word. Demonstrate, do not explicate."
    },
    {
        title: "Law 10: Infection: Avoid the Unhappy and Unlucky",
        description: "You can die from someone else's misery—emotional states are as infectious as diseases. You may feel you are helping the drowning man but you are only precipitating your own disaster. The unfortunate sometimes draw misfortune on themselves; they will also draw it on you. Associate with the happy and fortunate instead."
    },
    {
        title: "Law 11: Learn to Keep People Dependent on You",
        description: "To maintain your independence you must always be needed and wanted. The more you are relied on, the more freedom you have. Make people depend on you for their happiness and prosperity and you have nothing to fear. Never teach them enough so that they can do without you."
    },
    {
        title: "Law 12: Use Selective Honesty and Generosity to Disarm Your Victim",
        description: "One sincere and honest move will cover over dozens of dishonest ones. Open-hearted gestures of honesty and generosity bring down the guard of even the most suspicious people. Once your selective honesty opens a hole in their armor, you can deceive and manipulate them at will. A timely gift—a Trojan horse—will serve the same purpose."
    },
    {
        title: "Law 13: When Asking for Help, Appeal to People's Self-Interest, Never to their Mercy or Gratitude",
        description: "If you need to turn to an ally for help, do not bother to remind him of your past assistance and good deeds. He will find a way to ignore you. Instead, uncover something in your request, or in your alliance with him, that will benefit him, and emphasize it out of all proportion. He will respond enthusiastically when he sees something to be gained for himself."
    },
    {
        title: "Law 14: Pose as a Friend, Work as a Spy",
        description: "Knowing about your rival is critical. Use spies to gather valuable information that will keep you a step ahead. Better still: Play the spy yourself. In polite social encounters, learn to probe. Ask indirect questions to get people to reveal their weaknesses and intentions. There is no occasion that is not an opportunity for artful spying."
    },
    {
        title: "Law 15: Crush Your Enemy Totally",
        description: "All great leaders since Moses have known that a feared enemy must be crushed completely. (Sometimes they have learned this the hard way.) If one ember is left alight, no matter how dimly it smolders, a fire will eventually break out. More is lost through stopping halfway than through total annihilation: The enemy will recover, and will seek revenge. Crush him, not only in body but in spirit."
    },
    {
        title: "Law 16: Use Absence to Increase Respect and Honor",
        description: "Too much circulation makes the price go down: The more you are seen and heard from, the more common you appear. If you are already established in a group, temporary withdrawal will make you more talked about, even more admired. You must learn when to leave. Create value through scarcity."
    },
    {
        title: "Law 17: Keep Others in Suspended Terror: Cultivate an Air of Unpredictability",
        description: "Humans are creatures of habit with an insatiable need to see familiarity in other people's actions. Your predictability gives them a sense of control. Turn the tables: Be deliberately unpredictable. Behavior that seems to have no consistency or purpose will keep them off-balance, and they will wear themselves out trying to explain your moves. Taken to an extreme, this strategy can intimidate and terrorize."
    },
    {
        title: "Law 18: Do Not Build Fortresses to Protect Yourself — Isolation is Dangerous",
        description: "The world is dangerous and enemies are everywhere—everyone has to protect themselves. A fortress seems the safest. But isolation exposes you to more dangers than it protects you from—it cuts you off from valuable information, it makes you conspicuous and an easy target. Better to circulate among people, find allies, mingle. You are shielded from your enemies by the crowd."
    },
    {
        title: "Law 19: Know Who You're Dealing With — Do Not Offend the Wrong Person",
        description: "There are many different kinds of people in the world, and you can never assume that everyone will react to your strategies in the same way. Deceive or outmaneuver some people and they will spend the rest of their lives seeking revenge. They are wolves in lambs' clothing. Choose your victims and opponents carefully, then—never offend or deceive the wrong person."
    },
    {
        title: "Law 20: Do Not Commit to Anyone",
        description: "It is the fool who always rushes to take sides. Do not commit to any side or cause but yourself. By maintaining your independence, you become the master of others—playing people against one another, making them pursue you."
    },
    {
        title: "Law 21: Play a Sucker to Catch a Sucker — Seem Dumber Than Your Mark",
        description: "No one likes feeling stupider than the next person. The trick, then, is to make your victims feel smart—and not just smart, but smarter than you are. Once convinced of this, they will never suspect that you may have ulterior motives."
    },
    {
        title: "Law 22: Use the Surrender Tactic: Transform Weakness into Power",
        description: "When you are weaker, never fight for honor's sake; choose surrender instead. Surrender gives you time to recover, time to torment and irritate your conqueror, time to wait for his power to wane. Do not give him the satisfaction of fighting and defeating you—surrender first. By turning the other cheek you infuriate and unsettle him. Make surrender a tool of power."
    },
    {
        title: "Law 23: Concentrate Your Forces",
        description: "Conserve your forces and energies by keeping them concentrated at their strongest point. You gain more by finding a rich mine and mining it deeper, than by flitting from one shallow mine to another—intensity defeats extensity every time. When looking for sources of power to elevate you, find the one key patron, the fat cow who will give you milk for a long time to come."
    },
    {
        title: "Law 24: Play the Perfect Courtier",
        description: "The perfect courtier thrives in a world where everything revolves around power and political dexterity. He has mastered the art of indirection; he flatters, yields to superiors, and asserts power over others in the most oblique and graceful manner. Learn and apply the laws of courtiership and there will be no limit to how far you can rise in the court."
    },
    {
        title: "Law 25: Re-create Yourself",
        description: "Do not accept the roles that society foists on you. Re-create yourself by forging a new identity, one that commands attention and never bores the audience. Be the master of your own image rather than letting others define it for you. Incorporate dramatic devices into your public gestures and actions—your power will be enhanced and your character will seem larger than life."
    },
    {
        title: "Law 26: Keep Your Hands Clean",
        description: "You must seem a paragon of civility and efficiency: Your hands are never soiled by mistakes and nasty deeds. Maintain such a spotless appearance by using others as scapegoats and cat's-paws to disguise your involvement."
    },
    {
        title: "Law 27: Play on People's Need to Believe to Create a Cultlike Following",
        description: "People have an overwhelming desire to believe in something. Become the focal point of such desire by offering them a cause, a new faith to follow. Keep your words vague but full of promise; emphasize enthusiasm over rationality and clear thinking. Give your new disciples rituals to perform, ask them to make sacrifices on your behalf. In the absence of organized religion and grand causes, your new belief system will bring you untold power."
    },
    {
        title: "Law 28: Enter Action with Boldness",
        description: "If you are unsure of a course of action, do not attempt it. Your doubts and hesitations will infect your execution. Timidity is dangerous: Better to enter with boldness. Any mistakes you commit through audacity are easily corrected with more audacity. Everyone admires the bold; no one honors the timid."
    },
    {
        title: "Law 29: Plan All the Way to the End",
        description: "The ending is everything. Plan all the way to it, taking into account all the possible consequences, obstacles, and twists of fortune that might reverse your hard work and give the glory to others. By planning to the end you will not be overwhelmed by circumstances and you will know when to stop. Gently guide fortune and help determine the future by thinking far ahead."
    },
    {
        title: "Law 30: Make Your Accomplishments Seem Effortless",
        description: "Your actions must seem natural and executed with ease. All the toil and practice that go into them, and also all the clever tricks, must be concealed. When you act, act effortlessly, as if you could do much more. Avoid the temptation of revealing how hard you work—it only raises questions."
    },
    {
        title: "Law 31: Control the Options: Get Others to Play with the Cards You Deal",
        description: "The best deceptions are the ones that seem to give the other person a choice: Your victims feel they are in control, but are actually your puppets. Give people options that come out in your favor whichever one they choose. Force them to make choices between the lesser of two evils, both of which serve your purpose. Put them on the horns of a dilemma: They are gored wherever they turn."
    },
    {
        title: "Law 32: Play to People's Fantasies",
        description: "The truth is often avoided because it is ugly and unpleasant. Never appeal to truth and reality unless you are prepared for the anger that comes from disenchantment. Life is so harsh and distressing that people who can manufacture romance or conjure up fantasy are like oases in the desert: Everyone flocks to them. There is great power in tapping into the fantasies of the masses."
    },
    {
        title: "Law 33: Discover Each Man's Thumbscrew",
        description: "Everyone has a weakness, a gap in the castle wall. That weakness is usually an insecurity, an uncontrollable emotion or need; it can also be a small secret pleasure. Either way, once found, it is a thumbscrew you can turn to your advantage."
    },
    {
        title: "Law 34: Be Royal in Your Own Fashion: Act like a King to Be Treated like One",
        description: "The way you carry yourself will often determine how you are treated: In the long run, appearing vulgar or common will make people disrespect you. For a king respects himself and inspires the same sentiment in others. By acting regally and confident of your powers, you make yourself seem destined to wear a crown."
    },
    {
        title: "Law 35: Master the Art of Timing",
        description: "Never seem to be in a hurry—hurrying betrays a lack of control over yourself, and over time. Always seem patient, as if you know that everything will come to you eventually. Become a detective of the right moment; sniff out the spirit of the times, the trends that will carry you to power. Learn to stand back when the time is not yet ripe, and to strike fiercely when it has reached fruition."
    },
    {
        title: "Law 36: Disdain Things You Cannot Have: Ignoring Them is the Best Revenge",
        description: "By acknowledging a petty problem you give it existence and credibility. The more attention you pay an enemy, the stronger you make him; and a small mistake is often made worse and more visible when you try to fix it. It is sometimes best to leave things alone. If there is something you want but cannot have, show contempt for it. The less interest you reveal, the more superior you seem."
    },
    {
        title: "Law 37: Create Compelling Spectacles",
        description: "Striking imagery and grand symbolic gestures create the aura of power—everyone responds to them. Stage spectacles for those around you, then, full of arresting visuals and radiant symbols that heighten your presence. Dazzled by appearances, no one will notice what you are really doing."
    },
    {
        title: "Law 38: Think as You Like but Behave like Others",
        description: "If you make a show of going against the times, flaunting your unconventional ideas and unorthodox ways, people will think that you only want attention and that you look down upon them. They will find a way to punish you for making them feel inferior. It is far safer to blend in and nurture the common touch. Share your originality only with tolerant friends and those who are sure to appreciate your uniqueness."
    },
    {
        title: "Law 39: Stir Up Waters to Catch Fish",
        description: "Anger and emotion are strategically counterproductive. You must always stay calm and objective. But if you can make your enemies angry while staying calm yourself, you gain a decided advantage. Put your enemies off-balance: Find the chink in their vanity through which you can rattle them and you hold the strings."
    },
    {
        title: "Law 40: Despise the Free Lunch",
        description: "What is offered for free is dangerous—it usually involves either a trick or a hidden obligation. What has worth is worth paying for. By paying your own way you stay clear of gratitude, guilt, and deceit. It is also often wise to pay the full price—there is no cutting corners with excellence. Be lavish with your money and keep it circulating, for generosity is a sign and a magnet for power."
    },
    {
        title: "Law 41: Avoid Stepping into a Great Man's Shoes",
        description: "What happens first always appears better and more original than what comes after. If you succeed a great man or have a famous parent, you will have to accomplish double their achievements to outshine them. Do not get lost in their shadow, or stuck in a past not of your own making: Establish your own name and identity by changing course. Slay the overbearing father, disparage his legacy, and gain power by shining in your own way."
    },
    {
        title: "Law 42: Strike the Shepherd and the Sheep Will Scatter",
        description: "Trouble can often be traced to a single strong individual—the stirrer, the arrogant underling, the poisoner of goodwill. If you allow such people room to operate, others will succumb to their influence. Do not wait for the troubles they cause to multiply, do not try to negotiate with them—they are irredeemable. Neutralize their influence by isolating or banishing them. Strike at the source of the trouble and the sheep will scatter."
    },
    {
        title: "Law 43: Work on the Hearts and Minds of Others",
        description: "Coercion creates a reaction that will eventually work against you. You must seduce others into wanting to move in your direction. A person you have seduced becomes your loyal pawn. And the way to seduce others is to operate on their individual psychologies and weaknesses. Soften up the resistant by working on their emotions, playing on what they hold dear and what they fear. Ignore the hearts and minds of others and they will grow to hate you."
    },
    {
        title: "Law 44: Disarm and Infuriate with the Mirror Effect",
        description: "The mirror reflects reality, but it is also the perfect tool for deception: When you mirror your enemies, doing exactly as they do, they cannot figure out your strategy. The Mirror Effect mocks and humiliates them, making them overreact. By holding a mirror to their psyches, you seduce them with the illusion that you share their values; by holding a mirror to their actions, you teach them a lesson. Few can resist the power of the Mirror Effect."
    },
    {
        title: "Law 45: Preach the Need for Change, but Never Reform Too Much at Once",
        description: "Everyone understands the need for change in the abstract, but on the day-to-day level people are creatures of habit. Too much innovation is traumatic, and will lead to revolt. If you are new to a position of power, or an outsider trying to build a power base, make a show of respecting the old way of doing things. If change is necessary, make it feel like a gentle improvement on the past."
    },
    {
        title: "Law 46: Never Appear Too Perfect",
        description: "Appearing better than others is always dangerous, but most dangerous of all is to appear to have no faults or weaknesses. Envy creates silent enemies. It is smart to occasionally display defects, and admit to harmless vices, in order to deflect envy and appear more human and approachable. Only gods and the dead can seem perfect with impunity."
    },
    {
        title: "Law 47: Do Not Go Past the Mark You Aimed For: In Victory, Learn When to Stop",
        description: "The moment of victory is often the moment of greatest peril. In the heat of victory, arrogance and overconfidence can push you past the goal you had aimed for, and by going too far, you make more enemies than you defeat. Do not allow success to go to your head. There is no substitute for strategy and careful planning. Set a goal, and when you reach it, stop."
    },
    {
        title: "Law 48: Assume Formlessness",
        description: "By taking a shape, by having a visible plan, you open yourself to attack. Instead of taking a form for your enemy to grasp, keep yourself adaptable and on the move. Accept the fact that nothing is certain and no law is fixed. The best way to protect yourself is to be as fluid and formless as water; never bet on stability or lasting order. Everything changes."
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const lawCard = document.getElementById('law-card');
    const timeDisplay = document.getElementById('time');
    const lawTitleDisplay = document.getElementById('law-title-display');
    const lawDescriptionDisplay = document.getElementById('law-description-display');
    const greetingDisplay = document.getElementById('greeting');
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    const searchEnginesContainer = document.createElement('div');
    searchEnginesContainer.className = 'search-engines';
    const shortcutsContainer = document.createElement('div');
    shortcutsContainer.className = 'shortcuts';
    // insert search engines above the form
    searchForm.parentNode.insertBefore(searchEnginesContainer, searchForm);
    // insert shortcuts below the form
    searchForm.parentNode.insertBefore(shortcutsContainer, searchForm.nextSibling);

    // Search engines definition
    const SEARCH_ENGINES = [
        { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=' },
        { id: 'ddg', name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=' },
        { id: 'wiki', name: 'Wikipedia', url: 'https://en.wikipedia.org/w/index.php?search=' },
        { id: 'site', name: 'This Site', url: 'https://www.google.com/search?q=site:example.com+' }
    ];
    let activeEngine = localStorage.getItem('activeEngine') || 'google';

    function renderEngineButtons() {
        searchEnginesContainer.innerHTML = '';
        SEARCH_ENGINES.forEach(e => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'engine-btn' + (e.id === activeEngine ? ' active' : '');
            btn.textContent = e.name;
            btn.title = `Use ${e.name}`;
            btn.addEventListener('click', () => {
                activeEngine = e.id;
                localStorage.setItem('activeEngine', activeEngine);
                renderEngineButtons();
                updatePlaceholder();
            });
            searchEnginesContainer.appendChild(btn);
        });
    }

    function updatePlaceholder() {
        const engine = SEARCH_ENGINES.find(s => s.id === activeEngine);
        if (!engine) return;
        searchInput.placeholder = `Search ${engine.name}...`;
    }

    // handle form submit to redirect to chosen engine
    searchForm.addEventListener('submit', (ev) => {
        ev.preventDefault();
        const q = encodeURIComponent(searchInput.value.trim());
        if (!q) return;
        const engine = SEARCH_ENGINES.find(s => s.id === activeEngine) || SEARCH_ENGINES[0];
        const url = engine.url + q;
        window.open(url, '_blank');
        searchInput.value = '';
    });

    // keyboard shortcut: press / to focus search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    // --- Shortcuts Grid ---
    const DEFAULT_SHORTCUTS = [
        { title: 'GitHub', url: 'https://github.com' },
        { title: 'StackOverflow', url: 'https://stackoverflow.com' },
        { title: 'Reddit', url: 'https://reddit.com' }
    ];

    function loadShortcuts() {
        try {
            const raw = localStorage.getItem('shortcuts');
            return raw ? JSON.parse(raw) : DEFAULT_SHORTCUTS;
        } catch (err) {
            return DEFAULT_SHORTCUTS;
        }
    }

    function saveShortcuts(list) {
        localStorage.setItem('shortcuts', JSON.stringify(list));
    }

    function renderShortcuts() {
        const items = loadShortcuts();
        shortcutsContainer.innerHTML = '';
        items.forEach((s, idx) => {
            const el = document.createElement('div');
            el.className = 'shortcut';
            const a = document.createElement('a');
            a.href = s.url;
            a.target = '_blank';
            a.textContent = s.title;
            el.appendChild(a);

            const actions = document.createElement('div');
            actions.className = 'actions';
            const editBtn = document.createElement('button');
            editBtn.className = 'icon-btn';
            editBtn.title = 'Edit';
            editBtn.textContent = '\u270E';
            editBtn.addEventListener('click', () => editShortcut(idx));

            const delBtn = document.createElement('button');
            delBtn.className = 'icon-btn';
            delBtn.title = 'Delete';
            delBtn.textContent = '\u2716';
            delBtn.addEventListener('click', () => deleteShortcut(idx));

            actions.appendChild(editBtn);
            actions.appendChild(delBtn);
            el.appendChild(actions);
            shortcutsContainer.appendChild(el);
        });

        // add-new tile
        const add = document.createElement('div');
        add.className = 'shortcut';
        const addA = document.createElement('a');
        addA.href = '#';
        addA.textContent = '+ Add';
        addA.addEventListener('click', (ev) => {
            ev.preventDefault();
            addShortcut();
        });
        add.appendChild(addA);
        shortcutsContainer.appendChild(add);
    }

    function addShortcut() {
        const title = prompt('Shortcut title');
        if (!title) return;
        const url = prompt('Shortcut URL (include https://)');
        if (!url) return;
        const list = loadShortcuts();
        list.push({ title, url });
        saveShortcuts(list);
        renderShortcuts();
    }

    function editShortcut(idx) {
        const list = loadShortcuts();
        const item = list[idx];
        const title = prompt('Edit title', item.title);
        if (!title) return;
        const url = prompt('Edit URL', item.url);
        if (!url) return;
        list[idx] = { title, url };
        saveShortcuts(list);
        renderShortcuts();
    }

    function deleteShortcut(idx) {
        const list = loadShortcuts();
        if (!confirm(`Delete "${list[idx].title}"?`)) return;
        list.splice(idx, 1);
        saveShortcuts(list);
        renderShortcuts();
    }

    // initialize components
    renderEngineButtons();
    updatePlaceholder();
    renderShortcuts();

    // --- Law of the Day Logic ---
    function showDailyLaw() {
        if (!laws.length) return;
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const oneDay = 1000 * 60 * 60 * 24;
        const dayOfYear = Math.floor(diff / oneDay);
        const lawIndex = (dayOfYear - 1) % laws.length;
        const dailyLaw = laws[lawIndex];
        lawTitleDisplay.textContent = dailyLaw.title;
        lawDescriptionDisplay.textContent = dailyLaw.description;
    }

    // --- Card Expansion ---
    lawCard.addEventListener('click', () => {
        lawCard.classList.toggle('expanded');
    });

    // --- Time and Greeting Update Logic ---
    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${minutes}`;
    }

    function updateGreeting() {
        const now = new Date();
        const hours = now.getHours();

        const morningGreetings = [
            'Good morning ☀️',
            'Rise and shine 🌅',
            'Top of the morning 🌞',
            'Morning! 🥐',
            'Wakey wakey 🐣',
            'Hello sunshine 🌻'
        ];
        const afternoonGreetings = [
            'Good afternoon 🌤️',
            'Hope your day is great 😎',
            'Enjoy your afternoon 🍵',
            'Keep going! 🚀',
            'Hello there! 👋',
            'Happy afternoon 🕑'
        ];
        const eveningGreetings = [
            'Good evening 🌙',
            'Relax, it\'s evening 🌌',
            'Unwind and enjoy 🌃',
            'Evening vibes ✨',
            'Sweet dreams soon 😴',
            'Peaceful evening 🧘'
        ];
        const nightGreetings = [
            'Good night 🌃',
            'Sleep well when it\'s time 😴',
            'Quiet night ✨',
            'Night vibes 🌙',
            'Rest up 🌌',
            'See you tomorrow 🌠'
        ];

        let greetings;
        if (hours >= 5 && hours < 11) {
            greetings = morningGreetings;
        } else if (hours >= 11 && hours < 16) {
            greetings = afternoonGreetings;
        } else if (hours >= 16 && hours < 19) {
            greetings = eveningGreetings;
        } else {
            greetings = nightGreetings;
        }

        const greeting = greetings[Math.floor(Math.random() * greetings.length)];
        greetingDisplay.textContent = greeting;
    }

    // Show the daily law once on load
    showDailyLaw();

    updateTime();
    updateGreeting();
    setInterval(updateTime, 1000);
    setInterval(updateGreeting, 1200000);
});
