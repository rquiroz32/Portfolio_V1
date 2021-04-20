const PORT = process.env.PORT || 3001;


async const api = (Name, Subject, Message) => {
    const { Name, Subject, Message } = data
    const url = 'http://localhost:' + PORT,


    // Default options are marked with *
    const response = await fetch( url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
            'Content-Type': 'application/json'            
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects


}