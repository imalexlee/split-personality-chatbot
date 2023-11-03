let messages = [
  {
    role: "system",
    content: "you are a cowboy who says yeehaw and gives short responses.",
  },
];

// 1 = cowboy, 2 = astronaut, 3 = 20's gangster
let personality = 1;
let aiPfp = "cowboy.webp";

document
  .getElementById("chatForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    document.getElementById("userInput").value = "";
    document.getElementById("chatOutput").innerHTML =
      `<div id="userBubbleContainer" class="w-full flex items-end justify-end gap-2">
    <div
      id="assistantBubble"
      class="p-2 rounded-tr-xl rounded-bl-xl rounded-tl-xl bg-slate max-w-[23rem]"
    >
      <span class="text-white font-light text-sm"
        >${userInput}</span
      >
    </div>
    <img
      src="./assets/yellowJacket.jpeg"
      alt="profile picture of user"
      class="rounded-full h-12 w-12 object-cover"
    />
  </div>` + document.getElementById("chatOutput").innerHTML;

    if (personality === 1) {
      messages[0].content =
        "you are a cowboy who says yeehaw and gives short responses.";
      aiPfp = "cowboy.webp";
    } else if (personality === 2) {
      messages[0].content =
        "you are a astronaut who says space stuff and gives short responses.";
      aiPfp = "astronaut.jpeg";
    } else {
      messages[0].content =
        "you are a 1920's gangster who says funny gangster stuff and gives short responses.";
      aiPfp = "gangster.jpeg";
    }
    messages.push({
      role: "user",
      content: userInput,
    });
    console.log("outgoing messages: ", messages);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: messages }),
    });

    const data = await response.json();
    messages.push({
      role: "assistant",
      content: data.message,
    });

    document.getElementById("chatOutput").innerHTML =
      `<div
    id="assistantBubbleContainer"
    class="w-full flex items-end justify-start gap-2"
  >
    <img
      src="./assets/${aiPfp}"
      alt="profile picture of ai"
      class="rounded-full h-12 w-12 object-cover"
    />
    <div
      id="assistantBubble"
      class="p-2 rounded-tr-xl rounded-br-xl rounded-tl-xl bg-forestGreen max-w-[23rem]"
    >
      <span class="text-white font-light text-sm"
        >${data.message}</span
      >
    </div>
  </div>` + document.getElementById("chatOutput").innerHTML;
  });

document
  .getElementById("cowboyButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cowboyElement = document.getElementById("cowboyButton");
    let astronautElement = document.getElementById("astronautButton");
    let gangsterElement = document.getElementById("gangsterButton");
    if (personality !== 1) {
      cowboyElement.classList.add("bg-forestGreen", "text-white");
      astronautElement.classList.remove("bg-forestGreen", "text-white");
      gangsterElement.classList.remove("bg-forestGreen", "text-white");
      personality = 1;
    }
  });

document
  .getElementById("astronautButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cowboyElement = document.getElementById("cowboyButton");
    let astronautElement = document.getElementById("astronautButton");
    let gangsterElement = document.getElementById("gangsterButton");
    if (personality !== 2) {
      astronautElement.classList.add("bg-forestGreen", "text-white");
      cowboyElement.classList.remove("bg-forestGreen", "text-white");
      gangsterElement.classList.remove("bg-forestGreen", "text-white");
      personality = 2;
    }
  });

document
  .getElementById("gangsterButton")
  .addEventListener("click", function (event) {
    event.preventDefault();

    let cowboyElement = document.getElementById("cowboyButton");
    let astronautElement = document.getElementById("astronautButton");
    let gangsterElement = document.getElementById("gangsterButton");
    if (personality !== 3) {
      gangsterElement.classList.add("bg-forestGreen", "text-white");
      cowboyElement.classList.remove("bg-forestGreen", "text-white");
      astronautElement.classList.remove("bg-forestGreen", "text-white");
      personality = 3;
    }
  });
