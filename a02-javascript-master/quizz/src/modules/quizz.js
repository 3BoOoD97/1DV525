/**
 * Sample module to use for Quizz using async await
 */
async function getFirstQuestion() {
    const url="http://courselab.lnu.se/question/1"
    const response = await fetch(url)
    let data

    if (!response.ok) {
        let data = await response.json()

        console.log(response)
        console.log(JSON.stringify(data, null, 4))
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(response)
    return response
};


async function sendQuestionResponsePost(url, body1) {

    const data = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body1)
    }
    const response = await fetch(url, data)

    if (!response.ok) {
        let data = await response.json()

        console.log(response)
        console.log(JSON.stringify(data, null, 4))

        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    console.log(response)
    return response
};



async function getQuestion(url) {
    const data = {
        method: "GET",
    }

    
    

    console.log(url)
    console.log(data)
    const response = await fetch(url, data)
    console.log(response)

    if (!response.ok) {
        let data = await response.json()

        console.log(response)
        console.log(JSON.stringify(data, null, 4))

        
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    console.log(response)
    return response
};



export default {
    getFirstQuestion,
    sendQuestionResponsePost,
    getQuestion
};
