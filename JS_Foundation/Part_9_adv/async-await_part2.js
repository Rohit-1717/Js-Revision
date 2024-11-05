function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommonData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data Fetched Successfully.");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("Fetching blog data....");

    // const postData = await fetchPostData();

    // const commentData = await fetchCommonData();

    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommonData(),
    ]);

    console.log(postData);
    console.log(commentData);
    console.log("Data Fetching completed successfully :)");
  } catch (error) {
    console.error("Error while fetching Blog Data", error);
  }
}

getBlogData();
