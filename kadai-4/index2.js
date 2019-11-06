setTimeout(
    () => {
        console.log('Hello!')
        setTimeout(
            () => {
                console.log('Bey!')
            },
            2000
        )
    },
    3000
)
