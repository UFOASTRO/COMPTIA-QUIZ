const quizData = [
  {
    "question": "What is the function of a motherboard in a PC?",
    "options": [
      "Store data",
      "Connect and house critical components",
      "Provide backup power",
      "Manage peripheral devices"
    ],
    "answer": 1
  },
  {
    "question": "Which type of adapter converts HDMI to VGA?",
    "options": [
      "Active adapter",
      "Passive adapter",
      "Signal adapter",
      "Composite adapter"
    ],
    "answer": 0
  },
  {
    "question": "Which cable type supports the fastest data transfer rate?",
    "options": [
      "USB 2.0",
      "USB 3.2 Gen 2x2",
      "SATA II",
      "Thunderbolt 3"
    ],
    "answer": 3
  },
  {
    "question": "Which port is used for connecting a computer to a local area network?",
    "options": [
      "HDMI",
      "USB-C",
      "RJ45",
      "DisplayPort"
    ],
    "answer": 2
  },
  {
    "question": "What does a CPU fan and heat sink primarily prevent?",
    "options": [
      "Overheating",
      "Overclocking",
      "Memory corruption",
      "Sudden shutdown"
    ],
    "answer": 0
  },
  {
    "question": "Which type of RAM is the latest in terms of performance?",
    "options": [
      "DDR3",
      "DDR4",
      "DDR5",
      "DDR2"
    ],
    "answer": 2
  },
  {
    "question": "What is the primary use of a Molex connector?",
    "options": [
      "Powering modern SSDs",
      "Connecting older drives and fans",
      "Video display output",
      "Network connections"
    ],
    "answer": 1
  },
  {
    "question": "What is the most likely cause of intermittent lockups in a PC?",
    "options": [
      "Malware infection",
      "Faulty hardware or thermal issues",
      "Low storage space",
      "Overclocked CPU"
    ],
    "answer": 1
  },
  {
    "question": "How can a technician diagnose a faulty video cable?",
    "options": [
      "Replace the cable with a known good one",
      "Check the OS display settings",
      "Update the video drivers",
      "Adjust the monitor brightness"
    ],
    "answer": 0
  },
  {
    "question": "What does POST indicate during boot-up?",
    "options": [
      "Power On Self Test",
      "Pre-Operating System Test",
      "Programmed Operating System Task",
      "Process Optimization System Tool"
    ],
    "answer": 0
  },
  {
    "question": "Which protocol is used to translate domain names to IP addresses?",
    "options": [
      "HTTP",
      "DNS",
      "FTP",
      "DHCP"
    ],
    "answer": 1
  },
  {
    "question": "What value should be entered for the subnet mask of 172.16.0.0/16?",
    "options": [
      "255.255.255.0",
      "255.255.0.0",
      "255.0.0.0",
      "255.255.255.255"
    ],
    "answer": 1
  },
  {
    "question": "A SOHO router can automatically assign IP addresses to connected devices.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0
  },
  {
    "question": "Which wireless standard operates on both 2.4 GHz and 5 GHz bands?",
    "options": [
      "802.11g",
      "802.11n",
      "802.11a",
      "802.11b"
    ],
    "answer": 1
  },
  {
    "question": "Which protocol encrypts website traffic?",
    "options": [
      "HTTP",
      "HTTPS",
      "FTP",
      "Telnet"
    ],
    "answer": 1
  },
  {
    "question": "How do you check the integrity of protected system files in Windows?",
    "options": [
      "chkdsk",
      "sfc",
      "format",
      "defrag"
    ],
    "answer": 1
  },
  {
    "question": "A desktop computer randomly shuts down during normal operation. When restarted, it works normally for a while before shutting down again. What is the MOST likely cause?",
    "options": [
      "Bad RAM",
      "Overheating",
      "Hard drive failure",
      "Operating system corruption"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following CPU socket types is designed for Intel processors?",
    "options": [
      "AM4",
      "TR4",
      "LGA 1700",
      "FM2+"
    ],
    "answer": 2
  },
  {
    "question": "Users report streaks on printed pages from a laser printer. Which component should be checked FIRST?",
    "options": [
      "Fuser",
      "Transfer roller",
      "Toner cartridge",
      "Imaging drum"
    ],
    "answer": 2
  },
  {
    "question": "A color inkjet printer is producing prints with incorrect colors. After running the printer's built-in cleaning cycle, the problem persists. What should be done NEXT?",
    "options": [
      "Replace the paper",
      "Print a calibration page",
      "Update printer drivers",
      "Replace all ink cartridges"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following wireless frequencies typically provides the BEST range?",
    "options": [
      "2.4 GHz",
      "5 GHz",
      "6 GHz",
      "60 GHz"
    ],
    "answer": 0
  },
  {
    "question": "A network administrator needs to implement VLANs. Which network device is REQUIRED?",
    "options": [
      "Hub",
      "Managed switch",
      "Wireless router",
      "Repeater"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following is the MOST secure method of unlocking a smartphone?",
    "options": [
      "Pattern lock",
      "PIN code",
      "Biometric authentication",
      "Swipe to unlock"
    ],
    "answer": 2
  },
  {
    "question": "A user's Android phone is running slowly and showing unexpected advertisements. What should be checked FIRST?",
    "options": [
      "Battery health",
      "Recently installed apps",
      "Operating system version",
      "Storage space"
    ],
    "answer": 1
  },
  {
    "question": "Which Windows tool would you use to view and manage disk partitions?",
    "options": [
      "Disk Cleanup",
      "Disk Defragmenter",
      "Disk Management",
      "Storage Sense"
    ],
    "answer": 2
  },
  {
    "question": "A user cannot boot into Windows and receives a 'Boot Configuration Data File is Missing' error. Which tool should be used to repair this?",
    "options": [
      "CHKDSK",
      "SFC",
      "Bootrec",
      "DISM"
    ],
    "answer": 2
  },
  {
    "question": "Which command would you use to view the routing table in Windows?",
    "options": [
      "ipconfig",
      "netstat",
      "route print",
      "tracert"
    ],
    "answer": 2
  },
  {
    "question": "Which Windows feature allows a user to run a program with administrative privileges?",
    "options": [
      "Safe Mode",
      "Run as administrator",
      "System Restore",
      "Task Manager"
    ],
    "answer": 1
  },
  {
    "question": "A user reports that their smartphone calendar isn't syncing with their computer. Which should be checked FIRST?",
    "options": [
      "Internet connection",
      "Account settings",
      "Device storage",
      "Operating system version"
    ],
    "answer": 0
  },
  {
    "question": "Which mobile device feature should be enabled to protect data if the device is lost?",
    "options": [
      "GPS tracking",
      "Remote wipe",
      "Screen lock",
      "Backup service"
    ],
    "answer": 1
  },
  {
    "question": "A laptop user reports that their touchpad occasionally becomes unresponsive. What should be checked FIRST?",
    "options": [
      "Function key combinations",
      "Device drivers",
      "Power settings",
      "Windows updates"
    ],
    "answer": 0
  },
  {
    "question": "Lesson 2: Installing System Devices – What is the primary function of a Power Supply Unit (PSU) in a PC?",
    "options": [
      "Convert AC to DC for internal components",
      "Store data temporarily",
      "Process instructions",
      "Provide display output"
    ],
    "answer": 0
  },
  {
    "question": "Lesson 2: Installing System Devices – Which type of storage device uses no moving parts and employs flash memory?",
    "options": [
      "Hard Disk Drive (HDD)",
      "Solid-State Drive (SSD)",
      "Hybrid Drive",
      "Optical Drive"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 2: Installing System Devices – Which interface is commonly used to connect an SSD directly to the motherboard for high-speed data transfer?",
    "options": [
      "SATA",
      "USB",
      "M.2",
      "PCI"
    ],
    "answer": 2
  },
  {
    "question": "Lesson 2: Installing System Devices – What is a key advantage of DDR5 memory over DDR4?",
    "options": [
      "Lower latency only",
      "Higher speed and improved efficiency",
      "Smaller physical size",
      "Lower manufacturing cost"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 4: Comparing Local Networking Hardware – Which cable type is most commonly used for Ethernet networking in homes?",
    "options": [
      "Coaxial cable",
      "Fiber optic cable",
      "Unshielded Twisted Pair (UTP)",
      "Shielded Twisted Pair (STP)"
    ],
    "answer": 2
  },
  {
    "question": "Lesson 4: Comparing Local Networking Hardware – What is the primary purpose of a patch panel in a network?",
    "options": [
      "To provide wireless connectivity",
      "To organize and connect network cables",
      "To amplify network signals",
      "To serve as a network firewall"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 5: Configuring Network Addressing – Which protocol is responsible for automatically assigning IP addresses to devices on a network?",
    "options": [
      "DNS",
      "DHCP",
      "TCP",
      "ARP"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 5: Configuring Network Addressing – What does a subnet mask do in an IP network?",
    "options": [
      "Filters unwanted traffic",
      "Divides the IP address into network and host portions",
      "Assigns IP addresses to devices",
      "Encrypts data transmission"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 8: Supporting Mobile Devices – Which mobile device feature helps secure data if the device is lost?",
    "options": [
      "Screen brightness adjustment",
      "Remote wipe",
      "Battery saver mode",
      "Bluetooth deactivation"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 8: Supporting Mobile Devices – Which mobile operating system is based on the Linux kernel?",
    "options": [
      "iOS",
      "Android",
      "Windows Phone",
      "BlackBerry OS"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 10: Configuring Windows – Which Windows tool is used to manage startup programs and services?",
    "options": [
      "Task Manager",
      "msconfig",
      "Control Panel",
      "Device Manager"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 10: Configuring Windows – What is the purpose of the Windows Registry?",
    "options": [
      "It stores temporary files",
      "It holds system configuration settings",
      "It manages user passwords",
      "It schedules tasks"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 10: Configuring Windows – Which Windows utility can be used to restore the system to a previous working state?",
    "options": [
      "System Restore",
      "Disk Cleanup",
      "Backup and Restore",
      "File History"
    ],
    "answer": 0
  },
  {
    "question": "Lesson 10: Configuring Windows – What is the function of the 'chkdsk' utility in Windows?",
    "options": [
      "To check and repair disk errors",
      "To defragment the hard drive",
      "To update drivers",
      "To scan for viruses"
    ],
    "answer": 0
  },
  {
    "question": "Lesson 2: Installing System Devices – Which cooling method is commonly used in modern PCs to dissipate heat from components?",
    "options": [
      "Liquid cooling",
      "Heat sink and fan",
      "Passive cooling only",
      "Thermoelectric cooling"
    ],
    "answer": 1
  },
  {
    "question": "Lesson 2: Installing System Devices – Which voltage rail provided by a PSU is commonly used to power high-performance components such as graphics cards?",
    "options": [
      "3.3 VDC",
      "5 VDC",
      "12 VDC",
      "24 VDC"
    ],
    "answer": 2
  },
  {
    "question": "Lesson 2: Installing System Devices – In a Hard Disk Drive (HDD), which component is responsible for reading and writing data on the platters?",
    "options": [
      "Spindle",
      "Actuator",
      "Read/Write heads",
      "Platter"
    ],
    "answer": 2
  },
  {
    "question": "Lesson 2: Installing System Devices – What factor most influences the performance of an HDD?",
    "options": [
      "Rotational speed and seek time",
      "Storage capacity",
      "Cache size",
      "Physical size"
    ],
    "answer": 0
  },
  {
    "question": "Lesson 5: Configuring Network Addressing – In a RAID 5 configuration with three drives, what happens if one drive fails?",
    "options": [
      "Data is completely lost",
      "The array continues to operate in degraded mode",
      "Performance improves",
      "The system shuts down"
    ],
    "answer": 1
  }
];

const quizContainer = document.getElementById("quiz-container");
const menuContainer = document.getElementById("menu-container");
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("previous-btn");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");
let currentQuestionIndex = 0;

function renderQuiz() {
  quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");
    if (index === 0) questionDiv.classList.add("active");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${item.question}`;
    questionDiv.appendChild(questionText);

    const answersList = document.createElement("ul");
    answersList.classList.add("answers");

    item.options.forEach((option, optionIndex) => {
      const answerItem = document.createElement("li");
      const answerLabel = document.createElement("label");
      answerLabel.textContent = option;

      const answerInput = document.createElement("input");
      answerInput.type = "radio";
      answerInput.name = `question-${index}`;
      answerInput.value = optionIndex;
      // When an answer is selected, update the menu status.
      answerInput.addEventListener("change", () => {
        updateMenuStatus(index);
      });

      answerLabel.prepend(answerInput);
      answerItem.appendChild(answerLabel);
      answersList.appendChild(answerItem);
    });

    questionDiv.appendChild(answersList);
    quizContainer.appendChild(questionDiv);
  });
}

function renderMenu() {
  // Clear existing menu items.
  menuContainer.innerHTML = "";
  quizData.forEach((item, index) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.textContent = index + 1;
    menuItem.id = `menu-${index}`;
    menuItem.addEventListener("click", () => {
      currentQuestionIndex = index;
      showQuestion(index);
    });
    menuContainer.appendChild(menuItem);
  });
}

function updateMenuStatus(index) {
  // Check if the question has an answer selected.
  const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
  const menuItem = document.getElementById(`menu-${index}`);
  if (selectedOption) {
    menuItem.classList.add("answered");
  } else {
    menuItem.classList.remove("answered");
  }
}

function showQuestion(index) {
  const questions = document.querySelectorAll(".question");
  questions.forEach((q, i) => {
    q.classList.toggle("active", i === index);
  });
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item, i) => {
    item.classList.toggle("active-menu", i === index);
  });
  // Update navigation buttons.
  previousButton.style.display = index === 0 ? "none" : "block";
  if (index === quizData.length - 1) {
    nextButton.style.display = "none";
    submitButton.style.display = "block";
  } else {
    nextButton.style.display = "block";
    submitButton.style.display = "none";
  }
}

function calculateScore() {
  let score = 0;
  quizData.forEach((item, index) => {
    const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
    if (selectedOption && parseInt(selectedOption.value) === item.answer) {
      score++;
    }
  });
  return score;
}

function reviewQuiz() {
  // Iterate over each question to mark answers
  quizData.forEach((item, index) => {
    const questionDiv = document.querySelectorAll(".question")[index];
    const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
    const menuItem = document.getElementById(`menu-${index}`);

    // Mark the menu item: green for correct, red for incorrect (if answered)
    if (selectedOption) {
      if (parseInt(selectedOption.value) === item.answer) {
        menuItem.classList.remove("answered");
        menuItem.classList.add("menu-correct");
      } else {
        menuItem.classList.remove("answered");
        menuItem.classList.add("menu-incorrect");
      }
    }

    // Iterate through all options for this question
    const answerLabels = questionDiv.querySelectorAll("label");
    answerLabels.forEach(label => {
      const input = label.querySelector("input");
      // Remove any previous styling
      label.classList.remove("correct-answer");
      label.classList.remove("user-answer");
      // If this option is the correct answer, mark it green.
      if (parseInt(input.value) === item.answer) {
        label.classList.add("correct-answer");
      }
      // If this option is selected by the user and is not the correct answer, mark it blue.
      if (input.checked && parseInt(input.value) !== item.answer) {
        label.classList.add("user-answer");
      }
    });
  });
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizData.length - 1) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  }
});

previousButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
  }
});

submitButton.addEventListener("click", () => {
clearInterval(timerInterval); // Stop the timer immediately
const score = calculateScore();
resultContainer.textContent = `You scored ${score} out of ${quizData.length}`;
nextButton.style.display = "none";
previousButton.style.display = "none";
submitButton.style.display = "none";
reviewQuiz();
});
function shuffleQuestions(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

// Timer setup (25 minutes for testing; adjust as needed)
let timerInterval;
let timeLeft = 25 * 60;
const timerElement = document.getElementById("timer");
function startTimer() {
timerInterval = setInterval(() => {
let minutes = Math.floor(timeLeft / 60);
let seconds = timeLeft % 60;
timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
if (timeLeft <= 0) {
  clearInterval(timerInterval);
  alert("Time's up! Submitting quiz now.");
  submitQuiz();
}
timeLeft--;
}, 1000);
}

shuffleQuestions(quizData);
// Initial render
renderQuiz();
renderMenu();
showQuestion(currentQuestionIndex);
startTimer();
