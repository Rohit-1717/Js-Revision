function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "chaicode", url: "https://chaicode.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Fetching User Data.....");
    const User = await fetchUserData();
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

getUserData();
